import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { IconContext } from "react-icons";
import { IoSunny, IoMoon } from "react-icons/io5";
const Navbars = ({lightMode,toggleLightMode}) => {
    const dark ={
        color: "white",
        backgroundColor : "#2C2C2C",
        border :"none",
      }
    return (
        <div>
            <Navbar color="mb-1" light expand="md" className={"navbar"} style={lightMode ?{color: "black"} : dark }>
                <NavbarBrand href="/"><span className={"pl-4"} style={lightMode ?{color: "black"} : {color: "white"}  } > Dashboard </span></NavbarBrand>
                <Nav className="mr-auto" >
                    {/* The teranary operator is responsible to switch the icon that represents light mode and dark mode */}
                    {!lightMode ? <NavItem style={{ paddingRight: "10px" }}>
                        <IconContext.Provider value={{ color: "grey", size: "37px" }}>
                            <div onClick={()=>toggleLightMode(!lightMode)}><IoSunny /></div>
                        </IconContext.Provider>
                    </NavItem> :
                    <NavItem style={{ paddingRight: "10px" }}>
                        <IconContext.Provider value={{ color: "grey", size: "37px" }}>
                            <div onClick={()=>toggleLightMode(!lightMode)}><IoMoon /></div>
                        </IconContext.Provider>
                    </NavItem>}
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navbars;