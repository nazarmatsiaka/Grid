import styled from 'styled-components';

export const Container = styled.table`
  	text-align: left;
    border-collapse: separate;
    border-spacing: 5px;
    background: #ECE9E0;
    color: #656665;
    border: 16px solid #ECE9E0;
    border-radius: 20px;
    margin: 200px auto;
`;

export const Th = styled.th`
    font-size: 18px;
    padding: 10px;
    text-transform: uppercase;
`;

export const Td = styled.td`
    background: #F5D7BF;
    padding: 10px;
`;

export const Button = styled.button`
    background-color: #fff;
    border: 2px solid #0078D7;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 10px;
    color: #0078D7;
    cursor: pointer;
    
    &:hover {
    background-color: #0078D7;
    color: #fff;
`;