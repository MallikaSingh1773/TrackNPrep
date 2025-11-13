import { useContext, useState } from "react";
import { LuSparkles } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import HERO_IMAGE from "../assets/hero-image.png";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard.jsx";
import Modal from "../components/Modal.jsx";
import { UserContext } from "../context/userContext.jsx";
import { APP_FEATURES } from "../utils/data";
import Login from "./Auth/Login.jsx";
import SignUp from "./Auth/SignUp.jsx";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("./Dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-full bg-gradient-to-b from-[#FFF5E7] via-[#FDF1E0] to-[#F9F7FC] relative">
        <div className="absolute w-[400px] h-[400px] bg-orange-200/40 blur-[100px] top-[-100px] left-[-80px] animate-blob1"></div>
        <div className="w-[500] h-[500px] bg-purple-200/20 blur-[65px] absolute top-0 left-0" />
        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] 
             drop-shadow-[0_2px_4px_rgba(139,92,246,0.3)] 
             transition-all duration-300 cursor-pointer hover:scale-[1.08] hover:drop-shadow-[0_4px_10px_rgba(139,92,246,0.6)] hover:from-[#7C3AED] hover:to-[#A78BFA]">
              Interview Prep AI
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-sm font-semibold text-white px-8 py-3 rounded-full 
                           shadow-md hover:shadow-lg hover:scale-[1.05] hover:from-[#7C3AED] hover:to-[#C084FC] 
                           transition-all cursor-pointer"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* Hero Content */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-2">
                <div className="flex items-center gap-2 text-[20px] text-purple-600 font-semibold bg-purple-100 px-4 py-1.5 rounded-full border border-purple-300 shadow-sm hover:scale-[1.05] hover:shadow-md hover:bg-purple-200/60 transition-all duration-200">
                  <LuSparkles />
                  AI Powered
                </div>
              </div>
              <h1 className="text-5xl text-black font-medium mb-6 leading-tight">
                Ace Your Interviews with
                <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#8B5CF6_0%,_#C084FC_100%)] 
               bg-[length:200%_200%] animate-text-shine font-semibold inline-block rotate-360">
                  AI-Powered Prep
                </span>{" "}
                Learning
              </h1>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-[18px] md:text-[19px] leading-relaxed text-gray-700 font-[450] tracking-wide mr-0 md:mr-20 mb-6 font-['Poppins']">
                  Transform your interview preparation with our 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] font-semibold">
                    {" "}AI-driven platform.
                  </span>{" "}
                  Practice, learn, and succeed with personalized feedback and real-time coding challenges. 
                  Dive deeper into concepts with curated resources and track your progress effortlessly.
              </p>

              <button
                className="bg-black text-sm font-semibold text-white px-8 py-3 rounded-full 
             hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#A78BFA] hover:shadow-lg 
             hover:px-12 hover:scale-[1.05] hover:text-white border border-purple-100 
             transition-all duration-300 ease-in-out cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full min-h-full relative z-10">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img src={HERO_IMAGE} alt="Hero Image" className="w-[80vw] rounded-lg" />
          </section>
        </div>

        {/* Features Section */}
        <div className="w-full min-h-full bg-[#F9F7FC] mt-10">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-2xl font-medium text-center mb-12">
                Features That Make You Shine
              </h2>
              <div className="flex flex-col items-center gap-8">
                {/* First 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-white p-6 rounded-xl shadow-xs hover:shadow-lg shadow-purple-100 transition border border-purple-100"
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
                {/* Remaining 2 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-white p-6 rounded-xl shadow-xs hover:shadow-lg shadow-purple-100 transition border border-purple-100"
                    >
                      <h3 className="text-base font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5">
          Made with ❤️ by Team Track-n-Prep
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
