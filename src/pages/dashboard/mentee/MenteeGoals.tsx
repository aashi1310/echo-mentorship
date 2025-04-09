
import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle, Clock, Edit, Plus, Target, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import CreateGoalDialog from "@/components/CreateGoalDialog";

// Sample goals data
const initialGoals = [
  {
    id: 1,
    title: "Master System Design",
    description: "Learn and practice advanced system design concepts for technical interviews",
    progress: 60,
    category: "technical",
    targetDate: "2025-07-15"
  },
  {
    id: 2,
    title: "Product Management Skills",
    description: "Improve product management skills through mentorship and practical application",
    progress: 45,
    category: "career",
    targetDate: "2025-08-30"
  },
  {
    id: 3,
    title: "Interview Preparation",
    description: "Prepare for product management interviews with mock sessions",
    progress: 25,
    category: "career",
    targetDate: "2025-05-20"
  }
];

const MenteeGoals = () => {
  const [goals, setGoals] = useState(initialGoals);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  
  const handleUpdateProgress = (goalId, newProgress) => {
    setGoals(goals.map(goal => 
      goal.id === goalId ? { ...goal, progress: newProgress } : goal
    ));
    toast({
      title: "Progress Updated",
      description: `Goal progress has been updated to ${newProgress}%.`,
    });
  };
  
  const handleSaveGoal = (newGoal) => {
    if (editingGoal) {
      // Update existing goal
      setGoals(goals.map(goal => 
        goal.id === newGoal.id ? newGoal : goal
      ));
    } else {
      // Add new goal
      setGoals([...goals, newGoal]);
    }
    setEditingGoal(null);
  };
  
  const handleEditGoal = (goal) => {
    setEditingGoal(goal);
    setShowCreateDialog(true);
  };
  
  const handleDeleteGoal = (goalId) => {
    setGoals(goals.filter(goal => goal.id !== goalId));
    toast({
      title: "Goal Deleted",
      description: "The goal has been successfully deleted.",
    });
  };
  
  const getCategoryColor = (category) => {
    switch (category) {
      case "technical":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "career":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "leadership":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      case "communication":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "personal":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <DashboardLayout userType="mentee">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Goals</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Track and manage your professional development goals
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button onClick={() => {
              setEditingGoal(null);
              setShowCreateDialog(true);
            }}>
              <Plus className="mr-2 h-4 w-4" />
              Create New Goal
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <Card key={goal.id} className="relative">
              <div className="absolute top-4 right-4 flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleEditGoal(goal)}
                  className="h-8 w-8"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleDeleteGoal(goal.id)}
                  className="h-8 w-8 text-destructive hover:text-destructive/90"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge className={`${getCategoryColor(goal.category)}`}>
                    {goal.category.charAt(0).toUpperCase() + goal.category.slice(1)}
                  </Badge>
                </div>
                <CardTitle className="mt-2">{goal.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {goal.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm font-medium">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <Target className="mr-1 h-4 w-4" />
                  <span>Target: {formatDate(goal.targetDate)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleUpdateProgress(goal.id, Math.max(0, goal.progress - 10))}
                      disabled={goal.progress <= 0}
                    >
                      -10%
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleUpdateProgress(goal.id, Math.min(100, goal.progress + 10))}
                      disabled={goal.progress >= 100}
                    >
                      +10%
                    </Button>
                  </div>
                  
                  {goal.progress === 100 && (
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      <span>Completed</span>
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="flex flex-col items-center justify-center p-6 border-dashed cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            onClick={() => {
              setEditingGoal(null);
              setShowCreateDialog(true);
            }}
          >
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Add New Goal</h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Create a new professional development goal to track your progress
            </p>
          </Card>
        </div>
        
        {goals.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Target className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium">No Goals Set</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1 max-w-md">
              You haven't set any professional development goals yet. Create your first goal to start tracking your progress.
            </p>
            <Button className="mt-4" onClick={() => setShowCreateDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Create Your First Goal
            </Button>
          </div>
        )}
      </div>
      
      <CreateGoalDialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        onSave={handleSaveGoal}
        editGoal={editingGoal}
      />
    </DashboardLayout>
  );
};

export default MenteeGoals;
