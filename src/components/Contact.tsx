"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
});

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comments: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
    
      setTimeout(() => {
        toast.success("Thank you! Your message has been sent successfully.");
        resetForm();
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <section className="relative w-full min-h-[700px] bg-[#F5F5F5] flex items-center py-20">
      <ToastContainer position="bottom-right" autoClose={4000} />
      
   
      <div className="absolute left-0 top-0 w-full md:w-1/2 h-full z-0">
        <img
          src="/contact-bg.webp"
          alt="Contact us"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex justify-end">
        <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[875px] bg-white rounded-[1.5rem] p-8 md:p-14 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-semibold leading-none tracking-normal uppercase text-[#1a1a1a] mb-10 font-[family-name:var(--font-inter)]">
            GET IN TOUCH
          </h2>
          
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  {...formik.getFieldProps('firstName')}
                  className={`w-full border ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-200'} rounded-lg p-4 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors bg-white placeholder-gray-500 text-sm font-medium text-gray-900`}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...formik.getFieldProps('lastName')}
                  className={`w-full border ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-200'} rounded-lg p-4 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors bg-white placeholder-gray-500 text-sm font-medium text-gray-900`}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...formik.getFieldProps('email')}
                  className={`w-full border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg p-4 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors bg-white placeholder-gray-500 text-sm font-medium text-gray-900`}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  {...formik.getFieldProps('phone')}
                  className={`w-full border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg p-4 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors bg-white placeholder-gray-500 text-sm font-medium text-gray-900`}
                />
              </div>
            </div>
            
            <div>
              <textarea
                placeholder="Enter your comments here any?"
                rows={5}
                {...formik.getFieldProps('comments')}
                className={`w-full border ${formik.touched.comments && formik.errors.comments ? 'border-red-500' : 'border-gray-200'} rounded-lg p-4 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors bg-white placeholder-gray-500 text-sm font-medium text-gray-900 resize-none min-h-[150px]`}
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="cursor-pointer px-12 py-4 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formik.isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
