import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Brain } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formatFormValuesToApiInput, getPrediction } from '@/services/predictionService';
import config from '@/config';

const formSchema = z.object({
  cp: z.string(),
  thalach: z.number().min(50).max(250),
  exang: z.string(),
  oldpeak: z.number().min(0).max(10),
  slope: z.string(),
  ca: z.string(),
  thal: z.string()
});

type FormValues = z.infer<typeof formSchema>;

const RiskAssessmentForm = () => {
  const { toast } = useToast();
  const [result, setResult] = useState<null | { prediction: number; confidence: number }>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("assessment");
  const [apiError, setApiError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cp: '1',
      thalach: 150,
      exang: '0',
      oldpeak: 0,
      slope: '1',
      ca: '0',
      thal: '3'
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setApiError(null);
    
    try {
      console.log('Form submitted with values:', data);
      
      // Format form values for API
      const features = formatFormValuesToApiInput(data);
      console.log('Formatted features for API:', features);
      
      // Call the API
      const predictionResult = await getPrediction(features);
      
      // Calculate confidence from probability
      const confidence = predictionResult.prediction === 1 
        ? predictionResult.probability[1] * 100 
        : predictionResult.probability[0] * 100;
      
      setResult({
        prediction: predictionResult.prediction,
        confidence: Math.round(confidence * 10) / 10
      });
      
      // Switch to results tab
      setActiveTab("results");
      
      toast({
        title: "Risk assessment complete",
        description: "Your cardiac risk assessment has been processed.",
      });
    } catch (err) {
      console.error("Error processing risk assessment:", err);
      let errorMessage = "Failed to connect to prediction server. Please try again.";
      
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setApiError(errorMessage);
      
      toast({
        title: "Processing error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-24 bg-medical-lightgray">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-medical-gray">Cardiac Risk Assessment Tool</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Submit your clinical indicators below to receive a risk evaluation
          </p>
        </div>
        
        <div className="mx-auto max-w-[800px]">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            <TabsContent value="assessment">
              <Card>
                <CardHeader>
                  <CardTitle>Enter Clinical Parameters</CardTitle>
                  <CardDescription>
                    Fill in all seven clinical indicators to receive your risk assessment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="cp"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Chest Pain Type (cp) 🔍</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select chest pain type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">0 - Typical Angina</SelectItem>
                                  <SelectItem value="2">1 - Atypical Angina</SelectItem>
                                  <SelectItem value="3">2 - Non-anginal Pain</SelectItem>
                                  <SelectItem value="4">3 - Asymptomatic</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                Type of chest pain experienced
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="thalach"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Maximum Heart Rate (thalach) 💓</FormLabel>
                              <FormControl>
                                <div className="flex items-center gap-2">
                                  <Input
                                    type="number"
                                    min={50}
                                    max={250}
                                    {...field}
                                    onChange={e => field.onChange(parseInt(e.target.value))}
                                  />
                                  <span className="text-sm text-gray-500">bpm</span>
                                </div>
                              </FormControl>
                              <FormDescription>
                                Maximum heart rate achieved (50-250 bpm)
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="exang"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Exercise Induced Angina (exang) 🏃‍♂️</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0">0 - No</SelectItem>
                                  <SelectItem value="1">1 - Yes</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                Exercise induced angina
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="oldpeak"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ST Depression (oldpeak) 📉: {field.value.toFixed(1)}</FormLabel>
                              <FormControl>
                                <Slider
                                  value={[field.value]}
                                  min={0}
                                  max={10}
                                  step={0.1}
                                  onValueChange={(vals) => field.onChange(vals[0])}
                                  className="py-4"
                                />
                              </FormControl>
                              <FormDescription>
                                ST depression induced by exercise relative to rest (0-10)
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="slope"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Slope of ST Segment (slope) 🩻</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select slope" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1">0 - Upsloping</SelectItem>
                                  <SelectItem value="2">1 - Flat</SelectItem>
                                  <SelectItem value="3">2 - Downsloping</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                The slope of the peak exercise ST segment
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="ca"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Major Vessels Colored (ca) 🩸</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select number" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0">0</SelectItem>
                                  <SelectItem value="1">1</SelectItem>
                                  <SelectItem value="2">2</SelectItem>
                                  <SelectItem value="3">3</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                Number of major vessels colored by flourosopy (0-3)
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="thal"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Thalassemia Type (thal) 🧬</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select thalassemia" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="3">1 - Normal</SelectItem>
                                  <SelectItem value="6">2 - Fixed Defect</SelectItem>
                                  <SelectItem value="7">3 - Reversible Defect</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                Thalassemia blood disorder type
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-medical-blue hover:bg-medical-blue/90 text-white"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <><span className="mr-2">Processing</span><span className="animate-pulse">...</span></>
                        ) : (
                          <><Brain className="mr-2 h-5 w-5" />Predict My Risk</>
                        )}
                      </Button>
                    </form>
                  </Form>
                  {apiError && (
                    <div className="mt-4 p-4 border border-medical-red/20 bg-medical-red/10 rounded-md">
                      <p className="text-medical-red font-medium">API Error: {apiError}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Make sure the Flask backend is running at {config.api.baseUrl}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="results">
              <Card>
                <CardHeader>
                  <CardTitle>Your Risk Assessment Results</CardTitle>
                  <CardDescription>
                    {result ? 'Review your personalized cardiac risk evaluation below.' : 'Please complete the assessment first to see results.'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!result ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No results to display yet. Please submit the assessment form.</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="rounded-lg border p-4 bg-gray-50">
                        <div className="text-center space-y-2 mb-4">
                          <h3 className="font-medium text-lg">Risk Level</h3>
                          <div className={`text-3xl font-bold ${result.prediction === 0 ? 'text-green-600' : 'text-medical-red'}`}>
                            {result.prediction === 0 ? 'Low Risk' : 'High Risk'}
                          </div>
                        </div>
                        
                        <div className="h-4 w-full rounded-full bg-gray-200 overflow-hidden">
                          <div 
                            className={`h-full ${result.prediction === 0 ? 'bg-green-500' : 'bg-medical-red'}`}
                            style={{ width: `${result.confidence}%` }}
                          ></div>
                        </div>
                        
                        <div className="mt-2 text-center text-sm text-gray-500">
                          Prediction Confidence: {result.confidence}%
                        </div>
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium mb-2">Interpretation</h3>
                        <p className="text-gray-700">
                          {result.prediction === 0
                            ? "Based on the provided clinical indicators, no urgent signs of cardiac risk were detected. Maintain regular check-ups with your healthcare provider."
                            : "Based on the provided clinical indicators, there may be an elevated risk of cardiac events. Immediate consultation with a healthcare professional is recommended."
                          }
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => form.reset()}>Reset</Button>
                  {result && (
                    <Button variant="secondary">
                      Download Report
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default RiskAssessmentForm;
