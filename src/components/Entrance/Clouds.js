import React from 'react';
import styled from 'styled-components'
import Layer from './Layer'
import clouds from '../../images/clouds.png'

const Image = styled(Layer)`
    height: 56.5vw;
    z-index: 1;
`

const Clouds = ({ style }) => (
    <Image 
        src={clouds}
        style={style} />
)

Clouds.propTypes = {
    style: React.PropTypes.object
}

export default Clouds