import React, { Component } from 'react'
import Search from "../components/feed/Search"
import { connect } from 'react-redux'
import { startSeacrch } from '../actions/searchAction'
export class SearchContainer extends Component {
    render() {
        return (
            <div>
                <Search {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        startSeacrch: params => dispatch(startSeacrch(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
