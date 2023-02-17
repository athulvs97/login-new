import { useState, useEffect } from "react";
import axios from 'axios';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors,isSubmitting,callback]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));  
    const data = {
      'username': values.email,
      'password': values.password
      };
      axios.post('http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/api/auth/login', data)
        .then(response => {
          values.api=''
          var auth_data=response.headers['joka_auth_token'];
          localStorage.setItem('auth_data', auth_data);
          localStorage.setItem('joka_auth_token',JSON.parse(auth_data).access_token);
          setErrors(validate(values));
          setIsSubmitting(true);
        })
        .catch((error) => {
          values.api='failure'
          setErrors(validate(values));
          console.error('Error:', error);

        });
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
