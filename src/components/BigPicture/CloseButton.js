import React, { PropTypes } from 'react'
import styled from 'styled-components'
import close from '../../images/close.svg'
import breakpoints from '../../util/breakpoints'

const Icon = styled.img`
    width: 5%;

    ${breakpoints.extraSmallLandscape(`
        width: 3%;
    `)}

    ${breakpoints.mediumLandscape(`
        width: 5%;
    `)}   

    ${breakpoints.fullHD(`
        width: 7%;
    `)} 
`

const CloseButton = ({ onClick }) => (
    <Icon 
        src={close} 
        onClick={onClick} />
)

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default CloseButton