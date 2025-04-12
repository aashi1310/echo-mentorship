
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CreditCard, Globe, Info } from "lucide-react";

interface PaymentMethodSelectionProps {
  paymentMethod: string;
  onPaymentMethodChange: (method: string) => void;
}

const PaymentMethodSelection = ({ 
  paymentMethod,
  onPaymentMethodChange
}: PaymentMethodSelectionProps) => {
  return (
    <div>
      <h3 className="text-sm font-medium mb-4">Payment Method</h3>
      <RadioGroup defaultValue={paymentMethod} onValueChange={onPaymentMethodChange}>
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
  );
};

export default PaymentMethodSelection;
