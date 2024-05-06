import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardtemplate from './Cardtemplate'

function App() {
  // const [count, setCount] = useState(0)


  let data;

   let jobCardData=[{
        jobTitle: 'frontend engineer',
        companyName: 'weekday',
        location: 'delhi',
        jobDesription: 'lorem ipsum..  ',
        experienceRequired: '1 year',


    },
{
    jobTitle: 'frontend engineer',
        companyName: 'weekday',
        location: 'delhi',
        jobDesription: 'lorem ipsum..  ',
        experienceRequired: '1 year',
},
{
    jobTitle: 'frontend engineer',
    companyName: 'weekday',
    location: 'delhi',
    jobDesription: 'lorem ipsum..  ',
    experienceRequired: '1 year',


},
{
    jobTitle: 'frontend engineer',
    companyName: 'weekday',
    location: 'delhi',
    jobDesription: 'lorem ipsum..  ',
    experienceRequired: '1 year',
},
{
  jobTitle: 'frontend engineer',
      companyName: 'weekday',
      location: 'delhi',
      jobDesription: 'lorem ipsum..  ',
      experienceRequired: '1 year',
},
{
  jobTitle: 'frontend engineer',
  companyName: 'weekday',
  location: 'delhi',
  jobDesription: 'lorem ipsum..  ',
  experienceRequired: '1 year',


},
{
  jobTitle: 'frontend engineer',
  companyName: 'weekday',
  location: 'delhi',
  jobDesription: 'lorem ipsum..  ',
  experienceRequired: '1 year',
}]



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

fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
.then((response) => response.text())
.then((result) => {
  console.log(result);
  data=JSON.stringify(result);

})
.catch((error) => console.error(error));


  return (
<>
    <div className='maincontainer'>
      <div className='flex-container'>

      {jobCardData.map((job,index)=>(
        <Cardtemplate
        key={index}
        companyName={job.companyName}
        jobTitle={job.jobTitle}
        location={job.location}
        jobDesription={job.jobDesription}
        experienceRequired={job.experienceRequired}
        />
      ))}

      </div>



    </div>



</>
  )
}

export default App
