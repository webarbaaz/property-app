"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikValues } from 'formik';
import * as Yup from 'yup';
import { Property } from "@/types";
import { client } from "@/lib/sanity/client";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Button from "./ui/Button";
import { useSite } from "../hooks/useSite";
import { toast } from "react-toastify";
export default function LeadDialog(
) {
  const {leadDialog, setLeadDialog, property} = useSite()
  // Define the validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
  });

  // Handle form submission
  const handleSubmit = async (values: FormikValues) => {
    const { name, email, phone } = values;
    client.create
    try {
      const newLead = await client.create({
        _type: 'lead', // The type of document you want to create (ensure it's defined in Sanity schema)
        name: name,
        email: email,
        phone: phone,
        propertySlug: property?.slug
      });
      if (newLead) {
        toast('Lead submitted successfully!');
      } else {
        toast('Failed to submit lead.');
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast('Error submitting lead.');
    }
  };
  return (

    <Dialog open={leadDialog} onOpenChange={(value) => {
      setLeadDialog(value)
    }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact us</DialogTitle>
        </DialogHeader>
        <div>
       <div>
      <Formik
    initialValues={{
      name: '',
      email: '',
      phone: '',
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {() => (
      <Form className="">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
            Phone
          </label>
          <Field
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </Form>
    )}
  </Formik>
    </div>
    </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
