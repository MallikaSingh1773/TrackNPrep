import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { getInitials } from "../../utils/helper";

const SummaryCard = ({
  colors,
  role,
  topicsToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  return (
    <div
      className="bg-white border border-purple-100 rounded-2xl p-4 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-purple-100 relative group transition-all duration-300 transform hover:scale-[1.02]"
      onClick={onSelect}
    >
      <div
        className="rounded-xl p-6 cursor-pointer relative min-h-[210px] flex flex-col justify-between"
        style={{
          background: colors.bgcolor,
        }}
      >
        {/* Top Section */}
        <div className="flex items-start">
          {/* Avatar Box */}
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-lg flex items-center justify-center mr-5 shadow-md">
            <span className="text-xl font-semibold text-white">
              {getInitials(role)}
            </span>
          </div>

          {/* Role + Topic */}
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {role}
                </h2>
                <p className="text-sm text-gray-600 mt-[2px]">{topicsToFocus}</p>
              </div>
            </div>
          </div>

          {/* Delete Button */}
          <button
            className="hidden group-hover:flex items-center gap-2 text-xs text-rose-500 font-medium bg-rose-50 px-3 py-1.5 rounded-full text-nowrap border border-rose-100 hover:border-rose-300 cursor-pointer absolute top-2 right-2 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <LuTrash2 />
          </button>
        </div>

        {/* Info Pills */}
        <div className="px-3 pb-3 mt-5">
          <div className="flex items-center flex-wrap gap-3">
            <div className="text-[11px] font-medium text-purple-700 px-4 py-1 border border-purple-300 rounded-full bg-purple-50">
              Experience: {experience} {experience === 1 ? "Year" : "Years"}
            </div>
            <div className="text-[11px] font-medium text-purple-700 px-4 py-1 border border-purple-300 rounded-full bg-purple-50">
              {questions} Q&A
            </div>
            <div className="text-[11px] font-medium text-purple-700 px-4 py-1 border border-purple-300 rounded-full bg-purple-50">
              Last Updated: {lastUpdated}
            </div>
          </div>
        </div>


        {/* Description */}
        <p className="text-[13px] text-gray-600 font-medium line-clamp-2 mt-2 px-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
