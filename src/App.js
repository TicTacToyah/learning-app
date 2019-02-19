import React, {
  Component
} from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div `
background-color: salmon;
`



class App extends Component {
  render() {
    return ( < StyledDiv className = "App" >
      Hello World </StyledDiv>
    );
  }
}

export default App;