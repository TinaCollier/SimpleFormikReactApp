import React from 'react';
import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form:', values);
      alert('Login successful')
    },
    validate: values => {
      let errors = {};
      
      if (!values.username) {
        errors.username = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
        errors.username = 'Invalid email address';
      }
      
      if(!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 6) {
        errors.password = 'Password has to be longer than 6 characters';
      }
      
      return errors;

    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
        <div id="nameField">
          <div id="text">Username</div>
          <input name="username" type="text" onChange={formik.handleChange} value={formik.values.username} />
          <div id="nameError">
            {formik.errors.username ? <div style={{color: "red"}}>{formik.errors.username}</div> : null }
          </div>
        </div>

        <div id="pswField">
          <div id="text">Password</div>
          <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
          <div id="pswError">
            {formik.errors.password ? <div style={{color: "red"}}>{formik.errors.password}</div> : null }
          </div>
        </div>
        <button id="submitBtn" type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
