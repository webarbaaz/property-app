"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Button from "./ui/Button";
import { useSite } from "../hooks/useSite";
import { toast } from "react-toastify";
export default function LeadDialog() {
  const { leadDialog, setLeadDialog, property, closeLeadDialog, activeSlug } =
    useSite();
  // Define the validation schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
  });

  type FormInput = {
    name: string;
    email: string;
    phone: string;
  };

  const { resetForm, handleSubmit, errors, values, handleChange, handleBlur } =
    useFormik<FormInput>({
      initialValues: {
        name: "",
        email: "",
        phone: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        const { name, email, phone } = values;
        try {
          const res = await axios.post("/api/send", {
            name,
            email,
            phone,
            slug:
              "https://www.truevaluehome.in/properties/" +
              (property?.slug ?? activeSlug),
          });

          if (res.status === 200) {
            toast("Enquiry Submitted");
            resetForm();
            closeLeadDialog();
          }
        } catch (error) {
          console.error("Error submitting lead:", error);
          toast("Error submitting lead.");
        }
      },
    });

  return (
    <Dialog
      open={leadDialog}
      onOpenChange={(value) => {
        setLeadDialog(value);
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send your details</DialogTitle>
        </DialogHeader>
        <div>
          <div>
            <form className="">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.name && (
                  <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.phone && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.phone}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
