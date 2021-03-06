import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IBoardProps {
  todos: string[];
  boardId: string;
}

function Board({todos, boardId}: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>{(magic) => (
        <div ref={magic.innerRef} {...magic.droppableProps}>
          {todos.map((todo, idx) => <DraggableCard key={todo} todo={todo} idx={idx}/>)}
          {magic.placeholder}
        </div>
      )}
      </Droppable>
    </Wrapper>
  )
}

export default Board;