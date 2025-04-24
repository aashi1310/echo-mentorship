import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!name || !email || !subject || !message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent",
      description: "We've received your message and will respond soon.",
    });

    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setLoading(false);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-echopurple-600 to-echoblue-500 py-24">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={loading}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-echopurple-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-echopurple-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={subject}
                      onValueChange={setSubject}
                      disabled={loading}
                      required
                    >
                      <SelectTrigger id="subject" className="transition-all duration-300 focus:ring-2 focus:ring-echopurple-500">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="mentor">Becoming a Mentor</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={loading}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-echopurple-500 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-echopurple-600 to-echoblue-500 hover:from-echopurple-700 hover:to-echoblue-600 transition-all duration-300"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 bg-echopurple-100 dark:bg-echopurple-900 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-echopurple-600 dark:text-echopurple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office Address</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Innovation Hub, Gamma-II<br />
                        Greater Noida, Uttar Pradesh 201310<br />
                        India
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 bg-echopurple-100 dark:bg-echopurple-900 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-echopurple-600 dark:text-echopurple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone Number</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        +91 9876543210
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                        Mon-Fri from 9am to 6pm IST
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 bg-echopurple-100 dark:bg-echopurple-900 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-echopurple-600 dark:text-echopurple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Address</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        support@echomentor.in
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                        We aim to respond within 24 hours
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 bg-echopurple-100 dark:bg-echopurple-900 p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-6 w-6 text-echopurple-600 dark:text-echopurple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Office Hours</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
                <div className="overflow-hidden rounded-lg h-64 bg-gray-200 dark:bg-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28031.098591240207!2d77.50254382465545!3d28.467921040411936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7e051fd949%3A0xefccd5003c9032b6!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1690367264889!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EchoMentor Office Location"
                    className="transition-transform duration-300 hover:scale-105"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
