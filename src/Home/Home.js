import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import './Home.css';
import A from "./Sections/A/A";
import B from "./Sections/B/B";
import C from "./Sections/C/C";
import D from "./Sections/D/D";
import E from "./Sections/E/E";

function Home(){
    
    return(
        <div className="home">
            {/* <div className="blueBar"></div> */}

            {/* <NavBar/> */}
            <div className="links">
            <Link to="/"><h1 className="myName">Ryan Cruz</h1></Link>
            <hr className="modifiedHR"/>
                <Link to="/about"><h3 className="linkTo">About me</h3></Link>
                <Link to="/contact"><h3 className="linkTo">Contact</h3></Link>
                <Link to="/why"><h3 className="linkTo">Why isn't it easier?</h3></Link>
                <Link to="/wild"><h3 className="linkTo">Wild ideas</h3></Link>
                <Link to="/worldview"><h3 className="linkTo">Things that changed my worldview.</h3></Link>
            </div>
            <div className="sectionTwo">
                <Switch>
                    <Route path="/about"><A/></Route>
                    <Route path="/contact"><B/></Route>
                    <Route path="/contacto"><B/></Route>
                    <Route path="/why"><C/></Route>
                    <Route path="/wild"><D/></Route>
                    <Route path="/worldview"><E/></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Home;