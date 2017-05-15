import React from 'react';
import styled from 'styled-components'
import breakpoins from '../../util/breakpoints'
import logo from '../../images/logo.png'

const Image = styled.img`
    position: fixed;
    width: 50vw;
    z-index: 4;
    transform: translate(-50%);
    left: 50%;
    top: 16.5vw;

    ${breakpoins.hd(`
        top: 9vw;
    `)}
`

const Logo = ({ style }) => (
    <Image 
        src={logo}
        style={style} />
)

Logo.propTypes = {
    style: React.PropTypes.object
}

export default Logo