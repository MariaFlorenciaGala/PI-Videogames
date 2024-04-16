import "./pagination.styles.css";

//REDUX
import { useState } from 'react'

const Pagination = ({totalItems, itemsPerPage, onPageChange, currentPage, setCurrentPage}) => {

  const totalPages = Math.ceil(totalItems/itemsPerPage);

  const handlePageChange = (p) => {
    setCurrentPage(p);
    onPageChange(p)
  }

  const handlePrevPage = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage - 1)
      onPageChange(currentPage - 1)
    //  window.scrollTo(0, 0)//Desplaza la pantalla haca arriba
    }
  }

  const handleNextPage = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1)
      onPageChange(currentPage + 1)
      //window.scrollTo(0, 0)//Desplaza la pantalla haca arriba
    }
  }

  const renderPageNumbers = () => {

    const pageNumbers = [];
    const maxPagesToShow = 10; // Máximo de páginas a mostrar alrededor de currentPage

    const halfMaxPages = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(1, currentPage - halfMaxPages);
    let endPage = Math.min(totalPages, currentPage + halfMaxPages);

    // Ajusta el rango de páginas a mostrar si estamos cerca de los extremos
    if (endPage - startPage + 1 < maxPagesToShow) {
      if (currentPage < halfMaxPages + 1) {
        endPage = Math.min(totalPages, maxPagesToShow);
      } else {
        startPage = Math.max(1, totalPages - maxPagesToShow + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={currentPage === i ? 'buttonPageActive' : 'buttonPage'}
          disabled={currentPage=== i ? 'active' : ''}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };


    return (
      <div className="pagination">
        <button className='buttonPage'
                onClick={handlePrevPage}
                disabled={currentPage===1}>
                Anterior
        </button>
        {
          renderPageNumbers()
        }
        <button className='buttonPage'
                onClick={handleNextPage}
                disabled={currentPage===totalPages}>
                Siguiente
        </button>
      </div>
    )
    };
  
  export default Pagination;
  