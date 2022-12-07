import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo  from '../../assets/logo.svg'
import { Car } from '../../components/Car'
import { Container, Header, TotalCars, HeaderContainer } from './styles';

export function Home(){
    const carDataOne = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'Ao dia',
            price: 120,
        },
        thumbnail: 'https://assets.stickpng.com/images/580b585b2edbce24c47b2c21.png',
    }
    return (
        <Container>
            <StatusBar 
            barStyle='light-content'
            backgroundColor='transparent'
            translucent
            />
            <Header>
                <HeaderContainer>
                    <Logo 
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContainer>
            </Header>
            <Car data={carDataOne}/>
        </Container>
    )
}