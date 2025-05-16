
import React from 'react';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-10 bg-gradient-to-b from-white to-medical-lightgray">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-medical-gray">
                How CardioPredict Works
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed max-w-[700px] mx-auto">
                Learn about the technology behind our cardiac risk prediction system.
              </p>
            </div>
          </div>
        </div>
        
        <HowItWorks />
        
        <section className="py-12 md:py-24 bg-medical-lightgray">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-medical-blue">Technical Specifications</h3>
                  <p className="text-gray-500 mb-4">
                    Our model utilizes a combination of machine learning algorithms to achieve high accuracy in prediction:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc text-gray-500">
                    <li>K-Means Clustering for patient segmentation</li>
                    <li>KNN (K-Nearest Neighbors) for classification</li>
                    <li>AdaBoost for ensemble learning</li>
                    <li>Logistic Regression for probabilistic outputs</li>
                    <li>Stacking model for final predictions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-medical-blue">Data Processing</h3>
                  <p className="text-gray-500 mb-4">
                    When you submit your clinical data, our system:
                  </p>
                  <ol className="space-y-2 ml-6 list-decimal text-gray-500">
                    <li>Validates and cleans the input data</li>
                    <li>Applies missing value imputation if necessary</li>
                    <li>Normalizes features using standard scaling</li>
                    <li>Determines your patient segment using clustering</li>
                    <li>Runs the stacked prediction model</li>
                    <li>Generates a confidence score and interpretation</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
