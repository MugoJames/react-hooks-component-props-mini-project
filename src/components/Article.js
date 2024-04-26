
import React from "react";

function Timereading(minutes) {
  const coffe = Math.ceil(minutes / 5);
  const bentos = Math.ceil(minutes / 10);
  if (minutes < 30) {
    return `${'☕️'.repeat(coffe)} ${minutes} min read`;
  } else {
    return `${'🍱'.repeat(bentos)} ${minutes} min read`;
  }
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const Readingtime = Timereading(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{Readingtime}</p>
    </article>
  );
}

export default Article;
