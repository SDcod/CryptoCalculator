import React, { useEffect, useState } from "react";
import axios from "axios";
const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/news",
    };

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const first15articles = articles?.slice(0, 15);

  return (
    <div className='news_feed'>
      <h2>- : News Feed : -</h2>
      {first15articles
        ? first15articles?.map((article) => {
            return (
              <>
                <a className='newsLink' href={article.url}>
                  {article.title}
                </a>
                <br />
              </>
            );
          })
        : "loading News"}
    </div>
  );
};

export default NewsFeed;
