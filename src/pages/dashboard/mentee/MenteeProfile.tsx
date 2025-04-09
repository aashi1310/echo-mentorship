
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload, AtSign, MapPin, Phone, FileText } from "lucide-react";

const MenteeProfile = () => {
  return (
    <DashboardLayout userType="mentee">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your profile and personal information
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Public Profile</CardTitle>
              <CardDescription>
                This information will be shown to mentors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile Avatar" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Profile Picture</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    A professional photo is recommended. Maximum size 2MB.
                  </p>
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload New Picture
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Priya Sharma" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="title">Current Position/Title</Label>
                  <Input
                    id="title"
                    defaultValue="Business Analyst at DataCorp"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    defaultValue="Business analyst with 3 years of experience, looking to transition into product management. Passionate about user experience and data-driven decision making."
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Brief description of yourself and your career/learning goals.
                    Max 250 characters.
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label>Areas of Interest</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Product Management</Badge>
                    <Badge>UX Research</Badge>
                    <Badge>Analytics</Badge>
                    <Badge>Leadership</Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-6 rounded-full"
                    >
                      + Add
                    </Button>
                  </div>
                </div>
              </div>

              <Button className="w-full">Update Public Profile</Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Your private information that's not shared publicly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="flex">
                    <div className="relative flex-1">
                      <AtSign className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        defaultValue="priya.sharma@example.com"
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex">
                    <div className="relative flex-1">
                      <Phone className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        defaultValue="+91 98765 54321"
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="flex">
                    <div className="relative flex-1">
                      <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <Input id="location" defaultValue="Bangalore, India" className="pl-9" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="languages">Languages Spoken</Label>
                  <Input id="languages" defaultValue="English, Hindi, Kannada" />
                </div>

                <Button className="w-full">Save Personal Information</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documents & Resume</CardTitle>
                <CardDescription>
                  Upload your resume and important documents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FileText className="h-8 w-8 text-gray-400" />
                    <h3 className="font-medium">Resume_Priya_Sharma.pdf</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Uploaded on Apr 5, 2023 • 1.2 MB
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Replace
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload New Document
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full">
                  Notification Preferences
                </Button>
                <Button variant="outline" className="w-full">
                  Connected Accounts
                </Button>
                <Button variant="destructive" className="w-full">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MenteeProfile;
