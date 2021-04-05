import React from 'react';
import Button from './collection/Button';
import { Container } from '../Buttons/styles/styles';

const Buttons = () => {
    return (
        <Container>
            <Button
                bg={props => props.theme.colors.button.indigo}
                color={props => props.theme.colors.white.regular}

                text="Hello There" />
            <Button
                bg={props => props.theme.colors.button.pink}
                color={props => props.theme.colors.black.regular}
                boxShadow={props => props.theme.shadows.boxShadow}
                text="Pink Button"
                
            />
        </Container>
    )
}

export default Buttons;