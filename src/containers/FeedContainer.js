import React, { Component } from 'react'
import FeedList from "../components/feed/FeedList"
import { connect } from 'react-redux'
export class FeedContainer extends Component {
    render() {
        const { loading, tracks } = this.props
        return (
            <div>
                <FeedList loading={loading} tracks={tracks} />
            </div>
        )
    }
}

const mapStateToProps = store => ({
    loading: store.search.loading,
    tracks: store.search.tracks
})

export default connect(mapStateToProps)(FeedContainer)
