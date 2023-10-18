"use client"

import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { StrictModeDroppable } from './StrictModeDroppable';

const Item = ({item}: any) => {
    return(
        <div className="border border-border">
            <h1>{item.name}</h1>
        </div>
    )
}

export default function List( {items}: any ) {
    const onDragEnd = (result: any) => {
        console.log(result)
    }
    return(
        <div className="border p-2 border-border">

        <DragDropContext onDragEnd={onDragEnd}>
            <StrictModeDroppable droppableId="list" direction='vertical' >
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {items.map((item: any, index: any) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <Item item={item} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </StrictModeDroppable>
        </DragDropContext>
        </div>
    )
}