import Navbars from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import State from "./components/Graphs/graphByState"
import Courses from "./components/Graphs/graphByCourses";
import College from "./components/Tables/Colleges/CollegeParent";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import './App.css';
import { Container,Row,Col } from "reactstrap";
import { useState } from "react";
import CollegeByCourses from "./components/Tables/Courses/CollegeByCourse";
function App() {
  const [extraValue,setExtraValue] = useState(null);
  return (
    <div className="App">
      <Navbars />
      <Container fluid>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Row>
            <Col md={6} >
              <State  setExtraValue={setExtraValue}/>
            </Col>
            <Col md={6} >
              <Courses  setExtraValue={setExtraValue} />
            </Col>
          </Row>
          </Route>
          <Route path="/byLocation" exact ><College state = {extraValue}/></Route>
          <Route path="/byCourses" exact ><CollegeByCourses name={extraValue} /></Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
        
        <Row>
          {/* {level === 1.2 && <h1>{extraValue}</h1>} */}
        </Row>
      </Container>

    </div>
  );
}

export default App;
