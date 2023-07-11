
import styled from 'styled-components';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { FormTable } from './components/formTable';
import Button from '@mui/material/Button';


function App() {
  return (
    <>
      <Container>
      <FormTable/>
      <FlexContainer>
      <Button variant="outlined">Pesquisar</Button>
      </FlexContainer>
      </Container>
    </>
  );
}
const Container = styled.div`
max-width: 1024px;
margin: 0px auto;
height: 100vh;
`
const FlexContainer = styled.div`
display: flex;
justify-content: end;
`
export default App;
