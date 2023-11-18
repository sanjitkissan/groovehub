import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
type FormType = {
    category:string,
    image:string,
  };
export default function Image() {
    const [post, setPost]=useState()
  const [media, setMedia]=useState<any>('')
    const  uploadImg= async()=>{
        const imgData = new FormData()
        imgData.append("file",media)
        imgData.append("upload_preset", "mystore")
        imgData.append("cloud_name", "dpk70hgfb")
      const res=  await fetch("https://api.cloudinary.com/v1_1/dpk70hgfb/image/upload",{
          method:"POST",
          body:imgData,
        })
        const res2= await res.json()
        console.log(res2)
        // return res2.url 
    }

    // useEffect(() => {
    //     fetch("https://outrageous-belt-calf.cyclic.app/api/v1/getimage", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(post),
    //     })
    //       .then((response) => response.json())
    //       .then((data) => console.log("data"))
    //       .catch((error) => console.error(error));
    //   }, [post]);

    let initialValues: FormType = {
        category:"",
    image:"", 
      };
      const formik = useFormik({
        initialValues,
    
        validationSchema: Yup.object({
            category: Yup.string()
            .required("* category is required"),
            image: Yup.string(),

        }),
        onSubmit: (values:any, props: FormikHelpers<FormType>) => {
          try{
            setMedia(formik.values.image)
            uploadImg()
            setPost(values)
            console.log(values);
          }catch(err){
            console.log(err)
          }finally{
            props.resetForm()
          }
        },
      });
     console.log(formik.values)
  return (
    <div className='w-full flex flex-col items-center justify-center gap-2'>
      <h1 className='text-4xl font-bold text-blue-900'>Image</h1>
      <img src="" alt="" />
      <form onSubmit={formik.handleSubmit} className='w-full center gap-6'>
        <TextField
        name='category'
        type='text'
        className='w-full'
        placeholder='Enter category'
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.category && formik.errors.category)}
        helperText={formik.touched.category && formik.errors.category}
        />
         <TextField
        name='image'
        type='file'
        className='w-full'
        placeholder='Select image'
        // value={formik.values.image}
        onChange={(e:any)=>{formik.setFieldValue("image", e.target.files[0])}}
        onBlur={formik.handleBlur}
        // error={Boolean(formik.touched.image && formik.errors.image)}
        // helperText={formik.touched.image && formik.errors.image}
        />
        <button
                className="w-full rounded-md bg-blue-900 text-white text-lg tracking-wider p-4 uppercase z-50"
                type="submit"
              >
                post
              </button>
      </form>
    </div>
  )
}
