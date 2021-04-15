import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [googleSignIn, setGoogleSignIn] = useState({});
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            setGoogleSignIn(user);
            setLoggedInUser(user);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
        });
    }
    return (
        <div className="text-center">
            <button className="btn primary-button my-5" onClick={handleGoogleSignIn}>Continue With Google</button>
        </div>
    );
};

export default Login;