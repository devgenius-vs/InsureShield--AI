import { useState } from "react";

const categories = [
  { name: "Individual Death Claim", key: "individual" },
  { name: "Group Death Claim", key: "group" },
  { name: "Living Benefits", key: "living" },
];

const documentData = {
  individual: {
    mandatory: [
      "Claim Form",
      "Original Policy Document",
      "Original or Attested* Death Certificate issued by local authority",
      "Claimant's current address proof (Valid Passport, Voter ID Card, Aadhar Card, Driving License)",
    ],
    additional: [
      "Medical attendant's certificate",
      "Hospital treatment certificate",
      "Employer's certificate (for salaried individuals)",
      "Copy of FIR/Punchnama Report/Post Mortem (Required only in case of Unnatural Death: Accident/Suicide/Murder)",
    ],
  },
  group: {
    mandatory: [
      "Group Policy Document",
      "Employer Certification",
      "Death Certificate",
    ],
    additional: [
      "Medical attendant's certificate",
      "Hospital treatment certificate",
      "Employer's certificate (for salaried individuals)",
      "Copy of FIR/Punchnama Report/Post Mortem (Required only in case of Unnatural Death: Accident/Suicide/Murder)",
    ],
  },
  living: {
    mandatory: ["Policyholder ID", "Medical Records", "Doctor's Certification"],
    additional: [
      "Medical attendant's certificate",
      "Hospital treatment certificate",
      "Employer's certificate (for salaried individuals)",
      "Copy of FIR/Punchnama Report/Post Mortem (Required only in case of Unnatural Death: Accident/Suicide/Murder)",
    ],
  },
};

export default function InfoBoard() {
  const [selectedCategory, setSelectedCategory] = useState("individual");

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">
        DOCUMENTS TO BE SUBMITTED
      </h2>
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`px-4 py-2 rounded-md text-white font-semibold transition-all ${
              selectedCategory === category.key ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(category.key)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="bg-blue-500 w-full p-4 rounded-md my-12 justify-center flex items-center">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Mandatory Documents</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {documentData[selectedCategory].mandatory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Additional Documents</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {documentData[selectedCategory].additional.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
