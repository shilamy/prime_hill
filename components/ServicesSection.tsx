// components/ServicesSection.tsx
import React from 'react';
import ServiceItem from './ServiceItem';
import{services} from "@/constants";

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p>Your services section content here.</p>
        <div className="service__list card-deck">
          {services.map((services, index) => (
            <ServiceItem key={index} icon={services.icon} title={services.title} description={services.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;