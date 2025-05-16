
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-10 bg-gradient-to-b from-white to-medical-lightgray">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-medical-gray">
                About CardioPredict AI
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed max-w-[700px] mx-auto">
                Our mission, team, and the technology behind our cardiac risk prediction platform.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4 text-medical-gray">Our Mission</h2>
                <p className="text-gray-500 mb-4">
                  At CardioPredict AI, we are committed to leveraging cutting-edge artificial intelligence technology to improve cardiovascular health outcomes worldwide. Our mission is to provide accessible, accurate, and actionable cardiac risk assessments that empower both healthcare professionals and patients.
                </p>
                <p className="text-gray-500">
                  By combining medical expertise with advanced machine learning algorithms, we aim to identify those at risk of cardiac events before they occur, potentially saving countless lives through early intervention and prevention.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-video bg-medical-blue/10 flex items-center justify-center">
                    <div className="text-medical-blue text-4xl font-bold">CardioPredict AI</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-medical-blue/20 rounded-full -z-10"></div>
              </div>
            </div>
            
            <div className="mt-20">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center text-medical-gray">Our Team</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    name: "Dr. Sarah Chen",
                    role: "Chief Medical Officer",
                    bio: "Cardiologist with 15+ years of clinical experience and a specialist in cardiac risk assessment."
                  },
                  {
                    name: "Rahul Sharma",
                    role: "Chief Technology Officer",
                    bio: "ML specialist with a background in healthcare AI and experience at leading medical technology companies."
                  },
                  {
                    name: "Dr. Michael Johnson",
                    role: "Research Director",
                    bio: "Leading researcher in cardiovascular disease prediction with numerous publications in top medical journals."
                  }
                ].map((member, index) => (
                  <div key={index} className="rounded-lg p-6 border shadow-sm bg-white">
                    <div className="h-32 w-32 rounded-full bg-medical-blue/10 mx-auto mb-4 flex items-center justify-center">
                      <div className="text-medical-blue text-xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-medical-blue font-medium text-sm mb-2">{member.role}</p>
                      <p className="text-gray-500 text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-20">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center text-medical-gray">Our Technology</h2>
              <div className="bg-medical-lightgray rounded-lg p-6 md:p-8 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-medical-blue">Data Sources</h3>
                    <p className="text-gray-500">
                      Our AI models are trained on the comprehensive UCI Heart Disease dataset, which includes anonymized patient data from multiple hospitals. This dataset has been extensively used in medical research and provides a robust foundation for our predictive algorithms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-medical-blue">Machine Learning Pipeline</h3>
                    <p className="text-gray-500">
                      CardioPredict employs a sophisticated machine learning pipeline featuring data preprocessing, feature scaling, clustering for patient segmentation, and a stacking ensemble of classifiers (including KNN, AdaBoost, and Logistic Regression) to achieve high accuracy in risk prediction.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-medical-blue">Continuous Improvement</h3>
                    <p className="text-gray-500">
                      Our system is constantly evolving through continuous training on new data and regular validation against clinical outcomes. This ensures that our predictions remain accurate and relevant to current medical standards.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-medical-blue">Privacy & Security</h3>
                    <p className="text-gray-500">
                      We prioritize data privacy and security in all aspects of our platform. All patient data is encrypted and processed in compliance with healthcare data protection regulations. Our system is designed to provide predictions without storing sensitive personal information.
                    </p>
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

export default About;
