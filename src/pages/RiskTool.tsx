
import React from 'react';
import Header from '@/components/Header';
import RiskAssessmentForm from '@/components/RiskAssessmentForm';
import Footer from '@/components/Footer';

const RiskTool = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-10 bg-gradient-to-b from-white to-medical-lightgray">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-medical-gray">
                Cardiac Risk Assessment Tool
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed max-w-[700px] mx-auto">
                Submit your clinical data below to receive a comprehensive cardiac risk evaluation powered by AI.
              </p>
            </div>
          </div>
        </div>
        <RiskAssessmentForm />
      </main>
      <Footer />
    </div>
  );
};

export default RiskTool;
