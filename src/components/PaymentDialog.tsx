
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, CreditCard, Globe, IndianRupee, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

const PaymentDialog = ({ open, onOpenChange, onSuccess }: PaymentDialogProps) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [planType, setPlanType] = useState("monthly");
  
  const plans = {
    monthly: {
      price: 1500,
      discountedPrice: 1500,
      sessions: 4,
      term: "monthly",
      savings: "0%"
    },
    quarterly: {
      price: 3000,
      discountedPrice: 2700,
      sessions: 12,
      term: "quarterly",
      savings: "10%"
    },
    annual: {
      price: 12000,
      discountedPrice: 9000,
      sessions: 48,
      term: "annual",
      savings: "25%"
    }
  };
  
  const selectedPlan = plans[planType];
  
  const handlePayment = () => {
    toast({
      title: "Payment Successful",
      description: `Your ${planType} plan has been activated successfully!`,
    });
    if (onSuccess) onSuccess();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Complete Your Subscription</DialogTitle>
          <DialogDescription>
            Choose your preferred payment plan and method
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div>
            <h3 className="text-sm font-medium mb-2">Select Your Plan</h3>
            <Tabs defaultValue={planType} onValueChange={setPlanType} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                <TabsTrigger value="annual">Annual</TabsTrigger>
              </TabsList>
              
              <TabsContent value={planType} className="mt-0">
                <Card className="p-4 border-2 border-primary">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-medium">{planType.charAt(0).toUpperCase() + planType.slice(1)} Plan</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {selectedPlan.sessions} mentor sessions
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4" />
                        <span className="text-2xl font-bold">{selectedPlan.discountedPrice}</span>
                        <span className="text-sm text-gray-500 ml-1">/{selectedPlan.term}</span>
                      </div>
                      {selectedPlan.discountedPrice !== selectedPlan.price && (
                        <div className="flex items-center text-sm">
                          <span className="line-through text-gray-500 mr-2">₹{selectedPlan.price}</span>
                          <span className="text-green-600 dark:text-green-500">Save {selectedPlan.savings}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5" />
                      <span>Access to all certified mentors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5" />
                      <span>Unlimited messaging with your mentors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5" />
                      <span>Interactive 1-on-1 video sessions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500 mt-0.5" />
                      <span>Personalized career guidance and resources</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-sm font-medium mb-4">Payment Method</h3>
            <RadioGroup defaultValue={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex flex-col space-y-4">
                <div className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === "card" ? "border-primary bg-primary/5" : ""}`}>
                  <RadioGroupItem value="card" id="card" className="sr-only" />
                  <Label htmlFor="card" className="flex items-center cursor-pointer">
                    <CreditCard className="mr-3 h-5 w-5" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </Label>
                  
                  {paymentMethod === "card" && (
                    <div className="mt-4 space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="John Doe" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" type="password" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === "upi" ? "border-primary bg-primary/5" : ""}`}>
                  <RadioGroupItem value="upi" id="upi" className="sr-only" />
                  <Label htmlFor="upi" className="flex items-center cursor-pointer">
                    <Globe className="mr-3 h-5 w-5" />
                    <span className="font-medium">UPI</span>
                  </Label>
                  
                  {paymentMethod === "upi" && (
                    <div className="mt-4 space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input id="upiId" placeholder="yourname@upi" />
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Info className="mr-2 h-4 w-4" />
                        <span>You will receive a payment request on your UPI app</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
            <div className="flex justify-between items-center">
              <span>Plan Subtotal</span>
              <span>₹{selectedPlan.price}</span>
            </div>
            {selectedPlan.discountedPrice !== selectedPlan.price && (
              <div className="flex justify-between items-center text-green-600 dark:text-green-500">
                <span>Discount ({selectedPlan.savings})</span>
                <span>-₹{selectedPlan.price - selectedPlan.discountedPrice}</span>
              </div>
            )}
            <Separator className="my-2" />
            <div className="flex justify-between items-center font-medium">
              <span>Total Amount</span>
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4 mr-1" />
                <span>{selectedPlan.discountedPrice}</span>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 text-center w-full">
            By proceeding, you agree to our Terms of Service and Privacy Policy
          </div>
          <div className="flex justify-end gap-2 w-full">
            <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button onClick={handlePayment}>Complete Payment</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
