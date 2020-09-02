import React, { Fragment } from "react";
import { connect } from 'react-redux';
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

import TableSelectContainer from "../TableSelect/TableSelectContainer";
import TableContainer from "../Table/TableContainer";

const Main = ({status}) => (
    <Fragment>
        <DndProvider backend={HTML5Backend}>
            {status && <TableSelectContainer/>}
        </DndProvider>
        <TableContainer />
    </Fragment>
);

const mapStateToProps = state => ({
    status: state.table.modalStatus
})

export default connect(mapStateToProps, null)(Main);