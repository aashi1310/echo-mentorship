
import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PublicProfileForm from "@/components/profile/PublicProfileForm";
import PersonalInfoForm from "@/components/profile/PersonalInfoForm";
import DocumentUploader from "@/components/profile/DocumentUploader";
import AccountSettings from "@/components/profile/AccountSettings";

const MenteeProfile = () => {
  // Initial data for profile components
  const initialProfileData = {
    name: "Priya Sharma",
    title: "Business Analyst at DataCorp",
    bio: "Business analyst with 3 years of experience, looking to transition into product management. Passionate about user experience and data-driven decision making.",
    image: "/placeholder.svg",
    interests: ["Product Management", "UX Research", "Analytics", "Leadership"],
  };

  const initialPersonalInfo = {
    email: "priya.sharma@example.com",
    phone: "+91 98765 54321",
    location: "Bangalore, India",
    languages: "English, Hindi, Kannada",
  };

  const initialResumeFile = {
    name: "Resume_Priya_Sharma.pdf",
    uploadDate: "Apr 5, 2023",
    size: "1.2 MB",
    file: null
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
            <CardContent>
              <PublicProfileForm 
                initialName={initialProfileData.name}
                initialTitle={initialProfileData.title}
                initialBio={initialProfileData.bio}
                initialImage={initialProfileData.image}
                initialInterests={initialProfileData.interests}
              />
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
              <CardContent>
                <PersonalInfoForm 
                  initialEmail={initialPersonalInfo.email}
                  initialPhone={initialPersonalInfo.phone}
                  initialLocation={initialPersonalInfo.location}
                  initialLanguages={initialPersonalInfo.languages}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documents & Resume</CardTitle>
                <CardDescription>
                  Upload your resume and important documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DocumentUploader initialResumeFile={initialResumeFile} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AccountSettings />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MenteeProfile;
