
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  Target, 
  UserCheck, 
  BookOpen,
  ChevronRight, 
  Bell,
  ArrowRight,
  Award,
  FileText,
  Search
} from "lucide-react";

const MenteeDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data for upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      mentor: "Rajat Kumar",
      date: "Today",
      time: "5:00 PM",
      topic: "Career Transition",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      mentor: "Meera Patel",
      date: "Next Tuesday",
      time: "4:30 PM",
      topic: "Technical Interview Prep",
      image: "/placeholder.svg",
    },
  ];

  // Mock data for goals
  const goals = [
    {
      id: 1,
      title: "Improve communication skills",
      progress: 70,
      dueDate: "30 Apr",
      milestones: [
        { title: "Read 'Effective Communication'", completed: true },
        { title: "Practice public speaking", completed: true },
        { title: "Get feedback on presentation", completed: false },
      ],
    },
    {
      id: 2,
      title: "Learn React framework",
      progress: 40,
      dueDate: "15 May",
      milestones: [
        { title: "Complete basic tutorial", completed: true },
        { title: "Build a small project", completed: false },
        { title: "Code review with mentor", completed: false },
      ],
    },
    {
      id: 3,
      title: "Prepare for job interviews",
      progress: 20,
      dueDate: "1 Jun",
      milestones: [
        { title: "Update resume", completed: true },
        { title: "Practice common questions", completed: false },
        { title: "Mock interviews", completed: false },
        { title: "Research target companies", completed: false },
      ],
    },
  ];

  // Mock data for recommended resources
  const recommendedResources = [
    {
      id: 1,
      title: "The Ultimate Interview Preparation Guide",
      type: "PDF",
      free: true,
      recommended: true,
      added: "2 days ago",
    },
    {
      id: 2,
      title: "Advanced React Patterns Course",
      type: "Video Course",
      free: false,
      recommended: true,
      added: "1 week ago",
    },
    {
      id: 3,
      title: "Effective Communication in Tech Teams",
      type: "Article",
      free: true,
      recommended: false,
      added: "3 days ago",
    },
  ];

  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      title: "First Session",
      description: "Completed your first mentorship session",
      date: "Mar 10, 2023",
      icon: <Calendar className="h-8 w-8 text-echopurple-500" />,
    },
    {
      id: 2,
      title: "Goal Setter",
      description: "Created your first mentorship goal",
      date: "Mar 15, 2023",
      icon: <Target className="h-8 w-8 text-echopurple-500" />,
    },
    {
      id: 3,
      title: "Resource Explorer",
      description: "Downloaded 5+ resources",
      date: "Apr 2, 2023",
      icon: <BookOpen className="h-8 w-8 text-echopurple-500" />,
    },
  ];

  return (
    <DashboardLayout userType="mentee">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome, Priya!</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Here's your mentorship journey so far.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Find Mentors
            </Button>
            <Button variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              Notifications
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Completed Sessions</CardTitle>
              <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                2 this month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Mentors</CardTitle>
              <UserCheck className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +1 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Goal Progress</CardTitle>
              <Target className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">43%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                3 active goals
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">XP Earned</CardTitle>
              <Award className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">420</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Level 3 Mentee
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="goals">My Goals</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Next Session</CardTitle>
                  <CardDescription>Your upcoming mentorship session</CardDescription>
                </CardHeader>
                <CardContent>
                  {upcomingSessions.length > 0 ? (
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt={upcomingSessions[0].mentor} />
                        <AvatarFallback>
                          {upcomingSessions[0].mentor.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="font-semibold">{upcomingSessions[0].mentor}</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="mr-1 h-4 w-4" />
                          {upcomingSessions[0].date}, {upcomingSessions[0].time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <FileText className="mr-1 h-4 w-4" />
                          {upcomingSessions[0].topic}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400">No upcoming sessions.</p>
                  )}
                  <div className="mt-4 flex space-x-3">
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button size="sm">Prepare Notes</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Goal Progress</CardTitle>
                  <CardDescription>Your top priority goal</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-2">{goals[0].title}</h4>
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Progress</span>
                      <span className="text-sm font-medium">{goals[0].progress}%</span>
                    </div>
                    <Progress value={goals[0].progress} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    {goals[0].milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`flex-shrink-0 h-5 w-5 rounded-full border ${
                          milestone.completed ? "bg-echopurple-500 border-echopurple-500" : "border-gray-300 dark:border-gray-600"
                        } mr-3`}>
                          {milestone.completed && (
                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm ${milestone.completed ? "text-gray-500 dark:text-gray-400 line-through" : ""}`}>
                          {milestone.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      View All Goals
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recommended For You</CardTitle>
                <CardDescription>Based on your goals and sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-gray-50 dark:bg-gray-800">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Find a New Mentor</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          Expand your network with mentors in UX Design.
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          Browse Mentors
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50 dark:bg-gray-800">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Resume Review</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          Get expert feedback on your CV from a mentor.
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          Schedule Review
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-50 dark:bg-gray-800">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base">Interview Prep Course</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                          Nail your tech interviews with this premium course.
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          View Course
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
                <CardDescription>Your scheduled mentorship sessions</CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingSessions.length > 0 ? (
                  <div className="space-y-6">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between">
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
                          <Button size="sm">Prepare</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <BookOpen className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600 mb-2" />
                    <h3 className="font-medium text-lg mb-1">No Upcoming Sessions</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      You don't have any scheduled sessions yet.
                    </p>
                    <Button>Book a Session</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Past Sessions</CardTitle>
                <CardDescription>Review your previous mentorship sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Mock past sessions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt="Rajat Kumar" />
                        <AvatarFallback>RK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Rajat Kumar</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>Apr 5, 4:00 PM</span>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          <Badge variant="outline">Resume Review</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Notes
                      </Button>
                      <Button variant="outline" size="sm">
                        Feedback
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt="Meera Patel" />
                        <AvatarFallback>MP</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Meera Patel</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>Mar 28, 5:30 PM</span>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          <Badge variant="outline">Career Planning</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Notes
                      </Button>
                      <Button variant="outline" size="sm">
                        Feedback
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">My Goals</h2>
              <Button>
                <Target className="mr-2 h-4 w-4" />
                Create New Goal
              </Button>
            </div>

            {goals.map((goal) => (
              <Card key={goal.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>{goal.title}</CardTitle>
                    <Badge variant="outline">Due {goal.dueDate}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">Progress</span>
                        <span className="text-sm font-medium">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Milestones</h4>
                      {goal.milestones.map((milestone, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className={`flex-shrink-0 h-5 w-5 rounded-full border ${
                            milestone.completed ? "bg-echopurple-500 border-echopurple-500" : "border-gray-300 dark:border-gray-600"
                          } mr-3`}>
                            {milestone.completed && (
                              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          <span className={`text-sm ${milestone.completed ? "text-gray-500 dark:text-gray-400 line-through" : ""}`}>
                            {milestone.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {goal.milestones.filter(m => m.completed).length} of {goal.milestones.length} completed
                      </div>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button size="sm">
                          Update Progress
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Learning Resources</h2>
              <Button>
                <BookOpen className="mr-2 h-4 w-4" />
                Browse Library
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Resources</CardTitle>
                <CardDescription>Materials suggested by your mentors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedResources.map((resource) => (
                    <div key={resource.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-echopurple-100 dark:bg-echopurple-900 p-2 rounded-md">
                          <FileText className="h-5 w-5 text-echopurple-600 dark:text-echopurple-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{resource.title}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs py-0 h-5">
                              {resource.type}
                            </Badge>
                            {resource.free ? (
                              <Badge variant="secondary" className="text-xs py-0 h-5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                Free
                              </Badge>
                            ) : (
                              <Badge variant="secondary" className="text-xs py-0 h-5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                Premium
                              </Badge>
                            )}
                            {resource.recommended && (
                              <Badge variant="secondary" className="text-xs py-0 h-5 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                                Recommended
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant={resource.free ? "default" : "outline"}>
                        {resource.free ? "Download" : "Purchase"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recently Viewed</CardTitle>
                <CardDescription>Resources you've recently accessed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-echopurple-100 dark:bg-echopurple-900 p-2 rounded-md">
                        <FileText className="h-5 w-5 text-echopurple-600 dark:text-echopurple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Technical Interview Question Bank</h4>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Viewed yesterday
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Again
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Milestones reached in your mentorship journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-start space-x-4">
                      <div className="bg-echopurple-100 dark:bg-echopurple-900 p-3 rounded-md flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          Achieved on {achievement.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="font-semibold mb-4">Upcoming Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md">
                          <Award className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">5 Session Streak</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Attend 5 consecutive sessions without rescheduling
                          </p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">3/5</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md">
                          <Target className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Goal Achiever</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Complete your first goal 100%
                          </p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">In progress</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MenteeDashboard;
