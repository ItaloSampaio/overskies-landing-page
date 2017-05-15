const resolutions = {
    extraSmall: { width: 320 },
    small: { width: 480 },
    medium: { width: 768 },
    large: { width: 992 },
    hd: { width: 1280 },
    fullHD: { width: 1920 }
}

export default {

    getWidth() {
        
        return window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth
    },

    getHeight() {
        
        return window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight
    },

    getResolutions() {

        return resolutions
    },

    isLandscape() {
        
        return this.getWidth() > this.getHeight()
    },

    getApproximateResolutionKey() {

        const screenWidth = this.getWidth()
        
        return Object
            .keys(resolutions)
            .map(key => ({ 
                key, 
                resolution: resolutions[key] 
            }))
            .sort((a, b) =>  a.resolution.width > b.resolution.width)
            .reduce((selected, current) => {
                
                return current.resolution.width <= screenWidth
                    ? current.key
                    : selected
            })        
    },

    getWidthOfCurrentResolution() {

        const currentResolution = this.getApproximateResolutionKey()
        return this.getResolutions()[currentResolution].width
    }
}