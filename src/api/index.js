
import axios from 'axios';
const url='https://covid19.mathdro.id/api';

export const fetchData = async (country) =>
{
    let changeableUrl = url;

    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }
// some time recieve country parameter but sone time not recieve country parameter

 try{
     //const response= await axios.get(url);
// response in an object 
// response.data is value

// const {data}= await axios.get(url);
// //{data} is same as response.data;

// return response;
// const modifiedData={
//     confirmed:data.confirmed,

//     recovered:data.recovered,
//     deaths:data.deaths,
//     lastUpdate:data.astUpdate
// }
//// confirmed:data.confirmed is same as confirmed 
//// above code  same as const modifiedData{confirmed, recovered, deaths, lastUpdate}

// return modifiedData;
// above data  repalce with below code about same


const {data:{confirmed, recovered, deaths, lastUpdate}}= await axios.get(changeableUrl);

return {confirmed, recovered, deaths, lastUpdate};
 }
 catch(error)
 {
     return error;
 }
}
 export const fetchDailyData = async () =>{

    try{
        const { data } = await axios.get(`${url}/daily`);
      //  console.log(data);

         return data.map(({confirmed, deaths, reportDate: date})=>({confirmed:confirmed.total, deaths:deaths.total, date}))


    }
        catch(error){
        return error;
        }


 }

 export const fetchCountries = async ()=>
 {
     try{
    //   const response=await axios.get(`${url}/countries`);
    //  console.log(response);

      const { data: { countries } } = await axios.get(`${url}/countries`);
       return countries.map((countries)=> countries.name);

     }
     catch(error)
     {
    return error;
     }
 }