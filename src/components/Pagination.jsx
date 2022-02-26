const Pagination = ({pageIncrement, pageDecrement, pageCount, totalPage}) => {
    
    return (
        <div className="pagination">
            <p>{pageCount} / {totalPage}</p>
            { pageCount > 1 && <button onClick={pageDecrement}>Prev</button> }
            { pageCount < totalPage && <button onClick={pageIncrement}>Next</button> }
        </div>
    );
}

export default Pagination;