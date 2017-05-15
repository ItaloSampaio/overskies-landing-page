import screenHelper from './screenHelper'

const { extraSmall, small, medium, large, hd, fullHD } = screenHelper.getResolutions()

export default {
    
    extraSmall(content) {

        return `@media only screen and (min-width: ${extraSmall.width}px) { ${content} }`
    },

    extraSmallLandscape(content) {

        return `@media only screen and (min-width: ${extraSmall.width}px) and (orientation: landscape) { ${content} }`
    },

    small(content) {

        return `@media only screen and (min-width: ${small.width}px) { ${content} }`
    },

    smallLandscape(content) {

        return `@media only screen and (min-width: ${small.width}px) and (orientation: landscape) { ${content} }`
    },

    medium(content) {

        return `@media only screen and (min-width: ${medium.width}px) { ${content} }`
    },

    mediumLandscape(content) {

        return `@media only screen and (min-width: ${medium.width}px) and (orientation: landscape) { ${content} }`
    },

    large(content) {

        return `@media only screen and (min-width: ${large.width}px) { ${content} }`
    },

    hd(content) {

        return `@media only screen and (min-width: ${hd.width - 80}px) { ${content} }`
    },

    fullHD(content) {
        
        return `@media only screen and (min-width: ${fullHD.width - 20}px) { ${content} }`
    }
}