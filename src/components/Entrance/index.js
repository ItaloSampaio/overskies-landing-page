import React from 'react';
import styled from 'styled-components'
import mathHelper from '../../util/mathHelper'
import screenHelper from '../../util/screenHelper'
import Skies from './Skies'
import Logo from './Logo'
import Clouds from './Clouds'
import Trees from './Trees'
import Grasses from './Grasses'
import Blackout from './Blackout'

const heightContainerPercent = 83;

const Container = styled.div`
    position: relative;
    height: ${heightContainerPercent}vw;
`

class Entrance extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            logoStyle: {}
        }

        this.handleScroll       = this.handleScroll.bind(this)
        this.updateParallax     = this.updateParallax.bind(this)
        this.updateLogoState    = this.updateLogoState.bind(this)
    }

    componentDidMount() {
        
        window.addEventListener('scroll', this.handleScroll, false)
    }

    componentWillUnmount() {

        window.removeEventListener('scroll', this.handleScroll, false)   
    }

    updateParallax() {    

        const currentWidth      = screenHelper.getWidth()
        const { scrollY }       = window
        const percentReference  = heightContainerPercent / 100;

        if(scrollY > currentWidth * percentReference) 
            return

        const skiesMove     = scrollY * .4
        const cloudsMove    = scrollY * .3                
        const treesMove     = scrollY * .2

        this.setState({
            skiesStyle: { transform: `translateY(${skiesMove}px)` },
            cloudsStyle: { transform: `translateY(${cloudsMove}px)` },
            treesStyle: { transform: `translateY(${treesMove}px)` }
        })
    }

    updateLogoState() {

        const { scrollY }   = window
        const maxScroll     = screenHelper.getWidth() * .27
        let opacity         = mathHelper.inverseLerp(0, maxScroll, scrollY)
        opacity             = 1 - Math.min(1, opacity)
        
        if(this.state.logoStyle.opacity !== opacity) {

            const logoStyle = {
                opacity,
                display: opacity === 0 ? 'none' : 'inline'
            }    
                                
            this.setState({ logoStyle })
        }
    }

    handleScroll() {        

        this.updateParallax()
        this.updateLogoState()            
    }

    render() {

        return (
            <Container>            

                <Skies style={this.state.skiesStyle} />                
                <Clouds style={this.state.cloudsStyle} />                
                <Trees style={this.state.treesStyle} />                
                <Grasses />
                <Blackout />                
                <Logo style={this.state.logoStyle} />

            </Container>
        );
    }
}

export default Entrance;