import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


// this is the template for all cards

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







    render(){
    return(
        
        <div id="cardtemplate">
<Card variant="outlined" style={{ paddingBottom: "10px" }}>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {this.props.companyName}
    </Typography>



    <h1>    {this.props.jobTitle} </h1>    

    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {this.props.location}
    </Typography>

    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        Estimated Salary: $$$$$
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
    Minimum Experience
    </Typography>
    <Typography sx={{ fontSize: 12 }} color="text.primary" gutterBottom>
    {this.props.experienceRequired}
    </Typography>





        </Card>

        </div>
    )

    }
}

