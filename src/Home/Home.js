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
import F from "./Sections/F/F";

function Home(){
    
    return(
        <div className="home">
            {/* <div className="blueBar"></div> */}

            {/* <NavBar/> */}
            <div className="links">
            <Link to={process.env.PUBLIC_URL + '/'}><h1 className="myName">Ryan Cruz</h1></Link>
            <hr className="modifiedHR"/>
                <Link to={process.env.PUBLIC_URL + '/about'}><h3 className="linkTo">About me</h3></Link>
                <Link to={process.env.PUBLIC_URL + '/contact'}><h3 className="linkTo">Contact</h3></Link>
                <Link to={process.env.PUBLIC_URL + '/why'}><h3 className="linkTo">Why isn't it easier?</h3></Link>
                <Link to={process.env.PUBLIC_URL + '/wild'}><h3 className="linkTo">Wild ideas</h3></Link>
                <Link to={process.env.PUBLIC_URL + '/blog'}><h3 className="linkTo">Blog</h3></Link>
                <Link to={process.env.PUBLIC_URL + '/worldview'}><h3 className="linkTo">Things that changed my worldview.</h3></Link>
            </div>
            <div className="sectionTwo">
                <Switch>
                    <Route path={process.env.PUBLIC_URL + '/about'}><A/></Route>
                    <Route path={process.env.PUBLIC_URL + '/contact'}><B/></Route>
                    <Route path={process.env.PUBLIC_URL + '/contacto'}><B/></Route>
                    <Route path={process.env.PUBLIC_URL + '/why'}><C/></Route>
                    <Route path={process.env.PUBLIC_URL + '/wild'}><D/></Route>
                    <Route path={process.env.PUBLIC_URL + '/blog'}><F/></Route>
                    <Route path={process.env.PUBLIC_URL + '/worldview'}><E/></Route>
                </Switch>
            </div>
        </div>
    );
}

export default Home;