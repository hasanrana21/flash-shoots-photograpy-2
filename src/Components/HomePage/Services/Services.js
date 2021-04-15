import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import photography from '../../../images/camera.png';
import video from '../../../images/video.png';
import projector from '../../../images/projector.png';


const servicesData = [
    {
        name: 'PHOTOGRAPHY',
        price: 'TK.15,000/=',
        image: photography,
        packageInfo1: 'Photographer: 1 Top Photographer',
        packageInfo2: 'Number of Pictures: Unlimited (All post processed)',
        packageInfo3: 'Specially Edited Photos: 100 copies',
        packageInfo4: 'Event Duration: 4 Hours',
        packageInfo5: 'All soft copy of photos will be delivered on DVDs.',

    },
    {
        name: 'CINEMATOGRAPHY',
        price: 'TK.25, 000/=',
        image: video,
        packageInfo1: 'Cinematographer: 1 Top Cinematographer',
        packageInfo2: 'Video Quality: 1080P (1920×1080)',
        packageInfo3: '30-60 mins edited video.',
        packageInfo4: 'Event Duration: 6 Hours',
        packageInfo5: 'A promo of about 2-5 minutes of the event',

    },
    {
        name: 'PROJECTOR',
        price: 'TK.7,500/=',
        image: projector,
        packageInfo1: 'Processing by Our Top Project Manager.',
        packageInfo2: 'Video Quality: 1080P (1920×1080)',
        packageInfo3: 'Lighting setup',
        packageInfo4: 'Event Duration: 5 Hours',
        packageInfo5: '',

    },
]
const Services = () => {
    return (
        <div className="row my-5 container-fluid">
            {
                servicesData.map(service => <ServiceDetails service={service}></ServiceDetails>)
            }
        </div>
    );
};

export default Services;