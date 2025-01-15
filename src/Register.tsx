import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { FormValues } from './FormValues';
import * as Yup from 'yup'
import {Button, Box, TextField} from '@mui/material';

const Register: React.FC = () => {

  const navigate = useNavigate()
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    contact: Yup.string().required('Contact is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contact: undefined,
      password: ''
    },
    onSubmit: (values) => {
      setTimeout(()=>{
        console.log(values)
        const userEmail: string = values.email
        if(!sessionStorage.getItem(userEmail)){
          sessionStorage.setItem(userEmail,JSON.stringify(values))
        }
      },1000)
      navigate('/login')
    },
    validationSchema
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      {[
        {id: "firstName", label: "First Name", type: "text"},
        {id: "lastName", label: "Last Name", type: "text"},
        {id: "email", label: "Email", type: "email"},
        {id: "contact", label: "Contact", type: "tel"},
        {id: "password", label: "Password", type: "password"}
      ].map(({id,label,type})=>(
        // <div key={id}>
        //   <label htmlFor={id}>{label}: </label>
        //   <input id={id} name={id} type={type} value={(formik.values as any)[id]} onChange={formik.handleChange} />
        // </div>
        <Box>

        <TextField  sx={{backgroundColor: 'lightblue'}}
          key={id}
          id={id}
          name={id}
          label={label}
          type={type} margin="dense"
          value={(formik.values as any)[id]}
          onChange={formik.handleChange}
          
          />
          </Box>
      ))
    }    
      <Button type="submit" variant="contained" >Register</Button>
    </Box>
  );
};

export default Register;