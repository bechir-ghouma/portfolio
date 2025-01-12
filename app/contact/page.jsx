"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+216) 44 254 485',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'Ghouma68@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Sfax, Tunisia',
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.service) {
      toast.error("Please select a service.");
      setIsSubmitting(false);
      return;
    }

    try {
      const formattedMessage = `
        New Contact Form Submission:
        
        First Name: ${formData.firstname}
        Last Name: ${formData.lastname}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Service Requested: ${formData.service}
        
        Message:
        ${formData.message}
        
        Submission Time: ${new Date().toLocaleString()}
      `;

      // Send detailed form submission to your email
      const adminTemplateParams = {
        from_name: `${formData.firstname} ${formData.lastname}`,
        firstname: formData.firstname,
        lastname: formData.lastname,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        timestamp: new Date().toLocaleString()
      };

      // Send confirmation email to the user
      const userTemplateParams = {
        firstname: formData.firstname, 
        lastname: formData.lastname,
        to_name: `${formData.firstname} ${formData.lastname}`,
        to_email: formData.email,
        service_requested: formData.service,
        subject: "Thank you for your message",
      };

      // Send detailed email to admin
      await emailjs.send(
        'service_kttea8k',
        'template_whsi1ns',
        adminTemplateParams,
        'lExKgq05UQUbR0LTp'
      );

      // Send confirmation to user
      await emailjs.send(
        'service_kttea8k',
        'template_gy687fw',
        userTemplateParams,
        'lExKgq05UQUbR0LTp'
      );

      toast.success("Your message has been sent successfully.");
      
      // Clear form after successful submission
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <ToastContainer />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">A7ki 3ala rouhek yal boshreem</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  placeholder="Firstname" 
                  name="firstname"
                  value={formData.firstname} 
                  onChange={handleChange}
                  required 
                />
                <Input 
                  type="text" 
                  placeholder="Lastname" 
                  name="lastname"
                  value={formData.lastname} 
                  onChange={handleChange}
                  required 
                />
                <Input 
                  type="email" 
                  placeholder="Email address" 
                  name="email"
                  value={formData.email} 
                  onChange={handleChange}
                  required 
                />
                <Input 
                  type="tel" 
                  placeholder="Phone number" 
                  name="phone"
                  value={formData.phone} 
                  onChange={handleChange}
                  required 
                />
              </div>
              <Select 
                name="service"
                onValueChange={(value) => setFormData(prev => ({...prev, service: value}))}
                value={formData.service}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Development</SelectItem>
                    <SelectItem value="software">Software Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea 
                className="h-[200px]" 
                placeholder="Type your message here" 
                name="message"
                value={formData.message} 
                onChange={handleChange}
                required 
              />
              {/* <Button 
                type="submit" 
                size="md" 
                className="max-w-41"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button> */}
              <Button 
                type="submit" 
                size="md" 
                className="max-w-41"
                disabled={isSubmitting}
              >
                {isSubmitting ? <span className="spinner">Sending...</span> : 'Send message'}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6 p-4 rounded-xl">
                  <div className="w-[70px] h-[70px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;