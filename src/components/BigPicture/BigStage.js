import React from 'react'
import styled from 'styled-components'
import Transition from 'react-motion-ui-pack'

const Container = styled.div`
    //background-color: tomato;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Content = styled.img`
    width: 100%;
`

class BigStage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            content: [],
            enterStyle: { opacity: 1 },
            leaveStyle: { opacity: 0 }
        }

        this.updateContent = this.updateContent.bind(this)
    }

    componentDidMount() {

        this.updateContent(this.props.image)
    }    

    componentWillReceiveProps(nextProps) {

        if(nextProps.image !== this.props.image)
            this.updateContent(nextProps.image)
    }

    updateContent(image) {

        const newContent = {
            key: Date.now().toString(),
            image
        }

        this.setState({ content: [newContent] })
    }

    render() {

        const { content, enterStyle, leaveStyle } = this.state
        
        return (
            <Transition
                component="div"
                enter={enterStyle}
                leave={leaveStyle}>

                {content.map(({ key, image }) =>
                    <Container key={key}>
                        
                        <Content src={image} />
                    
                    </Container>
                )}
            </Transition>
        )
    }
}

BigStage.propTypes = {
    image: React.PropTypes.string.isRequired
}

export default BigStage