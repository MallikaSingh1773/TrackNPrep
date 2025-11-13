import React, { useEffect, useState } from "react";
import { LuPlus, LuBot } from "react-icons/lu"; // 👈 Added LuBot icon for AI
import { CARD_BG } from "../../utils/data";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import SummaryCard from "../../components/Cards/SummaryCard";
import moment from "moment";
import Modal from "../../components/Modal";
import CreateSessionForm from "./CreateSessionForm";
import DeleteAlertContent from "../../components/DeleteAlertContent";

const Dashboard = () => {
  const navigate = useNavigate();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    data: null,
  });

  const fetchAllSessions = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.SESSION.GET_ALL);
      setSessions(response.data);
    } catch (error) {
      console.error("Error fetching session data:", error);
    }
  };

  useEffect(() => {
    fetchAllSessions();
  }, []);

  return (
    <DashboardLayout>
      {/* Animated motion background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[length:400%_400%] bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-[#FDE68A] opacity-[0.15] animate-gradientMotion"></div>

        {/* Glowing moving blobs */}
        <div className="absolute w-[550px] h-[550px] bg-purple-400/30 blur-[120px] top-[-150px] left-[-100px] rounded-full animate-float1"></div>
        <div className="absolute w-[450px] h-[450px] bg-pink-300/25 blur-[100px] bottom-[-150px] right-[-120px] rounded-full animate-float2"></div>
        <div className="absolute w-[350px] h-[350px] bg-indigo-400/25 blur-[120px] top-[40%] left-[45%] rounded-full animate-float3"></div>
      </div>

      {/* Dashboard content */}
      <div className="container mx-auto pt-6 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-2 pb-6 px-4 md:px-0">
          {sessions?.map((data, index) => (
            <div
              key={data?._id}
              className="animate-slideUp opacity-0 animation-delay-[${index * 200}ms]"
            >
              <SummaryCard
                colors={CARD_BG[index % CARD_BG.length]}
                role={data?.role || ""}
                topicsToFocus={data?.topicsToFocus || ""}
                experience={data?.experience || "-"}
                questions={data?.questions?.length || "-"}
                description={data?.description || ""}
                lastUpdated={
                  data?.updatedAt
                    ? moment(data.updatedAt).format("Do MMM YYYY")
                    : ""
                }
                onSelect={() => navigate(`/interview-prep/${data?._id}`)}
                onDelete={() => setOpenDeleteAlert({ open: true, data })}
              />
            </div>
          ))}
        </div>

        {/* Floating Add Button */}
        <button
          className="h-14 flex items-center justify-center gap-3 
                     bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-sm font-semibold text-white 
                     px-9 py-3 rounded-full hover:bg-gradient-to-r hover:from-[#7C3AED] hover:to-[#C084FC] 
                     transition-all duration-300 ease-in-out cursor-pointer 
                     hover:scale-[1.07] hover:shadow-2xl hover:shadow-purple-300 
                     animate-pulseGlow fixed bottom-10 md:bottom-20 right-10 md:right-20"
          onClick={() => setOpenCreateModal(true)}
        >
          <LuPlus className="text-2xl text-white" />
          Add New
        </button>

        {/* 🧠 AI Mock Interview Button */}
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 flex items-center justify-center gap-3
                     bg-gradient-to-r from-[#9333EA] to-[#C084FC] text-sm font-semibold text-white 
                     px-8 py-3 rounded-full hover:scale-[1.07] hover:shadow-xl hover:shadow-purple-300 
                     transition-all duration-300 ease-in-out cursor-pointer
                     fixed bottom-28 md:bottom-40 right-10 md:right-20 animate-bounce"
        >
          <LuBot className="text-2xl text-white" />
          AI Mock Interview
        </a>
      </div>

      {/* Create Session Modal */}
      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
      >
        <div>
          <CreateSessionForm />
        </div>
      </Modal>

      {/* Delete Alert Modal */}
      <Modal
        isOpen={openDeleteAlert?.open}
        onClose={() => setOpenDeleteAlert({ open: false, data: null })}
        title="Delete Alert"
      >
        <div className="w-[30vw]">
          <DeleteAlertContent
            content="Are you sure you want to delete this session detail?"
            onDelete={() => {}}
          />
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
