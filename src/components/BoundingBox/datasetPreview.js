import React from 'react'
import '../style.css'

class DatasetPreview extends React.Component {
    render() {
        return (
            <div className='container'>
                <canvas id='canvas' width='800' height='600'></canvas>
            </div>
        )
    }
}
export default DatasetPreview