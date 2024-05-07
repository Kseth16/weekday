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
let [minexp,setMinexp]= useState(0);
let [location,setLocation]= useState(""); // so that it renders properly
let [companyName,setCompanyName]= useState("");
let [isRemote,setIsRemote]= useState("false");
let [techStack,setTechStack]= useState("");
let [role,setRole]= useState("");
let [minSalary,minSalaryHandler]= useState(0);



//declaring state variable 
const firedref=useRef(false); // was hacing a bug where double rendering was occuring as first this helps fix bug

const expfiltered=useRef(false); // an issue with being able to render no jobs found 

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

//above code will add all unique location to location list for rendering in filter



//do filter here 

//minimum experience 
//change carddata to show jobs where min exper is less than equal to minimum value selected

// const expHandler=(event,value)=>{
//   console.log(value)
// };
const expHandler=(event,value)=>{
  console.log(value);
  setMinexp(value);
};

const companynameHandler=(event)=>{
  console.log(event.target.value);
  setCompanyName(event.target.value);
};

const locationHandler=(event,value)=>{
  console.log(value);
  setLocation(value);
};


const isremoteHandler=(event,value)=>{
  console.log(value);
  setIsRemote(value);
};


const techstackHandler=(event,value)=>{
  console.log(value);
  setTechStack(value);
};

const roleHandler=(event,value)=>{
  console.log(value);
  setRole(value);
};


const minpayHandler=(event,value)=>{
  console.log(value);
  minSalaryHandler(value);
};


// console.log(minexp+" mininin");





// jobCardData=jobCardData.filter(
//   (jobdata)=>{
//     return jobdata.minexp<=minexp;
//   }

  //less than equal to min exp


  console.log(minexp+" value min")


return (
<>


{/* rendering it straight from here just so that it is easier to acess data  */}
<div className="filterdiv">
    <Autocomplete className="filterItems"
    onChange={expHandler}
      disablePortal
      id="experience-combo-box"
      options={['0','1','2','3','4','5','6','7','8','9','10']}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Minimum Exp" />}
        />


        {/* make basic filter to check where company name is equal to what you write */}
    

        <TextField onChange={companynameHandler} className="filterItems" style={{paddingRight:"10px"}} id="outlined-basic" sx={{ width: 250 }} label="Company Name" variant="outlined" />


{/* make basic filter to check where location is equal to what you write */}
    <Autocomplete className="filterItems"
    onChange={locationHandler}
      disablePortal
      id="experience-combo-box"
      options={locationslist}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="location" />}
        />


{/* make basic filter to check if location is equal to remote */}

    <Autocomplete className="filterItems"
    onChange={isremoteHandler}
      disablePortal
      id="experience-combo-box"
      options={["remote",]}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Remote" />}
        />


{/* since there is no tech stack object in API make a fitler to check if role includes what you write */}

    <Autocomplete className="filterItems"
    onChange={techstackHandler}
      disablePortal
      id="experience-combo-box"
      options={['ios','android','frontend',"backend"]}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Tech Stack" />}
        />




{/* same like the one before but just change includes to equal to what you write */}

    <Autocomplete className="filterItems"
    onChange={roleHandler}
      disablePortal
      id="experience-combo-box"
      options={['ios','android','frontend',"backend","tech lead"]}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Role" />}
        />



{/* basic filter to check if base pay is equal to or greater than */}

    <Autocomplete className="filterItems"
    onChange={minpayHandler}
      disablePortal
      id="experience-combo-box"
      options={['0','10','20','30','40','50','60','70','80','90','100']}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Minimum Salary in thousands USD" />}
        />


        
        </div>
    <div className='maincontainer'>
      <div className='flex-container'>


      {/* mapping over json data to dynamically render job cards  */}
      {
        
        jobCardData
      /* .filter((jobCardData) => ? jobCardData.minExp <=minexp) */
      .filter((jobdata)=>{
        //filter for min exp
        if(minexp===0 || minexp===null){
          {/* expfiltered.current=false; */}

          return true;
        }else{
          {/* expfiltered.current=true; */}
          
          return jobdata.minExp<=minexp;
          //set to less than equal to, i think thats how minimum experience works
          //will show all jobs with min experience less than X 
          //after looking at weekday and seeing it does the same logic i figure this is what was wanted
        }
        
      })

      //filter for company name add it if it contains the letters

      .filter((jobdata)=>{
        console.log(companyName+" this si company name");

        if(companyName===null || companyName===""){
          return true;
        }else{

        console.log(companyName+" this si company name");
        return jobdata.companyName.includes(companyName);
        }
      
      })


      .filter((jobdata)=>{
        {/* console.log(location+" this is location "); */}

        if(location===null || location===""){
          return true;
        }else{

        {/* console.log(location+" this si location"); */}
        return jobdata.location.includes(location);
        }
      
      })
      


      .filter((jobdata)=>{
        {/* console.log(location+" this is location "); */}

        if(isRemote===null || isRemote==="false" || isRemote !== "remote"){
          return true;
        }else{

        {/* console.log(location+" this si location"); */}
        return jobdata.location.includes("remote");
        }
      
      })


      .filter((jobdata)=>{
        console.log(techStack+" this is tech ");

        if(techStack===null || techStack===""){
          return true;
        }else{

        console.log(techStack+" this si tech");
        return jobdata.jobRole.includes(techStack);
        }
      
      })


      .filter((jobdata)=>{
        {/* console.log(role+" this is role "); */}

        if(role===null || role===""){
          return true;
        }else{

        {/* console.log(role+" this si role"); */}
        return jobdata.jobRole.includes(role);
        }
      
      })


      .filter((jobdata)=>{
        //filter for min exp
        if(minSalary===0 || minSalary===null || minSalary===undefined ){
          {/* expfiltered.current=false; */}
        console.log(minSalary+" this si min sal null");
          return true;
        }else{
          {/* expfiltered.current=true; */}
          console.log(minSalary+" this si min sal");

          return jobdata.minJdSalary>=minSalary;
          //set to greater than equal to
        }
        
      })



      
      
      
      
      .map((datacards,index)=>{

    
      
      
      
      return (
        <>
        
        <Cardtemplate
        key={index}
        companyName={datacards.companyName}
        minJdSalary={datacards.minJdSalary}
        maxJdSalary={datacards.maxJdSalary}
        salaryCurrencyCode={datacards.salaryCurrencyCode}
        minExp={datacards.minExp}
        maxExp={datacards.maxExp}
        logoUrl={datacards.logoUrl}
        jobRole={datacards.jobRole}
        location={datacards.location}
        jobDesription={datacards.jobDetailsFromCompany}
        experienceRequired={datacards.experienceRequired}
        />




</>
      );})}

      </div>



    </div>


<h1 style={{textAlign:"center"}}>Loading....</h1>
</>
  );
}



export default App
