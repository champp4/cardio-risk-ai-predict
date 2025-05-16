
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

  const onSubmit = (data: FormValues) => {
    // Simulate API call 
    setTimeout(() => {
      // Mock response from backend
      const mockPrediction = Math.random() > 0.5 ? 1 : 0; // 50% chance of high risk
      const mockConfidence = 70 + Math.random() * 25; // 70-95% confidence
      
      setResult({
        prediction: mockPrediction,
        confidence: Math.round(mockConfidence * 10) / 10
      });
      
      toast({
        title: "Risk assessment complete",
        description: "Your cardiac risk assessment has been processed.",
      });
    }, 1500);
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
          <Tabs defaultValue="assessment" className="w-full">
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
                                  <SelectItem value="1">1 - Typical Angina</SelectItem>
                                  <SelectItem value="2">2 - Atypical Angina</SelectItem>
                                  <SelectItem value="3">3 - Non-anginal Pain</SelectItem>
                                  <SelectItem value="4">4 - Asymptomatic</SelectItem>
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
                                  <SelectItem value="1">1 - Upsloping</SelectItem>
                                  <SelectItem value="2">2 - Flat</SelectItem>
                                  <SelectItem value="3">3 - Downsloping</SelectItem>
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
                                  <SelectItem value="3">3 - Normal</SelectItem>
                                  <SelectItem value="6">6 - Fixed Defect</SelectItem>
                                  <SelectItem value="7">7 - Reversible Defect</SelectItem>
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
                      >
                        <Brain className="mr-2 h-5 w-5" />
                        Predict My Risk
                      </Button>
                    </form>
                  </Form>
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
