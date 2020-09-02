import React from "react";

import ListItem from './ListItem/ListItemContainer';

import { Overlay, Modal, Content, Section, List, Button, Line, SearchInput } from './TableSelect.style'

const TableSelect = ({filterActiveCols, othersCols, dropForActive, dropForOther, submit, closedModal, search, editSearchInput}) => (
    <Overlay>
        <Modal>
            <h1>Select Columns for grid</h1>
            <SearchInput placeholder='Search' value={search} onChange={editSearchInput}/>
            <Content>
                <Section ref={dropForActive} className='active'>
                    <List>
                        {filterActiveCols().map(i => <ListItem name={i} key={i} />)}
                    </List>
                </Section>
                <Line/>
                <Section ref={dropForOther} className='other'>
                    <List>
                        {othersCols.map(i => <ListItem name={i} key={i} />)}
                    </List>
                </Section>
            </Content>

            <Button onClick={submit}>Apply</Button>
            <Button onClick={closedModal}>Closed</Button>
        </Modal>
    </Overlay>
);

export default TableSelect;