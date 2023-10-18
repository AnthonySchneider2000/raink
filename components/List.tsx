"use client";

import { Draggable, DragDropContext } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "./StrictModeDroppable";
import { Card, CardHeader } from "@/components/ui/card";
import { useState } from "react";

const Item = ({ item }: any) => {
  return (
    <Card>
      <CardHeader>{item.name}</CardHeader>
    </Card>
  );
};

export default function List({ items }: any) {
  const [currentItems, setCurrentItems] = useState(items);
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const newItems = Array.from(currentItems);
    const [reorderedItem] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, reorderedItem);
    setCurrentItems(newItems);
  };
  return (
    <Card className="p-2">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="vertical">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {currentItems.map((item: any, index: any) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Item item={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Card>
  );
}
