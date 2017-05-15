import React from 'react';
import styled from 'styled-components'
import Layer from './Layer'
import trees from '../../images/trees.png'

const Image = styled(Layer)`
    height: 46.5vw;
    z-index: 2;
    top: 18vw;
`

const Trees = ({ style }) => (
    <Image 
        src={trees}
        style={style} />
)

Trees.propTypes = {
    style: React.PropTypes.object
}

export default Trees