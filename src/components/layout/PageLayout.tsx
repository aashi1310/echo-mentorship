
import Navbar from "../Navbar";
import Footer from "../Footer";
import ChatbotButton from "../ChatbotButton";
import Banner from "../Banner";

interface PageLayoutProps {
  children: React.ReactNode;
  showBanner?: boolean;
  bannerText?: string;
  bannerLinkText?: string;
  bannerLinkUrl?: string;
}

const PageLayout = ({ 
  children 
}: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-16">
        {children}
      </div>
      <ChatbotButton />
      <Footer />
    </div>
  );
};


export default PageLayout;
