
import React from 'react';
import { Brain, ChevronRight, FileText, FileText2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-medical-gray">What Is CardioPredict?</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Advanced AI technology for cardiac health monitoring and risk assessment
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Card className="medical-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-medical-blue flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Clinical AI Model
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-500">
                CardioPredict is a machine learning-powered web application designed to assist doctors and patients in evaluating the likelihood of cardiac arrest using real-world medical data.
              </p>
              <div className="flex items-center text-sm text-medical-blue pt-2">
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="medical-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-medical-blue flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Algorithm Stack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-500">
                Built on a stack of clinical algorithms: K-Means Clustering, KNN, AdaBoost, and Logistic Regression. Outputs a risk score with high confidence to aid early intervention.
              </p>
              <div className="flex items-center text-sm text-medical-blue pt-2">
                <span>Technical Details</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 relative">
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
            <div className="bg-medical-blue/10 p-4">
              <h3 className="text-xl font-semibold text-medical-blue flex items-center">
                <FileText2 className="w-5 h-5 mr-2" />
                Model Pipeline Flow
              </h3>
            </div>
            <div className="bg-white p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-medical-blue/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-medical-blue font-bold">1</span>
                  </div>
                  <h4 className="font-medium">Input</h4>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-medical-blue/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-medical-blue font-bold">2</span>
                  </div>
                  <h4 className="font-medium">Preprocessing</h4>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-medical-blue/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-medical-blue font-bold">3</span>
                  </div>
                  <h4 className="font-medium">Clustering</h4>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-medical-blue/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-medical-blue font-bold">4</span>
                  </div>
                  <h4 className="font-medium">Stacking Prediction</h4>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-medical-blue/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-medical-blue font-bold">5</span>
                  </div>
                  <h4 className="font-medium">Output</h4>
                </div>
              </div>
              <div className="mt-6 h-1 bg-medical-blue/20 relative">
                <div className="absolute top-0 left-0 h-1 bg-medical-blue animate-pulse" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
