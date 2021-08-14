import Navbars from "./components/Navbar"
import State from "./components/Graphs/graphByState"
import Courses from "./components/Graphs/graphByCourses";
import College from "./components/Tables/Colleges/CollegeParent";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import './App.css';
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CollegeByCourses from "./components/Tables/Courses/CollegeByCourse";
function App() {
  const [extraValue, setExtraValue] = useState(null);
  const [lightMode,toggleLightMode] = useState(true);
  const dark ={
    color: "white",
    backgroundColor : "#1D1D1D",
  }
  return (
    <div className="App" style={{padding :0,margin:0,height:"100vh"}}>
      <Navbars lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <Container fluid  style={lightMode ?{color: "black"} : dark } >
        <Router>
          <Switch>
            <Route path="/" exact>
              <Row  >
                <Col className={"pl-4 pt-2 mt-3 box-light"}>
                  <Breadcrumb>
                    <BreadcrumbItem active >Home</BreadcrumbItem>
                  </Breadcrumb>
                </Col>
              </Row>
              <Row >
                <Col md={6} >
                  <State setExtraValue={setExtraValue} lightMode={lightMode} />
                </Col>
                <Col md={6} >
                  <Courses setExtraValue={setExtraValue} lightMode={lightMode} />
                </Col>
              </Row>
            </Route>
            <Route path="/byLocation" exact ><College state={extraValue} lightMode={lightMode} /></Route>
            <Route path="/byCourses" exact ><CollegeByCourses name={extraValue} lightMode={lightMode} /></Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </Container>

    </div>
  );
}

export default App;
