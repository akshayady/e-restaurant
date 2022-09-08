import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Register() {
    const name = useRef();
    const email = useRef();
    const mobile = useRef();
    const password = useRef();

    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        const user = {
          name: name.current.value,
          email: email.current.value,
          mobile: mobile.current.value,
          password: password.current.value,
      }
        try {
          await axios.post(`/api/v1/auth/register`,user).then(res=> {
            toast.success("user registered successfully")
            navigate("/")
          }).catch(err => toast.error(err.response.data.msg));
          
        } catch (error) {
          toast.error(error.response.data.msg)
        }
       
    }

    const readValue=(e)=>{
        e.preventDefault();
        const readData = {
            name: name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            password: password.current.value,
        }
        console.log("data",readData);
    }

    return ( 
    //     <div className='container'>
    //     <h2 className='text-center'><strong>Register Here</strong></h2>
    //     <div className="row">
    //         <div className="col-md-6 lg-6 offset-md-3">
    //             <form autoComplete='off' onSubmit={submitHandler}>
    //                 <div className="mb-3">
    //                     <label for="exampleInputEmail1" className="form-label">Name:</label>
    //                     <input type="text" className="form-control" name='name' id='name' ref={name} onChange={readValue}></input>
    //                 </div>
    //                 <div className="mb-3">
    //                     <label for="exampleInputEmail1" className="form-label">Email address</label>
    //                     <input type="email" className="form-control" name="email" id='email' ref={email} onChange={readValue}></input>
    //                 </div>
    //                 <div className="mb-3">
    //                     <label for="exampleInputEmail1" className="form-label">Password</label>
    //                     <input type="password" className="form-control" id='password' name='Password' ref={password} onChange={readValue}></input>
    //                 </div>
    //                 <div className="mb-3">
    //                     <label for="exampleInputPassword1" className="form-label">Mobile</label>
    //                     <input type="number" className="form-control" name="mobile" id='mobile' ref={mobile} onChange={readValue}></input>
    //                 </div>
    //                 <button type="submit" className="btn btn-primary">Submit</button>
    //             </form>
    //         </div>
    //     </div>


    // </div>

        <Box mt={5}>
            <Grid container>
            
                <div className='container'>
                <Typography variant='h4' align='center'>Register</Typography>
                <form  onSubmit={submitHandler}>
                <label for="uname"><b>Name</b></label>
                <input placeholder="Enter Username" type="text" className="form-control" name='name' id='name' ref={name} onChange={readValue} required />

                <label for="uname"><b>Email address</b></label>
                <input placeholder="Enter Username" type="email" className="form-control" name="email" id='email' ref={email} onChange={readValue} required />

                <label for="uname"><b>Password</b></label>
                <input placeholder="Enter Username" type="password" className="form-control" id='password' name='Password' ref={password} onChange={readValue} required />

                <label for="uname"><b>Mobile</b></label>
                <input placeholder="Enter Username" type="number" className="form-control" name="mobile" id='mobile' ref={mobile} onChange={readValue} required />

                <div sx={{justifyContent:'center',alignItems:'center'}}>
               <Button type="submit" variant='contained'  sx={{marginTop:'20px'}}>Register</Button>
               </div>
               </form>
                </div>
                
            </Grid>
        </Box>


     );
}

export default Register;