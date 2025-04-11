
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ProfileImageUploadProps {
  initialImage: string;
  onImageChange: (newImage: string) => void;
  userName: string;
}

const ProfileImageUpload = ({ initialImage, onImageChange, userName }: ProfileImageUploadProps) => {
  const [profileImage, setProfileImage] = useState(initialImage);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const newImage = e.target.result.toString();
          setProfileImage(newImage);
          onImageChange(newImage);
          toast({
            title: "Profile Picture Updated",
            description: "Your profile picture has been successfully updated.",
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const initials = userName.split(" ").map(n => n[0]).join("");
  
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
      <Avatar className="h-24 w-24">
        <AvatarImage src={profileImage} alt="Profile Avatar" />
        <AvatarFallback>{initials}</AvatarFallback>
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
  );
};

export default ProfileImageUpload;
