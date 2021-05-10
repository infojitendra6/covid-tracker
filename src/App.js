import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
//  import CountryPicker from './components/CountryPicker/CountryPicker';

// if create index.js file then follow below  rule  other wise follow above rule

import {Cards, Chart, CountryPicker} from './components';

import {fetchData} from './api/index';

import image from './images/image.png';
import styles from './App.module.css';
class App extends React.Component {

  state={
    data:{},
    country: '',
  }

async componentDidMount(){
  const data= await fetchData();
  this.setState({data}) //set data in state of data
}

handleCountryChange= async (country)=>{
  //fetch data
  //set the state
 //console.log(country);

 const data= await fetchData(country);
this.setState({data, country:country});

}

  render(){
    const {data, country}= this.state;

  return (

  <div className={styles.container}>
  <img  className={styles.image} src={image} alt="covid -19"/>
<h1>jitendra kumar singh</h1>
    <Cards data={data}/>
    <CountryPicker handleCountryChange={this.handleCountryChange} />
    <Chart data={data} country={country}/>

  </div>



  );
}
}

export default App;
