
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Download, BarChart3, TrendingUp, Clock, Users, Award } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for charts
const sessionData = [
  { month: "Jan", sessions: 8, hours: 12, avg: 4.7 },
  { month: "Feb", sessions: 12, hours: 18, avg: 4.8 },
  { month: "Mar", sessions: 10, hours: 15, avg: 4.5 },
  { month: "Apr", sessions: 15, hours: 22.5, avg: 4.9 },
  { month: "May", sessions: 18, hours: 27, avg: 4.7 },
  { month: "Jun", sessions: 14, hours: 21, avg: 4.6 },
];

const topicData = [
  { name: "Career Advice", sessions: 25 },
  { name: "Technical Skills", sessions: 18 },
  { name: "Interview Prep", sessions: 15 },
  { name: "Leadership", sessions: 10 },
  { name: "Soft Skills", sessions: 8 },
];

const feedbackData = [
  { name: "5 Stars", value: 65 },
  { name: "4 Stars", value: 25 },
  { name: "3 Stars", value: 8 },
  { name: "2 Stars", value: 2 },
  { name: "1 Star", value: 0 },
];

const COLORS = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#a4de6c"];
const RATING_COLORS = ["#10b981", "#3b82f6", "#6366f1", "#f59e0b", "#ef4444"];

const MentorAnalytics = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("6months");

  return (
    <DashboardLayout userType="mentor">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Track and analyze your mentorship performance
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <Select defaultValue={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="12months">Last 12 Months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
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
                <span className="text-green-500 dark:text-green-400">+12%</span> from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Hours Mentored</CardTitle>
              <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">63</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <span className="text-green-500 dark:text-green-400">+8%</span> from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8/5</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Based on 35 reviews
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
                <span className="text-green-500 dark:text-green-400">+2</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Session Activity</CardTitle>
                  <CardDescription>Number of sessions conducted over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sessionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
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

              <Card>
                <CardHeader>
                  <CardTitle>Session Topics</CardTitle>
                  <CardDescription>Distribution of session topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topicData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sessions" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hours Spent Mentoring</CardTitle>
                  <CardDescription>Total mentoring hours by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sessionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="hours"
                          stroke="#82ca9d"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feedback Ratings</CardTitle>
                  <CardDescription>Overall rating distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={feedbackData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {feedbackData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={RATING_COLORS[index]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <CardTitle>Sessions Analysis</CardTitle>
                <CardDescription>Detailed information about your mentoring sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="h-[400px]">
                    <h3 className="text-lg font-medium mb-4">Sessions by Month</h3>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={sessionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sessions" fill="#8884d8" name="Sessions" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="h-[400px]">
                    <h3 className="text-lg font-medium mb-4">Hours Mentored</h3>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={sessionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="hours" fill="#82ca9d" name="Hours" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="h-[400px] md:col-span-2">
                    <h3 className="text-lg font-medium mb-4">Session Topics</h3>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topicData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sessions" fill="#8884d8" name="Number of Sessions" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Analysis</CardTitle>
                <CardDescription>Detailed analysis of mentee feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="h-[400px]">
                    <h3 className="text-lg font-medium mb-4">Rating Distribution</h3>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={feedbackData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value, percent }) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {feedbackData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={RATING_COLORS[index]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="h-[400px]">
                    <h3 className="text-lg font-medium mb-4">Average Rating Over Time</h3>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sessionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[0, 5]} />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="avg"
                          name="Avg. Rating"
                          stroke="#ff7300"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-lg font-medium mb-4">Recent Feedback Comments</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">Priya Sharma</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">1 week ago</p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-5 w-5 ${i < 5 ? "text-yellow-400" : "text-gray-300"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm">
                          "The career transition guidance has been invaluable. Rajat has provided clear, actionable advice that's already helping me make progress."
                        </p>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">Arjun Patel</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">2 weeks ago</p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`h-5 w-5 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm">
                          "Great technical guidance. Would appreciate more resources between sessions, but overall very helpful for interview preparation."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="growth">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Mentor Growth</CardTitle>
                  <CardDescription>Track your progress as a mentor</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">XP Progress</h3>
                        <div className="text-sm font-medium">850 / 1000 XP</div>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                        <div className="h-full bg-echopurple-500 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        150 XP until Level 6 Mentor
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Recent Achievements</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <div className="bg-echopurple-100 dark:bg-echopurple-900 p-2 rounded-full">
                            <Award className="h-5 w-5 text-echopurple-600 dark:text-echopurple-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">10 Session Milestone</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Completed 10 mentoring sessions</p>
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                            Apr 2, 2023
                          </div>
                        </div>

                        <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <div className="bg-echopurple-100 dark:bg-echopurple-900 p-2 rounded-full">
                            <TrendingUp className="h-5 w-5 text-echopurple-600 dark:text-echopurple-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">Top Rated</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Received 5 consecutive 5-star ratings</p>
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                            Mar 15, 2023
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Skills Development</h3>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Technical Mentoring</span>
                            <span>Advanced</span>
                          </div>
                          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Career Coaching</span>
                            <span>Intermediate</span>
                          </div>
                          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: "65%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Leadership Guidance</span>
                            <span>Expert</span>
                          </div>
                          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                            <div className="h-full bg-purple-500 rounded-full" style={{ width: "95%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mentoring Impact</CardTitle>
                  <CardDescription>The impact of your mentorship</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-medium text-lg">35</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Goal Completions</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-medium text-lg">12</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Career Transitions</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-medium text-lg">8</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Promotions Achieved</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-medium text-lg">95%</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Satisfaction Rate</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Mentee Success Stories</h3>
                      <div className="space-y-3">
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-medium text-sm">Priya Sharma</h4>
                            <Badge variant="outline">Career Transition</Badge>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                            Successfully transitioned from Business Analyst to Product Manager at TechCorp
                          </p>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            March 2023 • 8 sessions
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-medium text-sm">Vikram Desai</h4>
                            <Badge variant="outline">Resume Building</Badge>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                            Received 3 interview offers after resume overhaul
                          </p>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            February 2023 • 5 sessions
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Recognition</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <Award className="h-6 w-6 text-yellow-500 mb-1" />
                          <p className="text-xs text-center">Top Mentor</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <BarChart3 className="h-6 w-6 text-blue-500 mb-1" />
                          <p className="text-xs text-center">Most Sessions</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <Users className="h-6 w-6 text-green-500 mb-1" />
                          <p className="text-xs text-center">Community Builder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MentorAnalytics;
