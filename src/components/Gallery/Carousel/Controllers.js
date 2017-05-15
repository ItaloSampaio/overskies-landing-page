import React from 'react'
import styled from 'styled-components'
import Bullets from './Bullets'
import Arrow from '../../common/Arrow'
import breakpoints from '../../../util/breakpoints'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6vw;

    ${breakpoints.hd(`
        margin-top: 3vw;
    `)}
`

const Controllers = ({ onClickLeft, onClickRight, bulletsAmount, selectedIndex, onClickBullet }) => (
    <Container name="controllers">
        
        <Arrow onClick={onClickLeft} />
                            
        <Bullets 
            amount={bulletsAmount} 
            selectedIndex={selectedIndex} 
            onClick={onClickBullet} />
        
        <Arrow 
            onClick={onClickRight}
            right={true} />

    </Container>
)

Controllers.propTypes = {
    onClickLeft: React.PropTypes.func.isRequired,
    onClickRight: React.PropTypes.func.isRequired,
    bulletsAmount: React.PropTypes.number.isRequired,
    selectedIndex: React.PropTypes.number.isRequired,
    onClickBullet: React.PropTypes.func.isRequired
}

export default Controllers