import React from "react";
import { IImageSlider } from "./interface";
import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImageWrapper,
    CarImage,
} from './styles';

export const ImageSlider = ({ imageUrl} :IImageSlider) => {
    return (
        <Container>
            <ImageIndexes>
                <ImageIndex active={false} />
                <ImageIndex active={true} />
                <ImageIndex active={false} />
            </ImageIndexes>

            <CarImageWrapper>
                <CarImage 
                    source={{uri: imageUrl[0]}}            
                />
            </CarImageWrapper>
        </Container>
    )
}