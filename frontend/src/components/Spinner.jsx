import React from "react";

const Spinner = () => {
  return (
    <div className="fixed flex flex-col justify-center items-center z-50 h-[100vh] bg-black top-0 w-[100vw]">
      <div
        class="animate-spin inline-block w-32 h-32 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
