import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchItemsIfNeeded } from '../../Actions';
import DayList from './dayList'

class DayListContainer extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchItemsIfNeeded());
    }

    render() {
        const { list } = this.props;
        return (
            <DayList list={list} />
        )
    }
}

DayListContainer.PropTypes = {

}

const formatDays = items => {
    return items;
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        list: formatDays(state.items)
    }
}

export default connect(
    mapStateToProps
)(DayListContainer);