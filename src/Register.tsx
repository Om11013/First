import React from 'react';
import { useFormik } from 'formik';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  contact?: number
}

const Register: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contact: undefined
    },
    onSubmit: (values) => {
      console.log(values)
    },
  });

  return (
    <>
    <form onSubmit={formik.handleSubmit}>
      {[
        {id: "firstName", label: "First Name", type: "text"},
        {id: "lastName", label: "Last Name", type: "text"},
        {id: "email", label: "Email", type: "text"},
        {id: "contact", label: "Contact", type: "tel"}
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
