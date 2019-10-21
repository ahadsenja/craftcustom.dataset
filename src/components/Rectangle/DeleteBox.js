import React from 'react'

class DeleteBox extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    clickHandler = () => {
        console.log('Delete bounding box' + this.props.boxId)
        this.props.deleteBox(this.props.boxId)
    }

    render() {
        return (
            <div className='DeleteBoxButton' onClick={this.clickHandler}>
                X
            </div>
        )
    }
}
export default DeleteBox