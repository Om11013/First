import React from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { FormValues } from './FormValues';
import * as Yup from 'yup'
import {Button, Box} from '@mui/material';
import formFields from './FormFields.json';
import CustomTextField from './CustomTextField';

const Register: React.FC = () => {

  const navigate = useNavigate()
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    contact: Yup.string().required('Contact is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const initialValues: FormValues ={
      firstName: '',
      lastName: '',
      email: '',
      contact: undefined,
      password: ''
    };

    const handleSubmit= (values:FormValues) => {
      setTimeout(()=>{
        console.log(values)
        const userEmail: string = values.email
        if(!sessionStorage.getItem(userEmail)){
          sessionStorage.setItem(userEmail,JSON.stringify(values))
        }
      },1000)
      navigate('/login')
    }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >   
      {({ handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit}>
          {formFields.map(({ id, label, type }) => (
            <CustomTextField key={id} id={id} label={label} type={type} />
          ))}
          <Button type="submit" variant="contained">
            Register
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default Register;