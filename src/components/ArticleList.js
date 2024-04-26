import React from "react";
import Article from "./Article";
import blogData from "../data/blog";
function ArticleList(){
    return(
        <main>
         {blogData.posts.map((article) => (
        <Article
        key={article.id}
        title={article.title}
        date={article.date}
        preview={article.preview}
        minutes={article.minutes}
        />
      ))}
        </main>

    );
}
export default ArticleList;