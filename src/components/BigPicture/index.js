import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GalleryActions from '../../actions/galleryActions'
import Hammer from 'react-hammerjs'
import Controllers from './Controllers'
import BigStage from './BigStage'

const Container = styled.div`
    display: ${props => props.show ? 'block' : 'none'}
    background-color: black;
    width: 100vw;
    height: 100vh;
    position: relative;
`

class BigPicture extends React.Component {

    constructor(props) {
        super(props)

        this.state = { showControllers: true }
        
        this.countToHideControllers         = this.countToHideControllers.bind(this)
        this.hideControllers                = this.hideControllers.bind(this)
        this.toggleControllersVisibility    = this.toggleControllersVisibility.bind(this)
        this.handleClickNext                = this.handleClickNext.bind(this)
        this.handleClickPrevious            = this.handleClickPrevious.bind(this)
        this.handleClickClose               = this.handleClickClose.bind(this)
        this.handleSwipe                    = this.handleSwipe.bind(this)
    }

    componentDidMount() {
        
        this.countToHideControllers()
    }

    componentWillReceiveProps(nextProps) {

        if(nextProps.gallery.showingBigPicture && !this.props.gallery.showingBigPicture) {

            this.countToHideControllers()
            this.setState({ showControllers: true })
        }
    }

    countToHideControllers() {

        this.hideControllersId && clearTimeout(this.hideControllersId)
        this.hideControllersId = setTimeout(this.hideControllers, 1500)
    }

    hideControllers() {

        this.setState({ showControllers: false })
    }

    toggleControllersVisibility() {
        
        const { showControllers } = this.state

        if(!showControllers)
            this.countToHideControllers()
        
        this.setState({ showControllers: !showControllers })
    }

    handleClickNext() {
        
        this.countToHideControllers()
        this.props.galleryActions.next()
        this.setState({ showControllers: true })
    }

    handleClickPrevious() {
        
        this.countToHideControllers()
        this.props.galleryActions.previous()
        this.setState({ showControllers: true })
    }

    handleClickClose() {

        this.countToHideControllers()
        this.props.galleryActions.toggleBigPicture()
    }

    handleSwipe(event) {

        const { deltaX } = event
        const { next, previous } = this.props.galleryActions
                        
        if(Math.abs(deltaX) >= 50)
            deltaX > 0 ? next() : previous()

    }

    render() {
        const { showControllers } = this.state
        const { currentImageIndex, images, showingBigPicture } = this.props.gallery

        const currentImage = images[currentImageIndex]

        return (
            <Container 
                name="big-picture"
                show={showingBigPicture}>
                
                <Hammer
                    onTap={this.toggleControllersVisibility}
                    onPressUp={this.toggleControllersVisibility}
                    onSwipe={this.handleSwipe}>
                    
                    <BigStage 
                        name="big-stage" 
                        image={currentImage} />    

                </Hammer>                                            

                <Controllers
                    key="controllers"
                    show={showControllers}
                    onClickClose={this.handleClickClose}
                    onClickNext={this.handleClickNext}
                    onClickPrevious={this.handleClickPrevious} />
            
            </Container>
        )
    }
}

BigPicture.propTypes = {
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
)(BigPicture)