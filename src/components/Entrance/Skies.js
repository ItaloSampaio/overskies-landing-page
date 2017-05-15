import React from 'react';
import styled from 'styled-components'
import Layer from './Layer'
import skies from '../../images/sky.png'

const Image = styled(Layer)`
    z-index: 0;
`

const Skies = ({ style }) => (
    <Image 
        src={skies}
        style={style} />
)

Skies.propTypes = {
    style: React.PropTypes.object
}

export default Skies
