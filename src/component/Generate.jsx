import React from "react";

export default function Generate({
  setCompanyName,
  setJobTitle,
  setCompanyEmail,
  setIsSubmitted,
  jobTitle,
  companyName,
  companyEmail,
}) {
  const inputFields = [
    {
      id: "1",
      placeholder: "Company Name",
      name: "company-name",
      value: companyName,
      inputFieldHandler: (e) => {
        setCompanyName(e.target.value);
      },
    },
    {
      id: "2",
      placeholder: "Job Title",
      name: "job-title",
      value: jobTitle,
      inputFieldHandler: (e) => {
        setJobTitle(e.target.value);
      },
    },
    {
      id: "3",
      placeholder: "Company Email",
      name: "company-email",
      value: companyEmail,
      inputFieldHandler: (e) => {
        setCompanyEmail(e.target.value);
      },
    },
  ];
  function formSubmitHandler(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div className="flex justify-center flex-col">
      <div className="flex mb-3 mt-24 flex-col justify-center">
        <div>
          <h2 className="text-center text-gray-500">
            Enter your cover letter Details
          </h2>
          <form onSubmit={formSubmitHandler}>
            {inputFields.map(
              ({ id, placeholder, name, value, inputFieldHandler }) => {
                return (
                  <input
                    key={id}
                    onChange={inputFieldHandler}
                    value={value}
                    type="text"
                    placeholder={placeholder}
                    required
                    className="form-control
                                block
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                m-auto
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3 w-96"
                    name={name}
                    id="template-title"
                  />
                );
              }
            )}
            <div className="flex justify-center mt-3">
              <button
                type="submit"
                className="px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              >
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
