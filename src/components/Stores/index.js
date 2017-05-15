import React from 'react';
import styled from 'styled-components'
import { spring, presets, Motion } from 'react-motion'
import breakpoints from '../../util/breakpoints'
import screenHelper from '../../util/screenHelper'
import apple from '../../images/apple.png'
import google from '../../images/google.png'

const Container = styled.div`
    margin-top: 31vw;
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: space-around;

    ${breakpoints.hd(`
        margin-top: 5vw;
    `)}
`

const StoreButton = styled.a`
    width: 23vw;
    height: 7.7vw;
    background-image: url(${props => props.image});
    background-size: 23vw 7.7vw;
    //${props => props.right ? 'margin-right: 22vw' : 'margin-left: 22vw' };
`

class Stores extends React.Component {

    constructor(props) {
        super(props)

        const buttonInitialStyle = { 
            opacity: 0, 
            margin: 5 
        }            

        this.state = {
            showed: false,
            buttonInitialStyle,
            appleButtonStyle: buttonInitialStyle,
            googleButtonStyle: buttonInitialStyle,
        }

        this.handleScroll           = this.handleScroll.bind(this)
        this.changeButtonOpacity    = this.changeButtonOpacity.bind(this)
        this.handleMouseOver        = this.handleMouseOver.bind(this)
        this.handleMouseOut         = this.handleMouseOut.bind(this)
    }

    componentDidMount() {
        
        window.addEventListener('scroll', this.handleScroll, false)
    }

    componentWillUnmount() {

        window.removeEventListener('scroll', this.handleScroll, false)
    }

    handleScroll() {

        const currentWidth      = screenHelper.getWidth()
        const { scrollY }       = window
        
        if(scrollY < currentWidth * .5 || this.state.showed) return

        const buttonTargetStyle = {
            opacity: spring(1, {...presets.gentle, stiffness: 40}),
            margin: spring(22, {...presets.gentle, stiffness: 60})
        }
        
        this.setState({ 
            showed: true,
            appleButtonStyle: buttonTargetStyle,
            googleButtonStyle: buttonTargetStyle,
        })
        
        window.removeEventListener('scroll', this.handleScroll, false)
    }

    changeButtonOpacity(options) {

        const { name, opacity } = options
        const newStyle = { opacity: spring(opacity) }

        switch(name) {

            case 'apple-store-button': 
                this.setState({ 
                    googleButtonStyle: {
                        ...this.state.googleButtonStyle,
                        ...newStyle
                    }
                })
                break
            
            case 'google-store-button': 
                this.setState({ 
                    appleButtonStyle: {
                        ...this.state.appleButtonStyle,
                        ...newStyle 
                    }
                })
                break
        }
    }

    handleMouseOver(event) {

        this.changeButtonOpacity({ 
            name: event.target.name, 
            opacity: .3 
        })
    }
    

    handleMouseOut(event) {

        this.changeButtonOpacity({ 
            name: event.target.name, 
            opacity: 1
        })
    }

    render() {
        
        return (
            <Container>

                <Motion
                    defaultStyle={this.state.buttonInitialStyle}
                    style={this.state.appleButtonStyle}>
                    
                    {interpolatingStyle =>
                    <StoreButton
                        name="apple-store-button"
                        href="https://www.google.com"
                        image={apple}                    
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}
                        style={{ 
                            opacity: interpolatingStyle.opacity, 
                            marginLeft: `${interpolatingStyle.margin}vw`
                        }} />
                    }

                </Motion>

                <Motion
                    defaultStyle={this.state.buttonInitialStyle}
                    style={this.state.googleButtonStyle}>
                    
                    {interpolatingStyle =>
                    <StoreButton
                        name="google-store-button"
                        href="https://www.google.com"
                        image={google}
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}
                        style={{ 
                            opacity: interpolatingStyle.opacity, 
                            marginRight: `${interpolatingStyle.margin}vw`
                        }} />
                    }

                </Motion>
            
            </Container>
        )
    }
}

export default Stores