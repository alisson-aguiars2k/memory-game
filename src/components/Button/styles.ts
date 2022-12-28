import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  background-color: #0284c7;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0.8;
  transition-duration: 500ms;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;
export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255,255,255,.2);
    padding: 0 15px;
    
`;
export const Icon = styled.img`
  height: 20px;
`;
export const Label = styled.div`
    height: inherit;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 20px;
`;