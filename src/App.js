import React from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap'

import ImageCanvas from './components/ImageCanvas/ImageCanvas'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import SideMenu from './components/SideMenu/SideMenu'
import LabelingForm from './components/LabelingForm/LabelingForm'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      newImage: null,
      imagePath: '',
    }
  }

  handleSetImage = (image) =>{
    const newImage = new Image();
    newImage.src = image.name;
    // newImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    newImage.onload = () => {
      this.setState({
        imagePath: image,
        newImage: newImage
      });
    };
    console.log(image)
  }

  render(){
    return (
      <div className='App'>
        <Row><Col> <HeaderMenu /> </Col></Row>

        <Row>
          <Col xs='2'> <SideMenu handleSetImage={this.handleSetImage} /> </Col>
          <Col xs='8'> 
            <ImageCanvas {...this.state} /> 
          </Col>
          <Col style={{ paddingRight: 20 }} xs='2'> 
            <LabelingForm /> 
          </Col>
        </Row>
      </div>
    )
  }
}
export default App;
