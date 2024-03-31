// About.js
import React from 'react';

function About({ imageSrc, aboutText }) {
  return (
    <aside>
      <img src={imageSrc || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
