import React  from "react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Cardtemplate.css'
import {Check} from '@mui/icons-material/Check';



    // allows for dynamic rendering 

export default class Cardtemplate extends React.Component{

constructor(props){
    super(props);

    this.state={
        showMore: false
    };


    console.log(props);
}


toggleShowMore= () => {

    this.setState({showMore: !this.state.showMore})
}









    render(){
    return(
        //creating base card template
    <div id="cardtemplate">
    <Card variant="outlined">
    <div className="insidecardpadding">

    <div className="imgNameRolediv">
    
    <div className="imgdiv">
    <img  height='50px' width='50px' src={this.props.logoUrl} alt={this.props.companyName+" logo"} />
    </div>

    <div className="companyNameAndRole">

    <div className="companyname">
    <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {this.props.companyName}
    </Typography>
    </div>



    <div className="role">
    <h1>    {this.props.jobRole} </h1> 
    </div>  


    <div className="location">
    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {this.props.location}
    </Typography>

    </div>
    </div>

    </div>




    {/* <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {this.props.location}
    </Typography> */}

    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    
    Estimated Salary: {this.props.minJdSalary !== null ? `${this.props.minJdSalary}K ${this.props.salaryCurrencyCode}` : "0"} {this.props.maxJdSalary !== null ? `- ${this.props.maxJdSalary}K ${this.props.salaryCurrencyCode}  `  : `` } 
        {/* Estimated Salary: {this.props.minJdSalary}K {this.props.salaryCurrencyCode} - {this.props.maxJdSalary}K {this.props.salaryCurrencyCode} */}
    </Typography>

    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        About Company:
    </Typography>
    <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
        About us
    </Typography>
    
    {/*  */}
    <Typography sx={{ fontSize: 12, backgroundImage: 'linear-gradient(rgba(255,255,255,0),rgba(255,255,255,100));'}} color="text.primary" gutterBottom>
        {this.state.showMore ? this.props.jobDesription : `${this.props.jobDesription.slice(0,200)}.....`}
        {!this.state.showMore && <span style={{color:'blueviolet', display:'flex', justifyContent: 'center'}} onClick={this.toggleShowMore}>Show more</span>}
        
        {/* {this.props.jobDesription} */}
        {/* add the show more function here */}
    </Typography>
    

    <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
    {/* if min is null then render 0 if max is null dont render */}
    Minimum Experience:
    {/* Minimum Experience {this.props.minExp} - {this.props.maxExp} years */}
    {/*     Estimated Salary: {this.props.minJdSalary !== null ? `${this.props.minJdSalary}K ${this.props.salaryCurrencyCode}` : "0"} {this.props.maxJdSalary !== null ? `- ${this.props.maxJdSalary}K ${this.props.salaryCurrencyCode}` : ``}
 */}
    {/* add conditional rendering so if min null set to 0 if max null dont render - max  */}
    </Typography>

    <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
    {/* if min is null then render 0 if max is null dont render */}
    {this.props.minExp !== null ? `${this.props.minExp}` : "0"} {this.props.minExp !== null ? `- ${this.props.maxExp} years` : "years"}
    {/* Minimum Experience {this.props.minExp} - {this.props.maxExp} years */}
    {/*     Estimated Salary: {this.props.minJdSalary !== null ? `${this.props.minJdSalary}K ${this.props.salaryCurrencyCode}` : "0"} {this.props.maxJdSalary !== null ? `- ${this.props.maxJdSalary}K ${this.props.salaryCurrencyCode}` : ``}
 */}
    {/* add conditional rendering so if min null set to 0 if max null dont render - max  */}
    </Typography>



    <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
    {this.props.experienceRequired}
    </Typography>


        <Button className="easyApplyButton" sx={{backgroundColor: '#54EFC3', display: 'flex', width: '100%'}}variant='contianed'>Easy Apply</Button>

        <Button className="easyApplyButton" sx={{backgroundColor: '#4943DA', display: 'flex', width: '100%', marginTop: '5px'}}variant='contianed'>Unlock referral asks</Button>


</div>
        </Card>

        </div>
    )

    }
}

