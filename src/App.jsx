import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Filterheader.css'
import Cardtemplate from './Cardtemplate'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import Filterhead from './Filterheader'



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



<div className="filterdiv">
    <Autocomplete className="filterItems"
      disablePortal
      id="experience-combo-box"
      options={[1,2,3,4,5,6,7,8,9]}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Minimum Exp" />}
        />


        {/* make basic filter to check where company name is equal to what you write */}
    

        <TextField className="filterItems" style={{paddingRight:"10px"}} id="outlined-basic" sx={{ width: 250 }} label="Company Name" variant="outlined" />


{/* make basic filter to check where location is equal to what you write */}
    <Autocomplete className="filterItems"
      disablePortal
      id="experience-combo-box"
      options={locationslist}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="location" />}
        />


{/* make basic filter to check if location is equal to remote */}

    <Autocomplete className="filterItems"
      disablePortal
      id="experience-combo-box"
      options={["Remote","Inperson"]}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Remote/Inperson" />}
        />


{/* since there is no tech stack object in API make a fitler to check if role includes what you write */}

    <Autocomplete className="filterItems"
      disablePortal
      id="experience-combo-box"
      options={['IOS','Android','frontend',"backend"]}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Tech Stack" />}
        />




{/* same like the one before but just change includes to equal to what you write */}

    <Autocomplete className="filterItems"
      disablePortal
      id="experience-combo-box"
      options={['IOS','Android','frontend',"backend","tech lead"]}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Role" />}
        />



{/* basic filter to check if base pay is equal to or greater than */}

    <Autocomplete className="filterItems"
      disablePortal
      id="experience-combo-box"
      options={['0','10K','20k','30k','40k','50k','60k','70k','80k','90k','100k']}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Minimum Salary" />}
        />


        
        </div>
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
