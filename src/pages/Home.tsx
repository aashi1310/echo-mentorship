import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ArrowRight, BookOpen, Calendar, Award, Users, Target } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { useState } from "react";
import CrisisDialog from "@/components/CrisisDialog";

const Home = () => {
  const [showCrisisDialog, setShowCrisisDialog] = useState(false);
  const featuredMentors = [
    {
      name: "Divyanshi Agarwal",
      role: "Frontend Development Expert",
      image: "/Divyanshi.jpg",
      specialties: ["Frontend Development", "React", "UI/UX"],
    },
    {
      name: "Priyank Mishra",
      role: "Backend Development Lead",
      image: "/mentors/priyank-mishra.svg",
      specialties: ["Backend Development", "System Design", "Node.js"],
    },
    {
      name: "Arjun Singh",
      role: "Cloud Architecture Specialist",
      image: "/placeholder.svg",
      specialties: ["Cloud Infrastructure", "DevOps", "System Design"],
    },
    {
      name: "Priya Sharma",
      role: "Engineering Manager",
      image: "/priya.jpeg",
      specialties: ["Team Leadership", "Career Growth", "Technical Roadmaps"],
    },
  ];

  const testimonials = [
    {
      name: "Aarav Patel",
      role: "Software Engineer",
      image: "/placeholder.svg",
      content:
        "EchoMentor connected me with a senior tech leader who helped me navigate my career transition. The structured sessions and goal tracking made a real difference in my progress.",
      stars: 5,
    },
    {
      name: "Meera Singh",
      role: "Marketing Professional",
      image: "/placeholder.svg",
      content:
        "Finding a mentor who understood my specific challenges in digital marketing was game-changing. The platform made scheduling and communication seamless.",
      stars: 5,
    },
    {
      name: "Vikram Sharma",
      role: "MBA Student",
      image: "/placeholder.svg",
      content:
        "As a mentor on EchoMentor, I've been able to give back while also improving my own leadership skills. The platform's tools make mentoring effective and enjoyable.",
      stars: 4,
    },
  ];

  return (
    <PageLayout showBanner>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Where{" "}
                <span className="bg-gradient-to-r from-echopurple-600 to-echoblue-500 bg-clip-text text-transparent hover:from-echoblue-500 hover:to-echopurple-600 transition-all duration-500">
                  guidance today
                </span>{" "}
                meets{" "}
                <span className="bg-gradient-to-r from-echoblue-500 to-echopurple-600 bg-clip-text text-transparent hover:from-echopurple-600 hover:to-echoblue-500 transition-all duration-500">
                  tomorrow
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 max-w-lg hover:text-echopurple-600  transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Connect with experienced mentors who can guide you on your
                journey to success. Personalized mentorship that transforms
                potential into achievement.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                  </Button>
                </Link>
                <Link to="/find-mentors">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-echopurple-600 hover:text-white transition-all duration-300">
                    Browse Mentors
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src="/landpage.png"
                alt="Mentorship Illustration"
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-medium mb-1">Featured Mentor</p>
                  <h3 className="text-xl font-bold hover:text-echopurple-400 transition-colors duration-300">Rajat Kumar</h3>
                  <p className="text-sm opacity-90">Tech Leadership | 10+ years experience</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Crisis Support Banner */}
      <section className="py-8 bg-gradient-to-r from-red-500 to-pink-500 transform hover:scale-[1.01] transition-transform duration-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2 hover:text-white/90 transition-colors duration-300">Need Immediate Support?</h2>
              <p className="text-white/90">Our crisis counsellors are available 24/7. Don't hesitate to reach out.</p>
            </div>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-red-500 hover:bg-white/90 hover:scale-105 transition-all duration-300"
                onClick={() => setShowCrisisDialog(true)}
              >
                Get Help Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Dialog */}
      <CrisisDialog
        open={showCrisisDialog}
        onOpenChange={setShowCrisisDialog}
      />

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold text-echopurple-600 dark:text-echopurple-400 animate-pulse">
                500+
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
                Expert Mentors
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold text-echopurple-600 dark:text-echopurple-400 animate-pulse">
                5,000+
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
                Mentees Helped
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold text-echopurple-600 dark:text-echopurple-400 animate-pulse">
                15,000+
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
                Sessions Completed
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <p className="text-3xl md:text-4xl font-bold text-echopurple-600 dark:text-echopurple-400 animate-pulse">
                98%
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mentors Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-echopurple-600 to-echoblue-600 bg-clip-text text-transparent">Featured Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredMentors.map((mentor, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">{mentor.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{mentor.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-echopurple-100 dark:bg-echopurple-900 text-echopurple-600 dark:text-echopurple-400 rounded-full text-sm hover:bg-echopurple-200 dark:hover:bg-echopurple-800 transition-colors duration-300"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Companies Column */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Companies</h3>
                <Link to="/companies" className="group">
                  <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-echopurple-500 transition-colors" />
                  </div>
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Google", icon: "🔍" },
                  { name: "Amazon", icon: "📦" },
                  { name: "Meta", icon: "👥" },
                  { name: "Apple", icon: "🍎" },
                  { name: "Paypal", icon: "💳" },
                  { name: "Adobe", icon: "🎨" },
                  { name: "Oracle", icon: "💾" }
                ].map((company, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg">
                        {company.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{company.name}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.div>
                ))}
              </div>
              <Link 
                to="/companies"
                className="mt-6 flex items-center justify-center w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
              >
                Explore All Companies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Domains Column */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Domains</h3>
                <Link to="/domains" className="group">
                  <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-echoblue-500 transition-colors" />
                  </div>
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Frontend Developer", icon: "🎨" },
                  { name: "Backend Developer", icon: "⚙️" },
                  { name: "Data Scientist", icon: "📊" },
                  { name: "Fullstack Developer", icon: "💻" },
                  { name: "QA Engineer", icon: "🔍" },
                  { name: "Data Engineer", icon: "📈" },
                  { name: "UI/UX Designer", icon: "✨" }
                ].map((domain, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg">
                        {domain.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{domain.name}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.div>
                ))}
              </div>
              <Link 
                to="/domains"
                className="mt-6 flex items-center justify-center w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
              >
                Explore All Domains
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Skills Column */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Skills</h3>
                <Link to="/skills" className="group">
                  <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-pink-500 transition-colors" />
                  </div>
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Python", icon: "🐍" },
                  { name: "Java", icon: "☕" },
                  { name: "Software Testing", icon: "🧪" },
                  { name: "System Design", icon: "🏗️" },
                  { name: "DSA", icon: "🔄" },
                  { name: "Angular", icon: "🅰️" },
                  { name: "React", icon: "⚛️" }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg">
                        {skill.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.div>
                ))}
              </div>
              <Link 
                to="/skills"
                className="mt-6 flex items-center justify-center w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
              >
                Explore All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How EchoMentor Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Getting started is easy - follow these simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-echopurple-600 text-white font-bold flex items-center justify-center">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 pt-2 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
                Sign Up & Create a Profile
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300">
                Create your account, specify your goals, and complete your
                profile with your skills and interests.
              </p>
              <Link to="/signup" className="text-echopurple-600 dark:text-echopurple-400 font-medium hover:underline inline-flex items-center">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-echopurple-600 text-white font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 pt-2 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
                Find Your Ideal Mentor
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300">
                Browse mentor profiles, read reviews, and select someone who
                aligns with your goals and aspirations.
              </p>
              <Link to="/find-mentors" className="text-echopurple-600 dark:text-echopurple-400 font-medium hover:underline inline-flex items-center">
                Browse Mentors <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-echopurple-600 text-white font-bold flex items-center justify-center">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 pt-2 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
                Book Sessions & Grow
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300">
                Schedule your free trial, then continue with regular sessions.
                Track your progress and achieve your goals.
              </p>
              <Link to="/pricing" className="text-echopurple-600 dark:text-echopurple-400 font-medium hover:underline inline-flex items-center">
                View Plans <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Echo Diaries
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Inspiring journeys from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < testimonial.stars
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/success-stories">
              <Button variant="outline" size="lg">
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-echopurple-600 to-echoblue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-white">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Future?
                </h2>
                <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Start your mentorship journey today with a free trial session.
                  No commitment required.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/signup">
                    <Button size="lg" variant="secondary">
                      Get Started for Free
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                    >
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
