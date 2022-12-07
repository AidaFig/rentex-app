import React from "react";
import GasolineSvg from "../../assets/gasoline.svg";
import { ICarData } from "./interface";
import {
    Container,
    Details,
    Brand, 
    Name, 
    About, 
    Rent, 
    Period, 
    Price, 
    Type,
    CarImage
} from './styles';

export const Car = ({ data } : ICarData) => {
    return (
        <Container>
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.rent.period}</Period>
                        <Price>{`R$ ${data.rent.price}`}</Price>
                    </Rent>

                    <Type>
                        <GasolineSvg />
                    </Type>
                </About>
            </Details>
            <CarImage data={data.thumbnail} />
        </Container>
    )
}