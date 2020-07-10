/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #636360;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }
    ${props =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `}

    ${props =>
        props.isFocused &&
        css`
            color: #ff9000;
            border-color: #ff9000;
        `}

    ${props =>
        props.isFilled &&
        css`
            color: #ff9000;
        `}


    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #f4ede8;

        &::placeholder{
            color: #636360;
        }

    }
    svg {
        margin-right: 16px;
    }
}
`;

export const Error = styled.div`
    height: 20px;
    margin-left: 16px;
    svg {
        margin: 0;
    }
`;
