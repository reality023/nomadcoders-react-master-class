import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./atoms";
import Board from "./Components/Board";

// React 18 react-beautiful-dnd Error Fix
// npm install --save-dev react-beautiful-dnd --legacy-peer-deps
// npm install --save-dev --force react-beautiful-dnd

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

function App() {
	const [todos, setTodos] = useRecoilState(todoState);
	const onDragEnd = (info: DropResult) => {
		console.log(info);
		// if (!destination) return;
		// setTodos((current) => {
		// 	const newCurrent = [...current];
		// 	newCurrent.splice(source.index, 1);
		// 	newCurrent.splice(destination.index, 0, draggableId);
		// 	return newCurrent;
		// });
	};
  return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					{Object.keys(todos).map((boardId) => {
						return (<Board key={boardId} boardId={boardId} todos={todos[boardId]} />)
					})}
				</Boards>
			</Wrapper>
		</DragDropContext>
	)
}

export default App;
