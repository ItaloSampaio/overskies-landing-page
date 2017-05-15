export function next() {
    
    return { type: 'GALLERY_NEXT' }
}

export function previous() {
    
    return { type: 'GALLERY_PREVIOUS' }
}

export function goTo(index) {
    
    return { 
        type: 'GALLERY_GO_TO',
        index
    }
}

export function toggleBigPicture() {

    return { type: 'GALLERY_TOGGLE_BIG_PICTURE' }
}