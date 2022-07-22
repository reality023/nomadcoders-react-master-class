import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
	background-color: ${props => props.theme.cardColor};
	border-radius: 5px;
	padding: 10px 10px;
	margin-bottom: 5px;
`;

interface IDraggableCardProps {
  todo: string;
  idx: number;
}

function DraggableCard ({todo, idx}: IDraggableCardProps) {
  console.log(todo, "has been rendered");
  return (
    <Draggable key={todo} draggableId={todo} index={idx}>
      {(magic) => 
      (
        <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps} >
          {todo}
        </Card>
      )
      }
    </Draggable>
  )
}

export default React.memo(DraggableCard);