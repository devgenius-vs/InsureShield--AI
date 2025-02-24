import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const PremiumPaymentForm = () => {
  const [formData, setFormData] = useState({
    policyNumber: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Generating OTP for", formData);
  };

  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-96 border border-white/20">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Premium Payment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label className="block text-sm mb-1">Policy Number</label>
            <div className="flex items-center border border-gray-300 bg-white bg-opacity-20 rounded-lg px-3 py-2">
              <FontAwesomeIcon icon={faUser} className="text-gray-200 mr-2" />
              <input
                type="text"
                name="policyNumber"
                value={formData.policyNumber}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm mb-1">Date of Birth</label>
            <div className="flex items-center border border-gray-300 bg-white bg-opacity-20 rounded-lg px-3 py-2">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-gray-200 mr-2"
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white hover:bg-blue-900 font-semibold py-2 rounded-lg transition-all"
          >
            Generate OTP
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            Download Past Payment Receipts
          </a>
        </p>
      </div>
    </div>
  );
};

export default PremiumPaymentForm;
