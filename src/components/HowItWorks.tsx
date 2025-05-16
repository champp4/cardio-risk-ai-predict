import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Clipboard, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Patient inputs basic medical data",
      description: "Enter seven critical clinical parameters related to heart health as recommended by cardiologists.",
      icon: Clipboard,
    },
    {
      title: "AI preprocesses and analyzes data",
      description: "Our system imputes missing values, scales features, and clusters patients based on similar profiles.",
      icon: Brain,
    },
    {
      title: "Risk level is predicted",
      description: "A stacking ensemble of clinical models evaluates cardiac risk with high accuracy.",
      icon: FileText,
    },
    {
      title: "You receive an interpretable report",
      description: "Get an actionable risk assessment report that can be shared with your healthcare provider.",
      icon: FileText,
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-medical-gray">How It Works</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            A simple four-step process to assess your cardiac health with medical AI
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-t-4 border-t-medical-blue">
              <div className="absolute top-0 right-0 bg-medical-blue/10 p-2 rounded-bl-lg">
                <span className="font-bold text-medical-blue">{index + 1}</span>
              </div>
              <CardContent className="pt-6 pb-4">
                <div className="mb-4 h-12 w-12 rounded-full bg-medical-blue/20 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-medical-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-medical-lightgray rounded-lg p-6 md:p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-medical-gray">Built on Medical Research</h3>
              <p className="text-gray-500 mb-6">
                CardioPredict leverages the extensive UCI Heart Disease dataset and integrates multiple clinical algorithms to provide the most accurate risk assessment possible.
              </p>
              <ul className="space-y-2">
                {[
                  "Based on open-access UCI Heart Disease dataset",
                  "Validated on multiple classifiers",
                  "Transparent AI pipeline",
                  "Can assist general physicians, cardiologists, and emergency departments",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="aspect-video bg-gray-100 rounded overflow-hidden mb-4">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">Model Visualization</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 w-full bg-medical-blue/20 rounded"></div>
                    <div className="h-8 w-full bg-medical-red/20 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-medical-blue/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
