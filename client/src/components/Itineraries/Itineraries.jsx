import React from 'react';
import Itinerary from '../Itinerary';
import {uid} from 'react-uid';
import STYLES from './Itineraries.scss';

const ItinerariesStyle = className => STYLES[className] || 'UNKNOWN';

const Itineraries = React.memo(({ itineraryDetails }) => (

    itineraryDetails.map(item => (
        <Itinerary key={uid(item)} itinerary={item}/>
    ))

    ));

export default Itineraries;