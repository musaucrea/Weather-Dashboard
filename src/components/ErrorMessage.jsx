import React from "react";

function ErrorMessage({ error }) {
  return (
    <div className="text-red-500 text-lg mb-4">
      <p>{error}</p>
    </div>
  );
}

export default ErrorMessage;
