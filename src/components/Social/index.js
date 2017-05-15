import React from 'react'
import styled from 'styled-components'
import { spring, presets, Motion } from 'react-motion'
import screenHelper from '../../util/screenHelper'
import facebook from '../../images/face.png' 
import instagram from '../../images/insta.png'

const Container = styled.div`
    display: flex;
    //justify-content: center;
    justify-content: space-around;
    margin-top: 5.2vw;
`
const SocialButton = styled.a`
    width: 6.2vw;
    height: 6.2vw;
    background-size: 6.2vw;
    margin: 0 2.5vw;
    background-image: url(${props => props.image})
`

class Social extends React.Component {

    constructor(props) {
        super(props)

        const buttonInitialStyle = { 
            opacity: 0, 
            margin: 35
        }            

        this.state = {
            showed: false,
            buttonInitialStyle,
            facebookButtonStyle: buttonInitialStyle,
            instagramButtonStyle: buttonInitialStyle,
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
        
        if(scrollY < currentWidth * .9 || this.state.showed) return

        const buttonTargetStyle = {
            opacity: spring(1, {...presets.gentle, stiffness: 40}),
            margin: spring(41, {...presets.gentle, stiffness: 60})
        }
        
        this.setState({ 
            showed: true,
            facebookButtonStyle: buttonTargetStyle,
            instagramButtonStyle: buttonTargetStyle,
        })
        
        window.removeEventListener('scroll', this.handleScroll, false)
    }

    changeButtonOpacity(options) {

        const { name, opacity } = options
        const newStyle = { opacity: spring(opacity) }

        switch(name) {

            case 'instagram-social-button': 
                this.setState({ 
                    facebookButtonStyle: {
                        ...this.state.facebookButtonStyle,
                        ...newStyle
                    }
                })
                break
            
            case 'facebook-social-button': 
                this.setState({ 
                    instagramButtonStyle: {
                        ...this.state.instagramButtonStyle,
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
                    style={this.state.facebookButtonStyle}>
                    
                    {interpolatingStyle =>
                    <SocialButton
                        name="facebook-social-button"
                        href="https://facebook.com"
                        image={facebook}                    
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
                    style={this.state.instagramButtonStyle}>
                    
                    {interpolatingStyle =>
                    <SocialButton
                        name="instagram-social-button"
                        href="https://instagram.com"
                        image={instagram}
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

export default Social