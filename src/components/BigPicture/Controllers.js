import React, { PropTypes } from 'react'
import styled from 'styled-components'
//import BigArrow from './BigArrow'
import Arrow from '../common/Arrow'
import CloseButton from './CloseButton'
import Transition from 'react-motion-ui-pack'

const ArrowContainer = styled.div`
    display: inline-block;
    z-index: 2;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${props => props.right ? 'right: 2%;' : 'left: 2%'};
`

const CloseButtonContainer = styled.div`
    position: fixed;
    z-index: 2;
    top: 3%;
    left: 5%;

    @media only screen and (orientation: landscape) {
        top: 5%;
        left: 3%;
    }
`

const Controllers = ({ show, onClickClose, onClickNext, onClickPrevious  }) => (
    <div name="controllers">

        <CloseButtonContainer>
                
            <CloseButton onClick={onClickClose} />
        
        </CloseButtonContainer>
        
        <Transition
            component={false}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}>

            {show &&
            <div key="arrows-containers" >
                
                <ArrowContainer name="arrow-container">
                
                    <Arrow 
                        name="left-arrow"
                        onClick={onClickPrevious} />
                
                </ArrowContainer>

                <ArrowContainer name="arrow-container" right>

                    <Arrow
                        name="right-arrow"
                        onClick={onClickNext}
                        right />

                </ArrowContainer>

            </div>
            }

        </Transition>

    </div>
)

Controllers.propTypes = {
    show: PropTypes.bool.isRequired,
    onClickClose: PropTypes.func.isRequired,
    onClickNext: PropTypes.func.isRequired,
    onClickPrevious: PropTypes.func.isRequired,
}

export default Controllers