import React from 'react';

const PrintButton = () => {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={() => window.print()}
        className="bg-green-600 text-white px-6 py-2 font-semibold rounded-md shadow"
      >
        PRINT
      </button>
    </div>
  );
};

export default PrintButton;