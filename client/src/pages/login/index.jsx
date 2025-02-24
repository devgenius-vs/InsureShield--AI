import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SITE_KEY, AUTH_SVG } from "../../utils/constants";

export default function LoginForm() {
  const [loginMethod, setLoginMethod] = useState("OTP");
  const [mobileEmail, setMobileEmail] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const isFormValid = mobileEmail.trim() !== "" || policyNumber.trim() !== "";

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 hidden place-items-center lg:block p-8">
        <img src={AUTH_SVG} alt="Placeholder" className="object-cover" />
      </div>
      {/* Right: Login Form */}
      <div className="sm:p-20 md:p-52 lg:p-24 p-8 w-full lg:w-3/4 xl:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form action="#" method="POST">
          {/* Mobile/Email and Policy Number Grouped */}
          <div className="mb-4">
            <label className="block">
              Mobile/Email <span className="font-semibold">or</span> Policy
              Number
            </label>
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <input
                type="text"
                value={mobileEmail}
                onChange={(e) => setMobileEmail(e.target.value)}
                className="w-full sm:w-1/2 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                placeholder="Enter Mobile or Email"
              />
              <span className="hidden sm:block font-semibold">OR</span>
              <input
                type="text"
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                className="w-full sm:w-1/2 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                placeholder="Enter Policy Number"
              />
            </div>
            {loginMethod === "OTP" && (
              <button
                type="button"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-md mt-2 w-full sm:w-auto"
              >
                Get OTP
              </button>
            )}
          </div>
          {/* Login Method Selection */}
          <div className="mb-4 flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="loginMethod"
                value="OTP"
                checked={loginMethod === "OTP"}
                onChange={() => setLoginMethod("OTP")}
                className="mr-2"
              />
              OTP
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="loginMethod"
                value="MPIN"
                checked={loginMethod === "MPIN"}
                onChange={() => setLoginMethod("MPIN")}
                className="mr-2"
              />
              MPIN
            </label>
          </div>
          {/* OTP or MPIN Input */}
          <div className="mb-4">
            <label className="block">{loginMethod}</label>
            <input
              type={loginMethod === "MPIN" ? "password" : "text"}
              className="w-full border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Captcha Input */}
          <ReCAPTCHA sitekey={SITE_KEY} onChange={onChange} size="invisible" />
          {/* Forgot Password Link */}
          <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-md py-2 px-4 w-full"
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>
        {/* Sign up Link */}
        <div className="mt-6 text-center">
          If you don't have an account,{" "}
          <a href="#" className="underline hover:font-bold">
            Sign up Here
          </a>
        </div>
        <div className="mt-1.5 text-center">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-gray-700">
            I authorize SBI Life to send my receipts and other notifications on
            my registered Email and Phone message
          </label>
        </div>
      </div>
    </div>
  );
}
