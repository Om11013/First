// import {  useFormik } from "formik"

// interface Values {
//   fname: string,
//   lname: string,
//   email: string,
//   no: number
// };


// const Register:React.FC = () => {
//   // const submitHandler = (values:Values) => {
//   //   console.log(values)
//   // }

//   const formik = useFormik({
//     initialValues: {
//       fname: '',
//       lname: '',
//       email: '',
//       no: 0
//     },
//     onSubmit: (values: Values)=>{console.log(values)},

    
//   });

//   const {values, handleChange} = formik
  
//   return (
//     <div>

//       <form id="form" onSubmit={handleSubmit}>
//           <label htmlFor="fname">First Name: </label>
//           <input id="fname" name="fname" value={values.fname} onChange={handleChange}/>
//           <label htmlFor="lname">Last Name: </label>
//           <input id="lname" name="lname" value={values.lname} onChange={handleChange}/>
//           <label htmlFor="email">Email : </label>
//           <input id="email" name="email" value={values.email} onChange={handleChange}/>
//           <label htmlFor="no">Number : </label>
//           <input id="no" name="no" value={values.no} onChange={handleChange}/>
//           <button type="submit">Click</button>
//       </form>
//     </div>
//   )
// }

// export default Register


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
    <form onSubmit={formik.handleSubmit}>
      <div>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        />
        </div>
        <div>

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        />
        </div>
        <div>

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        />
        </div>
        <div>

      <label htmlFor="contact">Contact</label>
      <input
        id="contact"
        name="contact"
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.contact}
        />
        </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
