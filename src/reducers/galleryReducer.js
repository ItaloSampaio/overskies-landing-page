import initialState from './initialState'
import mathHelper from '../util/mathHelper'

export default function galleryReducer(state = initialState.gallery, action) {

    switch(action.type) {

        case 'GALLERY_NEXT': 
            return {
                ...state,
                currentImageIndex: mathHelper.ensureLoop(
                    0,
                    state.images.length - 1,
                    state.currentImageIndex + 1
                )
            }

        case 'GALLERY_PREVIOUS': 
            return {
                ...state,
                currentImageIndex: mathHelper.ensureLoop(
                    0,
                    state.images.length - 1,
                    state.currentImageIndex - 1
                )
            }

        case 'GALLERY_GO_TO':
            return {
                ...state,
                currentImageIndex: mathHelper.between(
                    0, 
                    state.images.length -1,
                    action.index
                )
            }

        case 'GALLERY_TOGGLE_BIG_PICTURE': 
            return {
                ...state,
                showingBigPicture: !state.showingBigPicture
            }

        default: return state
    }
}