import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import Entrance from './Entrance/'
import Stores from './Stores'
import Video from './Video'
import Social from './Social'
import Gallery from './Gallery'
import Fan from './Fan'
import BigPicture from './BigPicture'

const DefaultContainer = styled.div`
    background-color: black;
`

const style = {
     height: '50vw'
}

const Main = ({ showingBigPicture }) => (
    <div>
        
        {!showingBigPicture &&
        <DefaultContainer name="default-container">

            <Entrance />
            <Stores />
            <Video />
            <Social />
            <Gallery />
            <Fan />
            <div style={style} />
        
        </DefaultContainer>
        }

        <BigPicture />

    </div>
)

Main.propTypes = {
    showingBigPicture: React.PropTypes.bool.isRequired
}

export default connect(
    //maps redux state to props
    state => ({
        showingBigPicture: state.gallery.showingBigPicture
    })
)(Main)