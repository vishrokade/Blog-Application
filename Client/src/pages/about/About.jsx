import React from 'react';
import "./about.css"
const AboutPage = () => {
  return (
    <div className="about-page">
      <h2>About Us</h2>
      <p>
        Welcome to our blog! We are a team of passionate writers and bloggers
        who love sharing knowledge and insights on various topics.
      </p>
      <p>
        Our mission is to provide valuable and informative content to our
        readers. Whether you're interested in technology, travel, food, or any
        other subject, you'll find something of interest here.
      </p>
      <p>
        Thank you for being a part of our community. If you have any questions
        or would like to get in touch, please visit our{' '}
        <a href="/contact">Contact Page</a>.
      </p>
    </div>
  );
};

export default AboutPage;
