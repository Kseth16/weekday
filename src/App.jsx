import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardtemplate from './Cardtemplate'
import Filterhead from './Filterheader'



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
let [off,setOff] = useState(0);

//declaring state variable 
const firedref=useRef(false); // was hacing a bug where double rendering was occuring as first this helps fix bug

useEffect(() => {

// console.log(firedref.current+" fired is ")
  if(firedref.current){ // checks if fired is true since set to false wont go through 
   
  const fetchData = async () => {


    //setting headers parameters
    const myHeaders= new Headers();
    myHeaders.append("Content-Type", "application/json");


// setting body parameters

const body=JSON.stringify({
  "limit": 9,
  "offset": off
  
});
console.log("changing offset");




//setting api up

const requestOptions ={
  method: "POST",
  headers: myHeaders,
  body
};


try{

  // fetching data
const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)



//data is retrived into data
const data = await response.json();
console.log(data);



//filling job card with data.jdList or the json data this will be mapped to dynamically render data

//fills the jobcard array with new data 12 at a time and adds an offset of 12 so that none are repeated 

setJobCardData(prevData => [...prevData,...data.jdList])
// need to update this so that the job uid of the first job is it is present then dont render







// setJobCardData(prevData =>{


//   if(prevData !== null && prevData !== undefined ){
//   const Datatoadd= data.jdList.filter(newValue=>
//     !prevData.some(prevValue =>prevValue.jobUid === newValue.jobUid)
//   );
//   // goes through old data and makes sure that new data doesnt exist in it helps with bug that renders inital data twice

//   return[...prevData,...Datatoadd];
// }else{
//   // setJobCardData(prevData => [...prevData,...data.jdList])
//   return[...prevData,...Datatoadd];

// }
// } );
















// if(window.innerHeight + document.documentElement.scrollTop + 1 >=document.documentElement.scrollHeight){
//   setOff(off+12);
// }
// setOff(off+12);
// able to add the 12 and keep going thorugh the list 
// add changes to append to jobcard and make it so that it only fires off when i reach end of window  
 
console.log(off);

} catch(error){
  console.error(error);
}
  };


  // const handleScroll=()=>{

    
  //   // if(window.innerHeight + document.documentElement.scrollTop + 1 >=document.documentElement.scrollHeight){
  //   //   setOff(off+12);
  //   // }

  // }

  

fetchData();

  }

firedref.current=true; // fire is now true stops double rendering at begining and works properly yaaay 
},[off]);

const handleScroll=()=>{

    
    if(window.innerHeight + document.documentElement.scrollTop + 1 >=document.documentElement.scrollHeight){
      console.log("next");
    
      // setOff(off+9);
      
      setOff(prevOff => prevOff + 9);

      
      
      console.log(off+" changing off inscroller function");
    }
  

  }



useEffect(()=>{
  window.addEventListener("scroll", handleScroll);

  return()=>{
    window.removeEventListener("scroll",handleScroll);
  }
  
},[])

// set up filtering over here with the jobcard data 

const locationslist=[];

jobCardData.forEach(jobdata =>{
  if(!locationslist.includes(jobdata.location)){
    locationslist.push(jobdata.location);
  }
});

//will add all unique location to location list for rendering in filter


return (
<>



<Filterhead Locationlist={locationslist}  />
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


<h1 style={{textAlign:"center"}}>Loading....</h1>
</>
  );
}

export default App
