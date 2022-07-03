import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// React 18 react-beautiful-dnd Error Fix
// npm install --save-dev react-beautiful-dnd --legacy-peer-deps
// npm install --save-dev --force react-beautiful-dnd

function App() {
	const onDragEnd = () => {};
  return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div>
				<Droppable droppableId="one">{() =>
					(
					<ul>
						<Draggable draggableId="first" index={0}>
							{() => <li>Hello</li>}
						</Draggable>
						<Draggable draggableId="second" index={1}>
							{() => <li>Hello</li>}
						</Draggable>
					</ul>
					)
				}</Droppable>
			</div>
		</DragDropContext>
	)
}

export default App;
