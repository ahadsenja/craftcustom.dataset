import React from 'react'
import { Nav, Form } from 'react-bootstrap'
import './sideMenu.css'

class SideMenu extends React.Component {
    
    updateImage = (event) => {
        const image = event.target.files[0]
        this.props.handleSetImage(image)
    }

    render() {
        return (
            <div align='center' id='side-menu'>
                <Nav className='flex-column'>
                    <Nav.Item>
                        <Form.Label id='imageLoader' style={{ color: 'blue', fontSize: 13 }}>
                            Open <Form.Control name='file' type='file' onChange={(event) => {this.updateImage(event)}} style={{ display: 'none' }} />
                        </Form.Label>
                        <Nav.Link style={{ fontSize: 13 }} href='#'>Save</Nav.Link>
                        <Nav.Link style={{ fontSize: 13 }} href='#'>Box</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}
export default SideMenu