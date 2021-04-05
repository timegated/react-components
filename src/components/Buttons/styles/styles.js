import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`
export const ButtonOne = styled.button`
  background: ${props => props.bg};
  color: ${props => props.color};
  box-shadow: ${props => props.boxShadow};
  font-size: ${props => props.fontSize};

  &:hover {
    box-shadow: ${props => props.theme.shadows.inset}
  }
`
