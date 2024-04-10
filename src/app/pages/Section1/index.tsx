import React from 'react'
import { Container, BackgroundColor, MiddleText, SpecialistButton, CircleImage } from './style'

function Section1() {
    return (
        <Container>
            <BackgroundColor>
                <MiddleText>
                    Somos uma consultoria de<br />
                    recrutamento, seleção e alocação<br />
                    de talentos que fazem a diferença.
                </MiddleText>
                <SpecialistButton>FALE COM UM ESPECIALISTA</SpecialistButton>
                <CircleImage src="CIRCULO_AMARELO.svg" alt="Círculo Amarelo" />
            </BackgroundColor>
        </Container>
    )
}

export default Section1