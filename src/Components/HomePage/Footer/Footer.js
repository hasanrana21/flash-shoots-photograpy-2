import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="row container-fluid pt-5 footer-section">
            <div className="col-md-4">
                <h1>Flash Shoots</h1>
            </div>
            <div className="col-md-4">
                <h4>Office</h4>
                <p><small><FontAwesomeIcon icon={faMapMarkerAlt} /> House #12, Road #02 , Nandan Kanan , DC Hill , Chattogram</small></p>
                
                <p><small><FontAwesomeIcon icon={faEnvelope} /> flashshootsphotography.bd@gmail.com</small></p>

                <p><small><FontAwesomeIcon icon={faPhoneAlt} />  +88 01402 077431</small></p>
            </div>
            <div className="col-md-4 text-center">
                <h4>We on Social Media</h4>
                <div className="social-icon">
                    <span><FontAwesomeIcon style={{color: '#087cea'}} icon={faFacebook}/></span>
                    <span><FontAwesomeIcon style={{color: '#0077b5'}} icon={faLinkedinIn}/></span>
                    <span><FontAwesomeIcon style={{color: '#c235a7'}} icon={faInstagram}/></span>
                    <span><FontAwesomeIcon style={{color: '#5da9dd'}} icon={faTwitter}/></span>
                </div>
            </div>

            <div className="text-center pt-4 owner">
                <p>Designer & Developer</p>
                <h5>Hasan</h5>
            </div>
            <p className="text-center copyright pt-3"><small>&copy; 2021 Hasan || All right reserved</small></p>
        </div>
    );
};

export default Footer;