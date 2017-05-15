import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { spring, Motion } from 'react-motion'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GalleryActions from '../../actions/galleryActions'
import screenHelper from '../../util/screenHelper'
import Carousel from './Carousel'
// import BigPicture from './BigPicture'

const Container = styled.section`
    //margin-top: 11.4vw;
    margin-top: 20vw;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    //background-color: tomato;
`

class Gallery extends React.Component {

    constructor(props) { 
        super(props)

        this.state = {
            container: {
                initialStyle: { opacity: 0 },
                currentStyle: { opacity: 0 }
            }
        }

        this.run                    = this.run.bind(this)
        this.stop                   = this.stop.bind(this)
        this.handleScroll           = this.handleScroll.bind(this)
        this.goTo                   = this.goTo.bind(this)
        this.goToNext               = this.goToNext.bind(this)
        this.goToPrevious           = this.goToPrevious.bind(this)
        this.handleSwipe            = this.handleSwipe.bind(this)
        this.showBigPicture         = this.showBigPicture.bind(this)
        this.hideBigPicture         = this.hideBigPicture.bind(this)
    }

    componentDidMount() {
        
        window.addEventListener('scroll', this.handleScroll, false)
    }    

    componentWillReceiveProps(nextProps) {
        
        if(!nextProps.gallery.showingBigPicture && this.props.gallery.showingBigPicture) {
            this.run()
            //window.scroll(0, 600)
        }
    }

    componentWillUnmount() {

        window.removeEventListener('scroll', this.handleScroll, false)
    }

    handleScroll() {

        const currentWidth  = screenHelper.getWidth()
        const { scrollY }   = window
        const factor        = screenHelper.getResolutions().medium >= currentWidth ? 1.25 : 1.5

        if(scrollY < currentWidth * factor) return    

        this.setState({
            container: {
                currentStyle: {
                    opacity: spring(1, { stiffness: 37, damping: 13 })
                }
            }
        })

        this.run()
        window.removeEventListener('scroll', this.handleScroll, false)        
    }

    run() {

        this.stop()
        this.nextId = setInterval(this.props.galleryActions.next, 3500)
    }

    stop() {

        this.nextId && clearInterval(this.nextId)
    }

    goTo(index) {

        this.run() //Needed to refresh setInterval counting
        this.props.galleryActions.goTo(index)
    }

    goToNext() {
        
        this.run() //Needed to refresh setInterval counting
        this.props.galleryActions.next()
    }

    goToPrevious() {

        this.run() //Needed to refresh setInterval counting
        this.props.galleryActions.previous()        
    }    

    handleSwipe(event) {

        const { deltaX } = event
                        
        if(Math.abs(deltaX) >= 50)
            return deltaX > 0 ? this.goToNext() : this.goToPrevious()

        this.run()
    }

    showBigPicture() {

        this.stop()
        this.props.galleryActions.toggleBigPicture()
    }

    hideBigPicture() {

        this.run()
        this.props.galleryActions.toggleBigPicture()
    }

    render() {
        
        const { initialStyle, currentStyle }    = this.state.container
        const { currentImageIndex, images }     = this.props.gallery
        
        const currentImage = images[currentImageIndex]

        return (
            <Motion
                defaultStyle={initialStyle}
                style={currentStyle}>
                
                {interpolatedStyle =>
                <Container
                    name="gallery"
                    style={interpolatedStyle}>

                    <Carousel
                        image={currentImage}
                        imageIndex={currentImageIndex}
                        imagesAmount={images.length}
                        onTapImage={this.showBigPicture}
                        onSwipeImage={this.handleSwipe}
                        onClickPrevious={this.goToPrevious}
                        onClickNext={this.goToNext}
                        onClickBullet={this.goTo} />                

                </Container>
                }
            
            </Motion>
        )
    }
}

Gallery.propTypes = {
    gallery: PropTypes.object.isRequired,
    galleryActions: PropTypes.object.isRequired
}

export default connect(
    //maps redux state to props
    state => ({
        gallery: state.gallery
    }),
    //maps redux dispatch to props
    dispatch => ({
        galleryActions: bindActionCreators(GalleryActions, dispatch)
    })
)(Gallery)