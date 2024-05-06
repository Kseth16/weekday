import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



/*

data for cards 
Job title
Company name
Location
Job description (limited to a certain number of characters with an option to expand)
Experience required
Apply button/link


*/

export default class Cardtemplate extends React.Component{
constructor(props){
    super(props);
    console.log(props);
}




     jobCardData=[{
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




    render(){
    return(
        <div>
        <p>card template boiler plate</p>
        </div>
    )

    }
}

