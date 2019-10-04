import React from 'react'
import { Nav, FormLabel, FormControl } from 'react-bootstrap'
import './sideMenu.css'

class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null
        };
    }

    componentDidMount() {
        this.updateImage()
    }

    componentDidUpdate(oldProps) {
        if (oldProps.src !== this.props.src) {
            this.updateImage()
        }
    }

    updateImage = (event) => {
        const image = new window.Image()
        image.src = this.props.image
        image.onload = () => {
            this.setState({
                image: image
            })
        }
    }

    render() {
        return (
            <div align='center' id='side-menu'>
                <Nav className='flex-column'>
                    <Nav.Item>
                        <FormLabel id='imageLoader' style={{ color: 'blue', fontSize: 13 }}>
                            Open <FormControl name='file' type='file' onChange={(event) => {this.updateImage(event)}} style={{ display: 'none' }} />
                        </FormLabel>
                        <Nav.Link style={{ fontSize: 13 }} href='#'>Save</Nav.Link>
                        <Nav.Link style={{ fontSize: 13 }} href='#'>Box</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}
export default SideMenu