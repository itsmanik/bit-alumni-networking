import React, { useState, useEffect } from "react";
import classes from "./Explore.module.css";
import Member from "./Member";

const Explore = () => {
  const [alumni, setAlumni] = useState([
    {
        "name": "Aarav Shah",
        "company": "Microsoft",
        "email": "aarav.shah@microsoft.com",
        "skills": "JavaScript, React",
        "position": "Frontend Developer",
        "profile_picture": "https://theportrait.company/wp-content/uploads/2022/06/Corporate-Headshot-for-a-LinkedIn-Profile.jpg"
    },
    {
        "name": "Neha Kapoor",
        "company": "Amazon",
        "email": "neha.kapoor@amazon.com",
        "skills": "Python, Machine Learning",
        "position": "Data Scientist",
        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiiDsXQrXhEP4Ck1z7FYwxhyh-CsGsL_wJQ&s"
    },
    {
        "name": "Rohan Mehta",
        "company": "Meta",
        "email": "rohan.mehta@meta.com",
        "skills": "C++, Distributed Systems",
        "position": "Backend Developer",
        "profile_picture": "https://www.whiteroomstudio.com.sg/wordpress/wp-content/uploads/2021/10/professional-headshot-photography-linkedin-singapore-5.jpeg"
    },
    {
        "name": "Priya Nair",
        "company": "Netflix",
        "email": "priya.nair@netflix.com",
        "skills": "Python, Data Engineering",
        "position": "Data Engineer",
        "profile_picture": "https://i.pinimg.com/736x/c5/b0/7f/c5b07f04ec7f7afd741ed16a9f814501.jpg"
    },
    {
        "name": "Siddharth Rao",
        "company": "Apple",
        "email": "siddharth.rao@apple.com",
        "skills": "Swift, iOS Development",
        "position": "Mobile Developer",
        "profile_picture": "https://theportrait.company/wp-content/uploads/2022/06/Corporate-Headshot-for-a-LinkedIn-Profile.jpg"
    },
    {
        "name": "Ananya Gupta",
        "company": "Tesla",
        "email": "ananya.gupta@tesla.com",
        "skills": "C++, Embedded Systems",
        "position": "Firmware Engineer",
        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiiDsXQrXhEP4Ck1z7FYwxhyh-CsGsL_wJQ&s"
    },
    {
        "name": "Karan Singh",
        "company": "Twitter",
        "email": "karan.singh@twitter.com",
        "skills": "Python, Flask",
        "position": "Backend Engineer",
        "profile_picture": "https://www.whiteroomstudio.com.sg/wordpress/wp-content/uploads/2021/10/professional-headshot-photography-linkedin-singapore-5.jpeg"
    },
    {
        "name": "Meera Iyer",
        "company": "Spotify",
        "email": "meera.iyer@spotify.com",
        "skills": "Go, Microservices",
        "position": "Cloud Engineer",
        "profile_picture": "https://i.pinimg.com/736x/c5/b0/7f/c5b07f04ec7f7afd741ed16a9f814501.jpg"
    },
    {
        "name": "Arjun Patel",
        "company": "Adobe",
        "email": "arjun.patel@adobe.com",
        "skills": "Java, Spring Boot",
        "position": "Software Developer",
        "profile_picture": "https://theportrait.company/wp-content/uploads/2022/06/Corporate-Headshot-for-a-LinkedIn-Profile.jpg"
    },
    {
        "name": "Sneha Das",
        "company": "Intel",
        "email": "sneha.das@intel.com",
        "skills": "C, Hardware Design",
        "position": "Hardware Engineer",
        "profile_picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiiDsXQrXhEP4Ck1z7FYwxhyh-CsGsL_wJQ&s"
    }
]
);



  return (
    <>
      <div className={classes.searchBar}>
        <input
          type="text"
          placeholder="Search for alumni by name..."
          className={classes.searchInput}
        />

        <button
          type="button"
          className={classes.searchButton}
        >
          Search
        </button>
      </div>

      <div className={classes.container}>
        {alumni.map((alumnus) => (
          <Member key={alumnus.id} alumnus={alumnus} />
        ))}
      </div>
    </>
  );
};

export default Explore;
