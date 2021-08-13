import { useEffect, useContext } from "react";
import { PathContext } from "../../../PathContext";
import axios from "axios";
import { useState } from "react";
import MediumSize from "./MediumViewPort";
const CollegeDets = ({ state }) => {
    const path = useContext(PathContext);
    const [colleges,setColleges] = useState(null);
    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' };
        const finalPath = path + "/college/get-colleges-bystate";

        axios.get(finalPath, {
            params :{
                state : state
            },
            headers: headers
        }).then((result) => {
            let data = result.data;
            for(let inc=0;inc<data.length;inc+=1){
                data[inc]["Courses"] = data[inc]["Courses"].toString();
            }
            console.log(data)
            setColleges(data);
        })
    }, [path,state])
    return (
        <div>
            <MediumSize data ={colleges} />
        </div>
    );
}

export default CollegeDets;