import React from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoState } from "./atoms";

// React 18 react-beautiful-dnd Error Fix
// npm install --save-dev react-beautiful-dnd --legacy-peer-deps
// npm install --save-dev --force react-beautiful-dnd

const Wrapper = styled.div`
	display: flex;
	max-width: 480px;
	width: 100%;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Boards = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
	padding: 20px 10px;
	padding-top: 30px;
	background-color: ${props => props.theme.boardColor};
	border-radius: 5px;
	min-height: 200px;
`;

const Card = styled.div`
	background-color: ${props => props.theme.cardColor};
	border-radius: 5px;
	padding: 10px 10px;
	margin-bottom: 5px;
`;

function App() {
	const [todos, setTodos] = useRecoilState(todoState);
	const onDragEnd = ({destination, source}: DropResult) => {
		setTodos((current) => {
			// const newCurrent = [...current];
			// const moveValue = newCurrent.splice(destination.index);
			return current;
		});
	};
  return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					<Droppable droppableId="one">{(magic) => (
						<Board ref={magic.innerRef} {...magic.droppableProps}>
							{todos.map((todo, idx) => <Draggable key={idx} draggableId={todo} index={idx}>
								{(magic) => 
								(
									<Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps} >
										{todo}
									</Card>
								)
								}
							</Draggable>)}
							{magic.placeholder}
						</Board>
					)}
					</Droppable>
				</Boards>
			</Wrapper>
		</DragDropContext>
	)
}

export default App;
