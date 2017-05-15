import React, { PropTypes } from 'react'
import { spring, Motion } from 'react-motion'

class FadeInScroll extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            container: {
                initialStyle: { opacity: 0 },
                currentStyle: { opacity: 0 }
            }
        }

        this.fadeInOptions = { 
            stiffness: 37, 
            damping: 13 
        }

        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        
        window.addEventListener('scroll', this.handleScroll, false)
    }

    componentWillUnmount() {

        window.removeEventListener('scroll', this.handleScroll, false)
    }

    handleScroll() {
        
        const shouldAppear = !this.props.shouldAppear || this.props.shouldAppear(scrollY)

        if(!shouldAppear) return

        this.setState({
            container: {
                currentStyle: {
                    opacity: spring(1, this.fadeInOptions)
                }
            }
        })

        window.removeEventListener('scroll', this.handleScroll, false)        
    }

    render() {

        const { initialStyle, currentStyle } = this.state.container

        return (
            <Motion
                defaultStyle={initialStyle}
                style={currentStyle}>
                
                {interpolatedStyle =>
                <div style={interpolatedStyle}>
                    {this.props.children}
                </div>
                }

            </Motion>
        )
    }
}

FadeInScroll.propTypes = {
    shouldAppear: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ])
}

export default FadeInScroll