import { useFormik } from 'formik'
import React from 'react'
import { FormValues } from './FormValues'


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
    <div>
      <form onSubmit={formik.handleSubmit}>
        {[
            {id: 'email', label: 'Email', type: 'email'},
            {id: 'password', label: 'Password', type: 'password'}
        ].map(({id,label,type})=>(
            <div key={id}>
                <label htmlFor={id}>{label}: </label>
                <input id={id} name={id} type={type} value={(formik.values as any)[id]} onChange={formik.handleChange}/>
            </div>
        )
        )
        }
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
