import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
type FormType = {
    email:string,
    password:string,
  };
export default function Login({setIsLogin}:any) {
    

    const userEmail= "adminsiv@gmail.com";
    const code = "AdminSiv@123"

    let initialValues: FormType = {
        email:"",
    password:"", 
      };
      const formik = useFormik({
        initialValues,
    
        validationSchema: Yup.object({
            email: Yup.string()
            .required("* email is required"),
            password: Yup.string().required("* password is required"),

        }),
        onSubmit: (values:any, props: FormikHelpers<FormType>) => {
          try{
            if(formik.values.email==userEmail && formik.values.password==code){
                setIsLogin(true)
            }else{
                alert("Wrong credentials")
            }
              
          }catch(err){
            console.log(err)
          }finally{
            props.resetForm()
          }
        },
      });
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-2'>
    <h1 className='text-4xl font-bold text-blue-900'>Log In</h1>
    <img src="" alt="" />
    <form onSubmit={formik.handleSubmit} className='w-1/2 flex flex-col items-center gap-4'>
        
      <TextField
      name='email'
      type='text'
      className='w-full'
      placeholder='Enter email'
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={Boolean(formik.touched.email && formik.errors.email)}
      helperText={formik.touched.email && formik.errors.email}
      />
       <TextField
      name='password'
      type='password'
      className='w-full'
      placeholder='Select password'
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={Boolean(formik.touched.password && formik.errors.password)}
      helperText={formik.touched.password && formik.errors.password}
      />
     
      
      <button
              className="px-9 py-3 rounded-md bg-blue-900 text-white text-lg tracking-wider w-fit uppercase z-50"
              type="submit"
            >
              submit
            </button>
            
    </form>
  </div>
  )
}
