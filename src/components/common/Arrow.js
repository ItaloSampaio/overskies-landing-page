import React from 'react'
import styled from 'styled-components'
import arrow from '../../images/arrow.svg'
import breakpoints from '../../util/breakpoints'

const Icon = styled.img`
    width: 10vw;
    ${props => props.right && 'transform: rotate(180deg);'}

    ${breakpoints.hd(`
        width: 5vw;
    `)}
`

class Arrow extends React.Component {

    constructor(props) {
        super(props);

        this.state = { pressed: false, wasPressedReseted: false }

        this.handleMouseDown    = this.handleMouseDown.bind(this)
        this.handleMouseUp      = this.handleMouseUp.bind(this)
        this.handleMouseLeave   = this.handleMouseLeave.bind(this)
        this.handleMouseEnter   = this.handleMouseEnter.bind(this)
    }

    handleMouseDown() {

        this.setState({ pressed: true, wasPressedReseted: false })
    }

    handleMouseUp() {

        this.setState({ pressed: false })
    }

    handleMouseEnter() {

        if(this.state.wasPressedReseted)
            this.setState({ pressed: true })
    }

    handleMouseLeave() {

        if(this.state.pressed)
            this.setState({ pressed: false, wasPressedReseted: true })
    }

    render() {

        const { onClick, right } = this.props
        //const { pressed } = this.state

        return (
            <Icon
                name="arrow"
                src={arrow}
                onClick={onClick}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                right={right} />
        
        )
    }
}

Arrow.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    right: React.PropTypes.bool
}

export default Arrow