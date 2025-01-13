import { Field,Form, Formik, FormikHelpers } from "formik"

const initial_values = {
  fname: '',
  lname: '',
  email: '',
  no: 0,
};
interface Values {
  fname: string,
  lname: string,
  email: string,
  no: number
};

const handleSubmit = (values:Values, {setSubmitting}:FormikHelpers<Values>) => {
  setSubmitting(false)
  console.log(values)
}


const Register = () => {
  return (
    <div>
      <Formik initialValues={initial_values} onSubmit={handleSubmit} >

      <Form id="form">
          <label htmlFor="fname">First Name: </label>
          <Field id="fname" name="fname" />
          <label htmlFor="lname">Last Name: </label>
          <Field id="lname" name="lname" />
          <label htmlFor="email">Email : </label>
          <Field id="email" name="email" />
          <label htmlFor="no">Number : </label>
          <Field id="no" name="no" />
          <button type="submit">Click</button>
      </Form>
      </Formik>
    </div>
  )
}

export default Register
