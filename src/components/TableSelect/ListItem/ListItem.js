import React from "react";

import { Item } from './ListItem.sryle';

const ListItem = ({children, isDragging, drag}) => (
    <Item ref={drag} isDragging={isDragging}>{children}</Item>
);

export default ListItem;