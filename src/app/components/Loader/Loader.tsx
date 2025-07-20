import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-12 h-12 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
