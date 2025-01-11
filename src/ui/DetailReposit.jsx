import React from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { HiOutlineArrowUp } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function DetailReposit({ onRepost, id }) {
  const navigate = useNavigate();
  return (
    <div className="mt-5 flex items-center gap-4">
      <button
        onClick={onRepost}
        className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-200 hover:text-gray-800 active:bg-gray-300"
      >
        <HiOutlineRefresh className="h-4 w-4" />
        <span>Repost</span>
      </button>
      <button
        onClick={() => navigate(`/blogs/${id}`)}
        className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-200 hover:text-gray-800 active:bg-gray-300"
      >
        <HiOutlineArrowUp className="h-4 w-4" />
        <span>See Details</span>
      </button>
    </div>
  );
}

export default DetailReposit;
