
import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Clock, StarIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PaymentDialogProps {
  mentorName: string;
  trigger?: React.ReactNode;
}

const PaymentDialog = ({ mentorName, trigger }: PaymentDialogProps) => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      toast({
        title: "Payment Successful!",
        description: `You are now subscribed to the ${selectedPlan === "monthly" ? "Monthly" : selectedPlan === "quarterly" ? "Quarterly" : "Annual"} plan.`,
      });
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button>Continue with Paid Mentorship</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Choose Your Mentorship Plan</DialogTitle>
          <DialogDescription>
            Continue your mentorship journey with {mentorName} by selecting one of our plans.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <RadioGroup 
            value={selectedPlan} 
            onValueChange={setSelectedPlan}
            className="gap-4"
          >
            <div className={`border-2 rounded-lg p-4 ${selectedPlan === "monthly" ? "border-primary" : "border-border"}`}>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="monthly" id="monthly" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="monthly" className="font-medium text-lg">Monthly Plan</Label>
                    <Badge>Popular</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">4 mentoring sessions per month</p>
                  <div className="mt-3">
                    <span className="text-2xl font-bold">₹5,999</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">4 One-on-one sessions (45 mins each)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Chat support between sessions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Personalized roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className={`border-2 rounded-lg p-4 ${selectedPlan === "quarterly" ? "border-primary" : "border-border"}`}>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="quarterly" id="quarterly" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="quarterly" className="font-medium text-lg">Quarterly Plan</Label>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800">Save 10%</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">12 mentoring sessions over 3 months</p>
                  <div className="mt-3">
                    <span className="text-2xl font-bold">₹16,199</span>
                    <span className="text-muted-foreground">/quarter</span>
                    <span className="text-xs ml-2 line-through text-muted-foreground">₹17,997</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">All Monthly plan benefits</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Priority scheduling</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Document & resume reviews</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className={`border-2 rounded-lg p-4 ${selectedPlan === "annual" ? "border-primary" : "border-border"}`}>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="annual" id="annual" className="mt-1" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="annual" className="font-medium text-lg">Annual Plan</Label>
                    <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-800">Best Value!</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">48 mentoring sessions over 12 months</p>
                  <div className="mt-3">
                    <span className="text-2xl font-bold">₹57,599</span>
                    <span className="text-muted-foreground">/year</span>
                    <span className="text-xs ml-2 line-through text-muted-foreground">₹71,988</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">All Quarterly plan benefits</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Mock interviews & feedback</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Access to exclusive workshops</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </RadioGroup>
          
          <div className="mt-8">
            <h4 className="font-medium mb-2">Payment Method</h4>
            <div className="flex items-center space-x-2 border p-3 rounded-md">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              <span>Credit/Debit Card</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              You'll be redirected to our secure payment gateway to enter your card details.
            </p>
          </div>
        </div>
        
        <DialogFooter>
          <Button 
            onClick={handlePayment} 
            className="w-full" 
            disabled={processing}
          >
            {processing ? (
              <>
                <Clock className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              `Pay Now • ₹${selectedPlan === "monthly" ? "5,999" : selectedPlan === "quarterly" ? "16,199" : "57,599"}`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
