import React, { PropTypes } from 'react'
import FadeInScroll from '../common/FadeInScroll'
import screenHelper from '../../util/screenHelper'

class FadeInScrollHelper extends React.Component {

    constructor(props) {
        super(props)

        this.handleShouldAppear = this.handleShouldAppear.bind(this)
    }
    
    handleShouldAppear(scrollY) {

        // const currentResolution  = screenHelper.getApproximateResolutionKey()
        
        // switch(currentResolution) {
        //     case extraSmall: 
        // }
        // const factor            = screenHelper.getResolutions()[currentResolution].width >= currentWidth
        //     ? (this.props.factorForSmartphone || 0)
        //     : (this.props.defaultFactor || 0)
        
        // console.log(`medium: ${screenHelper.getResolutions().medium}`)
        // console.log(`factor: ${factor}`)
        
        // const result = scrollY > currentWidth * factor
        
        // console.log(`result: ${result} - scroll: ${scrollY} - target: ${currentWidth * factor}`)
        // return result

        return true;
    }

    render() {
        return (
            <FadeInScroll shouldAppear={this.handleShouldAppear}> 
                
                {this.props.children} 
            
            </FadeInScroll>
        )
    }
}

FadeInScrollHelper.propTypes = {
    defaultFactor: PropTypes.number,
    factorForSmartphone: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ])
}

export default FadeInScrollHelper