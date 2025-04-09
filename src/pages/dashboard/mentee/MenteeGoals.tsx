
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Calendar, Check, Plus, Edit, Trash, ArrowRight, Medal, CheckCircle } from "lucide-react";

// Sample data for goals
const activeGoals = [
  {
    id: 1,
    title: "Improve communication skills",
    description: "Become more effective in technical and non-technical communications",
    progress: 70,
    dueDate: "30 Apr",
    createdDate: "15 Mar",
    category: "Soft Skills",
    priority: "High",
    mentor: "Rajat Kumar",
    milestones: [
      { id: 1, title: "Read 'Effective Communication'", completed: true },
      { id: 2, title: "Practice public speaking", completed: true },
      { id: 3, title: "Get feedback on presentation", completed: false },
      { id: 4, title: "Apply techniques in next meeting", completed: false },
    ],
  },
  {
    id: 2,
    title: "Learn React framework",
    description: "Build proficiency in React for front-end development",
    progress: 40,
    dueDate: "15 May",
    createdDate: "1 Apr",
    category: "Technical Skills",
    priority: "Medium",
    mentor: "Meera Patel",
    milestones: [
      { id: 1, title: "Complete basic tutorial", completed: true },
      { id: 2, title: "Build a small project", completed: false },
      { id: 3, title: "Code review with mentor", completed: false },
      { id: 4, title: "Deploy project to portfolio", completed: false },
    ],
  },
  {
    id: 3,
    title: "Prepare for job interviews",
    description: "Get ready for product management role interviews",
    progress: 20,
    dueDate: "1 Jun",
    createdDate: "10 Apr",
    category: "Career",
    priority: "High",
    mentor: "Rajat Kumar",
    milestones: [
      { id: 1, title: "Update resume", completed: true },
      { id: 2, title: "Practice common questions", completed: false },
      { id: 3, title: "Mock interviews", completed: false },
      { id: 4, title: "Research target companies", completed: false },
    ],
  },
];

const completedGoals = [
  {
    id: 4,
    title: "Create professional portfolio",
    description: "Design and build a portfolio website showcasing my work",
    progress: 100,
    completedDate: "10 Mar",
    createdDate: "15 Jan",
    category: "Career",
    priority: "Medium",
    mentor: "Meera Patel",
  },
];

// Sample data for achievements
const achievements = [
  {
    id: 1,
    title: "First Step",
    description: "Created your first mentorship goal",
    date: "15 Mar, 2023",
    icon: <Target className="h-8 w-8 text-echopurple-500" />,
  },
  {
    id: 2,
    title: "On Track",
    description: "Completed 5 goal milestones",
    date: "28 Mar, 2023",
    icon: <CheckCircle className="h-8 w-8 text-echopurple-500" />,
  },
  {
    id: 3,
    title: "Mission Accomplished",
    description: "Completed your first goal 100%",
    date: "10 Mar, 2023",
    icon: <Medal className="h-8 w-8 text-echopurple-500" />,
  },
];

const MenteeGoals = () => {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <DashboardLayout userType="mentee">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Goals</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Track and manage your mentorship goals
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Goal
            </Button>
          </div>
        </div>

        <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="active">Active Goals</TabsTrigger>
            <TabsTrigger value="completed">Completed Goals</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            {activeGoals.length > 0 ? (
              <div className="space-y-6">
                {activeGoals.map((goal) => (
                  <Card key={goal.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <CardTitle>{goal.title}</CardTitle>
                          <CardDescription>{goal.description}</CardDescription>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge variant="outline">Due {goal.dueDate}</Badge>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Created {goal.createdDate}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            {goal.category}
                          </Badge>
                          <Badge variant="secondary" className={
                            goal.priority === "High" 
                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }>
                            {goal.priority} Priority
                          </Badge>
                          {goal.mentor && (
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                              Mentor: {goal.mentor}
                            </Badge>
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Progress</span>
                            <span className="text-sm font-medium">{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="h-2" />
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Milestones</h4>
                          {goal.milestones.map((milestone) => (
                            <div key={milestone.id} className="flex items-center">
                              <div className={`flex-shrink-0 h-5 w-5 rounded-full border ${
                                milestone.completed ? "bg-echopurple-500 border-echopurple-500" : "border-gray-300 dark:border-gray-600"
                              } mr-3`}>
                                {milestone.completed && (
                                  <Check className="h-5 w-5 text-white" />
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
                              <Edit className="h-3.5 w-3.5 mr-1" />
                              Edit
                            </Button>
                            <Button size="sm">
                              <ArrowRight className="h-3.5 w-3.5 mr-1" />
                              Update Progress
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Target className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium">No Active Goals</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                    You don't have any active goals. Create a new goal to track your progress.
                  </p>
                  <Button className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Goal
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="completed">
            {completedGoals.length > 0 ? (
              <div className="space-y-6">
                {completedGoals.map((goal) => (
                  <Card key={goal.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <CardTitle>{goal.title}</CardTitle>
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                              Completed
                            </Badge>
                          </div>
                          <CardDescription>{goal.description}</CardDescription>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Completed {goal.completedDate}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Created {goal.createdDate}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            {goal.category}
                          </Badge>
                          <Badge variant="secondary" className={
                            goal.priority === "High" 
                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }>
                            {goal.priority} Priority
                          </Badge>
                          {goal.mentor && (
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                              Mentor: {goal.mentor}
                            </Badge>
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Progress</span>
                            <span className="text-sm font-medium">Complete!</span>
                          </div>
                          <Progress value={100} className="h-2 bg-gray-100 dark:bg-gray-700">
                            <div className="h-full bg-green-500 rounded-full" />
                          </Progress>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                          <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                            Congratulations on completing this goal!
                          </p>
                          <Button variant="outline" size="sm">
                            <ArrowRight className="h-3.5 w-3.5 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Medal className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium">No Completed Goals</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                    You haven't completed any goals yet. They will appear here once done.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Milestones you've reached in your mentorship journey</CardDescription>
              </CardHeader>
              <CardContent>
                {achievements.length > 0 ? (
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
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Medal className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium">No Achievements Yet</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                      You haven't earned any achievements yet. Complete goals and milestones to earn them.
                    </p>
                  </div>
                )}

                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="font-semibold mb-4">Upcoming Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md">
                          <Target className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Goal Master</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Complete 3 goals
                          </p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">1/3</div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md">
                          <CheckCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Milestone Maven</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Complete 10 milestones
                          </p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">5/10</div>
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

export default MenteeGoals;
