
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, CreditCard } from "lucide-react";

interface PaymentDialogProps {
  trigger: React.ReactNode;
  mentorName: string;
}

const PaymentDialog = ({ trigger, mentorName }: PaymentDialogProps) => {
  const [open, setOpen] = useState(false);
  const [plan, setPlan] = useState("monthly");

  const handleSubmit = () => {
    toast({
      title: "Payment Successful",
      description: `You've subscribed to mentoring with ${mentorName}.`,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Continue Mentorship with {mentorName}</DialogTitle>
          <DialogDescription>
            Select a mentorship plan to continue after your free trial
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex items-center gap-4 border-b pb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg" alt={mentorName} />
              <AvatarFallback>{mentorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{mentorName}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Senior Product Manager at TechCorp
              </p>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <RadioGroup value={plan} onValueChange={setPlan}>
            <div className="space-y-4">
              <div className={`border rounded-lg p-4 cursor-pointer ${plan === "monthly" ? "border-primary bg-primary/5" : ""}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="font-medium cursor-pointer">Monthly Plan</Label>
                  </div>
                  {plan === "monthly" && <Check className="h-5 w-5 text-primary" />}
                </div>
                <div className="pl-6 mt-2">
                  <div className="text-2xl font-bold">₹1,999<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/month</span></div>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                      2 mentoring sessions per month
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                      Direct messaging with your mentor
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                      Access to resources shared by mentor
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`border rounded-lg p-4 cursor-pointer ${plan === "quarterly" ? "border-primary bg-primary/5" : ""}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="quarterly" id="quarterly" />
                    <div>
                      <Label htmlFor="quarterly" className="font-medium cursor-pointer">Quarterly Plan</Label>
                      <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                        Save 15%
                      </span>
                    </div>
                  </div>
                  {plan === "quarterly" && <Check className="h-5 w-5 text-primary" />}
                </div>
                <div className="pl-6 mt-2">
                  <div className="text-2xl font-bold">₹1,699<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/month</span></div>
                  <ul className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                      2 mentoring sessions per month
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                      Direct messaging with your mentor
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                      Access to resources shared by mentor
                    </li>
                    <li className="flex items-center">
                      <Check className="h-3.5 w-3.5 text-green-500 mr-1.5" />
                      Quarterly progress review
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button className="gap-2" onClick={handleSubmit}>
            <CreditCard className="h-4 w-4" />
            Subscribe Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
