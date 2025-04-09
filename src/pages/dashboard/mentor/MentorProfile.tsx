
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const MentorProfile = () => {
  const [profileImage, setProfileImage] = useState("/placeholder.svg");
  const [name, setName] = useState("Rajat Kumar");
  const [title, setTitle] = useState("Senior Software Engineer at TechCorp");
  const [bio, setBio] = useState("Software engineer with 8+ years of experience in full-stack development. Passionate about mentoring and helping others grow in their tech career.");
  const [email, setEmail] = useState("rajat.kumar@example.com");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [location, setLocation] = useState("Bangalore, India");
  const [languages, setLanguages] = useState("English, Hindi");
  const [expertise, setExpertise] = useState(["JavaScript", "React", "Node.js", "Career Growth", "System Design"]);
  const [newSkill, setNewSkill] = useState("");
  
  const handleAddSkill = () => {
    if (newSkill.trim() && !expertise.includes(newSkill.trim())) {
      setExpertise([...expertise, newSkill.trim()]);
      setNewSkill("");
    }
  };
  
  const handleRemoveSkill = (skill: string) => {
    setExpertise(expertise.filter(s => s !== skill));
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result.toString());
          toast({
            title: "Profile Picture Updated",
            description: "Your profile picture has been successfully updated.",
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleUpdateProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your public profile has been successfully updated.",
    });
  };
  
  const handleSavePersonalInfo = () => {
    toast({
      title: "Personal Information Updated",
      description: "Your personal information has been successfully updated.",
    });
  };

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
                  <AvatarImage src={profileImage} alt="Profile Avatar" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Profile Picture</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    A professional photo is recommended. Maximum size 2MB.
                  </p>
                  <label htmlFor="profile-upload">
                    <div className="cursor-pointer">
                      <Button variant="outline" size="sm" className="cursor-pointer">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload New Picture
                      </Button>
                    </div>
                    <input 
                      id="profile-upload" 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid gap-2">
                  <Label htmlFor="name">Display Name</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Brief description of your background and mentoring focus.
                    Max 250 characters.
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label>Expertise</Label>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((skill) => (
                      <Badge key={skill} className="group">
                        {skill}
                        <button 
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleRemoveSkill(skill)}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                    <div className="flex gap-2 items-center">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        className="h-6 w-32 text-sm"
                        placeholder="Add skill..."
                        onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 rounded-full px-2"
                        onClick={handleAddSkill}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full" onClick={handleUpdateProfile}>Update Public Profile</Button>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="languages">Languages Spoken</Label>
                  <Input 
                    id="languages" 
                    value={languages}
                    onChange={(e) => setLanguages(e.target.value)}
                  />
                </div>

                <Button className="w-full" onClick={handleSavePersonalInfo}>Save Personal Information</Button>
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
