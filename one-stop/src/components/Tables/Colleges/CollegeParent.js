import CollegeByState from "./CollegeByState";
import CollegeDets from "./CollegeDets"
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
const Colleges = ({ state,lightMode }) => {
    const [extraProps, setProps] = useState(null);
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/byLocation" exact><CollegeByState state={state} setProps={setProps} lightMode={lightMode} /></Route>
                    <Route path="/byLocation/collegeDets" exact ><CollegeDets name={extraProps} lightMode={lightMode} /></Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default Colleges;