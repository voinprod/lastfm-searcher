import React from 'react'

const Search = ({ startSeacrch }) => {
    let input;
    const handleSubmit = (e) => {
        e.preventDefault();
        startSeacrch(input.value);
    }
    return (
        <form className="card card-sm" onSubmit={handleSubmit}>
            <div className="card-body row no-gutters align-items-center">
                <div className="col-auto">
                    <i className="fas fa-search h4 text-body"></i>
                </div>
                <div className="col">
                    <input ref={node => (input = node)} className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
                </div>
                <div className="col-auto">
                    <button className="btn btn-lg btn-success" type="submit">Search</button>
                </div>
            </div>
        </form>
    )
}

export default Search