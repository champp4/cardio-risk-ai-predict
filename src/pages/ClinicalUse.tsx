
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ClinicalUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-10 bg-gradient-to-b from-white to-medical-lightgray">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-medical-gray">
                Clinical Use & Credibility
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed max-w-[700px] mx-auto">
                Learn how CardioPredict AI can be integrated into clinical workflows.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-medical-blue">
                Built for Medical Use
              </h2>
              <p className="mt-2 text-gray-500 max-w-[700px] mx-auto">
                CardioPredict AI is designed to assist healthcare professionals in making informed decisions.
              </p>
            </div>
            
            <Tabs defaultValue="physicians">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="physicians">General Physicians</TabsTrigger>
                <TabsTrigger value="cardiologists">Cardiologists</TabsTrigger>
                <TabsTrigger value="emergency">Emergency Depts</TabsTrigger>
              </TabsList>
              <TabsContent value="physicians" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">For General Physicians</h3>
                    <p className="text-gray-500 mb-4">
                      CardioPredict AI serves as an invaluable screening tool during routine check-ups:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Quick risk assessment during patient consultations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Objective data to support referrals to specialists</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Early identification of high-risk patients who may be asymptomatic</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Supporting evidence for lifestyle modification recommendations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="cardiologists" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">For Cardiologists</h3>
                    <p className="text-gray-500 mb-4">
                      Specialist cardiologists can utilize CardioPredict AI to enhance their diagnostic workflow:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Quantitative risk assessment to complement clinical judgment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Prioritization of cases based on algorithmic risk stratification</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Integration with existing cardiac diagnostic workflows</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Documentation support for treatment decisions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="emergency" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">For Emergency Departments</h3>
                    <p className="text-gray-500 mb-4">
                      In emergency settings, CardioPredict AI can assist in rapid decision-making:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Quick triage support for patients presenting with cardiac symptoms</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Identification of high-risk patients who may require immediate intervention</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Resource allocation optimization based on risk stratification</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-0.5 h-5 w-5 rounded-full bg-medical-blue/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-medical-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">Decision support for admission vs. discharge determinations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 bg-medical-lightgray rounded-lg p-6 shadow-sm">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-medical-blue">Data Credibility</h3>
                  <p className="text-gray-500 mb-6">
                    CardioPredict AI is built on reliable medical data sources and validated algorithms:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h4 className="font-medium mb-2">UCI Heart Disease Dataset</h4>
                      <p className="text-sm text-gray-500">
                        Our model is trained on the widely recognized UCI Heart Disease dataset, containing real patient data from clinical settings.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h4 className="font-medium mb-2">Model Validation</h4>
                      <p className="text-sm text-gray-500">
                        Our algorithms have been validated using rigorous cross-validation techniques and benchmarked against clinical standards.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-medical-blue">Clinical Integration</h3>
                  <p className="text-gray-500 mb-6">
                    CardioPredict AI is designed to integrate seamlessly into clinical workflows:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h4 className="font-medium mb-2">API Integration</h4>
                      <p className="text-sm text-gray-500">
                        Our secure API allows for integration with hospital information systems and electronic health records.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                      <h4 className="font-medium mb-2">Exportable Reports</h4>
                      <p className="text-sm text-gray-500">
                        Risk assessment results can be exported in standardized formats for inclusion in patient records.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClinicalUse;
