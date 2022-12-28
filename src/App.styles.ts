import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(black, gray);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-bottom: 3rem;
  align-items: center;
  text-align: center;
  
`;

export const LogoLink = styled.a`
  display: block;
  padding-top: 6.2rem;
  &:hover {
    transform: rotateY(180deg)
    // transform:translate(88px, 88px);
    // backface-visibility: visible;
    // transfom-origin: 0% 0%;

    // perspctive: 800px;
  }
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 0.625rem 0rem;
  @media (max-width: 1300px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 0 1.25rem;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(8, 1fr);
    margin: 0 1.25rem;
  }
  @media (max-width: 768px) {
    justify-content: center;
    margin: 0 1.25rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  gap: 12px;
  margin: 0 1.25rem;
  padding-bottom: 6.2rem;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(8, 1fr);
    margin: 0 1.25rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    margin: 0 1.25rem;
  }
`;