import React from "react";
import GasolineSvg from "../../assets/gasoline.svg";
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

export const Car = () => {
    return (
        <Container>
            <Details>
                <Brand>audi</Brand>
                <Name>Alguma coisa aqui</Name>

                <About>
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 120</Price>
                    </Rent>

                    <Type>
                        <GasolineSvg />
                    </Type>
                </About>
            </Details>
            <CarImage source={{uri: 'https://www.pngall.com/wp-content/uploads/2016/05/Audi-PNG-Picture.png'}} />
        </Container>
    )
}