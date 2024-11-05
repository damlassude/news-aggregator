import React, { useState, useEffect } from 'react';
import Menu from './components/Menu'; 
import NewsGrid from './components/NewsGrid';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 9;
  const [category, setCategory] = useState("general");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchTerm}&pageSize=100&apiKey=e1666a82351546c09b1490483f7b74e9`);
      const data = await response.json();
      const filteredArticles = data.articles.filter(article => article.urlToImage && article.urlToImage !== "");
      setItems(filteredArticles);
    };

    fetchData().catch(err => console.error("Error fetching data: ", err));
  }, [category, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="App">
      <h1 className="title">See The Latest News</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={currentItems} />
      <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
      />
    </div>
  );
}

export default App;

