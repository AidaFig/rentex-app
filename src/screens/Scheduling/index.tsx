import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';

import { 
    Container, 
    Header, 
    Title, 
    RentalPeriod, 
    DateInfo, 
    DateTitle, 
    DateValue } from './styles';

export const Scheduling = () => {
    const theme = useTheme();
    return (
        <Container>
            <SafeAreaView>
                <Header>
                    <BackButton 
                        onPress={() => {} } 
                        color={theme.colors.shape}/>
                    <Title>
                        Escolha uma {'\n'}
                        data de início e{'\n'} 
                        fim do aluguel.
                    </Title>

                    <RentalPeriod>
                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue selected={false}>18/09/2022</DateValue>
                        </DateInfo>

                        <ArrowSvg />

                        <DateInfo>
                            <DateTitle>ATÉ</DateTitle>
                            <DateValue selected={false}>18/09/2022</DateValue>
                        </DateInfo>

                    </RentalPeriod>
                </Header>
            </SafeAreaView>
        </Container>
    )
}