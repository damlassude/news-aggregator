import React from 'react';

function NewsItem({ item }) {
  const websiteUrl = item.url;
  const date = item.publishedAt;
  const formatDate = date.replace('T', ' ').replace('Z', '');

  return (
    <a href={item.url} className="article" target="_blank" rel="noopener noreferrer">
      <div className="article-image">
        <img src={item.urlToImage} alt={item.title} />
      </div>
      <div className="article-content">
        <div className="article-source">
          <img src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${websiteUrl}&size=16`} alt={item.source.name} />
          <span>{item.source.name}</span>
        </div>
        <div className="article-title">
          <h2>{item.title}</h2>
        </div>
        <p className="article-description">
          {item.description}
        </p>
        <div className="article-details">
          <small><b>Published at: </b>{formatDate}</small>
        </div>
      </div>
    </a>
  );
}

export default NewsItem;

