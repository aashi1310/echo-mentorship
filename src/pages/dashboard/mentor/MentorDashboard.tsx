
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  Trending, 
  UserCheck, 
  Users, 
  ChevronRight, 
  Bell,
  BarChart,
  Award,
  FileText
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MentorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for charts
  const sessionData = [
    { name: "Jan", sessions: 3 },
    { name: "Feb", sessions: 5 },
    { name: "Mar", sessions: 4 },
    { name: "Apr", sessions: 6 },
    { name: "May", sessions: 8 },
    { name: "Jun", sessions: 7 },
    { name: "Jul", sessions: 9 },
  ];

  // Mock data for upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      mentee: "Priya Sharma",
      date: "Today",
      time: "5:00 PM",
      topic: "Career Transition",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      mentee: "Arjun Patel",
      date: "Tomorrow",
      time: "3:30 PM",
      topic: "Technical Interview Prep",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      mentee: "Neha Gupta",
      date: "16 Apr",
      time: "6:00 PM",
      topic: "Leadership Skills",
      image: "/placeholder.svg",
    },
  ];

  // Mock data for mentees
  const recentMentees = [
    {
      id: 1,
      name: "Vikram Desai",
      sessions: 5,
      lastSession: "2 days ago",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Meera Singh",
      sessions: 3,
      lastSession: "1 week ago",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Ankit Shah",
      sessions: 1,
      lastSession: "2 weeks ago",
      image: "/placeholder.svg",
    },
  ];

  // Mock data for tasks
  const tasks = [
    { id: 1, task: "Review Priya's resume", deadline: "Today", completed: false },
    { id: 2, task: "Prepare technical resources for Arjun", deadline: "Tomorrow", completed: false },
    { id: 3, task: "Update availability for next week", deadline: "Friday", completed: true },
    { id: 4, task: "Complete feedback for last session", deadline: "Yesterday", completed: true },
  ];

  return (
    <DashboardLayout userType="mentor">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome, Rajat!</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Here's what's happening with your mentorship activities today.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <Button>
              <Bell className="mr-2 h-4 w-4" />
              View Notifications
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Session
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Mentees</CardTitle>
              <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +2 new this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <UserCheck className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">96%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +4% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Mentor XP</CardTitle>
              <Award className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">850</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Level 5 Mentor
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="mentees">Recent Mentees</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Session Activity</CardTitle>
                  <CardDescription>Your session frequency over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sessionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="sessions"
                          stroke="#8884d8"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Next Session</CardTitle>
                    <CardDescription>Your upcoming mentorship session</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt="Priya Sharma" />
                        <AvatarFallback>PS</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="font-semibold">Priya Sharma</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="mr-1 h-4 w-4" />
                          Today, 5:00 PM
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <FileText className="mr-1 h-4 w-4" />
                          Career Transition
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-3">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button size="sm">Join Session</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Feedback</CardTitle>
                    <CardDescription>What your mentees are saying</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg" alt="Arjun Patel" />
                            <AvatarFallback>AP</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">Arjun Patel</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">3 days ago</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              className="h-4 w-4 fill-current text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 15.585l6.146 3.678-1.627-7.03L20 7.87l-7.272-.627L10 .585 7.272 7.243 0 7.87l5.481 4.363-1.627 7.03z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-sm">
                        "The technical interview preparation was exactly what I needed. I feel much more confident now!"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled mentorship sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={session.image} alt={session.mentee} />
                          <AvatarFallback>
                            {session.mentee.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{session.mentee}</h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{session.date}, {session.time}</span>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            <Badge variant="outline">{session.topic}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button size="sm">Join</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentees" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Mentees</CardTitle>
                <CardDescription>People you're currently mentoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentMentees.map((mentee) => (
                    <div key={mentee.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={mentee.image} alt={mentee.name} />
                          <AvatarFallback>
                            {mentee.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{mentee.name}</h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{mentee.sessions} sessions (Last: {mentee.lastSession})</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Tasks</CardTitle>
                <CardDescription>Your mentorship action items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center space-x-4 rounded-lg border p-4"
                    >
                      <div className="flex-1 space-y-1">
                        <p className={`font-medium ${task.completed ? "line-through text-gray-500 dark:text-gray-400" : ""}`}>
                          {task.task}
                        </p>
                        <div className="flex items-center text-sm">
                          <Clock className="mr-1 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className={`${
                            task.deadline === "Today" || task.deadline === "Yesterday"
                              ? "text-red-500 dark:text-red-400"
                              : "text-gray-500 dark:text-gray-400"
                          }`}>
                            Due {task.deadline}
                          </span>
                        </div>
                      </div>
                      <div>
                        <Button
                          variant={task.completed ? "ghost" : "default"}
                          size="sm"
                        >
                          {task.completed ? "Completed" : "Mark Complete"}
                        </Button>
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

export default MentorDashboard;
