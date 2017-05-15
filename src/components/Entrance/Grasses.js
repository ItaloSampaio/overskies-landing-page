import React from 'react';
import styled from 'styled-components'
import Layer from './Layer'
import grasses from '../../images/grasses.png'

const Image = styled(Layer)`
    height: 83vw;
    z-index: 3;
    top: 1.5vw;
`

const Grasses = ({ style }) => (
    <Image 
        src={grasses}
        style={style} />
)

Grasses.propTypes = {
    style: React.PropTypes.object
}

export default Grasses