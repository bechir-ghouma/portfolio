// "use client";

// import {BsArrowDownRight} from "react-icons/bs";
// import Link from "next/link";

// const services = [
//   {
//     num: '01',
//     title: 'Web Development',
//     description: 'Creating responsive and dynamic websites tailored to your needs.',
//     href: ""
//   },
//   {
//     num: '02',
//     title: 'Mobile App Development',
//     description: 'Building mobile applications with seamless user experiences.',
//     href: ""
//   },
//   {
//     num: '03',
//     title: 'Software Development',
//     description: 'Designing and implementing robust software solutions.',
//     href: ""
//   },
//   {
//     num: '04',
//     title: 'Instructor',
//     description: 'Providing professional guidance and training in development.',
//     href: ""
//   },
// ];

// import { motion } from "framer-motion";

// const Services = () => {
//   return (
//     <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{opacity: 0}}
//           animate={{
//             opacity: 1,
//             transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
//           }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
//         >
//           {services.map((service, index) => {
//             return (
//               <div 
//               key={index} 
//                 className="flex-1 flex flex-col justify-center gap-6 group"
//               >
//               <div className="w-full flex justify-between items-center">
//                 <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
//                 <Link 
//                     href={service.href} 
//                     className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all  duration-500 flex justify-center items-center hover:-rotate-45">
//                     <BsArrowDownRight
//                       className="text-primary text-3xl"
//                     />
//                 </Link>

//               </div>
//               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
//               <p className="text-white/60">{service.description}</p>
//               <div className="border-b border-white/20 w-full"></div>
//             </div>
//           )})}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Services
"use client";

import React from 'react';
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Creating responsive and dynamic websites tailored to your needs.',
    details: 'Our web development services include full-stack development, responsive design, CMS integration, e-commerce solutions, and web application development using the latest technologies and frameworks.',
  },
  {
    num: '02',
    title: 'Mobile App Development',
    description: 'Building mobile applications with seamless user experiences.',
    details: 'We specialize in developing native and cross-platform mobile applications for iOS and Android, focusing on performance, user experience, and scalability.',
  },
  {
    num: '03',
    title: 'Software Development',
    description: 'Designing and implementing robust software solutions.',
    details: 'Custom software development services including desktop applications, enterprise software, cloud solutions, and API development with a focus on scalability and maintainability.',
  },
  {
    num: '04',
    title: 'Instructor',
    description: 'Providing professional guidance and training in development.',
    details: 'Expert instruction in programming languages, frameworks, and development methodologies. Both individual and group training sessions available with hands-on practical exercises.',
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = React.useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index} 
                className="flex-1 flex flex-col justify-center gap-6 group cursor-pointer"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </button>
                </div>
                <h2 
                  onClick={() => handleServiceClick(service)}
                  className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Custom Popup */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-primary p-8 rounded-lg max-w-2xl w-full mx-4 relative"
          >
            <button 
              onClick={closePopup}
              className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedService.title}
            </h2>
            <p className="text-white/80 mb-4">{selectedService.description}</p>
            <p className="text-white/80">{selectedService.details}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Services;