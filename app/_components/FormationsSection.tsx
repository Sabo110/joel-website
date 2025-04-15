'use client'

import FormationList from "./FormationList";

export default function FormationsSection() {


  return (
    <section className="py-20 bg-secondary" id="formations">
      <div className="container mx-auto px-4 lg:px-5 2xl:px-40">
        <h2 className="text-3xl lg:text-4xl font-bold  mb-12 text-center">
          Nos Formations
        </h2>
        <FormationList />
      </div>
    </section>
  );
}