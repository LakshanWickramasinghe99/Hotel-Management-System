import React from "react";

const LoadingModal = ({ message = "Loading...", isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-96 text-center shadow-lg">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <div className="flex justify-center">
          <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
