import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const BackgroundColor = styled.div`
    width: 100%;
    height: 350px;
    background-color: #eff3f3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MiddleText = styled.h1`
    font-size: 30px;
    font-family: 'Schibsted Grotesk', Arial, sans-serif;
    text-align: center;
    color: #012340;
    margin-bottom:35px;
`;

export const SpecialistButton = styled.button`
    width: 300px;
    height: 35px;
    border-radius: 25px;
    border: transparent;
    background-color: #00cbc5;
    margin-top: 90px;
    z-index: 1;
`;

export const CircleImage = styled.img`
    position:absolute;
    width: 33%;
    bottom: 1.5%;
`;