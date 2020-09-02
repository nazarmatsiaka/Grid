import styled from "styled-components";

export const Item = styled.li`
    border: 1px dashed #000;
    border-radius: 3px;
    margin-bottom: 3px;
    padding: 5px 8px;
    opacity: ${props => props.isDragging? 0: 1};
    user-select: none;
    cursor: pointer;
`;