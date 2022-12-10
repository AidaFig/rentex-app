import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import { 
    Container, 
    Header, 
    Content, 
    Details, 
    Description, 
    Brand, 
    Name, 
    Rent, 
    Period, 
    Price,
    About 
} from './styles';

export const CarDetails = () => {
    return (

        <Container>
            <Header>
                <BackButton onPress={() => {}}/>
            </Header>
            <ImageSlider imageUrl={['https://assets.stickpng.com/images/580b585b2edbce24c47b2c21.png']}/>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <About>
                    Este é um automóviel desportivo. Surgiu do lendário
                     touro de lide indultadona praça Real Maestranza de Sevilla. 
                     É um belíssimo carro pra quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    )    
}