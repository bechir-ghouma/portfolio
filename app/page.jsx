"use client";
import { useState } from "react";
import Photo from "@/components/Photo";
import Social from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">FullStack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Bechir Ghouma</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Hi, I'm a fullstack web and mobile developer with a passion for crafting clean, scalable, and user-friendly solutions. I thrive on transforming ideas into seamless and impactful digital experiences.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => setIsModalOpen(true)}
              >
                <a>
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </a>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />

      {/* Modal Overlay */}
{/* Modal Overlay */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
    {/* Modal Content */}
    <div className="bg-background/95 border border-accent rounded-xl p-8 w-96 animate-in fade-in zoom-in duration-300 shadow-lg shadow-accent/10">
      <h3 className="text-xl font-semibold text-center mb-8 text-white">
        Select CV Language
      </h3>
      
      <div className="flex flex-col gap-4">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
        >
          <a
            href="/assetes/bechir_ghouma_fr.pdf"
            download="Bechir_Ghouma_CV.pdf"
            onClick={() => setIsModalOpen(false)}
          >
            Français
          </a>
        </Button>
        
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300"
        >
          <a
            href="/assetes/bechir_ghouma.pdf"
            download="Bechir_Ghouma_CV.pdf"
            onClick={() => setIsModalOpen(false)}
          >
            English
          </a>
        </Button>
      </div>
      
      <button
        onClick={() => setIsModalOpen(false)}
        className="mt-6 w-full text-sm text-white/60 hover:text-accent transition-colors duration-300"
      >
        Cancel
      </button>
    </div>
  </div>
)}
    </section>
  );
};

export default Home;