import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({required: true, minLength: 10})`
  background-color: tomato;

`;


function App() {
  return (
    <Father as="header">
      <input type="text" required />
      <input type="text" required />
      <input type="text" required />
      <input type="text" required />
      <input type="text" required />
    </Father>
  );
}

export default App;
