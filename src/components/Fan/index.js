import React from 'react'
import styled from 'styled-components'
import FadeInScrollHelper from '../common/FadeInScrollHelper'
import fan from '../../images/fan.png'

const Container = styled.a`
    margin-top: 20vw;
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    position: absolute;
    width: 30vw;
`

const Fan = () => (
    <FadeInScrollHelper 
        defaultFactor={2.18}
        factorForSmartphone={1.9}>
        
        <Container
            href="http://www.fanstudios.com.br"
            target="_blank">
            
            <Image src={fan}/>

        </Container>

    </FadeInScrollHelper>
)

export default Fan