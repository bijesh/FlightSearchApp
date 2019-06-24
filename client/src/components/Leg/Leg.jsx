import React from 'react';
import BpkLargeRightArrowIcon from 'bpk-component-icon/lg/long-arrow-right';
import BpkText from 'bpk-component-text';
import STYLES from './Leg.scss';

const legStyle = className => STYLES[className] || 'UNKNOWN';

const getStops=(stops)=>{
    return stops>0 ? `${stops} Stop`:'Direct';
};

const getTimeFromDateTime = (dateTime) => {
    return dateTime.substr(dateTime.indexOf('T') + 1, 5);
  };
const findDurationInHours = duration => `${Math.round(duration / 60)}h ${duration % 60}`;

const Leg = React.memo(({ leg }) => (
   <div>
   <div className={legStyle('Leg__img-parent')}><img alt="" src={leg.ImageUrl} /></div>
   <div className={legStyle('Leg__origin')}>
      <BpkText tagName="p">{getTimeFromDateTime(leg.DepartureTime)}</BpkText>
      <BpkText className={legStyle('Leg__origin__place')} tagName="p">{leg.DepAirport}</BpkText>
    </div> 
    <div className={legStyle('Leg__arrow')}>
      <BpkLargeRightArrowIcon className={legStyle('Leg__rightArrowIcon')} />
    </div>
    <div className={legStyle('Leg__destination')}>
      <BpkText tagName="p">{getTimeFromDateTime(leg.ArrivalTime)}</BpkText>
      <BpkText className={legStyle('Leg__origin__place')} tagName="p">{leg.ArvAirport}</BpkText>
    </div>

    <div className={legStyle('Leg__length')}>
       <div className={legStyle('Leg__duration')}>{findDurationInHours(leg.Duration)}</div>
        <div className={legStyle('Leg__stops')}>{getStops(leg.Stops)}</div>
     </div>

    </div>

));

export default Leg;