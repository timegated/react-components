import React from 'react';
import Button from './collection/Button';
import { Container } from '../Buttons/styles/styles';

const Buttons = () => {
    return (
        <Container>
            <Button
                bg={props => props.theme.colors.button.indigo}
                color={props => props.theme.colors.white.regular}
                fontSize={props => props.theme.fontSize.md}
                text="Hello There" />
            <Button
                bg={props => props.theme.colors.button.pink}
                color={props => props.theme.colors.black.regular}
                boxShadow={props => props.theme.shadows.boxShadow}
                fontSize={props => props.theme.fontSize.lg}
                text="Hello There"
            />
            <Button
                bg={props => props.theme.colors.button.yellow}
                color={props => props.theme.colors.black.regular}
                boxShadow={props => props.theme.shadows.inset}
                fontSize={props => props.theme.fontSize.xlg}
                text="Hello There"
            />
        </Container>
    )
}

export default Buttons;