import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

class LabelingForm extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ padding: 10 }}>
                    <Form.Text><strong>Labeling Form</strong></Form.Text>
                    <hr />
                    <Form>
                        <Form.Group>
                            <Form.Label style={{ fontSize: 12 }}>Classification</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label style={{ fontSize: 12 }}>Description</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Button size='sm' variant='secondary' onClick={this.toggleShowForm}>Cancel</Button>
                        <span style={{ paddingLeft: 5 }}></span>
                        <Button size='sm' variant='info'>Ok</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default LabelingForm