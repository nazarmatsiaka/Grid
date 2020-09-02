import React,{Fragment} from "react";

import { Container, Th, Td, Button } from './Table.styled';

const Table = ({cols, users, openModal}) => (
    <Fragment>
        <Button onClick={openModal}>Select Grid Columns</Button>
        <Container>
            <thead>
                <tr>
                    {cols.map((col) => <Th key={col}>{col}</Th>)}
                </tr>
            </thead>
            <tbody>
                {users.map(u => <tr key={u.id}>
                    {cols.map(colName => <Td key={colName}>
                        {u[colName]}
                    </Td>)}
                </tr>)}
            </tbody>
        </Container>
    </Fragment>
);

export default Table;