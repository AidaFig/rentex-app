import React from 'react';
import { IButton } from './interface';

import { Container, Title} from './styles';

export const Button = ({ title, color, onPress, ...rest}: IButton) => {
    return (
        <Container {...rest} color={color}>
            <Title>{title}</Title>
        </Container>
    )
}