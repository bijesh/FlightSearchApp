import React from 'react';
import Leg from '../Leg';
import Price from '../Price';
import ITINERARY_STYLES from './Itinerary.scss';
import BpkCard from 'bpk-component-card';

const itineraryStyles = className => ITINERARY_STYLES[className] || 'UNKNOWN';

const Itinerary = React.memo(({ itinerary }) => (
    <BpkCard  className={itineraryStyles('Itinerary__main')}>
    <div className={itineraryStyles('Itinerary__outbound')}>
        <Leg leg={itinerary.InBoundLeg}/>
    </div>
    <div className={itineraryStyles('Itinerary__inbound')}>
        <Leg leg={itinerary.OutBoundLeg}/>
    </div>
        <Price bookingDetails={itinerary.BookingDetails}/>
   </BpkCard>
));

export default Itinerary;