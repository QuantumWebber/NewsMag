// NewsBoard.jsx
import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`; // Using VITE_API_KEY
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('There was a problem with the fetch operation:', error));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="text-primary">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <Newsitem 
            key={index} 
            title={news.title} 
            description={news.description} 
            src={news.urlToImage} 
            url={news.url} 
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;

