import React from "react";
import {connect} from 'react-redux';

import Table from "./Table";
import {openModal} from "../../reducers/table";

const TableContainer = ({cols, users, openModal}) => {
    return(<Table
        openModal={openModal}
        cols={cols}
        users={users} />);
}

const mapStateToProps = state => ({
    cols: state.table.columns,
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);