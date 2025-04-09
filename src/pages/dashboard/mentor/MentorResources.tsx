
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Upload, ExternalLink, Search, Filter, Plus, BookOpen } from "lucide-react";

// Sample data for resources
const sharedResources = [
  {
    id: 1,
    title: "Technical Interview Question Bank",
    description: "A comprehensive list of common technical interview questions and approaches to solving them.",
    type: "PDF",
    size: "2.4 MB",
    shared: 12,
    date: "Mar 15, 2023",
  },
  {
    id: 2,
    title: "Career Transition Guide",
    description: "Step-by-step guide for transitioning to a new tech role or specialization.",
    type: "Document",
    size: "1.8 MB",
    shared: 8,
    date: "Apr 2, 2023",
  },
  {
    id: 3,
    title: "System Design Cheatsheet",
    description: "Quick reference for system design interview preparation.",
    type: "PDF",
    size: "3.2 MB",
    shared: 15,
    date: "Feb 28, 2023",
  },
];

const personalResources = [
  {
    id: 4,
    title: "Mentoring Best Practices",
    description: "Personal notes on effective mentoring approaches.",
    type: "Document",
    size: "850 KB",
    date: "Jan 10, 2023",
  },
  {
    id: 5,
    title: "Leadership Workshop Slides",
    description: "Presentation slides for leadership development.",
    type: "Presentation",
    size: "4.1 MB",
    date: "Mar 25, 2023",
  }
];

// Sample data for recommended external resources
const externalResources = [
  {
    id: 1,
    title: "Effective Communication in Tech Teams",
    source: "Tech Leadership Journal",
    url: "#",
    type: "Article",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    source: "Frontend Masters",
    url: "#",
    type: "Course",
  },
  {
    id: 3,
    title: "Building Resilient Systems",
    source: "System Design Conference",
    url: "#",
    type: "Video",
  },
];

const MentorResources = () => {
  const [activeTab, setActiveTab] = useState("shared");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout userType="mentor">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage and share resources with your mentees
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Upload New Resource
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

        <Tabs defaultValue="shared" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="shared">Shared Resources</TabsTrigger>
            <TabsTrigger value="personal">Personal Resources</TabsTrigger>
            <TabsTrigger value="external">External Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="shared">
            <Card>
              <CardHeader>
                <CardTitle>Shared Resources</CardTitle>
                <CardDescription>Resources you've shared with your mentees</CardDescription>
              </CardHeader>
              <CardContent>
                {sharedResources.length > 0 ? (
                  <div className="space-y-4">
                    {sharedResources.map((resource) => (
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
                                <Badge variant="secondary">{resource.size}</Badge>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {resource.description}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                Shared with {resource.shared} mentees • Uploaded on {resource.date}
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Share
                                </Button>
                                <Button size="sm">
                                  View
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
                    <h3 className="text-lg font-medium">No Shared Resources</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                      You haven't shared any resources with your mentees yet.
                    </p>
                    <Button className="mt-4">
                      Upload Resource
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Resources</CardTitle>
                <CardDescription>Private resources for your own reference</CardDescription>
              </CardHeader>
              <CardContent>
                {personalResources.length > 0 ? (
                  <div className="space-y-4">
                    {personalResources.map((resource) => (
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
                                <Badge variant="secondary">{resource.size}</Badge>
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {resource.description}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                Uploaded on {resource.date}
                              </div>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Share
                                </Button>
                                <Button size="sm">
                                  View
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
                    <h3 className="text-lg font-medium">No Personal Resources</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                      You haven't uploaded any personal resources yet.
                    </p>
                    <Button className="mt-4">
                      Upload Resource
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="external">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>External Resources</CardTitle>
                  <CardDescription>Recommended external resources for mentees</CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" /> Add External Resource
                </Button>
              </CardHeader>
              <CardContent>
                {externalResources.length > 0 ? (
                  <div className="space-y-4">
                    {externalResources.map((resource) => (
                      <div key={resource.id} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="flex items-start">
                          <div className="bg-echopurple-100 dark:bg-echopurple-900 p-2 rounded-md mr-4">
                            <ExternalLink className="h-6 w-6 text-echopurple-600 dark:text-echopurple-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <h3 className="font-medium">{resource.title}</h3>
                              <Badge variant="outline">{resource.type}</Badge>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              From: {resource.source}
                            </p>
                            <div className="flex items-center justify-end mt-4">
                              <Button variant="outline" size="sm">
                                <ExternalLink className="h-4 w-4 mr-1" /> Visit Resource
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12">
                    <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium">No External Resources</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 text-center max-w-sm">
                      You haven't added any external resource links yet.
                    </p>
                    <Button className="mt-4">
                      Add External Resource
                    </Button>
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

export default MentorResources;
