import React from 'react'
import { Image } from 'react-konva'

class AnnotationImage extends React.Component {
    state = {
        image: null
      };
      componentDidMount() {
        const image = new window.Image();
        image.src = 'https://cdn.pixabay.com/photo/2019/09/30/18/41/taxi-4516525__340.jpg';
        image.onload = () => {
          this.setState({
            image
          });
        };
      }

      render() {
        const { state: { image } } = this

        return (
          <Image 
            height={640}
            width={900}
            image={image}
            ref={(node) => {
              this.imageNode = node
            }}
          />
        );
      }
}
export default AnnotationImage