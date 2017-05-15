import React, { PropTypes } from 'react'
import Hammer from 'react-hammerjs'
import Stage from './Stage'
import Controllers from './Controllers'

const Carousel = ({ image, imageIndex, imagesAmount, onTapImage, onSwipeImage, onClickPrevious, onClickNext, onClickBullet }) => (
    <div>
        
        <Hammer
            onTap={onTapImage}
            onSwipe={onSwipeImage}>
            
            <Stage image={image} />

        </Hammer>
        
        <Controllers
            selectedIndex={imageIndex}
            bulletsAmount={imagesAmount}
            onClickLeft={onClickPrevious}
            onClickRight={onClickNext}
            onClickBullet={onClickBullet} />

    </div>
)

Carousel.propTypes = {
    image: PropTypes.string.isRequired,
    imagesAmount: PropTypes.number.isRequired,
    imageIndex: PropTypes.number.isRequired,
    onTapImage: PropTypes.func.isRequired,
    onSwipeImage: PropTypes.func.isRequired,
    onClickPrevious: PropTypes.func.isRequired,
    onClickNext: PropTypes.func.isRequired,    
    onClickBullet: PropTypes.func.isRequired
}

export default Carousel