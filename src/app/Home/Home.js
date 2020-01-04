import React, { useState } from 'react'
import useImage from 'use-image'
import { Stage, Layer } from 'react-konva'
import { ButtonGroup, Button, FormLabel } from 'react-bootstrap'
import Image from '../../components/ImageFile/ImageFile'
const uuidv1 = require('uuid/v1')

function HomePage() {
    const [rectangles, setRectangles] = useState([])
    const [images, setImages] = useState([])
    const [selectedId, selectShape] = useState(null)
    const [shapes, setShapes] = useState([])
    const fileUploadEl = React.createRef()
    const stageEl = React.createRef()
    const layerEl = React.createRef()
    const [, updateState] = React.useState()

    const fileChange = event => {
        let file = event.target.files[0]
        let reader = new FileReader()

        reader.addEventListener(
            'load',
            () => {
                const id = uuidv1()
                images.push({
                    content: reader.result,
                    id
                })
                setImages(images)
                fileUploadEl.current.value = null
                shapes.push(id)
                setShapes(shapes)
            },
            false
        )
        if (file) {
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className='home-page'>
            <ButtonGroup vertical>
                <label>
                    Open <input type='file'  style={{ display: 'none' }} onChange={fileChange} ref={fileUploadEl} />
                </label>
                <Button variant='secondary'>Open</Button>
                <Button variant='secondary'>Open Dir</Button>
                <Button variant='secondary'>Save</Button>
                <Button variant='secondary'>Edit</Button>
                <Button variant='secondary'>Delete</Button>
                <Button variant='secondary'>Rectangle</Button>
                <Button variant='secondary'>Polygon</Button>
                <Button variant='secondary'>Undo</Button>
                <Button variant='secondary'>Redo</Button>
                <Button variant='secondary'>Prev</Button>
                <Button variant='secondary'>Next</Button>
            </ButtonGroup>

            <Stage>
                <Layer>
                    {images.map((image, i) => 
                        <Image 
                            key={i}
                            imageUrl={image.content}
                            isSelected={image.id === selectedId}
                            onSelect={() => {
                                selectShape(image.id)
                            }}
                            onChange={newAttrs => {
                                const imgs = images.slice()
                                imgs[i] = newAttrs
                            }}
                        /> 
                    )}
                </Layer>
            </Stage>
        </div>
    )
}
export default HomePage