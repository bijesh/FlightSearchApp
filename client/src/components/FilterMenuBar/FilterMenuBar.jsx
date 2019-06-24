import React from 'react';
import BpkPanel from 'bpk-component-panel';
import BpkPriceAlertsIcon from 'bpk-component-icon/lg/price-alerts';
import BpkText from 'bpk-component-text';

import STYLES from './FilterMenuBar.scss';

const menuStyle = className => STYLES[className] || 'UNKNOWN';

function FilterMenuBar(){
    return( 
    <BpkPanel className={menuStyle('FilterMenuBar')}>
      <BpkText tagName="span" className={menuStyle('FilterMenuBar__filter')} >Filter
      </BpkText>
      <BpkText tagName="span" className={menuStyle('FilterMenuBar__sort')} >Sort</BpkText>
      <BpkPriceAlertsIcon className={menuStyle('FilterMenuBar__priceAlert__icon')} />
      <BpkText tagName="span" className={menuStyle('FilterMenuBar__priceAlert')} >Price alerts</BpkText>
    </BpkPanel>

    );
}

export default FilterMenuBar;