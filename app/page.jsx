import Photo from "@/components/Photo";
import Social from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

const Home = () => {
  return (
    <section>
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Frontend Developer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br />
            <span className="text-accent">Bechir Ghouma</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">Hi, I’m a frontend web and mobile developer with a passion for creating clean, responsive, and user-friendly designs. I enjoy turning ideas into exceptional digital experiences.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
          <Button
                asChild
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
             <a  href="/assetes/bechir_ghouma_fr.pdf"
                download="Bechir_Ghouma_CV.pdf"
              >
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
    </section>
  )
}

export default Home;