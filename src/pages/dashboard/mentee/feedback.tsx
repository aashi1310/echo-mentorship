import React, { useState } from 'react';
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Star } from "lucide-react";
import FeedbackForm from "@/components/feedback/feedback";

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
    date: "Apr 5, 2024",
    topic: "Resume Review",
    image: "/mentors/divyanshi-agarwal.svg",
    hasFeedback: false
  },
  {
    id: 2,
    mentor: "Priyank Mishra",
    date: "Mar 28, 2024",
    topic: "Career Planning",
    image: "/mentors/priyank-mishra.svg",
    hasFeedback: true
  }
];

const MenteeFeedback = () => {
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const handleFeedbackSubmit = (feedback: any) => {
    console.log('Feedback submitted:', feedback);
    // Here you would typically send this to your backend
    setSelectedSession(null);
  };

  const pendingSessions = pastSessions.filter(session => !session.hasFeedback);
  const completedSessions = pastSessions.filter(session => session.hasFeedback);

  return (
    <DashboardLayout userType="mentee">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Session Feedback</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Share your thoughts about your mentorship sessions
          </p>
        </div>

        <Tabs defaultValue="pending" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="pending">
              Pending Feedback
              {pendingSessions.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {pendingSessions.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="completed">Completed Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            {selectedSession ? (
              <FeedbackForm
                mentorName={selectedSession.mentor}
                sessionDate={selectedSession.date}
                onSubmit={handleFeedbackSubmit}
              />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Sessions Awaiting Feedback</CardTitle>
                  <CardDescription>Select a session to provide feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {pendingSessions.map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between border-b pb-6 last:border-0 last:pb-0 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
                        onClick={() => setSelectedSession(session)}
                      >
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={session.image} alt={session.mentor} />
                            <AvatarFallback>
                              {session.mentor.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{session.mentor}</h4>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span>{session.date}</span>
                            </div>
                            <Badge variant="outline" className="mt-2">
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
            <Card>
              <CardHeader>
                <CardTitle>Completed Feedback</CardTitle>
                <CardDescription>Previous session feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {completedSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between border-b pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={session.image} alt={session.mentor} />
                          <AvatarFallback>
                            {session.mentor.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{session.mentor}</h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
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

export default feedback;