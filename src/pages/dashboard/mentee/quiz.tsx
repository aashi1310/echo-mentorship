import React, { useState } from 'react';
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Star, Timer, BookOpen, CheckCircle2, XCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Quiz {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  xpPoints: number;
  timeLimit: number; // in minutes
  questions: Question[];
  completed?: boolean;
}

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  xpPoints: number;
  quizzesCompleted: number;
}

const quizzes: Quiz[] = [
  {
    id: 1,
    title: "Programming Fundamentals",
    description: "Test your knowledge of basic programming concepts",
    difficulty: "Easy",
    xpPoints: 100,
    timeLimit: 15,
    questions: [
      {
        id: 1,
        text: "What is a variable?",
        options: [
          "A container for storing data values",
          "A mathematical equation",
          "A programming language",
          "A type of function"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: [
          "variable x = 5;",
          "let x = 5;",
          "x := 5;",
          "x == 5;"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "What is the purpose of a loop in programming?",
        options: [
          "To store data",
          "To repeat a block of code multiple times",
          "To define functions",
          "To create variables"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "What is a function in programming?",
        options: [
          "A type of variable",
          "A mathematical operation",
          "A reusable block of code",
          "A programming language"
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        text: "What is an array?",
        options: [
          "A single value",
          "A collection of ordered values",
          "A type of function",
          "A programming language"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "What is the difference between '==' and '===' in JavaScript?",
        options: [
          "They are exactly the same",
          "'===' checks both value and type, '==' only checks value",
          "'==' checks both value and type, '===' only checks value",
          "Neither performs type checking"
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        text: "What is the purpose of comments in code?",
        options: [
          "To make the code run faster",
          "To execute multiple lines of code",
          "To explain the code and make it more readable",
          "To declare variables"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "What is a boolean value?",
        options: [
          "A number value",
          "A true or false value",
          "A text value",
          "An array value"
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "What is the purpose of an if statement?",
        options: [
          "To create a loop",
          "To declare variables",
          "To make decisions in code based on conditions",
          "To define functions"
        ],
        correctAnswer: 2
      },
      {
        id: 10,
        text: "What is the result of 5 + '5' in JavaScript?",
        options: [
          "10",
          "55",
          "Error",
          "undefined"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: "Data Structures",
    description: "Challenge yourself with data structures problems",
    difficulty: "Medium",
    xpPoints: 200,
    timeLimit: 20,
    questions: [
      {
        id: 1,
        text: "What is the time complexity of quicksort?",
        options: [
          "O(n)",
          "O(n log n)",
          "O(n²)",
          "O(log n)"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "Which data structure uses LIFO (Last In First Out)?",
        options: [
          "Queue",
          "Stack",
          "Linked List",
          "Array"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "What is the main advantage of a hash table?",
        options: [
          "Ordered storage",
          "Fast insertion and lookup",
          "Memory efficiency",
          "Sequential access"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "What is a binary search tree?",
        options: [
          "A tree with exactly two nodes",
          "A tree where each node has at most two children",
          "A tree with only binary numbers",
          "A tree with unlimited children"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        text: "What is the time complexity of accessing an element in an array?",
        options: [
          "O(n)",
          "O(log n)",
          "O(1)",
          "O(n²)"
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        text: "Which data structure is best for implementing a priority queue?",
        options: [
          "Array",
          "Stack",
          "Heap",
          "Linked List"
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        text: "What is the main disadvantage of a linked list?",
        options: [
          "Random access is not allowed",
          "Insertion is slow",
          "Deletion is slow",
          "Uses too much memory"
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "What is a graph?",
        options: [
          "A type of tree",
          "A collection of nodes and edges",
          "A type of array",
          "A sorting algorithm"
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "What is the space complexity of a binary search tree?",
        options: [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "Which traversal visits the root node last?",
        options: [
          "Preorder",
          "Inorder",
          "Postorder",
          "Level order"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: "Advanced Algorithms",
    description: "Master complex algorithmic challenges",
    difficulty: "Hard",
    xpPoints: 300,
    timeLimit: 30,
    questions: [
      {
        id: 1,
        text: "What is dynamic programming?",
        options: [
          "A programming language",
          "An optimization technique that solves complex problems by breaking them down",
          "A type of data structure",
          "A sorting algorithm"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "What is the time complexity of Dijkstra's algorithm with a binary heap?",
        options: [
          "O(V²)",
          "O(V + E)",
          "O((V + E) log V)",
          "O(VE)"
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        text: "Which algorithm is used for finding the minimum spanning tree?",
        options: [
          "Quicksort",
          "Kruskal's algorithm",
          "Binary search",
          "Bubble sort"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "What is the purpose of A* algorithm?",
        options: [
          "Sorting",
          "Pathfinding",
          "Data compression",
          "Pattern matching"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        text: "What is the time complexity of the Floyd-Warshall algorithm?",
        options: [
          "O(V²)",
          "O(V³)",
          "O(VE)",
          "O(V log V)"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "What is the main concept behind divide and conquer algorithms?",
        options: [
          "Breaking problems into smaller subproblems",
          "Solving problems iteratively",
          "Using dynamic programming",
          "Using greedy approach"
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "What is the purpose of the Bellman-Ford algorithm?",
        options: [
          "Finding shortest paths with negative weights",
          "Sorting arrays",
          "Finding minimum spanning trees",
          "Pattern matching"
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        text: "What is the time complexity of the Knuth-Morris-Pratt (KMP) algorithm?",
        options: [
          "O(n)",
          "O(n + m)",
          "O(nm)",
          "O(n log n)"
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "What is the purpose of red-black trees?",
        options: [
          "Sorting data",
          "Self-balancing binary search trees",
          "Pattern matching",
          "Graph traversal"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "Which algorithm is used for topological sorting?",
        options: [
          "Depth-first search",
          "Breadth-first search",
          "Binary search",
          "Quick sort"
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 4,
    title: "Web Development Basics",
    description: "Learn the fundamentals of web development",
    difficulty: "Easy",
    xpPoints: 100,
    timeLimit: 15,
    questions: [
      {
        id: 1,
        text: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        text: "What is CSS used for?",
        options: [
          "Adding functionality to web pages",
          "Styling web pages",
          "Creating databases",
          "Server-side programming"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "What is the purpose of JavaScript?",
        options: [
          "Styling web pages",
          "Creating markup",
          "Adding interactivity to web pages",
          "Database management"
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        text: "What is the correct HTML element for the largest heading?",
        options: [
          "<heading>",
          "<h6>",
          "<head>",
          "<h1>"
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        text: "Which CSS property is used to change the text color?",
        options: [
          "text-color",
          "color",
          "font-color",
          "text-style"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "What is the correct way to create a function in JavaScript?",
        options: [
          "function = myFunction()",
          "function:myFunction()",
          "function myFunction()",
          "create myFunction()"
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        text: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style Sheets"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        text: "Which HTML tag is used to define an unordered list?",
        options: [
          "<ol>",
          "<ul>",
          "<list>",
          "<dl>"
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        text: "What is the correct way to comment in JavaScript?",
        options: [
          "<!-- comment -->",
          "// comment",
          "/* comment */",
          "Both B and C"
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        text: "What is the purpose of the HTML <meta> tag?",
        options: [
          "To display text",
          "To create links",
          "To provide metadata about the document",
          "To create lists"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 5,
    title: "React Fundamentals",
    description: "Test your knowledge of React.js basics",
    difficulty: "Medium",
    xpPoints: 200,
    timeLimit: 20,
    questions: [
      {
        id: 1,
        text: "What is JSX?",
        options: [
          "A JavaScript library",
          "A syntax extension for JavaScript",
          "A database query language",
          "A CSS framework"
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        text: "What is a React component?",
        options: [
          "A JavaScript function",
          "A reusable piece of UI",
          "A CSS class",
          "A HTML element"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        text: "What is the purpose of state in React?",
        options: [
          "To store static data",
          "To manage component's dynamic data",
          "To style components",
          "To create routes"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        text: "What is the virtual DOM?",
        options: [
          "A copy of the real DOM",
          "A browser feature",
          "A JavaScript library",
          "A CSS framework"
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        text: "What hook is used to perform side effects in React?",
        options: [
          "useState",
          "useEffect",
          "useContext",
          "useReducer"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        text: "What is the purpose of props in React?",
        options: [
          "To pass data between components",
          "To style components",
          "To create routes",
          "To manage state"
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        text: "What is the React Fragment?",
        options: [
          "A component type",
          "A way to group elements without adding extra nodes",
          "A routing mechanism",
          "A state management tool"
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        text: "What is the purpose of useContext hook?",
        options: [
          "To manage state",
          "To perform side effects",
          "To subscribe to context",
          "To optimize performance"
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        text: "What is the purpose of keys in React lists?",
        options: [
          "To style list items",
          "To identify list items uniquely",
          "To sort list items",
          "To filter list items"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        text: "What is the purpose of React.memo?",
        options: [
          "To memorize values",
          "To prevent unnecessary re-renders",
          "To create memoized selectors",
          "To cache API responses"
        ],
        correctAnswer: 1
      }
    ]
  }
];

const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Aashika Jain",
    avatar: "/avatars/aashika.png",
    xpPoints: 2500,
    quizzesCompleted: 8
  },
  {
    rank: 2,
    name: "Aisha Patel",
    avatar: "/avatars/aisha.png",
    xpPoints: 2200,
    quizzesCompleted: 7
  },
  {
    rank: 3,
    name: "Neha Sharma",
    avatar: "/avatars/neha.png",
    xpPoints: 2000,
    quizzesCompleted: 6
  }
];

const QuizCard = ({ quiz, onStart }: { quiz: Quiz; onStart: (quiz: Quiz) => void }) => (
  <Card className="bg-[#0F1729] border-gray-800 hover:border-purple-600 transition-all cursor-pointer">
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <CardTitle className="text-xl">{quiz.title}</CardTitle>
          <CardDescription>{quiz.description}</CardDescription>
        </div>
        <Badge 
          variant={quiz.difficulty === 'Easy' ? 'default' : quiz.difficulty === 'Medium' ? 'secondary' : 'destructive'}
        >
          {quiz.difficulty}
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-400" />
          <span>{quiz.xpPoints} XP</span>
        </div>
        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5 text-blue-400" />
          <span>{quiz.timeLimit} mins</span>
        </div>
      </div>
      <Button 
        className="w-full bg-purple-600 hover:bg-purple-700"
        onClick={() => onStart(quiz)}
      >
        Start Quiz
      </Button>
    </CardContent>
  </Card>
);

const LeaderboardCard = ({ entry }: { entry: LeaderboardEntry }) => (
  <div className="flex items-center justify-between p-4 rounded-lg border border-gray-800 bg-[#0F1729]">
    <div className="flex items-center gap-4">
      <div className="w-8 text-center font-bold text-xl">
        {entry.rank === 1 && "🥇"}
        {entry.rank === 2 && "🥈"}
        {entry.rank === 3 && "🥉"}
        {entry.rank > 3 && `#${entry.rank}`}
      </div>
      <Avatar className="h-10 w-10 border border-gray-800">
        <AvatarImage src={entry.avatar} />
        <AvatarFallback>{entry.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-semibold">{entry.name}</div>
        <div className="text-sm text-gray-400">{entry.quizzesCompleted} quizzes completed</div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
      <span className="font-bold">{entry.xpPoints} XP</span>
    </div>
  </div>
);

const ActiveQuiz = ({ quiz, onComplete }: { quiz: Quiz; onComplete: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quiz.questions.length).fill(null));

  const handleNext = () => {
    if (selectedAnswer !== null) {
      // Save the answer
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      // Update score if correct
      if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      // Move to next question or show results
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null); // Reset selection for next question
      } else {
        setShowResult(true);
      }
    }
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(parseInt(value));
  };

  if (showResult) {
    return (
      <Card className="bg-[#0F1729] border-gray-800">
        <CardHeader>
          <CardTitle>Quiz Completed!</CardTitle>
          <CardDescription>Here's how you did</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              {score}/{quiz.questions.length}
            </div>
            <div className="text-gray-400">Questions Correct</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>XP Earned</span>
              <span>{Math.round((score / quiz.questions.length) * quiz.xpPoints)} XP</span>
            </div>
            <Progress value={(score / quiz.questions.length) * 100} className="bg-gray-800" />
          </div>
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700"
            onClick={onComplete}
          >
            Back to Quizzes
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestionData = quiz.questions[currentQuestion];

  return (
    <Card className="bg-[#0F1729] border-gray-800">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{quiz.title}</CardTitle>
          <Badge variant="outline">
            Question {currentQuestion + 1}/{quiz.questions.length}
          </Badge>
        </div>
        <Progress 
          value={(currentQuestion / quiz.questions.length) * 100} 
          className="mt-4 bg-gray-800"
        />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-lg font-medium">
          {currentQuestionData.text}
        </div>
        <RadioGroup 
          value={selectedAnswer?.toString()} 
          onValueChange={handleAnswerSelect}
        >
          {currentQuestionData.options.map((option, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-2 p-4 rounded-lg border ${
                selectedAnswer === index 
                  ? 'border-purple-600 bg-purple-600/10' 
                  : 'border-gray-800 hover:border-purple-600'
              } cursor-pointer transition-colors`}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <div className="flex justify-between items-center pt-4">
          <div className="text-sm text-gray-400">
            {quiz.timeLimit} minutes remaining
          </div>
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Quiz = () => {
  const [activeTab, setActiveTab] = useState("available");
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);

  const handleStartQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
  };

  const handleCompleteQuiz = () => {
    setActiveQuiz(null);
  };

  return (
    <DashboardLayout userType="mentee">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Skill Quizzes</h1>
          <p className="text-gray-400">
            Test your knowledge and earn XP points
          </p>
        </div>

        {activeQuiz ? (
          <ActiveQuiz quiz={activeQuiz} onComplete={handleCompleteQuiz} />
        ) : (
          <Tabs defaultValue="available" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 bg-[#1B2537]">
              <TabsTrigger 
                value="available"
                className="data-[state=active]:bg-purple-600"
              >
                Available Quizzes
              </TabsTrigger>
              <TabsTrigger 
                value="leaderboard"
                className="data-[state=active]:bg-purple-600"
              >
                Leaderboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="available" className="space-y-6">
              {quizzes.map(quiz => (
                <QuizCard 
                  key={quiz.id} 
                  quiz={quiz} 
                  onStart={handleStartQuiz}
                />
              ))}
            </TabsContent>

            <TabsContent value="leaderboard" className="space-y-4">
              {leaderboard.map(entry => (
                <LeaderboardCard key={entry.rank} entry={entry} />
              ))}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Quiz; 