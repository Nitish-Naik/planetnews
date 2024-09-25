import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ( {category }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {

                const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch news");
                }
                const data = await response.json();
                setArticles(data.articles);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchNews();
    }, [category]); // <- Dependency array is placed correctly to avoid reruns

    return (
        <div>
            <h1 className="text-center">Latest <span className="badge bg-danger text-dark">News</span></h1>
            {error ? (
                <p>Error fetching news: {error}</p>
            ) : (
                articles.filter(news => news.title && news.title !== '[Removed]').map((news, index) => (
                    <NewsItem 
                        key={index} 
                        title={news.title} 
                        description={news.description} 
                        src={news.urlToImage} 
                        url={news.url} 
                    />
                ))
            )}
        </div>
    );
};

export default NewsBoard;














































