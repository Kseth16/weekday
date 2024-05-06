import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardtemplate from './Cardtemplate'
//declaring state variable 


// "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
// "maxJdSalary": 103,
// "minJdSalary": 100,
// "salaryCurrencyCode": "USD",
// "location": "mumbai",
// "minExp": null,
// "maxExp": null,
// "jobRole": "ios",
// "companyName": "LG",
// "logoUrl": "https://logo.clearbit.com/lg.com"

function App() {
let [jobCardData, setJobCardData]= useState([]);


useEffect(() => {
  const fetchData = async () => {
    const myHeaders= new Headers();
myHeaders.append("Content-Type", "application/json");

const body=JSON.stringify({
  "limit": 10,
  "offset": 0
});


const requestOptions ={
  method: "POST",
  headers: myHeaders,
  body
};

try{

const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)

const data = await response.json();

setJobCardData(data.jdList)
} catch(error){
  console.error(error);
}
  };

  fetchData();



},[]);



return (
<>
    <div className='maincontainer'>
      <div className='flex-container'>


      {/* mapping over json data to dynamically render job cards  */}
      {jobCardData.map((jobCardData,index)=>(
        <Cardtemplate
        key={index}
        companyName={jobCardData.companyName}
        minJdSalary={jobCardData.minJdSalary}
        maxJdSalary={jobCardData.maxJdSalary}
        salaryCurrencyCode={jobCardData.salaryCurrencyCode}
        minExp={jobCardData.minExp}
        maxExp={jobCardData.maxExp}
        logoUrl={jobCardData.logoUrl}
        jobRole={jobCardData.jobRole}
        location={jobCardData.location}
        jobDesription={jobCardData.jobDetailsFromCompany}
        experienceRequired={jobCardData.experienceRequired}
        />
      ))}

      </div>



    </div>



</>
  );
}

export default App
