
import React from 'react';
import { FileText2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-medical-gray">
            About CardioPredict AI
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-[700px] mx-auto">
            Advanced AI technology for accurate cardiac risk prediction
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-medical-blue/10 flex items-center justify-center mb-4">
              <FileText2 className="h-8 w-8 text-medical-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-medical-gray">Evidence-Based</h3>
            <p className="text-gray-500">
              Built on the UCI Heart Disease dataset and validated with multiple classifiers for clinical accuracy.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-medical-blue/10 flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-medical-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-medical-gray">Quick Assessment</h3>
            <p className="text-gray-500">
              Input just 7 clinical parameters and receive an instant cardiac risk prediction with confidence score.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-medical-blue/10 flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-medical-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 5.04L12 21.044l9.618-13.06A11.955 11.955 0 0112 2.944z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-medical-gray">Medical-Grade</h3>
            <p className="text-gray-500">
              Designed for use by healthcare professionals and patients for early intervention opportunities.
            </p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a href="/about" className="inline-flex items-center text-medical-blue hover:text-medical-blue/80 font-medium">
            Learn more about our technology
            <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
