
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import FindMentors from "./pages/FindMentors";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Team from "./pages/Team";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SuccessStories from "./pages/SuccessStories";

// Dashboard pages
import MentorDashboard from "./pages/dashboard/mentor/MentorDashboard";
import MentorProfile from "./pages/dashboard/mentor/MentorProfile";
import MentorSessions from "./pages/dashboard/mentor/MentorSessions";
import MentorAvailability from "./pages/dashboard/mentor/MentorAvailability";
import MentorResources from "./pages/dashboard/mentor/MentorResources";
import MentorMentees from "./pages/dashboard/mentor/MentorMentees";
import MentorAnalytics from "./pages/dashboard/mentor/MentorAnalytics";

import MenteeDashboard from "./pages/dashboard/mentee/MenteeDashboard";
import MenteeProfile from "./pages/dashboard/mentee/MenteeProfile";
import MenteeSessions from "./pages/dashboard/mentee/MenteeSessions";
import MenteeResources from "./pages/dashboard/mentee/MenteeResources";
import MenteeMentors from "./pages/dashboard/mentee/MenteeMentors";
import MenteeGoals from "./pages/dashboard/mentee/MenteeGoals";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="echomentor-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/find-mentors" element={<FindMentors />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/team" element={<Team />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            
            {/* Mentor Dashboard Routes */}
            <Route path="/mentor/dashboard" element={<MentorDashboard />} />
            <Route path="/mentor/profile" element={<MentorProfile />} />
            <Route path="/mentor/sessions" element={<MentorSessions />} />
            <Route path="/mentor/availability" element={<MentorAvailability />} />
            <Route path="/mentor/resources" element={<MentorResources />} />
            <Route path="/mentor/mentees" element={<MentorMentees />} />
            <Route path="/mentor/analytics" element={<MentorAnalytics />} />
            
            {/* Mentee Dashboard Routes */}
            <Route path="/mentee/dashboard" element={<MenteeDashboard />} />
            <Route path="/mentee/profile" element={<MenteeProfile />} />
            <Route path="/mentee/sessions" element={<MenteeSessions />} />
            <Route path="/mentee/resources" element={<MenteeResources />} />
            <Route path="/mentee/mentors" element={<MenteeMentors />} />
            <Route path="/mentee/goals" element={<MenteeGoals />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
