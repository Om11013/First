import { Formik } from 'formik'
import React from 'react'
import { FormValues } from './FormValues'
import {Button, Box} from '@mui/material';
import formFields from './FormFields.json';
import CustomTextField from './CustomTextField';


const Login: React.FC = () => {
    type loginFormValues = Pick<FormValues, 'email' | 'password'>
        const initialValues:loginFormValues= {
            email: '',
            password: ''

        }
        const handleSubmit = (values:loginFormValues)=>{
            setTimeout(() => {
                console.log(values)
                const userEmail = values.email
                const registeredDataString:string | null= sessionStorage.getItem(userEmail)
                if(registeredDataString){
                    var registeredData = JSON.parse(registeredDataString)
                    console.log(registeredData)
                }
                if(values.email===registeredData.email){
                    alert('Authentication Successful')
                }else{
                    alert("Authenticatio Failure")
                }
                
                
            }, 1000);
        }

  return (
    <Formik
    initialValues={initialValues} onSubmit={handleSubmit}>
        {({handleSubmit})=>

      <Box component="form" onSubmit={handleSubmit}>
        {formFields.filter(field=>['email','password'].includes(field.id)).map(({id,label,type})=>(
            
            <Box>
        <CustomTextField id={id} label={label} type={type} />
        </Box>    
        ))}
        <Button type="submit" variant="contained">Login</Button>
      </Box>
    }
        </Formik>
  )
}

export default Login
