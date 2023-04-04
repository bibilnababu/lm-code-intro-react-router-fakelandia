import { JUST_TALK, MISDEMEANOURS} from "../misdemeanours.types";
import React, { useState } from "react";

const Confession = () => {
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");

  const handleSubjectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSubject(event.target.value);
  };

  const handleReasonChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setReason(event.target.value);
  };

  const handleDetailsChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDetails(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  function submitForm() {
    // Define the form data to be submitted
    const formData = {
      subject: subject,
      reason: reason,
      details: details
    };
  
    // Send the form data to the server
    fetch(`${"http://localhost:8080/api/misdemeanours"}/api/confess`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  }
  

  return (
    <>
      <p>
        {" "}
        Its very difficult to catch people commiting misdemeanours so we
        appreciate it when citizens confess to us directly. However ,if you 're
        just having a hard day and need to vent then you 're welcome to contact
        us here too.Up to you!
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Subject:
          <input type="text" value={subject} onChange={handleSubjectChange} />
        </label>
        <br />
        <label>
          Reason for contact
          <select value={reason} onChange={handleReasonChange}>
            <option value="">Select a reason</option>
            <option value={JUST_TALK}>I just want to talk</option>
            {MISDEMEANOURS.map((misdemeanour) => (
              <option key={misdemeanour} value={misdemeanour}>
                {misdemeanour}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          <textarea value={details} onChange={handleDetailsChange} />
        </label>
        <br />
        <button type="submit" disabled={!subject || !reason || !details}>
          Confess
        </button>
      </form>
    </>
  );
};

export default Confession;
