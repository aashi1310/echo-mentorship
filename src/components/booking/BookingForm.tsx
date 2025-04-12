
import React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import { DialogFooter } from "@/components/ui/dialog";

interface BookingFormProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  duration: string;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  onComplete: () => void;
  isFreeSession: boolean;
}

const BookingForm = ({
  date,
  setDate,
  time,
  setTime,
  duration,
  setDuration,
  topic,
  setTopic,
  onComplete,
  isFreeSession
}: BookingFormProps) => {
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
  ];

  return (
    <form onSubmit={(e) => { e.preventDefault(); onComplete(); }} className="space-y-4 py-4">
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
        <Button type="submit" className="w-full">
          Schedule {isFreeSession ? 'Free' : ''} Session
        </Button>
      </DialogFooter>
    </form>
  );
};

export default BookingForm;
