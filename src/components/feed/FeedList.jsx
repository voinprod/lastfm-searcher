import React from 'react'
import FeedItem from './FeedItem';


const Feed = ({ loading, tracks }) => {
    return (
        <div className="container trackList">
            {loading ? <FeedItem tracks={tracks} /> : 'type track name'}
        </div>
    )
}


export default Feed