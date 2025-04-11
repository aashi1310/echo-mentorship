import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, CheckCircle2, MessageSquare, Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "Priya Sharma",
    date: "2023-01-02",
    amount: "$9.00",
    status: "paid",
    email: "priya.sharma@example.com",
  },
  {
    name: "John Smith",
    date: "2023-01-02",
    amount: "$9.00",
    status: "paid",
    email: "john.smith@example.com",
  },
  {
    name: "Alice Johnson",
    date: "2023-01-02",
    amount: "$9.00",
    status: "paid",
    email: "alice.johnson@example.com",
  },
  {
    name: "Bob Williams",
    date: "2023-01-02",
    amount: "$9.00",
    status: "paid",
    email: "bob.williams@example.com",
  },
]

const PaymentDialog = ({ mentorName }: { mentorName?: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Make Payment</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a Payment</DialogTitle>
          <DialogDescription>
            Enter your payment details below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={mentorName || "Mentor Name"} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" defaultValue="m@example.com" className="col-span-3" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const MenteeDashboard = () => {
  const [upcomingSession, setUpcomingSession] = useState({
    mentor: "Rajat Kumar",
    date: new Date().toLocaleDateString(),
    time: "4:00 PM",
    id: 1
  });
  const navigate = useNavigate();
  
  const handleJoinSession = () => {
    navigate(`/join-session/${upcomingSession.id}`);
  };

  return (
    <DashboardLayout userType="mentee">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Track your progress and upcoming sessions
            </p>
          </div>
          <PaymentDialog />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Session</CardTitle>
              <CardDescription>Your next session is scheduled soon</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span>{upcomingSession.date}, {upcomingSession.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Mentor Avatar" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <span>With {upcomingSession.mentor}</span>
              </div>
              <Button variant="secondary" onClick={handleJoinSession}>Join Session</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mentorship Goals</CardTitle>
              <CardDescription>Stay focused on your objectives</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span>Complete 3 online courses</span>
                <Badge variant="secondary">66%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Network with 5 industry experts</span>
                <Badge variant="secondary">20%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Create a portfolio website</span>
                <Badge variant="secondary">0%</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Stay up-to-date with your progress</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Completed "Introduction to React" course</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-blue-500" />
                <span>Sent a message to Mentor Smith</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Rated a session 5 stars</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sessions</CardTitle>
            <CardDescription>View your session history and upcoming appointments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Date</TableHead>
                  <TableHead>Mentor</TableHead>
                  <TableHead>Topic</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">{upcomingSession.date}</TableCell>
                  <TableCell>{upcomingSession.mentor}</TableCell>
                  <TableCell>React Fundamentals</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" onClick={handleJoinSession}>
                      Join
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Apr 7, 2024</TableCell>
                  <TableCell>Mentor Smith</TableCell>
                  <TableCell>JavaScript Basics</TableCell>
                  <TableCell className="text-right">Completed</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
            <CardDescription>Answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I schedule a session?</AccordionTrigger>
                <AccordionContent>
                  To schedule a session, go to the mentor's profile and click on the "Book Session" button.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What if I need to cancel a session?</AccordionTrigger>
                <AccordionContent>
                  You can cancel a session up to 24 hours before the scheduled time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I provide feedback to my mentor?</AccordionTrigger>
                <AccordionContent>
                  After each session, you'll receive a feedback form to rate your mentor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MenteeDashboard;
