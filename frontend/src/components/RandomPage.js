import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const RandomPage = () => {
  const [groupName, setGroupName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [submittedGroupNames, setSubmittedGroupNames] = useState(new Set());

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the group name (only letters allowed)
    const validGroupName = /^[A-Za-z]+$/;
    if (!groupName.match(validGroupName)) {
      setErrorMessage('Group names can only contain letters without spaces.');
      setSuccessMessage('');
      return;
    }

    // Check if the group name has already been submitted
    if (submittedGroupNames.has(groupName)) {
      setErrorMessage('This group name has already been submitted for this clue.');
      setSuccessMessage('');
      return;
    }

    // Ask for confirmation before submitting the group name
    const confirmSubmit = window.confirm(`Is your group name "${groupName}" spelled correctly?`);

    if (confirmSubmit) {
      // Add the group name to the submitted group names
      setSubmittedGroupNames(new Set([...submittedGroupNames, groupName]));

      // Handle the form submission here
      const randomPage = 'CLUE 1'; // Update this based on the current clue
      const timeStamp = new Date();

      try {
        await axios.post('/api/teams', {
          teamName: groupName,
          timeStamp,
          randomPage,
        });

        // Empty the text box, clear the error message, and set the success message
        setGroupName('');
        setErrorMessage('');
        setSuccessMessage('Your group name has been submitted successfully.');
      } catch (error) {
        setErrorMessage('An error occurred while submitting your group name. Please try again.');
        setSuccessMessage('');
      }
    }
  };

  return (
    <div className="page-container">
      <h1 className="title">Congratulations!</h1>
      <h2>You just found the QR code for</h2>
      <h3>CLUE 1</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="groupname">Group Name:</label>
        <input
          type="text"
          id="groupname"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default RandomPage;
