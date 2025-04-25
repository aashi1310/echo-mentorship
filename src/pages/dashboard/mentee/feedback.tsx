import React, { useState } from 'react';
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Session {
  id: number;
  mentor: string;
  date: string;
  topic: string;
  image: string;
  hasFeedback: boolean;
}

const pastSessions: Session[] = [
  {
    id: 1,
    mentor: "Divyanshi Agarwal",
    date: "Apr 25, 2025",
    topic: "Career Planning",
    image: "/mentors/divyanshi-agarwal.svg",
    hasFeedback: false
  },
  {
    id: 2,
    mentor: "Priyank Mishra",
    date: "Mar 28, 2025",
    topic: "Resume Review",
    image: "/mentors/priyank-mishra.svg",
    hasFeedback: true
  }
];

interface FeedbackFormProps {
  mentorName: string;
  sessionDate: string;
  onClose: () => void;
  onSubmit: (feedback: { rating: number; comments: string }) => void;
}

const FeedbackForm = ({ mentorName, sessionDate, onSubmit }: FeedbackFormProps) => {
  const [rating, setRating] = useState<number>(0);
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    onSubmit({ rating, comments });
  };

  return (
    <Card className="bg-[#0F1729] border-gray-800">
      <CardHeader>
        <CardTitle>Session Feedback</CardTitle>
        <CardDescription>
          Share your experience with {mentorName} from your session on {sessionDate}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="text-sm font-medium">Rating</div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className="hover:scale-110 transition-transform"
              >
                <Star
                  className={`h-6 w-6 ${
                    value <= rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-600"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Comments</div>
          <Textarea
            placeholder="Share your thoughts about the session..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="min-h-[100px] bg-[#1B2537] border-gray-800 resize-none"
          />
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        >
          Submit Feedback
        </Button>
      </CardContent>
    </Card>
  );
};

const Feedback = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [sessions, setSessions] = useState<Session[]>(pastSessions);

  const handleFeedbackSubmit = (feedback: { rating: number; comments: string }) => {
    console.log('Feedback submitted:', feedback);
    
    // Update the session's feedback status
    setSessions(prevSessions => 
      prevSessions.map(session => 
        session.id === selectedSession?.id 
          ? { ...session, hasFeedback: true }
          : session
      )
    );
    
    // Reset selected session and switch to completed tab
    setSelectedSession(null);
    setActiveTab("completed");
  };

  const pendingSessions = sessions.filter(session => !session.hasFeedback);
  const completedSessions = sessions.filter(session => session.hasFeedback);

  return (
    <DashboardLayout userType="mentee">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Session Feedback</h1>
          <p className="text-gray-400">
            Share your thoughts about your mentorship sessions
          </p>
        </div>

        <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 bg-[#1B2537]">
            <TabsTrigger 
              value="pending"
              className="data-[state=active]:bg-purple-600"
            >
              Pending Feedback
              {pendingSessions.length > 0 && (
                <Badge variant="secondary" className="ml-2 bg-purple-600">
                  {pendingSessions.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger 
              value="completed"
              className="data-[state=active]:bg-purple-600"
            >
              Completed Feedback
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            {selectedSession ? (
              <FeedbackForm
                mentorName={selectedSession.mentor}
                sessionDate={selectedSession.date}
                onSubmit={handleFeedbackSubmit}
                onClose={() => setSelectedSession(null)}
              />
            ) : (
              <Card className="bg-[#0F1729] border-gray-800">
                <CardHeader>
                  <CardTitle>Sessions Awaiting Feedback</CardTitle>
                  <CardDescription>Select a session to provide feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingSessions.map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between p-4 rounded-lg cursor-pointer hover:bg-[#1B2537] transition-colors border border-gray-800"
                        onClick={() => setSelectedSession(session)}
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12 border border-gray-800">
                            <AvatarImage src={session.image} alt={session.mentor} />
                            <AvatarFallback className="bg-[#1B2537]">
                              {session.mentor.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-gray-200">{session.mentor}</h4>
                            <div className="flex items-center text-sm text-gray-400">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span>{session.date}</span>
                            </div>
                            <Badge variant="outline" className="mt-2 border-gray-700">
                              {session.topic}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="completed">
            <Card className="bg-[#0F1729] border-gray-800">
              <CardHeader>
                <CardTitle>Completed Feedback</CardTitle>
                <CardDescription>Previous session feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-800"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border border-gray-800">
                          <AvatarImage src={session.image} alt={session.mentor} />
                          <AvatarFallback className="bg-[#1B2537]">
                            {session.mentor.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-gray-200">{session.mentor}</h4>
                          <div className="flex items-center text-sm text-gray-400">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center mt-2">
                            {[1, 2, 3, 4, 5].map((value) => (
                              <Star
                                key={value}
                                className="h-4 w-4 text-yellow-400 fill-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Feedback;