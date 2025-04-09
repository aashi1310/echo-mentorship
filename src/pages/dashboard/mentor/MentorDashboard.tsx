
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, Clock, Users, FileText, ArrowRight } from "lucide-react";

const MentorDashboard = () => {
  const navigate = useNavigate();
  
  // Sample data for the dashboard
  const upcomingSessions = [
    {
      id: 1,
      menteeName: "Aisha Patel",
      menteeAvatar: "/placeholder.svg",
      menteeInitials: "AP",
      date: "Today",
      time: "3:00 PM - 4:00 PM",
      topic: "Career Growth Strategy",
      notes: "Discuss 5-year plan and potential skill gaps",
    },
    {
      id: 2,
      menteeName: "Rahul Sharma",
      menteeAvatar: "/placeholder.svg",
      menteeInitials: "RS",
      date: "Tomorrow",
      time: "10:00 AM - 11:00 AM",
      topic: "Technical Interview Preparation",
      notes: "Focus on system design questions",
    },
    {
      id: 3,
      menteeName: "Priya Verma",
      menteeAvatar: "/placeholder.svg",
      menteeInitials: "PV",
      date: "Apr 12, 2023",
      time: "2:00 PM - 3:00 PM",
      topic: "Feedback on Portfolio",
      notes: "Review latest project additions",
    },
  ];

  const recentMentees = [
    {
      id: 1,
      name: "Vikram Malhotra",
      avatar: "/placeholder.svg",
      initials: "VM",
      role: "Frontend Developer",
      lastSession: "Apr 3, 2023",
      progress: "On track",
    },
    {
      id: 2,
      name: "Neha Singh",
      avatar: "/placeholder.svg",
      initials: "NS",
      role: "UX Designer",
      lastSession: "Apr 1, 2023",
      progress: "Ahead of schedule",
    },
    {
      id: 3,
      name: "Arjun Das",
      avatar: "/placeholder.svg",
      initials: "AD",
      role: "Product Manager",
      lastSession: "Mar 28, 2023",
      progress: "Needs attention",
    },
  ];

  const statistics = [
    {
      title: "Total Sessions",
      value: "43",
      change: "+12% from last month",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Hours Mentored",
      value: "72",
      change: "+8% from last month",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: "Active Mentees",
      value: "12",
      change: "+3 new mentees",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Shared Resources",
      value: "24",
      change: "+5 new resources",
      icon: <FileText className="h-5 w-5" />,
    },
  ];

  return (
    <DashboardLayout userType="mentor">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome back, Rajat. Here's an overview of your mentoring activities.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-full dark:bg-gray-800">
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500 font-medium">{stat.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled mentoring sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center">
                    <Avatar className="h-9 w-9 mr-3">
                      <AvatarImage src={session.menteeAvatar} alt={session.menteeName} />
                      <AvatarFallback>{session.menteeInitials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{session.menteeName}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {session.date}, {session.time}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {session.topic}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6" onClick={() => navigate("/mentor/sessions")}>
                View All Sessions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Mentees</CardTitle>
              <CardDescription>Mentees you've worked with recently</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentMentees.map((mentee) => (
                  <div key={mentee.id} className="flex items-center">
                    <Avatar className="h-9 w-9 mr-3">
                      <AvatarImage src={mentee.avatar} alt={mentee.name} />
                      <AvatarFallback>{mentee.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{mentee.name}</div>
                        <Badge
                          variant={
                            mentee.progress === "Needs attention"
                              ? "destructive"
                              : mentee.progress === "Ahead of schedule"
                              ? "outline"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {mentee.progress}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {mentee.role} • Last session: {mentee.lastSession}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6" onClick={() => navigate("/mentor/mentees")}>
                View All Mentees <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Mentorship Impact</CardTitle>
              <CardDescription>Your mentoring progress and impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg dark:border-gray-800">
                <p className="text-gray-500 dark:text-gray-400">Mentorship impact chart would be displayed here</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Hours</p>
                  <p className="text-xl font-bold">214</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Mentees Helped</p>
                  <p className="text-xl font-bold">32</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Rating</p>
                  <p className="text-xl font-bold">4.8/5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common mentoring tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/mentor/availability")}>
                <Calendar className="mr-2 h-4 w-4" />
                Update Availability
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/mentor/resources")}>
                <FileText className="mr-2 h-4 w-4" />
                Share Resource
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/mentor/mentees")}>
                <Users className="mr-2 h-4 w-4" />
                Add New Mentee
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentorDashboard;
