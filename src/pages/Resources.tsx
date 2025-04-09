
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Search,
  FileText,
  Video,
  Download,
  Lock,
  ArrowRight,
  Info,
  Play,
  Clock
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { useToast } from "@/hooks/use-toast";

interface Resource {
  id: number;
  title: string;
  description: string;
  type: "article" | "video" | "template" | "guide" | "toolkit";
  category: string;
  premium: boolean;
  featured: boolean;
  duration?: string;
  thumbnail: string;
}

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const resources: Resource[] = [
    {
      id: 1,
      title: "The Ultimate Guide to Technical Interviews",
      description: "Comprehensive preparation guide covering algorithms, data structures, system design, and behavioral questions.",
      type: "guide",
      category: "career",
      premium: false,
      featured: true,
      duration: "25 min read",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Building an Effective Resume for Tech Roles",
      description: "Learn how to create a standout tech resume that gets past ATS and catches the recruiter's eye.",
      type: "article",
      category: "career",
      premium: false,
      featured: false,
      duration: "10 min read",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Career Transition Roadmap: Non-Tech to Tech",
      description: "A step-by-step guide for professionals looking to transition into technical roles from non-technical backgrounds.",
      type: "guide",
      category: "career",
      premium: true,
      featured: true,
      duration: "30 min read",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Effective Communication Skills for Professionals",
      description: "Master the art of clear and persuasive communication in workplace settings with practical exercises.",
      type: "video",
      category: "skills",
      premium: false,
      featured: false,
      duration: "45 min",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 5,
      title: "Goal Setting & OKR Template",
      description: "Ready-to-use template for setting professional goals and tracking progress using the OKR framework.",
      type: "template",
      category: "productivity",
      premium: true,
      featured: false,
      thumbnail: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Mastering Product Management: From Idea to Launch",
      description: "Comprehensive video series on product management principles, methodologies, and best practices.",
      type: "video",
      category: "skills",
      premium: true,
      featured: true,
      duration: "3.5 hours",
      thumbnail: "/placeholder.svg",
    },
    {
      id: 7,
      title: "Leadership Toolkit for New Managers",
      description: "Essential resources for first-time managers, including templates, checklists, and practical advice.",
      type: "toolkit",
      category: "leadership",
      premium: true,
      featured: true,
      thumbnail: "/placeholder.svg",
    },
    {
      id: 8,
      title: "Networking Scripts for Industry Events",
      description: "Practical conversation starters and follow-up templates for effective professional networking.",
      type: "template",
      category: "career",
      premium: false,
      featured: false,
      thumbnail: "/placeholder.svg",
    },
  ];

  const filteredResources = searchQuery
    ? resources.filter(
        (resource) =>
          resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : resources;

  const featuredResources = resources.filter((resource) => resource.featured);
  const careerResources = resources.filter((resource) => resource.category === "career");
  const skillsResources = resources.filter((resource) => resource.category === "skills");
  const leadershipResources = resources.filter((resource) => resource.category === "leadership");
  const productivityResources = resources.filter((resource) => resource.category === "productivity");

  const handleResourceClick = (resource: Resource) => {
    if (resource.premium) {
      toast({
        title: "Premium Content",
        description: "This resource requires a premium subscription. Upgrade your plan to access it.",
        variant: "default",
      });
    } else {
      toast({
        title: "Resource Accessed",
        description: `You're now viewing "${resource.title}"`,
      });
    }
  };

  const getTypeIcon = (type: Resource["type"]) => {
    switch (type) {
      case "article":
        return <FileText className="h-6 w-6" />;
      case "video":
        return <Video className="h-6 w-6" />;
      case "template":
        return <Download className="h-6 w-6" />;
      case "guide":
        return <BookOpen className="h-6 w-6" />;
      case "toolkit":
        return <Info className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  const renderResourceCard = (resource: Resource) => (
    <Card key={resource.id} className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={resource.thumbnail}
          alt={resource.title}
          className="w-full h-full object-cover"
        />
        {resource.premium && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-yellow-500 hover:bg-yellow-600">
              <Lock className="mr-1 h-3 w-3" /> Premium
            </Badge>
          </div>
        )}
        <div className="absolute bottom-2 left-2">
          <Badge
            variant="secondary"
            className={`
              ${resource.type === "article" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : ""}
              ${resource.type === "video" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : ""}
              ${resource.type === "template" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : ""}
              ${resource.type === "guide" ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" : ""}
              ${resource.type === "toolkit" ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" : ""}
            `}
          >
            {getTypeIcon(resource.type)}
            <span className="ml-1 capitalize">{resource.type}</span>
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{resource.title}</CardTitle>
        <CardDescription>
          {resource.duration && (
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
              <Clock className="h-3 w-3 mr-1" />
              {resource.duration}
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {resource.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={resource.premium ? "outline" : "default"}
          onClick={() => handleResourceClick(resource)}
        >
          {resource.premium ? (
            <>
              <Lock className="mr-2 h-4 w-4" />
              Unlock Resource
            </>
          ) : resource.type === "video" ? (
            <>
              <Play className="mr-2 h-4 w-4" />
              Watch Now
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Access Resource
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <PageLayout>
      <div className="container px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Resource Library
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Access guides, templates, videos, and more to accelerate your professional growth
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search resources..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Resource Categories */}
        {searchQuery ? (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">
              Search Results {filteredResources.length > 0 && `(${filteredResources.length})`}
            </h2>
            {filteredResources.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No resources found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  We couldn't find any resources matching your search query.
                </p>
                <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredResources.map((resource) => renderResourceCard(resource))}
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="featured">
              <TabsList className="mb-8">
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="career">Career</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="productivity">Productivity</TabsTrigger>
              </TabsList>

              <TabsContent value="featured">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {featuredResources.map((resource) => renderResourceCard(resource))}
                </div>
              </TabsContent>

              <TabsContent value="career">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {careerResources.map((resource) => renderResourceCard(resource))}
                </div>
              </TabsContent>

              <TabsContent value="skills">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {skillsResources.map((resource) => renderResourceCard(resource))}
                </div>
              </TabsContent>

              <TabsContent value="leadership">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {leadershipResources.map((resource) => renderResourceCard(resource))}
                </div>
              </TabsContent>

              <TabsContent value="productivity">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {productivityResources.map((resource) => renderResourceCard(resource))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Premium Banner */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-echopurple-600 to-echoblue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Unlock Premium Resources
                  </h2>
                  <p className="text-lg opacity-90 mb-8">
                    Upgrade to a premium plan to access our full library of
                    curated content, templates, and video courses.
                  </p>
                  <Link to="/pricing">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-echopurple-600 hover:bg-white/90"
                    >
                      View Premium Plans
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <img
                    src="/placeholder.svg"
                    alt="Premium resources"
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Request Resources Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Don't See What You Need?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            If you're looking for specific resources, let us know and we'll work
            on adding them to our library.
          </p>
          <Link to="/contact">
            <Button variant="outline">
              Request Resources
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resources;
