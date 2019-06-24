import React from 'react';
import FilterMenuBar from '../FilterMenuBar';
import JourneyParams from '../JourneyParams';
import Itineraries from '../Itineraries';
import STYLES from '../App/App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const Result = React.memo(({ results }) => (
    <div>
            <JourneyParams journey={results.JourneyDetails}/>
            <FilterMenuBar/>
            <main className={c('App__main')}>
                <Itineraries itineraryDetails={results.ItineraryDetails}/>
            </main>
    </div>

));

export default Result;