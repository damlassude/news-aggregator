import React from 'react';
import NewsItem from './NewsItem'; // NewsItem component

function NewsGrid({ items }) {
  return (
    <div className="news-grid">
      {items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  );
}

export default NewsGrid;




