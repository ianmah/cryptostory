
import styled from 'styled-components'
import Character from './components/Character'

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  background: #fff;
  height: 100vh;
`
const items = [
  {
      itemId: 2000,
      version: "220"
  },
  {
      itemId: 12000,
      version: "220"
  }
]

function App() {
  return (
    <Container>
      <Character character={{items}} action='stand1' />
    </Container>
  );
}

export default App;
