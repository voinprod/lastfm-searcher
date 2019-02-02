import React from 'react'


const SidebarItem = ({ name, artist, image }) => {
    return (
        <React.Fragment>
            <li className="list-group-item b-music_item">
                <img className="rounded mr-3" src={image[0]['#text']} alt="" />
                <a className="music-item" href={artist.url}>{name}</a>
            </li>
        </React.Fragment>
    )
}


export default SidebarItem