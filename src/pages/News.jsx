import React, { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        // Take only the first two articles for simplicity
        const firstTwoArticles = data.slice(0, 2);
        setNews(firstTwoArticles);
      })
      .catch((error) => console.error('Error fetching news:', error));
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <div className="news">
      <h1>Latest News</h1>
      {news.map((article) => (
        <div key={article.id} className="news-article">
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
