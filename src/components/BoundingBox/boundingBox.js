import React from 'react'
import { FormLabel, FormControl } from 'react-bootstrap'

class BoundingBox extends React.Component {
    componentDidMount() {
        this.onBoundingBox()
    }
    
    onBoundingBox = () => {
        let imgLoader = document.getElementById('imgLoader')
        imgLoader.addEventListener('change', handleImage, false)
        let canvas = document.getElementById('canvas')
        let ctx = canvas.getContext('2d')
        let rect = {}
        let drag = false
        let imageObj = null

        function handleImage(e) {
            let reader = new FileReader()
            reader.onload = function(event) {
                imageObj = new Image()
                imageObj.onload = function() {
                    // canvas.width = imageObj.width
                    // canvas.height = imageObj.height
                    ctx.drawImage(imageObj, 0, 0)
                }
                imageObj.src = event.target.result
            }
            reader.readAsDataURL(e.target.files[0])
        }

        function init(e) {
            imageObj = new Image()
            imageObj.onload = function() {
                ctx.drawImage(imageObj, 0, 0)
            }
            canvas.addEventListener('mousedown', mouseDown, false)
            canvas.addEventListener('mouseup', mouseUp, false)
            canvas.addEventListener('mousemove', mouseMove, false)
        }

        function mouseDown(e) {
            rect.startX = e.clientX - this.offsetLeft
            rect.startY = e.clientY - this.offsetTop
            drag = true
            console.log('Xmin: ' + rect.startX +'\n' +'Ymin: ' + rect.startY)
        }

        function mouseUp(e) {
            drag = false
        }

        function mouseMove(e) {
            if (drag) {
                ctx.clearRect(0, 0, 800, 600)   
                ctx.drawImage(imageObj, 0, 0)
                rect.w = (e.clientX - this.offsetLeft) - rect.startX
                rect.h = (e.clientY - this.offsetTop) - rect.startY
                ctx.strokeStyle = 'red'
                ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h)
                rect.Xmax = rect.startX + rect.w
                rect.Ymax = rect.startY + rect.h
                console.log('Width: ' + rect.w + '\n' + 'Height: ' + rect.h)
                console.log('Xmax: ' + rect.Xmax + '\n' + 'Ymax: ' + rect.Ymax)
            }
        }
        init()
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
export default BoundingBox