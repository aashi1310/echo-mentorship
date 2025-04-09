
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Plus, Trash2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

// Sample data for the weekly schedule
const weeklySchedule = [
  { day: "Monday", slots: ["10:00 AM - 11:00 AM", "4:00 PM - 5:00 PM"] },
  { day: "Tuesday", slots: ["3:00 PM - 4:00 PM"] },
  { day: "Wednesday", slots: ["9:00 AM - 10:00 AM", "2:00 PM - 3:00 PM"] },
  { day: "Thursday", slots: ["11:00 AM - 12:00 PM", "5:00 PM - 6:00 PM"] },
  { day: "Friday", slots: ["1:00 PM - 2:00 PM"] },
  { day: "Saturday", slots: [] },
  { day: "Sunday", slots: [] },
];

// Sample data for upcoming blocked dates
const blockedDates = [
  { date: "Apr 15, 2023", reason: "Personal Leave" },
  { date: "Apr 22-25, 2023", reason: "Conference" },
  { date: "May 5, 2023", reason: "Holiday" },
];

const MentorAvailability = () => {
  const [activeTab, setActiveTab] = useState("weekly");

  return (
    <DashboardLayout userType="mentor">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Availability</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage your mentorship availability and schedule
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              View Your Calendar
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Availability Settings</CardTitle>
            <CardDescription>Control your overall availability status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Available for New Mentees</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Toggle this off if you're not accepting new mentees right now
                </p>
              </div>
              <Switch id="new-mentees" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Available for Urgent Sessions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Can mentees book you for emergency/same-day sessions?
                </p>
              </div>
              <Switch id="urgent-sessions" />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Session Buffer Time</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Minimum time between consecutive sessions
                </p>
              </div>
              <Select defaultValue="15">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select buffer time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No buffer</SelectItem>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Maximum Daily Sessions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Limit the number of sessions per day
                </p>
              </div>
              <Select defaultValue="3">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Select max sessions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 session</SelectItem>
                  <SelectItem value="2">2 sessions</SelectItem>
                  <SelectItem value="3">3 sessions</SelectItem>
                  <SelectItem value="4">4 sessions</SelectItem>
                  <SelectItem value="5">5 sessions</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="weekly" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
            <TabsTrigger value="custom">Custom Dates</TabsTrigger>
            <TabsTrigger value="blocked">Blocked Dates</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Availability</CardTitle>
                <CardDescription>Set your recurring weekly availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {weeklySchedule.map((day) => (
                    <div key={day.day} className="flex items-start md:items-center flex-col md:flex-row border-b pb-4 last:border-0 last:pb-0">
                      <div className="w-32 font-medium">{day.day}</div>
                      <div className="flex-1 mt-2 md:mt-0">
                        {day.slots.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {day.slots.map((slot, index) => (
                              <Badge key={index} variant="outline" className="flex items-center gap-2 px-3 py-1">
                                <Clock className="h-3 w-3" />
                                {slot}
                                <button className="ml-1 text-gray-500 hover:text-red-500">
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </Badge>
                            ))}
                            <Button variant="outline" size="sm" className="h-7 gap-1">
                              <Plus className="h-3.5 w-3.5" /> Add Slot
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400 mr-3">Not available</span>
                            <Button variant="outline" size="sm" className="h-7 gap-1">
                              <Plus className="h-3.5 w-3.5" /> Add Slot
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <Button>Save Weekly Schedule</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom">
            <Card>
              <CardHeader>
                <CardTitle>Custom Availability</CardTitle>
                <CardDescription>Set availability for specific dates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium">Calendar View Coming Soon</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                    We're working on a calendar interface for setting custom availability. 
                    For now, please use the weekly schedule.
                  </p>
                  <Button className="mt-4">
                    Add Custom Date
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blocked">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Blocked Dates</CardTitle>
                  <CardDescription>Dates when you're unavailable for mentoring</CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" /> Block New Date
                </Button>
              </CardHeader>
              <CardContent>
                {blockedDates.length > 0 ? (
                  <div className="space-y-4">
                    {blockedDates.map((block, index) => (
                      <div key={index} className="flex items-center justify-between border rounded-lg p-3">
                        <div className="flex items-center">
                          <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full mr-3">
                            <Calendar className="h-5 w-5 text-red-600 dark:text-red-400" />
                          </div>
                          <div>
                            <h4 className="font-medium">{block.date}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{block.reason}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Calendar className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium">No Blocked Dates</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                      You haven't blocked any dates. Add dates when you'll be unavailable.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MentorAvailability;
