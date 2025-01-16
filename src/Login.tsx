import { useFormik } from 'formik'
import React from 'react'
import { FormValues } from './FormValues'
import {Button, Box, TextField} from '@mui/material';


const Login: React.FC = () => {
    type loginFormValues = Pick<FormValues, 'email' | 'password'>



    const formik = useFormik<loginFormValues>({
        initialValues: {
            email: '',
            password: ''

        },
        onSubmit: (values)=>{
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
        },
    })

  return (
      <Box component="form" onSubmit={formik.handleSubmit}>
        {[
            {id: 'email', label: 'Email', type: 'email'},
            {id: 'password', label: 'Password', type: 'password'}
        ].map(({id,label,type})=>(
            
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
        )
        )
        }
        <Button type="submit" variant="contained">Login</Button>
      </Box>
  )
}

export default Login
