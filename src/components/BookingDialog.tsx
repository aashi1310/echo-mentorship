
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import PaymentDialog from "./PaymentDialog";
import BookingForm from "./booking/BookingForm";
import ConfirmationView from "./booking/ConfirmationView";
import { generateGoogleMeetLink } from "@/utils/meetingUtils";

interface BookingDialogProps {
  mentorName: string;
  trigger?: React.ReactNode;
  onSessionCreated?: (sessionData: any) => void;
}

const BookingDialog = ({ mentorName, trigger, onSessionCreated }: BookingDialogProps) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("30");
  const [topic, setTopic] = useState("");
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  const [isFreeSession, setIsFreeSession] = useState(true);

  useEffect(() => {
    if (user && user.sessionsBooked && user.sessionsBooked > 0) {
      setIsFreeSession(false);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    navigate("/mentee/sessions");
    
    setStep(1);
    setOpen(false);
    
    toast({
      title: "Session booked successfully!",
      description: `Your session with ${mentorName} has been scheduled for ${date ? format(date, 'PPP') : ''} at ${time}.`,
    });
  };

  const handleComplete = () => {
    if (!date || !time || !topic) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!isFreeSession) {
      setShowPayment(true);
      return;
    }
    
    proceedWithBooking();
  };
  
  const proceedWithBooking = () => {
    setStep(2);
    const meetLink = generateGoogleMeetLink();
    
    const sessionData = {
      id: Date.now().toString(),
      mentorName: mentorName,
      date: date ? format(date, 'PPP') : '',
      time: time,
      topic: topic,
      duration: `${duration} minutes`,
      meetLink: meetLink,
      status: "upcoming",
      createdAt: new Date().toISOString()
    };
    
    if (onSessionCreated) {
      onSessionCreated(sessionData);
    }
    
    console.log("Session created:", sessionData);
  };
  
  const handlePaymentSuccess = () => {
    setShowPayment(false);
    proceedWithBooking();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger || <Button>Book {isFreeSession ? 'Free Trial' : 'Session'}</Button>}
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[500px]">
          {step === 1 ? (
            <>
              <DialogHeader>
                <DialogTitle>Book a {isFreeSession ? 'Free Trial' : ''} Session</DialogTitle>
                <DialogDescription>
                  Schedule a {isFreeSession ? 'free trial' : ''} session with {mentorName}.
                </DialogDescription>
              </DialogHeader>
              
              <BookingForm 
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                duration={duration}
                setDuration={setDuration}
                topic={topic}
                setTopic={setTopic}
                onComplete={handleComplete}
                isFreeSession={isFreeSession}
              />
            </>
          ) : (
            <ConfirmationView
              date={date}
              time={time}
              duration={duration}
              topic={topic}
              isFreeSession={isFreeSession}
              onSubmit={handleSubmit}
            />
          )}
        </DialogContent>
      </Dialog>
      
      <PaymentDialog 
        open={showPayment} 
        onOpenChange={setShowPayment} 
        onSuccess={handlePaymentSuccess}
      />
    </>
  );
};

export default BookingDialog;
