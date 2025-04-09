
import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface CreateGoalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (goal: any) => void;
  editGoal?: {
    id: number;
    title: string;
    description: string;
    progress: number;
    category: string;
    targetDate: string;
  };
}

const CreateGoalDialog = ({ 
  open, 
  onOpenChange, 
  onSave, 
  editGoal 
}: CreateGoalDialogProps) => {
  const [title, setTitle] = useState(editGoal?.title || "");
  const [description, setDescription] = useState(editGoal?.description || "");
  const [progress, setProgress] = useState(editGoal?.progress || 0);
  const [category, setCategory] = useState(editGoal?.category || "career");
  const [targetDate, setTargetDate] = useState(editGoal?.targetDate || "");

  const isEditing = !!editGoal;

  const handleSubmit = () => {
    if (!title.trim()) {
      toast({
        title: "Title Required",
        description: "Please enter a title for your goal.",
        variant: "destructive",
      });
      return;
    }

    if (!targetDate) {
      toast({
        title: "Target Date Required",
        description: "Please set a target date for your goal.",
        variant: "destructive",
      });
      return;
    }

    const newGoal = {
      id: editGoal?.id || Date.now(),
      title,
      description,
      progress,
      category,
      targetDate,
    };

    onSave(newGoal);
    toast({
      title: isEditing ? "Goal Updated" : "Goal Created",
      description: isEditing 
        ? "Your goal has been successfully updated." 
        : "Your new goal has been created successfully.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Goal" : "Create New Goal"}</DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Update your professional development goal" 
              : "Set a new professional development goal to track your progress"}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Goal Title</Label>
            <Input
              id="title"
              placeholder="E.g., Master System Design"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your goal in more detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="career">Career Development</SelectItem>
                <SelectItem value="technical">Technical Skills</SelectItem>
                <SelectItem value="leadership">Leadership</SelectItem>
                <SelectItem value="communication">Communication</SelectItem>
                <SelectItem value="personal">Personal Growth</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="targetDate">Target Completion Date</Label>
            <Input
              id="targetDate"
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
            />
          </div>
          
          {isEditing && (
            <div className="grid gap-2">
              <div className="flex justify-between">
                <Label htmlFor="progress">Current Progress</Label>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Slider
                id="progress"
                min={0}
                max={100}
                step={5}
                value={[progress]}
                onValueChange={(value) => setProgress(value[0])}
              />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>{isEditing ? "Update Goal" : "Create Goal"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGoalDialog;
