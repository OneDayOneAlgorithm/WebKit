import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "react-bootstrap";

const AddTodo = () =>{
    const [item,setItem] = useState({title:''});
    return(<>
    <Grid container style = {{marginTop:20}}>
        <Grid xs ={9} md={9} item style = {{paddingRight:5}}>
            <TextField placeholder="Add Todo here"></TextField>
        </Grid>
        <Grid xs={3} md={3}>
            <Button fullWidth style={{height:'100%'}} color='secondary' ></Button>
        </Grid>
    </Grid>
    </>)
}

export default AddTodo;