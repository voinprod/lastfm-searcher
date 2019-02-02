
import React from 'react'
import { connect } from 'react-redux'
import { addTop, loadMore } from '../actions/sidebarAction';
import SidebarList from '../components/sidebar/SidebarList';


class Sidebar extends React.Component {
    componentDidMount() {
        this.props.addTop()
    }
    render() {
        const { loading, tracks, limit, loadMore } = this.props
        return (
            <React.Fragment>
                <SidebarList loading={loading} tracks={tracks} limit={limit} loadMore={loadMore} />
            </React.Fragment>
        )
    }
};

const mapStateToProps = store => {
    return {
        loading: store.sidebar.loading,
        tracks: store.sidebar.charts.tracks,
        limit: store.sidebar.limit
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadMore: (limit) => dispatch(loadMore(limit)),
        addTop: () => dispatch(addTop())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)