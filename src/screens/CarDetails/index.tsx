import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { Container, Header } from './styles';

export const CarDetails = () => {
    return (

        <Container>
            <Header>
                <BackButton onPress={() => {}}/>
            </Header>
            <ImageSlider imageUrl={['https://assets.stickpng.com/images/580b585b2edbce24c47b2c21.png']}/>
        </Container>
    )    
}