import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView).attrs({
    flex: 1,

})`
    background-color: ${({theme}) => theme.colors.background_secondary},
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 24px;
`;