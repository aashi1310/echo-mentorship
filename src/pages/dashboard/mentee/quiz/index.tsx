import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Timer, Star, Brain } from "lucide-react";

interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  xpPoints: number;
  timeLimit: number; // in minutes
  questions: number;
}

const sampleQuizzes: Quiz[] = [
  {
    id: "1",
    title: "Programming Fundamentals",
    description: "Test your knowledge of basic programming concepts",
    difficulty: "easy",
    xpPoints: 100,
    timeLimit: 15,
    questions: 10
  },
  {
    id: "2",
    title: "Data Structures",
    description: "Challenge yourself with data structures problems",
    difficulty: "medium",
    xpPoints: 200,
    timeLimit: 20,
    questions: 15
  },
  {
    id: "3",
    title: "Advanced Algorithms",
    description: "Master complex algorithmic challenges",
    difficulty: "hard",
    xpPoints: 300,
    timeLimit: 30,
    questions: 20
  }
];

const difficultyColors = {
  easy: "bg-green-500",
  medium: "bg-yellow-500",
  hard: "bg-red-500"
};

const QuizList = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredQuizzes = activeTab === "all" 
    ? sampleQuizzes 
    : sampleQuizzes.filter(quiz => quiz.difficulty === activeTab);

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Quizzes</h1>
            <p className="text-muted-foreground">Challenge yourself and earn XP points!</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">Your XP: 1250</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Quizzes</TabsTrigger>
            <TabsTrigger value="easy">Easy</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="hard">Hard</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <ScrollArea className="h-[600px] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{quiz.title}</CardTitle>
                        <Badge className={difficultyColors[quiz.difficulty]}>
                          {quiz.difficulty}
                        </Badge>
                      </div>
                      <CardDescription>{quiz.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            <span>{quiz.xpPoints} XP</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Timer className="w-4 h-4" />
                            <span>{quiz.timeLimit} mins</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Brain className="w-4 h-4" />
                            <span>{quiz.questions} questions</span>
                          </div>
                        </div>
                        <Button className="w-full">Start Quiz</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default QuizList; 