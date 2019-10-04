import React from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap'

import ImageCanvas from './components/ImageCanvas/ImageCanvas'
import HeaderMenu from './components/HeaderMenu/HeaderMenu'
import SideMenu from './components/SideMenu/SideMenu'
import LabelingForm from './components/LabelingForm/LabelingForm'

class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <Row><Col> <HeaderMenu /> </Col></Row>

        <Row>
          <Col xs='2'> <SideMenu /> </Col>
          <Col xs='8'> 
            <ImageCanvas /> 
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
