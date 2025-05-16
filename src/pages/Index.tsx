
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import RiskAssessmentForm from '@/components/RiskAssessmentForm';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <RiskAssessmentForm />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
