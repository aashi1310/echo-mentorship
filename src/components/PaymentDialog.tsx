
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { PlanType } from "@/utils/planUtils";

// Import our newly created components
import PlanSelection from "./payment/PlanSelection";
import PaymentMethodSelection from "./payment/PaymentMethodSelection";
import PaymentSummary from "./payment/PaymentSummary";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

const PaymentDialog = ({ open, onOpenChange, onSuccess }: PaymentDialogProps) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [planType, setPlanType] = useState<PlanType>("monthly");
  
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
          <PlanSelection 
            planType={planType}
            onPlanChange={setPlanType}
          />
          
          <Separator />
          
          <PaymentMethodSelection 
            paymentMethod={paymentMethod}
            onPaymentMethodChange={setPaymentMethod}
          />
          
          <PaymentSummary planType={planType} />
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
