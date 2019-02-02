import React from 'react'


const FeedItem = ({ tracks }) => {

    return (
        <React.Fragment>
            {tracks && tracks['track'].map(track => <div className="card mt-3">
                <h5 className="card-header"><span className="trackName">Track name:</span> {track.name}</h5>
                <div className="card-body">
                    <img src={track.image[1]['#text']} className="rounded mr-3" alt="" />
                    <div>
                        <h5 className="card-title">{track.artist}</h5>
                        <p className="card-text"><a href={track.url}>Link</a></p>
                    </div>
                </div>
            </div>)}
        </React.Fragment>
    )
}

export default FeedItem