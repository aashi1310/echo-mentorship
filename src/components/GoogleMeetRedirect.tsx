
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Video, ExternalLink, Clock, User, Users } from "lucide-react";

const GoogleMeetRedirect = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  const { sessionId } = useParams();
  
  // In a real app, you would fetch the session details from your backend
  const sessionDetails = {
    id: sessionId || "123456",
    meetLink: "https://meet.google.com/abc-defg-hij",
    mentorName: "Rajat Kumar",
    menteeName: "Ankit Sharma",
    topic: "Career Transition to Product Management",
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    duration: "45 minutes",
  };
  
  useEffect(() => {
    let timer: number;
    
    // Countdown timer for auto-redirect
    if (countdown > 0) {
      timer = window.setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      // Once countdown reaches 0, redirect to Google Meet
      window.location.href = sessionDetails.meetLink;
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown, sessionDetails.meetLink]);
  
  const handleManualRedirect = () => {
    window.location.href = sessionDetails.meetLink;
  };
  
  const handleCancel = () => {
    toast({
      title: "Redirection cancelled",
      description: "You can still join the meeting from your dashboard.",
    });
    
    // Navigate back to dashboard
    navigate("/mentee/sessions");
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Joining Google Meet</CardTitle>
          <CardDescription>
            You're being redirected to your mentoring session
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center">
                <Video className="h-5 w-5 mr-2 text-primary" />
                Mentoring Session
              </h3>
              <div className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                Live in <span className="font-bold">{countdown}s</span>
              </div>
            </div>
            
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Date & Time</p>
                  <p className="text-sm text-muted-foreground">
                    {sessionDetails.date} • {sessionDetails.time} • {sessionDetails.duration}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <User className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Mentor</p>
                  <p className="text-sm text-muted-foreground">{sessionDetails.mentorName}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Mentee</p>
                  <p className="text-sm text-muted-foreground">{sessionDetails.menteeName}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-medium mb-1">Meeting Link</h4>
            <a 
              href={sessionDetails.meetLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1 hover:underline"
            >
              {sessionDetails.meetLink}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </CardContent>
        
        <CardFooter className="flex-col space-y-2">
          <Button 
            onClick={handleManualRedirect} 
            className="w-full gap-2"
          >
            <Video className="h-4 w-4" />
            Join Now
          </Button>
          <Button 
            variant="outline" 
            onClick={handleCancel}
            className="w-full"
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GoogleMeetRedirect;
