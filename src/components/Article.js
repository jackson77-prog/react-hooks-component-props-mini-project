// Article.js
import React from 'react';

function Article({ article }) {
  const { title, date, preview } = article;

  // Function to calculate minutes to read
  const calculateMinutesToRead = (time) => {
    const minutes = Math.ceil(time / 5);
    if (time < 30) {
      return "☕️".repeat(minutes) + ` ${time} min read`;
    } else {
      const bentoBoxes = Math.ceil(time / 10);
      return "🍱".repeat(bentoBoxes) + ` ${time} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <small>{calculateMinutesToRead(article.minutesToRead)}</small>
    </article>
  );
}

export default Article;
