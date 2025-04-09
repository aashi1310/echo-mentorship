
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, Filter, Star, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layout/PageLayout";

interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  reviews: number;
  price: number;
  currency: string;
  tags: string[];
  availability: string;
  image: string;
  expertise: string[];
}

const FindMentors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [field, setField] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("");
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>([]);
  const { toast } = useToast();

  // Mock data for mentors
  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Rajat Kumar",
      role: "Senior Software Engineer",
      company: "TechCorp India",
      rating: 4.9,
      reviews: 48,
      price: 1500,
      currency: "₹",
      tags: ["Full Stack", "React", "Node.js"],
      availability: "Evenings, Weekends",
      image: "/placeholder.svg",
      expertise: ["Career Guidance", "Technical Skills", "Interview Prep"],
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Product Manager",
      company: "InnovateX",
      rating: 4.8,
      reviews: 36,
      price: 2000,
      currency: "₹",
      tags: ["Product Strategy", "UX", "Agile"],
      availability: "Weekends",
      image: "/placeholder.svg",
      expertise: ["Product Management", "Career Transitions", "Leadership"],
    },
    {
      id: 3,
      name: "Vikram Mehta",
      role: "Tech Lead",
      company: "GlobalTech Solutions",
      rating: 4.7,
      reviews: 52,
      price: 1800,
      currency: "₹",
      tags: ["Java", "Architecture", "Cloud"],
      availability: "Weekday Evenings",
      image: "/placeholder.svg",
      expertise: ["System Design", "Technical Leadership", "Problem Solving"],
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "UI/UX Designer",
      company: "CreativeMinds",
      rating: 4.9,
      reviews: 29,
      price: 1600,
      currency: "₹",
      tags: ["UI Design", "User Research", "Figma"],
      availability: "Flexible",
      image: "/placeholder.svg",
      expertise: ["Portfolio Building", "Design Thinking", "Career Advice"],
    },
    {
      id: 5,
      name: "Arjun Kapoor",
      role: "Data Scientist",
      company: "DataInsights",
      rating: 4.6,
      reviews: 31,
      price: 1700,
      currency: "₹",
      tags: ["Python", "Machine Learning", "AI"],
      availability: "Weekends",
      image: "/placeholder.svg",
      expertise: ["Data Analysis", "ML Projects", "Career Guidance"],
    },
    {
      id: 6,
      name: "Meera Patel",
      role: "Marketing Director",
      company: "BrandGrowth",
      rating: 4.8,
      reviews: 42,
      price: 2200,
      currency: "₹",
      tags: ["Digital Marketing", "Brand Strategy", "Growth"],
      availability: "Weekday Evenings",
      image: "/placeholder.svg",
      expertise: ["Marketing Strategy", "Personal Branding", "Leadership"],
    },
    {
      id: 7,
      name: "Rahul Verma",
      role: "Senior Backend Engineer",
      company: "CloudServe",
      rating: 4.7,
      reviews: 38,
      price: 1400,
      currency: "₹",
      tags: ["Java", "Microservices", "AWS"],
      availability: "Flexible",
      image: "/placeholder.svg",
      expertise: ["System Design", "Performance Optimization", "Career Growth"],
    },
    {
      id: 8,
      name: "Ananya Das",
      role: "HR Manager",
      company: "TalentFirst",
      rating: 4.9,
      reviews: 27,
      price: 1300,
      currency: "₹",
      tags: ["Recruitment", "Employee Development", "HR"],
      availability: "Weekends",
      image: "/placeholder.svg",
      expertise: ["Resume Building", "Interview Preparation", "Career Planning"],
    },
  ];

  // Filter mentors based on search and filters
  useEffect(() => {
    let results = mentors;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (mentor) =>
          mentor.name.toLowerCase().includes(query) ||
          mentor.role.toLowerCase().includes(query) ||
          mentor.company.toLowerCase().includes(query) ||
          mentor.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          mentor.expertise.some((exp) => exp.toLowerCase().includes(query))
      );
    }

    if (field) {
      results = results.filter((mentor) =>
        mentor.tags.some((tag) => tag.toLowerCase().includes(field.toLowerCase()))
      );
    }

    if (price) {
      if (price === "low") {
        results = results.filter((mentor) => mentor.price < 1600);
      } else if (price === "medium") {
        results = results.filter(
          (mentor) => mentor.price >= 1600 && mentor.price <= 1900
        );
      } else if (price === "high") {
        results = results.filter((mentor) => mentor.price > 1900);
      }
    }

    if (availability) {
      results = results.filter((mentor) =>
        mentor.availability.toLowerCase().includes(availability.toLowerCase())
      );
    }

    setFilteredMentors(results);
  }, [searchQuery, field, price, availability]);

  const handleBookSession = (mentorName: string) => {
    toast({
      title: "Session Request Sent",
      description: `You've requested a free trial session with ${mentorName}. They will respond shortly.`,
    });
  };

  return (
    <PageLayout>
      <div className="container px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect Mentor
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Connect with experienced Indian mentors who can guide you on your
            professional journey.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name, role, skills or expertise..."
              className="pl-10 py-6 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <Select value={field} onValueChange={setField}>
              <SelectTrigger>
                <SelectValue placeholder="Field of Expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fields</SelectItem>
                <SelectItem value="software">Software Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="product">Product Management</SelectItem>
                <SelectItem value="data">Data Science</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="hr">HR & Recruitment</SelectItem>
              </SelectContent>
            </Select>

            <Select value={price} onValueChange={setPrice}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Budget (≤₹1500)</SelectItem>
                <SelectItem value="medium">Mid-Range (₹1600-₹1900)</SelectItem>
                <SelectItem value="high">Premium (≥₹2000)</SelectItem>
              </SelectContent>
            </Select>

            <Select value={availability} onValueChange={setAvailability}>
              <SelectTrigger>
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Time</SelectItem>
                <SelectItem value="weekends">Weekends</SelectItem>
                <SelectItem value="evenings">Weekday Evenings</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <TabsList className="mb-8 mx-auto flex justify-center">
            <TabsTrigger value="all">All Mentors</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="new">New Mentors</TabsTrigger>
            <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredMentors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{mentor.name}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm font-medium">
                            {mentor.rating}
                          </span>
                          <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                            ({mentor.reviews})
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                        {mentor.role}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {mentor.company}
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {mentor.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <span className="mr-2">Available:</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {mentor.availability}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                        <div className="text-lg font-bold text-echopurple-600 dark:text-echopurple-400">
                          {mentor.currency}
                          {mentor.price}
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            /session
                          </span>
                        </div>
                        <Button
                          onClick={() => handleBookSession(mentor.name)}
                          size="sm"
                        >
                          Book Free Trial
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
                  <Search className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No mentors found</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
                  We couldn't find any mentors matching your criteria. Try
                  adjusting your filters or search query.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setField("");
                    setPrice("");
                    setAvailability("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {filteredMentors.length > 0 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </TabsContent>

          <TabsContent value="trending" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors
                .filter((mentor) => mentor.reviews > 35)
                .slice(0, 3)
                .map((mentor) => (
                  <div
                    key={mentor.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{mentor.name}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm font-medium">
                            {mentor.rating}
                          </span>
                          <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                            ({mentor.reviews})
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                        {mentor.role}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {mentor.company}
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {mentor.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <span className="mr-2">Available:</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {mentor.availability}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                        <div className="text-lg font-bold text-echopurple-600 dark:text-echopurple-400">
                          {mentor.currency}
                          {mentor.price}
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            /session
                          </span>
                        </div>
                        <Button
                          onClick={() => handleBookSession(mentor.name)}
                          size="sm"
                        >
                          Book Free Trial
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="new" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors
                .filter((_, idx) => idx >= 5)
                .slice(0, 3)
                .map((mentor) => (
                  <div
                    key={mentor.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{mentor.name}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm font-medium">
                            {mentor.rating}
                          </span>
                          <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                            ({mentor.reviews})
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                        {mentor.role}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {mentor.company}
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {mentor.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <span className="mr-2">Available:</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {mentor.availability}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                        <div className="text-lg font-bold text-echopurple-600 dark:text-echopurple-400">
                          {mentor.currency}
                          {mentor.price}
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            /session
                          </span>
                        </div>
                        <Button
                          onClick={() => handleBookSession(mentor.name)}
                          size="sm"
                        >
                          Book Free Trial
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="top-rated" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors
                .filter((mentor) => mentor.rating >= 4.8)
                .slice(0, 3)
                .map((mentor) => (
                  <div
                    key={mentor.id}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{mentor.name}</h3>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="ml-1 text-sm font-medium">
                            {mentor.rating}
                          </span>
                          <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">
                            ({mentor.reviews})
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                        {mentor.role}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {mentor.company}
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {mentor.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <span className="mr-2">Available:</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {mentor.availability}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                        <div className="text-lg font-bold text-echopurple-600 dark:text-echopurple-400">
                          {mentor.currency}
                          {mentor.price}
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            /session
                          </span>
                        </div>
                        <Button
                          onClick={() => handleBookSession(mentor.name)}
                          size="sm"
                        >
                          Book Free Trial
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Become a Mentor CTA */}
        <div className="max-w-6xl mx-auto mt-16 p-8 bg-gradient-to-r from-echopurple-600 to-echoblue-600 rounded-2xl text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Become a Mentor on EchoMentor
              </h2>
              <p className="mb-6 opacity-90">
                Share your expertise, build your personal brand, and make a
                difference in someone's career journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/20 rounded-full p-1 mr-3">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Set your own rates and availability</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/20 rounded-full p-1 mr-3">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Connect with motivated mentees from across India
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/20 rounded-full p-1 mr-3">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">
                    Earn badge certifications and improve your profile
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <Link to="/signup">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-echopurple-600 hover:bg-white/90"
                >
                  Apply as Mentor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="mt-3 text-sm opacity-80">
                Already a mentor?{" "}
                <Link to="/signin" className="underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FindMentors;
