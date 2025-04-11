
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { CalendarIcon, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to sessions page
    navigate("/mentee/sessions");
    
    // Reset and close
    setStep(1);
    setOpen(false);
    
    // Show success message
    toast({
      title: "Session booked successfully!",
      description: `Your session with ${mentorName} has been scheduled for ${date ? format(date, 'PPP') : ''} at ${time}.`,
    });
  };

  const generateGoogleMeetLink = () => {
    // Generate a valid Google Meet link with correct 10-character format
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    // First character must be a letter
    let code = letters.charAt(Math.floor(Math.random() * letters.length));
    
    // Next 9 characters can be alphanumeric
    for (let i = 0; i < 9; i++) {
      code += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
    }
    
    return `https://meet.google.com/${code}`;
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
    
    setStep(2);
    const meetLink = generateGoogleMeetLink();
    
    // Create session data
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
    
    // Call the callback with the session data
    if (onSessionCreated) {
      onSessionCreated(sessionData);
    }
    
    // In a real app, you would save this to your database
    console.log("Session created:", sessionData);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button>Book Free Trial</Button>}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px]">
        {step === 1 ? (
          <>
            <DialogHeader>
              <DialogTitle>Book a Free Trial Session</DialogTitle>
              <DialogDescription>
                Schedule a free trial session with {mentorName}.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={(e) => { e.preventDefault(); handleComplete(); }} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="date">Select Date</Label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    type="button"
                    className={`w-full justify-start text-left font-normal ${!date ? 'text-muted-foreground' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('calendar-wrapper')?.classList.toggle('hidden');
                    }}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </div>
                <div id="calendar-wrapper" className="hidden mt-2 bg-background border rounded-md shadow-md p-2">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => {
                      setDate(newDate);
                      document.getElementById('calendar-wrapper')?.classList.add('hidden');
                    }}
                    disabled={(date) => date < new Date()}
                    className="p-3 pointer-events-auto"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Select Time</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration">Session Duration</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">60 minutes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="topic">What would you like to discuss?</Label>
                <Textarea 
                  id="topic" 
                  placeholder="Briefly describe what you'd like to discuss in this session" 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  rows={4}
                />
              </div>
              
              <DialogFooter>
                <Button type="submit" className="w-full">Schedule Free Session</Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Session Confirmed!</DialogTitle>
              <DialogDescription>
                Your free trial session has been scheduled.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">Session Details</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {date ? format(date, 'PPP') : ''} at {time} ({duration} min)
                    </p>
                  </div>
                  <Video className="h-5 w-5 text-primary" />
                </div>
                
                <div>
                  <h5 className="text-sm font-medium">Topic</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{topic}</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium">Google Meet Link</h5>
                  <a href={generateGoogleMeetLink()} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    {generateGoogleMeetLink()}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    This link will be emailed to you and will be available in your dashboard.
                  </p>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button onClick={handleSubmit}>Done</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
