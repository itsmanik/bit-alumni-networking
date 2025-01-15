import React, { useState } from "react";
import styles from "./StudentSignup.module.css"; // CSS module for styling
import { useNavigate } from "react-router-dom";

const skillsOptions = [
  "JavaScript", "React", "Node.js", "Python", "Java", "C++", "SQL", "HTML", "CSS",
  "Git", "Machine Learning", "Data Science", "UI/UX Design", "Blockchain", "Cloud Computing",
];

const StudentSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    resume: null,
    linkedin: "",
    selectedSkills: [],
    bio: "",
    learning_years: 0,
    interests: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleLinkedInChange = (e) => {
    setFormData({ ...formData, linkedin: e.target.value });
  };

  const handleSkillToggle = (skill) => {
    setFormData((prevData) => {
      const newSkills = prevData.selectedSkills.includes(skill)
        ? prevData.selectedSkills.filter((s) => s !== skill)
        : [...prevData.selectedSkills, skill];
      return { ...prevData, selectedSkills: newSkills };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      setError("Resume is required");
      return;
    }

    if (!formData.linkedin) {
      setError("LinkedIn profile URL is required");
      return;
    }

    if (!/^https?:\/\/(?:www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+(?:\/|$)/.test(formData.linkedin)) {
      setError("Please enter a valid LinkedIn URL");
      return;
    }

    setError("");

    const data = new FormData();
    data.append("resume", formData.resume);
    data.append(
      "json_data",
      JSON.stringify({
        linkedin: formData.linkedin,
        skills: formData.selectedSkills,
        bio: formData.bio,
        learning_years: formData.learning_years,
        interests: formData.interests,
      })
    );

    try {
      const response = await axiosInstance.post("/api/profile/student", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(response.data.message);
      setFormData({ resume: null, linkedin: "", selectedSkills: [] });
      navigate("/profile");
    } catch (err) {
      setError("There was an error creating the student profile");
      console.error(err);
    }
  };

  return (
    <div className={styles.registrationForm}>
      <h2 className={styles.heading}>Student Registration</h2>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="resume" className={styles.label}>
            Upload Resume:
          </label>
          <input
            type="file"
            id="resume"
            accept=".pdf"
            onChange={handleFileChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="linkedin" className={styles.label}>
            LinkedIn Profile URL:
          </label>
          <input
            type="url"
            id="linkedin"
            value={formData.linkedin}
            onChange={handleLinkedInChange}
            placeholder="https://www.linkedin.com/in/username"
            className={styles.input}
          />
        </div>

        <div className={styles.skillsSection}>
          <label className={styles.label}>Interested Skills:</label>
          <div className={styles.skillsButtons}>
            {skillsOptions.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => handleSkillToggle(skill)}
                className={`${styles.skillButton} ${
                  formData.selectedSkills.includes(skill) ? styles.selected : ""
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentSignup;
