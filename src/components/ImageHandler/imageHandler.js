import React from 'react'
import { FormLabel, FormControl } from 'react-bootstrap'
import '../style.css'

class ImageHendler extends React.Component {
    componentDidMount() {
        this.onBoundingBox()
    }

    onBoundingBox = () => {
        let imgLoader = document.getElementById('imgLoader')
        imgLoader.addEventListener('change', handleImage, false)
        let canvas = document.getElementById('canvas')
        let ctx = canvas.getContext('2d')
        let imageObj = null

        function handleImage(e) {
            let reader = new FileReader()
            reader.onload = function(event) {
                imageObj = new Image()
                imageObj.onload = function() {
                    canvas.width = imageObj.width
                    canvas.height = imageObj.height
                    ctx.drawImage(imageObj, 0, 0)
                }
                imageObj.src = event.target.result
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    render() {
        return (
            <div>
                <br />
                <FormLabel className='btn btn-info'>
                    Open <FormControl id='imgLoader' type='file' name='file' style={{ display: 'none' }} />
                </FormLabel>
            </div>
        )
    }
}
export default ImageHendler