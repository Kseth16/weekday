import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




    // allows for dynamic rendering 

export default class Cardtemplate extends React.Component{
constructor(props){
    super(props);
    console.log(props);
}









    render(){
    return(
        //creating base card template
        <div id="cardtemplate">
    <Card variant="outlined">
    <img src={this.props.logoUrl} alt={this.props.companyName+" logo"} />
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {this.props.companyName}
    </Typography>



    <h1>    {this.props.jobRole} </h1>    

    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {this.props.location}
    </Typography>

    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        Estimated Salary: {this.props.minJdSalary}K {this.props.salaryCurrencyCode} - {this.props.maxJdSalary}K {this.props.salaryCurrencyCode}
    </Typography>

    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        About Company:
    </Typography>
    <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
        About us
    </Typography>
    <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
        {this.props.jobDesription}
        {/* add the show more function here */}
    </Typography>

    <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
    Minimum Experience {this.props.minExp} - {this.props.maxExp} years
    {/* add conditional rendering so if min null set to 0 if max null dont render - max  */}
    </Typography>
    <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
    {this.props.experienceRequired}
    </Typography>


        <Button variant='contianed'>Easy Apply</Button>




        </Card>

        </div>
    )

    }
}

