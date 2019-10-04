import React from 'react'
import { Row, Col } from 'react-bootstrap'

import './headerMenu.css'

class HeaderMenu extends React.Component {

    render() {
        return (
            <div id='header-menu'>
                <Row>
                    <Col sm={2}><strong>Tools</strong></Col>
                    {/* <Col sm={7}><strong>Image</strong></Col>
                    <Col sm={3}> <strong>Details</strong></Col> */}
                </Row>
            </div>
        )
    }
}

export default HeaderMenu