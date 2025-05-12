"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import Button from "../component/ui/Button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainLayout from "../component/layout/MainLayout";
import Container from "../component/ui/Container";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <MainLayout>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
            <Container>
              <div className="text-center max-w-3xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                  Get in Touch
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-muted-foreground">
                  We&apos;re here to answer any questions you have about our
                  services, properties, or anything else.
                </motion.p>
              </div>
            </Container>
          </section>

          {/* Contact Info & Form Section */}
          <section className="py-16">
            <Container>
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}>
                  <h2 className="text-3xl font-bold mb-8">
                    Contact Information
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2 mb-10">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Our Office</h3>
                            <address className="not-italic text-muted-foreground">
                              123 Real Estate Avenue
                              <br />
                              Toronto, ON M5V 2K4
                              <br />
                              Canada
                            </address>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Phone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Phone</h3>
                            {/* <p className="text-muted-foreground">
                              Main: (416) 555-1234
                            </p> */}
                            <p className="text-muted-foreground">
                              Support: +917030187000
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-muted-foreground break-all">
                              Raziq.khan@truevaluehome.in
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">
                              Business Hours
                            </h3>
                            <p className="text-muted-foreground">
                              Monday-Friday: 9AM-6PM
                            </p>
                            <p className="text-muted-foreground">
                              Saturday: 10AM-4PM
                            </p>
                            <p className="text-muted-foreground">
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src="/assets/demo/map.avif"
                      alt="Office location map"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary text-white p-3 rounded-full animate-bounce">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}>
                  <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                      <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting us. We&apos;ll get back to you
                        as soon as possible.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={(e) => handleSubmit(e)}
                      className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>I&apos;m interested in:</Label>
                        <RadioGroup defaultValue="buying">
                          <div className="flex flex-wrap gap-6">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="buying" id="buying" />
                              <Label htmlFor="buying">Buying a property</Label>
                            </div>
                            {/* <div className="flex items-center space-x-2">
                              <RadioGroupItem value="selling" id="selling" />
                              <Label htmlFor="selling">
                                Selling a property
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="renting" id="renting" />
                              <Label htmlFor="renting">Renting</Label>
                            </div> */}
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other">Other</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" rows={5} required />
                      </div>

                      <Button type="submit" className="w-full sm:w-auto gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </motion.div>
              </div>
            </Container>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <Container>
              {/* <div className="container"> */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Find answers to common questions about our services and
                  processes.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    question: "How do I schedule a property viewing?",
                    answer:
                      "You can schedule a viewing by contacting us through this form, calling our office, or using the booking feature on our property listings.",
                  },
                  {
                    question: "What documents do I need to sell my property?",
                    answer:
                      "Typically, you'll need proof of ownership, property tax records, and any relevant permits or certificates. Our agents will guide you through the specific requirements.",
                  },
                  {
                    question: "How long does the buying process take?",
                    answer:
                      "The timeline varies depending on various factors, but typically ranges from 30-90 days from offer acceptance to closing. Our team will provide a more specific timeline based on your situation.",
                  },
                  {
                    question: "Do you handle commercial properties?",
                    answer:
                      "Yes, we have specialists dedicated to commercial real estate. Whether you're looking to buy, sell, or lease commercial space, we can help.",
                  },
                  {
                    question: "What areas do you serve?",
                    answer:
                      "We primarily serve the Greater Toronto Area, including downtown Toronto, North York, Scarborough, Etobicoke, Mississauga, and surrounding areas.",
                  },
                  {
                    question: "How do I get started with selling my home?",
                    answer:
                      "The first step is to contact us for a free property valuation. We'll assess your home's value and discuss your selling goals before creating a customized marketing plan.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </Container>
            {/* </div> */}
          </section>
        </main>
      </div>
    </MainLayout>
  );
}
