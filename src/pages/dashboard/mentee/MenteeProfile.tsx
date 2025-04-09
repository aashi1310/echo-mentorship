
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload, AtSign, MapPin, Phone, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const MenteeProfile = () => {
  const [profileImage, setProfileImage] = useState("/placeholder.svg");
  const [name, setName] = useState("Priya Sharma");
  const [title, setTitle] = useState("Business Analyst at DataCorp");
  const [bio, setBio] = useState("Business analyst with 3 years of experience, looking to transition into product management. Passionate about user experience and data-driven decision making.");
  const [email, setEmail] = useState("priya.sharma@example.com");
  const [phone, setPhone] = useState("+91 98765 54321");
  const [location, setLocation] = useState("Bangalore, India");
  const [languages, setLanguages] = useState("English, Hindi, Kannada");
  const [interests, setInterests] = useState(["Product Management", "UX Research", "Analytics", "Leadership"]);
  const [newInterest, setNewInterest] = useState("");
  const [resumeFile, setResumeFile] = useState({
    name: "Resume_Priya_Sharma.pdf",
    uploadDate: "Apr 5, 2023",
    size: "1.2 MB",
    file: null
  });
  
  const handleAddInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };
  
  const handleRemoveInterest = (interest) => {
    setInterests(interests.filter(i => i !== interest));
  };
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        toast({
          title: "Profile Picture Updated",
          description: "Your profile picture has been successfully updated.",
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert file size to MB
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
      // Format current date
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      
      setResumeFile({
        name: file.name,
        uploadDate: formattedDate,
        size: `${fileSizeMB} MB`,
        file: file
      });
      
      toast({
        title: "Resume Uploaded",
        description: "Your resume has been successfully uploaded.",
      });
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
                  <AvatarImage src={profileImage} alt="Profile Avatar" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">Profile Picture</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    A professional photo is recommended. Maximum size 2MB.
                  </p>
                  <label htmlFor="profile-upload">
                    <Button variant="outline" size="sm" as="span" className="cursor-pointer">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload New Picture
                    </Button>
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
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="title">Current Position/Title</Label>
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
                    Brief description of yourself and your career/learning goals.
                    Max 250 characters.
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label>Areas of Interest</Label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Badge key={interest} className="group">
                        {interest}
                        <button 
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleRemoveInterest(interest)}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                    <div className="flex gap-2 items-center">
                      <Input
                        value={newInterest}
                        onChange={(e) => setNewInterest(e.target.value)}
                        className="h-6 w-32 text-sm"
                        placeholder="Add interest..."
                        onKeyPress={(e) => e.key === 'Enter' && handleAddInterest()}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 rounded-full px-2"
                        onClick={handleAddInterest}
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
                  <div className="flex">
                    <div className="relative flex-1">
                      <AtSign className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                      <Input 
                        id="location" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="pl-9" 
                      />
                    </div>
                  </div>
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
                <CardTitle>Documents & Resume</CardTitle>
                <CardDescription>
                  Upload your resume and important documents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <FileText className="h-8 w-8 text-gray-400" />
                    <h3 className="font-medium">{resumeFile.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Uploaded on {resumeFile.uploadDate} • {resumeFile.size}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          if (resumeFile.file) {
                            // Create a URL for the file and open it in a new tab
                            const url = URL.createObjectURL(resumeFile.file);
                            window.open(url, '_blank');
                          } else {
                            toast({
                              title: "Unable to View",
                              description: "This is a placeholder. Upload a real document to view it.",
                              variant: "destructive",
                            });
                          }
                        }}
                      >
                        View
                      </Button>
                      <label htmlFor="resume-replace">
                        <Button variant="outline" size="sm" as="span" className="cursor-pointer">
                          Replace
                        </Button>
                        <input 
                          id="resume-replace" 
                          type="file" 
                          accept=".pdf,.doc,.docx" 
                          className="hidden"
                          onChange={handleResumeUpload}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <label htmlFor="document-upload">
                  <Button variant="outline" className="w-full cursor-pointer">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload New Document
                  </Button>
                  <input 
                    id="document-upload" 
                    type="file" 
                    accept=".pdf,.doc,.docx,.txt,.rtf" 
                    className="hidden"
                    onChange={handleResumeUpload}
                  />
                </label>
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
