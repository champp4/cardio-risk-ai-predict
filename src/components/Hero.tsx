
import React from 'react';
import { Button } from '@/components/ui/button';
import HeartbeatLine from '@/components/HeartbeatLine';
import { Link } from 'react-router-dom';
import { Brain, FlaskRound } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-medical-lightgray">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-medical-blue/10 px-3 py-1 text-sm text-medical-blue">
              <div className="flex items-center gap-1">
                <Brain className="w-4 h-4" />
                <span>Medical AI Technology</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-medical-gray">
              Instant Cardiac Arrest Risk Evaluation
              <span className="block text-medical-blue"> — Powered by Medical AI</span>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Submit just 7 clinical indicators and receive an evidence-based prediction. Trusted by healthcare professionals.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-medical-blue hover:bg-medical-blue/90 text-white">
                <Link to="/risk-tool">
                  <FlaskRound className="mr-2 h-4 w-4" />
                  Start Risk Assessment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[600px] relative lg:order-last">
            <div className="rounded-xl bg-white p-4 shadow-lg border border-gray-100 relative z-10">
              <HeartbeatLine className="mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-3/4 rounded bg-gray-100"></div>
                <div className="h-8 w-full rounded bg-medical-blue/10 flex items-center px-3">
                  <div className="h-4 w-1/3 rounded bg-medical-blue"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 rounded bg-gray-100"></div>
                  <div className="h-12 rounded bg-gray-100"></div>
                </div>
                <div className="h-4 w-1/2 rounded bg-gray-100"></div>
                <div className="h-10 w-1/4 rounded bg-medical-red/80 ml-auto"></div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 -z-10 h-full w-full rounded-xl bg-medical-blue/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
