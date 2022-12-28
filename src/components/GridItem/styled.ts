import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
}
export const Container = styled.div<ContainerProps>`
  background-color: ${(props) =>
    props.showBackground ? "transparent" : "#222"};
  height: 80px;
  width: 80px;
  border-radius: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration: 500ms;
  box-shadow: 5px 5px 4px #111;
  &: hover {
    opacity: 0.9;
    transform: scale(1.05);
    
  }
`;

type IconProps = {
    opacity?: number;
}
export const Icon = styled.img<IconProps>`
    width: 50px;
    height: 50px;
    opacity: ${props => props.opacity ? props.opacity : 1};
`;

// transform:translate(88px, 88px);
// backface-visibility: visible;
// transfom-origin: 0% 0%;

// perspctive: 800px;