
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ArrowRight, BookOpen, Calendar, Award, Users, Target } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const Home = () => {
  const mentorImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
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
                <span className="bg-gradient-to-r from-echopurple-600 to-echoblue-500 bg-clip-text text-transparent">
                  guidance today
                </span>{" "}
                meets{" "}
                <span className="bg-gradient-to-r from-echoblue-500 to-echopurple-600 bg-clip-text text-transparent">
                  tomorrow
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Connect with experienced Indian mentors who can guide you on your
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
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/find-mentors">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Browse Mentors
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src="/placeholder.svg"
                alt="Mentorship session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-medium mb-1">Featured Mentor</p>
                  <h3 className="text-xl font-bold">Rajat Kumar</h3>
                  <p className="text-sm opacity-90">Tech Leadership | 10+ years experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-echopurple-600 dark:text-echopurple-400">
                500+
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Expert Mentors
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-echopurple-600 dark:text-echopurple-400">
                5,000+
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Mentees Helped
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-echopurple-600 dark:text-echopurple-400">
                15,000+
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Sessions Completed
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <p className="text-3xl md:text-4xl font-bold text-echopurple-600 dark:text-echopurple-400">
                98%
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose EchoMentor?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our platform offers everything you need for a transformative
              mentorship experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-echopurple-100 dark:bg-echopurple-900 text-echopurple-600 dark:text-echopurple-400 mb-4">
                <Users />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Indian Mentors</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with verified professionals with real-world experience in
                your field of interest.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-echopurple-100 dark:bg-echopurple-900 text-echopurple-600 dark:text-echopurple-400 mb-4">
                <Calendar />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Book sessions based on your availability with an easy-to-use
                calendar system.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-echopurple-100 dark:bg-echopurple-900 text-echopurple-600 dark:text-echopurple-400 mb-4">
                <Target />
              </div>
              <h3 className="text-xl font-semibold mb-2">Goal Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Set clear objectives and track your progress with our milestone
                system.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-echopurple-100 dark:bg-echopurple-900 text-echopurple-600 dark:text-echopurple-400 mb-4">
                <BookOpen />
              </div>
              <h3 className="text-xl font-semibold mb-2">Valuable Resources</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access curated content, guides, and templates to supplement your
                mentorship journey.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-echopurple-100 dark:bg-echopurple-900 text-echopurple-600 dark:text-echopurple-400 mb-4">
                <Award />
              </div>
              <h3 className="text-xl font-semibold mb-2">XP & Achievements</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stay motivated with our gamified experience points system and
                unlock badges as you progress.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-echopurple-100 dark:bg-echopurple-900 text-echopurple-600 dark:text-echopurple-400 mb-4">
                <CheckCircle />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Trial Session</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Test the waters with a complimentary session before committing to
                a paid plan.
              </p>
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
            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-echopurple-600 text-white font-bold flex items-center justify-center">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 pt-2">
                Sign Up & Create a Profile
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Create your account, specify your goals, and complete your
                profile with your skills and interests.
              </p>
              <Link to="/signup" className="text-echopurple-600 dark:text-echopurple-400 font-medium hover:underline inline-flex items-center">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-echopurple-600 text-white font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 pt-2">
                Find Your Ideal Mentor
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Browse mentor profiles, read reviews, and select someone who
                aligns with your goals and aspirations.
              </p>
              <Link to="/find-mentors" className="text-echopurple-600 dark:text-echopurple-400 font-medium hover:underline inline-flex items-center">
                Browse Mentors <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-echopurple-600 text-white font-bold flex items-center justify-center">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 pt-2">
                Book Sessions & Grow
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
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

      {/* Featured Mentors Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Featured Mentors
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Learn from the best minds across diverse fields
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorImages.map((image, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={`Mentor ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm bg-echopurple-100 dark:bg-echopurple-900 text-echopurple-600 dark:text-echopurple-400 px-3 py-1 rounded-full font-medium">
                      {idx % 3 === 0
                        ? "Technology"
                        : idx % 3 === 1
                        ? "Business"
                        : "Career Development"}
                    </span>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < 4
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {idx % 3 === 0
                      ? "Vikram Mehta"
                      : idx % 3 === 1
                      ? "Priya Sharma"
                      : "Arjun Kapoor"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {idx % 3 === 0
                      ? "Senior Software Engineer at TechCorp"
                      : idx % 3 === 1
                      ? "Marketing Director at BrandGrowth"
                      : "Career Coach & Former HR Executive"}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Leadership", idx % 3 === 0 ? "Coding" : idx % 3 === 1 ? "Strategy" : "Interview Prep", "Mentorship"].map(
                      (tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                  <Link to="/find-mentors">
                    <Button variant="outline" className="w-full">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/find-mentors">
              <Button size="lg">
                View All Mentors
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Real success stories from our community
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
