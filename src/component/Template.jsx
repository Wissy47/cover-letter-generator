import React, {useEffect} from "react";

function Template({ jobTitle, companyName, setEmailBody}) {
  function setEmailBodyParams(jobTitle, companyName) {
    setEmailBody(
      "Dear Hiring Manager, \n\nI am writing to submit my resume for the " +
        jobTitle +
        "position.\n\nI have more than four years of experience developing and maintaining web applications using PHP, JavaScript, REST API, React.js, and Laravel. My professional experience includes: Developing a full-stack application from scratch as well as developing REST APIs for the same application. Maintaining an existing website while adding new features/functionality to its backend - including migrating database schema on occasion when necessary (i.e., updating tables) with minimal downtime or data loss; performed all tasks in accordance with best practices and industry standards; provided technical support to clients via phone calls or email - answering any questions they may have regarding their site's functionality or bugs encountered during the development process; worked closely with client representatives on resolving issues that arose during testing phase I believe these skills will enable me to make a significant contribution at " +
        companyName +
        " " +
        jobTitle +
        " role.\n \nThank you for your consideration - I look forward to speaking further about this opportunity.\n \nBest."
    );
  }
  useEffect(() => {
    setEmailBodyParams(jobTitle, companyName);
  });
  return (
    <div className="lg:w-4/6 mx-auto hover:select-all cursor-pointer">
      <p>Dear Hiring Manager,</p>
      <br />
      <p>I am writing to submit my resume for the {jobTitle} position.</p>
      <br />
      <p>
        I have more than four years of experience developing and maintaining web
        applications using PHP, JavaScript, REST API, React.js, and Laravel. My
        professional experience includes: Developing a full-stack application
        from scratch as well as developing REST APIs for the same application.
        Maintaining an existing website while adding new features/functionality
        to its backend - including migrating database schema on occasion when
        necessary (i.e., updating tables) with minimal downtime or data loss;
        performed all tasks in accordance with best practices and industry
        standards; provided technical support to clients via phone calls or
        email - answering any questions they may have regarding their site's
        functionality or bugs encountered during the development process; worked
        closely with client representatives on resolving issues that arose
        during testing phase I believe these skills will enable me to make a
        significant contribution at {companyName} {jobTitle} role.
      </p>
      <br />
      <p>
        Thank you for your consideration - I look forward to speaking further
        about this opportunity.
      </p>
      <br />
      <p>Best.</p>
    </div>
  );
}

export default Template;
