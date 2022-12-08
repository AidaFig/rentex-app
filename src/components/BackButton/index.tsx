import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { IBackButton } from './interface';
import { Container } from './styles';

export const BackButton = ({ color } : IBackButton) => {
    const theme = useTheme()
    return (
        <Container >
            <MaterialIcons
                name="chevron-left"
                size={24}
                color={color ? color : theme.colors.text}
                >

            </MaterialIcons>
        </Container>
    )    
}