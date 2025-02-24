import { useState } from "react";
import TitleSection from "../../components/TitleSection";
import { SITE_KEY } from "../../utils/constants";

import ReCAPTCHA from "react-google-recaptcha";

export default function UnclaimedAmountForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    policyNumber: "",
    panNumber: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      <TitleSection
        title="Unclaimed Amount Disclosure"
        description="Please enter the following information to see any unclaimed amount against your policy:"
      />
      <div className="flex items-center justify-center max-h-screen my-6 p-6 bg-blue-300">
        <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-blue-700 mb-4">
            Unclaimed Amount Disclosure
          </h2>
          <p className="mb-4 text-gray-600">
            Please enter the following information to see any unclaimed amount
            against your policy:
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold">
                Full Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Name"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold">
                Date of Birth: <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold">Policy Number:</label>
              <input
                type="text"
                name="policyNumber"
                value={formData.policyNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold">PAN Number:</label>
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="flex space-x-4 mt-4">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Search
              </button>
              <button
                type="reset"
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
                onClick={() =>
                  setFormData({
                    fullName: "",
                    dob: "",
                    policyNumber: "",
                    panNumber: "",
                    captcha: "",
                  })
                }
              >
                Reset
              </button>
            </div>
            <ReCAPTCHA
              sitekey={SITE_KEY}
              onChange={onChange}
              size="invisible"
            />
          </form>
        </div>
      </div>
    </>
  );
}
