import React,{useState,useEffect} from 'react';
import STYLES from './App.scss';
import Header from './../Header';
import Container from '../Container';
import { BpkLargeSpinner, SPINNER_TYPES } from 'bpk-component-spinner';
import axios from 'axios';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => {

const [results,setResults] = useState(null);
const [loading,setLoading] = useState(true);
const params =
{
  originPlace: 'EDI',
  destinationPlace: 'LHR',
  outboundDate: '2019-06-29',
  inboundDate: '2019-07-03',
  adults: 2,
  children: 2,
  infants: 0,
};

// calling the search api here
// right now i am keeping the code in APP component later can be place in another component or any action method
useEffect(()=>{

  async function fetchData() {

    await axios.get('http://localhost:4000/api/search', {
      params: {
        originPlace: 'EDI',
        destinationPlace: 'LHR',
        outboundDate: '2019-06-29',
        inboundDate: '2019-07-03',
        adults: 2,
        children: 2,
        infants: 0,
      },
    })
      .then(response => setResults(response.data))
      .catch(console.error);
      
     setLoading(false);

  }
 fetchData();

},[]);

return(
  <div className={c('App')}>
    <Header />
     {loading? <BpkLargeSpinner className={c('App__spinner')} type={SPINNER_TYPES.dark} /> : <Container results={results}/>}
  </div>
);
};

export default App;
