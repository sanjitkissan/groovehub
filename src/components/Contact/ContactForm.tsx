import { Dialog, TextField } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { contactImg } from "@/src/assets/home";


type FormType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
export default function ContactForm() {
  const [post, setPost]=useState()
  useEffect(() => {
      fetch("https://outrageous-belt-calf.cyclic.app/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then((data) => console.log("data"))
        .catch((error) => console.error(error));
    }, [post]);

    let initialValues: FormType = {
        name: "",
        email: "",
        phone: "",
        message: "",
        
      };
      const formik = useFormik({
        initialValues,
    
        validationSchema: Yup.object({
          name: Yup.string()
            .required("* Name is required")
            .min(2, "* Enter a valid name"),
          email: Yup.string()
            .email("* Enter a valid E-mail")
            .required("* E-mail is required"),
          phone: Yup.string().required("* subject is required"),
    
          message: Yup.string().required("* Write some Message"),
        
        }),
        onSubmit: (values: any, props: FormikHelpers<FormType>) => {
          try {
            setPost(values)            
          } catch (err) {
            console.log(err);
          } finally {
            props.resetForm();
          }
        },
      });

  return (
    <section className="w-full  main-container flex flex-col items-center justify-center gap-16  my-12" id="contact">
      <div className="w-full center ">
        <h1 className="text-2xl lg:text-4xl text-blue-900 font-bold uppercase ">
        Get Started
        </h1>
      </div>
      <section className="w-full h-auto lg:h-[70vh] flex flex-col lg:flex-row gap-6 lg:gap-4 items-center justify-center  lg:my-0  ">
        <div className="w-full h-auto lg:h-[70vh] ">
        <img src={contactImg.src} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-auto lg:h-[70vh]">
          <span className=" bg-white w-full h-full p-6 flex flex-col items-start justify-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            
            {/* <h1 className="text-2xl lg:text-4xl font-bold tracking-wide capitalize ">
            get a free consultation
            </h1>
            <p className="lg:text-lg text-black ">
            If {`you’re`} interested in employment opportunities, please  .
            </p> */}
            <form
              onSubmit={formik.handleSubmit}
              className="w-full flex flex-col items-start justify-center gap-4"
            >
              <span className="center w-full gap-2">
                <TextField
                  className="w-full"
                  type={"text"}
                  placeholder="Your name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  className="w-full"
                  name="email"
                  type={"email"}
                  placeholder="Your email Id"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </span>
              <TextField
                className="w-full"
                name="phone"
                type={"text"}
                placeholder="enter your phone number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              <TextField
                className="w-full"
                rows={"3"}
                multiline
                name="message"
                type={"text"}
                placeholder="Leave your message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(formik.touched.message && formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
          
              <button
                className="w-full rounded-md bg-blue-900 text-white text-lg tracking-wider p-4 uppercase z-50"
                type="submit"
              >
                send message
              </button>
            </form>
          </span>
        </div>
      </section>
 
    </section>
  )
}
