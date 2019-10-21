import React, { useRef } from 'react'
import { Stage, Layer, Rect, Transformer } from 'react-konva'

const Rectangle = ({ shapeProps, isSelected, onSelect, onChange }) => {
    const shapeRef = React.useRef()
    const trRef = React.useRef()

    React.useEffect(() => {
        if (isSelected) {
            trRef.current.setNode(shapeRef.current)
            trRef.current.getLayer().batchDraw()
        }
    }, [isSelected])

    const handleMouseEnter = (event) => {
        const shape = event.target
        shape.stroke('#3DF6FF')
        shape.getStage().container().style.cursor = 'move'
        this.rect.getLayer().draw()
    }

    const handleMouseLeave = (event) => {
        const shape = event.target
        shape.stroke('#00A3AA')
        shape.getStage().container().style.cursor = 'crosshair'
        this.rect.getLayer().draw()
    }

    return (
        <React.Fragment>
            <Rect 
                onClick={onSelect}
                ref={shapeRef}
                {...shapeProps}
                draggable
                onDragEnd={e => {
                    onChange({
                        ...shapeProps,
                        x: e.target.x(),
                        y: e.target.y()
                    })
                }}
                onTransformEnd={e => {
                    const node = shapeRef.current
                    const scaleX = node.scaleX()
                    const scaleY = node.scaleY()

                    node.scaleX(1)
                    node.scaleY(1)
                    onChange({
                        ...shapeProps,
                        x: node.x(),
                        y: node.y(),
                        width: node.width() * scaleX,
                        height: node.height() * scaleY
                    })
                }}
                strokeWidth={2}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            {isSelected && <Transformer ref={trRef} />}
        </React.Fragment>
    )
}
export default Rectangle