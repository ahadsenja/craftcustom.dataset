import React from 'react'
import { Image } from 'react-konva'

class AnnotationImage extends React.Component {
    state = {
        image: null
    }

    // componentDidMount() {
    //     const image = new window.Image()
    //     image.src = 'https://s3-ap-northeast-1.amazonaws.com/uploads-jp.hipchat.com/119782/5591318/0GFMfb0v0xHieft/upload.png'
    //     image.onload = () => {
    //         this.setState({
    //             image
    //         })
    //     }
    // }
    render() {
        // const { selectedFile } = this.props.selectedFile
        return (
            <Image 
                height={640}
                width={994}
                image={this.props.selectedFile}
            />
        )
    }
}
export default AnnotationImage