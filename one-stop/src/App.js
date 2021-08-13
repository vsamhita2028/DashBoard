import Navbars from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import State from "./components/Graphs/graphByState"
import Courses from "./components/Graphs/graphByCourses";
import CollegeDets from "./components/Tables/Colleges/CollegeDets";
import './App.css';
import { Container,Row,Col } from "reactstrap";
import { useState } from "react";
function App() {
  const [level,setLevel] = useState(0);
  const [extraValue,setExtraValue] = useState(null);
  return (
    <div className="App">
      <Navbars />
      <Container fluid>
        <Row>
          <Col md={6}>
            <State setLevel={setLevel} setExtraValue={setExtraValue}/>
          </Col>
          <Col md={6}>
            <Courses setLevel={setLevel} setExtraValue={setExtraValue} />
          </Col>
        </Row>
        <Row>
          {level === 1 && <CollegeDets state = {extraValue}/>}
          {level === 1.2 && <h1>{extraValue}</h1>}
        </Row>
      </Container>

    </div>
  );
}

export default App;
