import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardtemplate from './Cardtemplate'

function App() {
  // const [count, setCount] = useState(0)

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
