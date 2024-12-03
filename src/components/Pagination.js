const Pagination = ({ pages, page, setPage }) => {
    return (
      <div className="pagination">
        {[...Array(pages).keys()].map((x) => (
          <button
            key={x + 1}
            onClick={() => setPage(x + 1)}
            className={x + 1 === page ? 'active' : ''}
          >
            {x + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  