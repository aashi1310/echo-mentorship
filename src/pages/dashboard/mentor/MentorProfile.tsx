
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload } from "lucide-react";

const MentorProfile = () => {
  return (
    <DashboardLayout userType="mentor">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your public profile and personal information
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Public Profile</CardTitle>
              <CardDescription>
                This information will be shown to potential mentees
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt="Profile Avatar" />
                  <AvatarFallback>RK</AvatarFallback>
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
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue="Rajat Kumar" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    defaultValue="Senior Software Engineer at TechCorp"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    defaultValue="Software engineer with 8+ years of experience in full-stack development. Passionate about mentoring and helping others grow in their tech career."
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Brief description of your background and mentoring focus.
                    Max 250 characters.
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label>Expertise</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Career Growth</Badge>
                    <Badge>System Design</Badge>
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
                  <Input
                    id="email"
                    type="email"
                    defaultValue="rajat.kumar@example.com"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="+91 98765 43210"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="Bangalore, India" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="languages">Languages Spoken</Label>
                  <Input id="languages" defaultValue="English, Hindi" />
                </div>

                <Button className="w-full">Save Personal Information</Button>
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

export default MentorProfile;
