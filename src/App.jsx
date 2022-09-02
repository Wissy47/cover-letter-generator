import React, { useState } from "react";
import Generate from "./component/Generate";
import Template from "./component/Template";

function App() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [isSubmited, setIsSubmitted] = useState(false);

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-black text-lg">Cover Letter Generator</h1>
      {isSubmited && (
        <Template
          jobTitle={jobTitle}
          companyName={companyName}
          setEmailBody={setEmailBody}
        />
      )}
      {isSubmited && (
        <div className="text-center">
          <a
            className="px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg w-4"
            href={
              "mailto:" +
              companyEmail +
              "?subject=" +
              jobTitle +
              "&body=" +
              emailBody
            }
          >
            Send email
          </a>
        </div>
      )}
      <Generate
        setCompanyName={setCompanyName}
        setJobTitle={setJobTitle}
        setCompanyEmail={setCompanyEmail}
        setIsSubmitted={setIsSubmitted}
        jobTitle={jobTitle}
        companyName={companyName}
        companyEmail={companyEmail}
      />
    </div>
  );
}

export default App;
