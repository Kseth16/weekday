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
}]




  return (
    <div className='flex-container'>
      
      <Cardtemplate 
        companyName="Weekday"
        jobTitle="Frontend Engineer"
        location="Delhi"
        jobDesription='lorem ipsum..' 
        experienceRequired='1 year'
      />

<Cardtemplate className='flex-item' 
        companyName="Weekday"
        jobTitle="Frontend Engineer"
        location="Delhi"
        jobDesription='lorem ipsum..' 
        experienceRequired='1 year'
      />

<Cardtemplate className='flex-item'
        companyName="Weekday"
        jobTitle="Frontend Engineer"
        location="Delhi"
        jobDesription='lorem ipsum..' 
        experienceRequired='1 year'
      />

<Cardtemplate className='flex-item'
        companyName="Weekday"
        jobTitle="Frontend Engineer"
        location="Delhi"
        jobDesription='lorem ipsum..' 
        experienceRequired='1 year'
      />


    </div>
  )
}

export default App
