import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
// import { loginUser } from '../../API/AuthApi';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Login() {
    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        const user = {
          email: email.current.value,
          password: password.current.value
      }
        try {
          await axios.post(`/api/v1/auth/login`,user).then(res=> {
            toast.success("user login successfully")
            localStorage.setItem('loginToken', true);
            navigate("/")
            window.location.reload();
          }).catch(err => toast.error(err.response.data.msg));
          
        } catch (error) {
          toast.error(error.response.data.msg)
        }
       
    }

    const readValue=(e)=>{
        e.preventDefault();
        const readData = {
            email: email.current.value,
            password: password.current.value
        }
        console.log("data",readData);
    }

    return ( 
    //     <div className='container'>
    //     <h2 className='text-center'><strong>Login Here</strong></h2>
    //     <div className="row">
    //         <div className="col-md-6 lg-6 offset-md-3">
    //             <form autoComplete='off' onSubmit={submitHandler}>
                    
    //                 <div className="mb-3">
    //                     <label for="exampleInputEmail1" className="form-label">Email address</label>
    //                     <input type="email" className="form-control" name="email" id='email' ref={email} onChange={readValue}></input>
    //                 </div>
    //                 <div className="mb-3">
    //                     <label for="exampleInputEmail1" className="form-label">Password</label>
    //                     <input type="password" className="form-control" id='password' name='Password' ref={password} onChange={readValue}></input>
    //                 </div>
                    
    //                 <button type="submit" className="btn btn-primary">Submit</button>
    //             </form>
    //         </div>
    //     </div>


    // </div>
    <Container fixed sx={{width:'90vh'}}>   
         <Box mt={5}>
            <Typography variant='h4' align='center'>Login</Typography>
        <Grid  >    
            <form  onSubmit={submitHandler}>
    
  
    <div className="container">
      <label for="uname"><b>Email</b></label>
      <input placeholder="Enter Username" type="email" className="form-control" name="email" id='email' ref={email} onChange={readValue} required />
  
      <label for="psw"><b>Password</b></label>
      <input  placeholder="Enter Password"  type="password" className="form-control" id='password' name='Password' ref={password} onChange={readValue} required />
    <div sx={{justifyContent:'center',alignItems:'center'}}>
    <Button type="submit" variant='contained'  sx={{marginTop:'20px'}}>Login</Button>
    </div>
      
      
    </ div>
  
  
  </form>
  </Grid>

  </Box>
  </Container>

    
     );
}

export default Login;