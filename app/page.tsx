import { Hero } from "@/components";

import Image from "next/image";



import { FaBuilding, FaLandmark, FaHandshake } from 'react-icons/fa';

export default function Home() {
  return (
    <main 
    className="overflow-hidden">
      <Hero />
      <section id="about" className="flex flex-col items-center justify-center">
          <div className="container mx-auto p-8 text-center">
            <h2 className="text-4xl font-bold mb-6">About <span> Us </span></h2>
            <p className="text-lg mb-6">
              Welcome to Our Company! We specialize in selling property and offering expert consultation on lands and real estate.
            </p>
            <div className="flex flex-wrap justify-center">
            </div>
          </div>
        </section>
        <div className="mt-12 padding-x padding max-width" id="discover">
<div className="home__text-container">

</div>
        </div>
       
      
    </main>
  );
}
