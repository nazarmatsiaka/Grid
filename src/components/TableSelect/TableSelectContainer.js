import React, {useEffect, useState} from "react";
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';

import { setActiveColumns } from '../../reducers/activeColumn';
import {closedModal, setColumns} from '../../reducers/table';

import TableSelect from "./TableSelect";

const TableSelectContainer = ({columns, activeCols = [], setActiveColumns, setColumns, closedModal}) => {
    const cols = ['id', 'name', 'surname', 'age', 'gender', 'email', 'password'];

    let [othersCols, setOthersCols] = useState([]);

    let [search, setSearch] = useState('');

    useEffect(() => {
        setActiveColumns(columns);
    }, []);

    useEffect(() => {
        setOthersCols(cols.filter(c => activeCols.indexOf(c) === -1));
    }, [activeCols]);

    const [, dropForActive] = useDrop({
        accept: cols,
        canDrop: (item) => {
            return activeCols.indexOf(item.type) === -1
        },
        drop: (item) => {
            setActiveColumns([...activeCols, item.type]);
        }
    });

    const editSearchInput = (e) => {
        setSearch(e.target.value);
    }

    const filterActiveCols = () => {
        return activeCols.filter(i => i.toLowerCase().indexOf(search.toLowerCase()) === 0)
    }

    const [, dropForOther] = useDrop({
        accept: cols,
        canDrop: (item) => {
            return othersCols.indexOf(item.type) === -1
        },
        drop: (item) => {
            setActiveColumns(activeCols.filter(c => c !== item.type));
        }
    });

    const submit = () => {
        setColumns(activeCols);
        closedModal();
    }


    return(
        <TableSelect
            search={search}
            editSearchInput={editSearchInput}
            closedModal={closedModal}
            submit={submit}
            dropForOther={dropForOther}
            dropForActive={dropForActive}
            othersCols={othersCols}
            filterActiveCols={filterActiveCols} />
        );
}

const mapStateToProps = state => ({
    columns: state.table.columns,
    activeCols: state.activeColumn
});

const mapDispatchToProps = dispatch => ({
    setActiveColumns: (cols) => dispatch(setActiveColumns(cols)),
    setColumns: (cols) => dispatch(setColumns(cols)),
    closedModal: () => dispatch(closedModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TableSelectContainer);