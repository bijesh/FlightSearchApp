import React from 'react';
import BpkText from 'bpk-component-text';
import BpkPanel from 'bpk-component-panel';
import BpkLargeRightArrowIcon from 'bpk-component-icon/lg/long-arrow-right';
import STYLES from './JourneyParams.scss';

const journeyStyle = className => STYLES[className] || 'UNKNOWN';

const JourneyParams = React.memo(({ journey }) => (

    <BpkPanel className={journeyStyle('panel-background')}>
    <BpkText tagName="h1" textStyle="xl" >{journey.originalplace}
        <BpkLargeRightArrowIcon className={journeyStyle('abc-icon__arrow')} /> {journey.destinationplace}
      </BpkText>
      <BpkText tagName="p">{journey.passengers} travellers, {journey.cabinclass}</BpkText>
    </BpkPanel>

));

export default JourneyParams;