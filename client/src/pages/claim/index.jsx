import React from "react";
import InfoBoard from "./InfoBoard";
import TitleSection from "../../components/TitleSection";

const ClaimForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 ">
      <TitleSection
        title="Claim Your Policy"
        description="File your claim online or through other methods."
      />
      <div className="bg-blue-100 w-full max-w-4xl p-4 rounded-md text-center">
        <h2 className="text-lg font-bold text-blue-900">
          Claim Intimation and Settlement Process
        </h2>
        <p className="text-sm text-gray-700">
          At SBI Life, our commitment to you is a worry-free future so that you
          can enjoy your present. Through our claim Intimation and Settlement
          Process, we strive to honour this commitment. We make every effort to
          ensure that you receive the claim amount that you or your family are
          entitled to, quickly and easily.
        </p>
      </div>
      <div className="bg-blue-500 w-full p-4 rounded-md my-12 justify-center flex items-center">
        <div className="bg-white w-full max-w-4xl p-6 rounded-md grid md:grid-cols-2 gap-6">
          {/* File Claim Online */}
          <div>
            <h3 className="text-blue-900 font-bold text-lg">
              File Claim Online
            </h3>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-semibold">
                  Policy Number *
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  className="w-full border p-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Claim Type
                </label>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center">
                    <input type="radio" name="claimType" className="mr-2" />{" "}
                    Living Benefits
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="claimType" className="mr-2" />{" "}
                    Death Claims
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Solve: 7 - 4 =
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md"
                  required
                />
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-md font-bold">
                Submit
              </button>
            </form>
          </div>

          {/* Other Submission Methods */}
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-blue-900 font-bold">By Post</h3>
              <p className="text-sm text-gray-700">
                Send the duly filled claim form along with supporting documents
                to:
                <br />
                <strong>SBI Life Insurance Co. Ltd,</strong>
                <br />
                8th level Seawoods Grand Central, Tower 2,
                <br />
                Sector 40, plot No.R-1, Seawoods, Navi Mumbai- 400706.
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-blue-900 font-bold">
                At the SBI Life Branch
              </h3>
              <p className="text-sm text-gray-700">
                Submit the duly filled claim form along with supporting
                documents at your nearest{" "}
                <a href="#" className="text-blue-500 underline">
                  SBI Life branch
                </a>
                .
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-blue-900 font-bold">Via Email</h3>
              <p className="text-sm text-gray-700">
                For Death Claims:{" "}
                <a
                  href="mailto:claims@sbilife.co.in"
                  className="text-blue-500 underline"
                >
                  claims@sbilife.co.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <InfoBoard />
    </div>
  );
};

export default ClaimForm;
