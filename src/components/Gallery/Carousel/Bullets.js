import React from 'react'
import styled from 'styled-components'
import breakpoints from '../../../util/breakpoints'

const BulletsContainer = styled.div`
    display: flex;    
    justify-content: center;
    flex-wrap: wrap;
`

const Bullet = styled.a`
    width: 3.1vw;
    height: 3.1vw;
    background-color: white;
    opacity: ${props => props.selected ? 1 : .15};
    //background-color: ${props => props.selected ? 'white' : 'gray'};
    margin: 1.56vw 1.7vw;
    cursor: pointer;

    ${breakpoints.hd(`
        width: 2vw;
        height: 2vw;
    `)}
`

class Bullets extends React.Component {

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }    

    handleClick(event) {

        const index = parseInt(event.target.name)

        this.props.onClick(index)
    }

    render() {

        const { amount, selectedIndex } = this.props
        
        return (
            <BulletsContainer name="bullets">
                {Array
                    .from(Array(amount))
                    .map((item, index) =>
                        <Bullet
                            key={index}
                            name={index}
                            selected={selectedIndex == index}
                            onClick={this.handleClick} />
                    )}
            </BulletsContainer>
        )
    }
}

Bullets.propTypes = {
    amount: React.PropTypes.number.isRequired,
    selectedIndex: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired
}

export default Bullets