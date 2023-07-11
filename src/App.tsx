
import styled from 'styled-components';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
      <Container>
        <h1>Hello world</h1>
      </Container>
    </>
  );
}
const Container = styled.div`
max-width: 1024px;
display: grid;
margin: 0px auto;
height: 100vh;
place-items: center;

`
export default App;
