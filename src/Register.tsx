import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { FormValues } from './FormValues';


const Register: React.FC = () => {

  const navigate = useNavigate()

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
    }

  });

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
      {[
        {id: "firstName", label: "First Name", type: "text"},
        {id: "lastName", label: "Last Name", type: "text"},
        {id: "email", label: "Email", type: "text"},
        {id: "contact", label: "Contact", type: "tel"},
        {id: "password", label: "Password", type: "password"}
      ].map(({id,label,type})=>(
        <div key={id}>
          <label htmlFor={id}>{label}: </label>
          <input id={id} name={id} type={type} value={(formik.values as any)[id]} onChange={formik.handleChange}/>
        </div>
      ))
    }    
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Register;
