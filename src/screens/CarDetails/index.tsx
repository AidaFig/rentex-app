import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import peopleSvg from '../../assets/people.svg';
import exchangeSvg from '../../assets/exchange.svg';

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
    About,
    Accessories
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

                <Accessories>

                    <Accessory name='380Km/h' icon={speedSvg}/>
                    <Accessory name='3.2s' icon={accelerationSvg}/>
                    <Accessory name='800HP' icon={forceSvg}/>
                    <Accessory name='Gasolina' icon={gasolineSvg}/>
                    <Accessory name='Auto' icon={exchangeSvg}/>
                    <Accessory name='2 pessoas' icon={peopleSvg}/>
                </Accessories>

                <About>
                    Este é um automóvel desportivo. Surgiu do lendário
                     touro de lide indultado na praça Real Maestranza de Sevilla. 
                     É um belíssimo carro pra quem gosta de acelerar.
                </About>

            </Content>
        </Container>
    )    
}