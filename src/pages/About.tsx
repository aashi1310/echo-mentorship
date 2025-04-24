import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart, Clock, Globe, Heart, Target, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const About = () => {
  const stats = [
    {
      value: "500+",
      label: "Expert Mentors",
      icon: <Users className="h-8 w-8 text-echopurple-600 dark:text-echopurple-400" />,
    },
    {
      value: "15,000+",
      label: "Sessions Completed",
      icon: <Clock className="h-8 w-8 text-echopurple-600 dark:text-echopurple-400" />,
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: <Heart className="h-8 w-8 text-echopurple-600 dark:text-echopurple-400" />,
    },
    {
      value: "25+",
      label: "Industries Covered",
      icon: <Globe className="h-8 w-8 text-echopurple-600 dark:text-echopurple-400" />,
    },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our platform, from mentor quality to user experience.",
      icon: <Target className="h-10 w-10 text-echopurple-600 dark:text-echopurple-400" />,
    },
    {
      title: "Accessibility",
      description: "We believe quality mentorship should be accessible to everyone, regardless of background or location.",
      icon: <Users className="h-10 w-10 text-echopurple-600 dark:text-echopurple-400" />,
    },
    {
      title: "Growth Mindset",
      description: "We foster continuous learning and improvement for both mentors and mentees.",
      icon: <BarChart className="h-10 w-10 text-echopurple-600 dark:text-echopurple-400" />,
    },
  ];

  return (
    <PageLayout>
      <div className="container px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-echopurple-600 to-echoblue-600 bg-clip-text text-transparent">
              About EchoMentor
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Connecting ambitious individuals with experienced mentors for
              transformative professional growth.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden h-80 mb-12 transform hover:scale-105 transition-transform duration-300">
            <img
              src="/landpage.png"
              alt="EchoMentor Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose dark:prose-invert max-w-none prose-lg">
            <p className="hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
              Founded in 2025 by Aashika Jain and Divyanshi Agarwal, EchoMentor was born from a shared vision to democratize access to quality mentorship across India. We recognized that while talent is equally distributed, opportunity often isn't. Many professionals struggle to find guidance from experienced mentors who understand their specific challenges and aspirations.
            </p>
            <p className="hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
              Our platform bridges this gap by connecting mentees with verified Indian mentors across diverse industries. We've built a comprehensive ecosystem that goes beyond simple connections – offering structured goal setting, progress tracking, resource sharing, and a supportive community.
            </p>
            <p className="hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
              Today, EchoMentor serves thousands of professionals across India, from fresh graduates to mid-career professionals looking to level up their skills and career trajectory. We're proud to have facilitated over 15,000 mentorship sessions, with a 98% satisfaction rate among our users.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4 rounded-2xl mb-20 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-gradient-to-r from-echopurple-600 to-echoblue-600 bg-clip-text text-transparent">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm text-center transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4 animate-bounce">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-echopurple-600 dark:text-echopurple-400 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Values Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-echopurple-600 to-echoblue-600 bg-clip-text text-transparent">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're on a mission to democratize access to quality mentorship
              and empower the next generation of Indian professionals.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-4 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
              To connect ambitious individuals with experienced mentors who can guide them on their professional journey, fostering a culture of knowledge sharing and mutual growth across India.
            </p>

            <h3 className="text-xl font-semibold mb-4 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">
              To create a world where everyone has access to the mentorship they need to reach their full potential, regardless of their background or circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm transform hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 animate-pulse">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-echopurple-600 to-echoblue-600 bg-clip-text text-transparent">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet the passionate people behind EchoMentor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="/Aashika.jpg"
                  height="50%"
                  alt="Aashika Jain"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">Aashika Jain</h3>
                <p className="text-echopurple-600 dark:text-echopurple-400 mb-3">
                  Co-Founder & CEO
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Aashika brings extensive experience in educational technology and has a passion for connecting talented mentors with eager mentees. She leads the strategic vision and growth of EchoMentor.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm transform hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img
                  src="/Divyanshi.jpg"
                  alt="Divyanshi Agarwal"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 hover:text-echopurple-600 dark:hover:text-echopurple-400 transition-colors duration-300">Divyanshi Agarwal</h3>
                <p className="text-echopurple-600 dark:text-echopurple-400 mb-3">
                  Co-Founder & CTO
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Divyanshi is a technology enthusiast with a strong background in software development. She's passionate about building scalable platforms that create meaningful connections. She oversees all technical aspects of EchoMentor.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/team">
              <Button variant="outline" className="hover:bg-echopurple-600 hover:text-white transition-colors duration-300">
                Meet Our Full Team
              </Button>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-echopurple-600 to-echoblue-600 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
            <div className="px-6 py-12 md:p-12 text-white">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Join the EchoMentor Community
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Whether you're looking for guidance or wanting to share your expertise, there's a place for you in our community.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/find-mentors">
                    <Button size="lg" variant="secondary" className="hover:bg-white hover:text-echopurple-600 transition-colors duration-300">
                      Find a Mentor
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 transition-colors duration-300"
                    >
                      Become a Mentor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
