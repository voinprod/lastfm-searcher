import React from 'react'
import SidebarItem from './SidebarItem'

const SidebarList = ({ loading, tracks, limit, loadMore }) => {
    const handleClick = () => {
        loadMore(limit);
    }
    return (
        <React.Fragment>
            <h5>Top charts: </h5>
            <ul className="list-group">
                {
                    loading ? 'Загрузка...' :
                        tracks &&
                        tracks.track.slice(0, limit).map(
                            track => (<SidebarItem  {...track} />
                            ))
                }
            </ul>
            {!loading && <button className="btn mt-3 btn-success" onClick={handleClick}>Load more</button>}
        </React.Fragment>
    )
}


export default SidebarList