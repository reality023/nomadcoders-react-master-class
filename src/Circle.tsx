import styled from "styled-components";
import { useState } from 'react';

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({bgColor, borderColor, text = "default text"}: CircleProps) {
    const [value, setValue] = useState<number|string>(0); // state에 여러 타입을 사용하고 싶은 경우
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? "white"}></Container>
    )
}

export default Circle;