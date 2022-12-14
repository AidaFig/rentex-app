import React from 'react';
import { IAccessory } from './interface';

import { Container, Name } from './styles';

export const Accessory = ({name, icon: Icon} : IAccessory) => {
    return (
        <Container>
            <Icon  width={32} height={32} />
            <Name>{name}</Name>
        </Container>
    )
}