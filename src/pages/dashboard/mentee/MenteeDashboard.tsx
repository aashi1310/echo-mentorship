import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CalendarIcon, ArrowRight, Clock, Video, MessageSquare, AlertTriangle } from "lucide-react";
import PaymentDialog from "@/components/PaymentDialog";

const MenteeDashboard = () => {
  const freeTrialComplete = true; // This would be determined by your app's state
  
  return (
    <DashboardLayout userType="mentee">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Your mentorship journey at a glance
            </p>
          </div>
        </div>

        {freeTrialComplete && (
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 border-purple-200 dark:border-purple-900">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <CardTitle className="text-purple-800 dark:text-purple-300">Free Trial Complete</CardTitle>
              </div>
              <CardDescription className="text-purple-700 dark:text-purple-400">
                Your free trial session with Rajat Kumar has ended. Continue with a paid plan to keep growing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/36.jpg" alt="Rajat Kumar" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Rajat Kumar</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Senior Product Manager at TechCorp
                  </p>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`h-4 w-4 ${
                            index < 5
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      (42 reviews)
                    </span>
                  </div>
                </div>
                <PaymentDialog
                  mentorName="Rajat Kumar"
                  trigger={
                    <Button>
                      Continue Mentorship
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  }
                />
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your next mentoring sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://randomuser.me/api/portraits/men/36.jpg" alt="Rajat Kumar" />
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Rajat Kumar</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <CalendarIcon className="mr-1 h-3 w-3" />
                          <span>Today, 3:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="flex items-center gap-1">
                      <Video className="h-3 w-3" />
                      <span>Google Meet</span>
                    </Badge>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline">Product Strategy</Badge>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button size="sm" asChild>
                      <a href="/join-session/12345">
                        Join Now
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://randomuser.me/api/portraits/women/26.jpg" alt="Priya Sharma" />
                        <AvatarFallback>PS</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Priya Sharma</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <CalendarIcon className="mr-1 h-3 w-3" />
                          <span>Tomorrow, 4:30 PM</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      <span>Chat</span>
                    </Badge>
                  </div>
                  <div className="mt-2">
                    <Badge variant="outline">System Design</Badge>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Button size="sm" variant="outline">
                      Prepare
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/mentee/sessions">
                    View All Sessions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Goals Progress</CardTitle>
              <CardDescription>Track your professional development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-sm">Master System Design</h4>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-sm">Product Management Skills</h4>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-sm">Interview Preparation</h4>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/mentee/goals">
                    View All Goals
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Recommended Resources</CardTitle>
              <CardDescription>Curated by your mentors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Badge variant="outline" className="mb-2">Product Management</Badge>
                  <h4 className="font-medium">Cracking the PM Interview</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Essential reading for product management interviews
                  </p>
                  <div className="mt-2 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/mentee/resources">View</a>
                    </Button>
                  </div>
                </div>
                <div className="border rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Badge variant="outline" className="mb-2">System Design</Badge>
                  <h4 className="font-medium">System Design Interview Guide</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Step-by-step approach to tackling system design problems
                  </p>
                  <div className="mt-2 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/mentee/resources">View</a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/mentee/resources">
                    View All Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

// Missing Star component for rating
const Star = ({ className }: { className: string }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default MenteeDashboard;
