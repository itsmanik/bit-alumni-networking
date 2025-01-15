import React from "react";
import classes from "./Help.module.css";

const Help = () => {
  return (
    <div className={classes.helpPageContainer}>
      {/* Header */}
      <header className={classes.header}>
        <h1>Welcome to Alumni Connection Help Center</h1>
        <p>Your guide to navigating our alumni networking and career platform</p>
      </header>

      {/* Introduction Section */}
      <section className={classes.introduction}>
        <h2>About Alumni Connection</h2>
        <p>
          Our platform is designed to help you stay connected with alumni, grow
          your professional network, and discover career opportunities. Whether
          you're seeking mentorship, exploring job openings, or reconnecting with
          your alumni community, we are here to support you in your professional
          journey.
        </p>
      </section>

      {/* Features Section */}
      <section className={classes.features}>
        <h2>Main Features</h2>

        <div className={classes.feature}>
          <h3>Reconnect with Alumni</h3>
          <p>
            Use our platform to reconnect with alumni from your institution. You
            can browse profiles, send connection requests, and stay informed
            about their professional achievements. Alumni connections offer
            valuable networking opportunities and mentorship.
          </p>
        </div>

        <div className={classes.feature}>
          <h3>Expand Your Professional Network</h3>
          <p>
            Build and expand your professional network by connecting with alumni
            and other professionals in your industry. Networking is a key
            component for career advancement and personal growth.
          </p>
        </div>

        <div className={classes.feature}>
          <h3>Find Career Opportunities</h3>
          <p>
            Explore job listings specifically curated for alumni and professionals.
            Filter job searches based on location, skills, and experience level.
            Apply directly through the platform and track your applications
            for quick updates.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={classes.faq}>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className={classes.faqItem}>
          <h3>How do I reconnect with an alumni?</h3>
          <p>
            You can search for alumni profiles from your institution, send them
            a connection request, and once they accept, you can start engaging
            in conversations to reconnect or seek mentorship.
          </p>
        </div>
        <div className={classes.faqItem}>
          <h3>How can I search for job opportunities?</h3>
          <p>
            Head over to the 'Jobs' section, where you can search for roles based
            on industry, location, or job title. Filter results according to your
            preferences and apply directly for jobs that interest you.
          </p>
        </div>
        <div className={classes.faqItem}>
          <h3>Can I get job recommendations tailored to my profile?</h3>
          <p>
            Yes, we offer personalized job recommendations based on your profile
            information, skills, and interests, ensuring that you find the best
            opportunities suited to your background.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={classes.contact}>
        <h2>Contact Support</h2>
        <p>If you need further assistance, we're here to help!</p>
        <p>
          Reach out to us at:{" "}
          <a href="mailto:support@alumniconnection.com">support@alumniconnection.com</a>
        </p>
      </section>
    </div>
  );
};

export default Help;
