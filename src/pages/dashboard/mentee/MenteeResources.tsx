
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Download, ExternalLink, Search, Filter, BookOpen } from "lucide-react";

// Sample data for resources
const recommendedResources = [
  {
    id: 1,
    title: "The Ultimate Interview Preparation Guide",
    description: "A comprehensive guide to ace your product management interviews.",
    type: "PDF",
    size: "2.4 MB",
    free: true,
    recommended: true,
    mentor: "Rajat Kumar",
    date: "Apr 5, 2023",
  },
  {
    id: 2,
    title: "Advanced React Patterns Course",
    description: "Learn advanced React patterns used in professional applications.",
    type: "Video Course",
    size: "650 MB",
    free: false,
    price: "₹1,499",
    recommended: true,
    mentor: "Meera Patel",
    date: "Mar 28, 2023",
  },
  {
    id: 3,
    title: "Effective Communication in Tech Teams",
    description: "Improve your communication skills in technical environments.",
    type: "Article",
    size: "1.2 MB",
    free: true,
    recommended: false,
    date: "Apr 2, 2023",
  },
];

const savedResources = [
  {
    id: 4,
    title: "Product Management Fundamentals",
    description: "Core concepts every aspiring product manager should know.",
    type: "eBook",
    size: "5.8 MB",
    free: true,
    date: "Mar 15, 2023",
  },
  {
    id: 5,
    title: "Resume & Cover Letter Templates",
    description: "Professional templates for job applications.",
    type: "ZIP Archive",
    size: "8.2 MB",
    free: true,
    date: "Mar 20, 2023",
  }
];

// Sample data for premium content
const premiumResources = [
  {
    id: 6,
    title: "Product Manager Interview Masterclass",
    description: "Premium video course covering all aspects of PM interviews.",
    type: "Video Course",
    duration: "8 hours",
    price: "₹2,999",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 7,
    title: "Career Transition Blueprint",
    description: "Step-by-step guide to successfully switch careers.",
    type: "Interactive Guide",
    duration: "Self-paced",
    price: "₹1,799",
    rating: 4.7,
    reviews: 86,
  },
  {
    id: 8,
    title: "The Product Leadership Toolkit",
    description: "Resources, templates and strategies for aspiring product leaders.",
    type: "Resource Pack",
    items: "25+ resources",
    price: "₹1,299",
    rating: 4.8,
    reviews: 74,
  },
];

const MenteeResources = () => {
  const [activeTab, setActiveTab] = useState("recommended");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout userType="mentee">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Discover learning materials to support your growth
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>
              <BookOpen className="mr-2 h-4 w-4" />
              Browse Library
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              placeholder="Search resources..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="recommended" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="saved">Saved Resources</TabsTrigger>
            <TabsTrigger value="premium">Premium Content</TabsTrigger>
          </TabsList>

          <TabsContent value="recommended">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Resources</CardTitle>
                <CardDescription>Materials suggested by your mentors</CardDescription>
              </CardHeader>
              <CardContent>
                {recommendedResources.length > 0 ? (
                  <div className="space-y-4">
                    {recommendedResources.map((resource) => (
                      <div key={resource.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-echopurple-100 dark:bg-echopurple-900 p-2 rounded-md mr-4">
                            <FileText className="h-6 w-6 text-echopurple-600 dark:text-echopurple-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <h3 className="font-medium">{resource.title}</h3>
                              <div className="flex gap-2">
                                <Badge variant="outline">{resource.type}</Badge>
                                {resource.free ? (
                                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                    Free
                                  </Badge>
                                ) : (
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                    {resource.price}
                                  </Badge>
                                )}
                                {resource.recommended && (
                                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                                    Recommended
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {resource.description}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {resource.mentor ? `Recommended by ${resource.mentor} • ` : ""} Added on {resource.date}
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Save for Later
                                </Button>
                                <Button size="sm">
                                  {resource.free ? (
                                    <>
                                      <Download className="h-4 w-4 mr-1" />
                                      Download
                                    </>
                                  ) : (
                                    <>
                                      Purchase
                                    </>
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <FileText className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium">No Recommended Resources</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                      You don't have any recommended resources yet. They will appear here when your mentors suggest materials.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="saved">
            <Card>
              <CardHeader>
                <CardTitle>Saved Resources</CardTitle>
                <CardDescription>Materials you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                {savedResources.length > 0 ? (
                  <div className="space-y-4">
                    {savedResources.map((resource) => (
                      <div key={resource.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-echopurple-100 dark:bg-echopurple-900 p-2 rounded-md mr-4">
                            <FileText className="h-6 w-6 text-echopurple-600 dark:text-echopurple-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <h3 className="font-medium">{resource.title}</h3>
                              <div className="flex gap-2">
                                <Badge variant="outline">{resource.type}</Badge>
                                {resource.free ? (
                                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                    Free
                                  </Badge>
                                ) : (
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                    {resource.price}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {resource.description}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                Saved on {resource.date}
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Remove
                                </Button>
                                <Button size="sm">
                                  {resource.free ? (
                                    <>
                                      <Download className="h-4 w-4 mr-1" />
                                      Download
                                    </>
                                  ) : (
                                    <>
                                      Purchase
                                    </>
                                  )}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium">No Saved Resources</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                      You haven't saved any resources yet. Browse the recommended section and save resources for later.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="premium">
            <Card>
              <CardHeader>
                <CardTitle>Premium Content</CardTitle>
                <CardDescription>High-quality resources to accelerate your growth</CardDescription>
              </CardHeader>
              <CardContent>
                {premiumResources.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-3">
                    {premiumResources.map((resource) => (
                      <div key={resource.id} className="border rounded-lg overflow-hidden">
                        <div className="h-40 bg-gradient-to-r from-echopurple-600 to-echoblue-600 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                              <FileText className="h-8 w-8 text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-3">
                            <Badge variant="outline" className="border-white/50 text-white">
                              {resource.type}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg mb-1">{resource.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            {resource.description}
                          </p>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                  <svg
                                    key={index}
                                    className={`h-4 w-4 ${
                                      index < Math.floor(resource.rating) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-sm ml-1">{resource.rating}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                                ({resource.reviews})
                              </span>
                            </div>
                            <div className="text-sm">
                              {resource.duration || resource.items}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-lg">{resource.price}</div>
                            <Button size="sm">
                              Purchase
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium">No Premium Content</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                      There are no premium resources available at the moment. Check back later.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default MenteeResources;
