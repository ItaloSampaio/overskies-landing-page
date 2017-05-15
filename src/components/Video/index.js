import React from 'react'
import styled from 'styled-components'
import { spring, Motion  } from 'react-motion'
import screenHelper from '../../util/screenHelper'

const Container = styled.div`
    position: relative;
    z-index: 11;
    display: flex;
    justify-content: center;
    margin-top: 5.6vh;
`

const IFrame = styled.iframe`
    width: 70vw;
    height: 39.3vw;    
`

class Video extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            initialStyle: { opacity: 0 },
            currentStyle: { opacity: 0 }
        }

        this.handleScroll   = this.handleScroll.bind(this)
        this.handleLoad     = this.handleLoad.bind(this)
    }

    componentWillUnmount() {

        window.removeEventListener('scroll', this.handleScroll, false)
    }

    handleScroll() {
        
        const currentWidth  = screenHelper.getWidth()
        const { scrollY }   = window
        const factor        = screenHelper.getResolutions().medium >= currentWidth ? .6 : .8

        if(scrollY < currentWidth * factor) return

        this.setState({
            currentStyle: {
                opacity: spring(1, { stiffness: 37, damping: 13 })
            }
        })

        window.removeEventListener('scroll', this.handleScroll, false)
    }

    handleLoad() {

        window.addEventListener('scroll', this.handleScroll, false)
        this.handleScroll()
    }

    render() {

        return (
            <Container>

                <Motion
                    defaultStyle={this.state.initialStyle}
                    style={this.state.currentStyle}>

                    {interpolatedStyle =>
                    <IFrame
                        id="player" 
                        type="text/html"
                        src="http://www.youtube.com/embed/DNn8hbyL-wg?rel=0&amp;controls=0&amp;showinfo=0"
                        frameBorder="0" 
                        allowFullScreen
                        style={interpolatedStyle}
                        onLoad={this.handleLoad} />
                    }                    
                </Motion>

            </Container>
        )
    }
}

export default Video