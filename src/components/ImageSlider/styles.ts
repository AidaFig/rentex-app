import styled from 'styled-components/native';
import { IImageSlider } from './interface';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    width: 100%;
`;

export const ImageIndexes  = styled.View`
    flex-direction: row;
    align-self: flex-end;
    padding-right: 24px;
`;

export const ImageIndex  = styled.View<IImageSlider>`
width: 6px;
height: 6px;
border-radius: 50%;
margin-left: 8px;
background-color: ${({ theme, active }) => active ? theme.colors.title : theme.colors.shape} ;
`;

export const CarImageWrapper  = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;
    
    justify-content: center;
    align-items: center;
`;

export const CarImage  = styled.Image`
    width: 280px;
    height: 132px;
`;
