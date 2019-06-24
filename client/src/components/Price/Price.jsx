import React from 'react';
import BpkButton from 'bpk-component-button';
import ITINERARY_STYLES from './Price.scss';

const priceStyles = className => ITINERARY_STYLES[className] || 'UNKNOWN';

const Price = React.memo(({ bookingDetails }) => (
         <div className={priceStyles('Price__footer')}>
            <div className={priceStyles('Price__airline')}>
              <div className={priceStyles('Price__airline__price')}>£{bookingDetails.price}</div>
              <div className={priceStyles('Price__airline__name')}>{bookingDetails.agent}</div>
            </div>
            <div className={priceStyles('Price__button')}>
              <BpkButton className={priceStyles('Price__airline__select')}large>Select</BpkButton>
            </div>
          </div>
));
export default Price;