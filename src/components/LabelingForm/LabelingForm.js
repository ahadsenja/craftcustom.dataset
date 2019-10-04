import React from 'react'
import { Form, Modal, FormLabel, FormControl, Button } from 'react-bootstrap'

class LabelingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false   
        }
    }
    show = () => {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <div>
                <Button onClick={this.show}>Labeling</Button>

                <Modal show={this.state.show} onHide={this.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>Labeling Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <FormLabel>Classification</FormLabel>
                                <FormControl />
                            </Form.Group>

                            <Form.Group>
                                <FormLabel>Description</FormLabel>
                                <FormControl />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.show}>Cancel</Button>
                        <Button variant='info'>Ok</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default LabelingForm