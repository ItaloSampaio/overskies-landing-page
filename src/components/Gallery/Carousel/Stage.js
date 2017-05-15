import React from 'react'
import styled from 'styled-components'
import Transition from 'react-motion-ui-pack'

const Container = styled.div`
    //background-color: pink;
    position: relative;
    width: 70vw;
    height: 39.3vw;
`

const Content = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
`

class Stage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: []
        }
    }

    componentWillReceiveProps(nextProps) {
        
        if(nextProps.image !== this.props.image || !this.state.content.length) {
            
            const newContent = { 
                key: Date.now().toString(),
                image: nextProps.image
            }
            
            this.setState({ content: [newContent] })
        }
    }

    render() {

        const { content } = this.state        

        return (
            <Container name="stage">
                
                <Transition
                    component="div"
                    enter={{ opacity: 1, zIndex: 1 }}
                    leave={{ opacity: 0, zIndex: 0 }}>

                    {content.map(({ key, image }) =>
                        <Content
                            key={key}
                            src={image} />
                    )}
                </Transition>

            </Container>
        )
    }
}

Stage.propTypes = {
    image: React.PropTypes.string.isRequired
}

export default Stage

/*import React from 'react'
import styled from 'styled-components'
import { spring, TransitionMotion } from 'react-motion'

const Container = styled.div`
    //background-color: pink;
    position: relative;
    width: 70vw;
    height: 39.3vw;
`

const Content = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
`

class Stage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: []
        }

        this.contentWillEnter = this.contentWillEnter.bind(this)
        this.contentWillLeave = this.contentWillLeave.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        
        if(nextProps.image !== this.props.image || !this.state.content.length) {
            
            const newContent = { 
                key: Date.now().toString(),
                image: nextProps.image
            }
            
            this.setState({ content: [newContent] })
        }
    }

    contentWillEnter() {

        return { opacity: 0 };
    }

    contentWillLeave() {

        return { opacity: spring(0), zIndex: 1 }
    }

    render() {

        const { content } = this.state

        const styles = content.map(item => ({
            key: item.key,
            style: { opacity: spring(1), zIndex: 0 },
            data: { image: item.image }
        }))

        return (
            <Container name="stage">
                
                <TransitionMotion
                    styles={styles}
                    willEnter={this.contentWillEnter}
                    willLeave={this.contentWillLeave}>
                    
                    {interpolatedStyles => 
                        <div>
                        {interpolatedStyles.map(({ key, data, style }) => 
                            <Content
                                key={key}
                                src={data.image}
                                style={style} />
                        )}
                        </div>
                    }
                
                </TransitionMotion>

            </Container>
        )
    }
}

Stage.propTypes = {
    image: React.PropTypes.string.isRequired
}

export default Stage*/