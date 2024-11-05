import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;



