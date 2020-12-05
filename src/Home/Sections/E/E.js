import './E.css';
import fringe from '../../../Assets/fringe.jpg';
import rules from '../../../Assets/12rule.jpg';
import lex from '../../../Assets/lex.png';

function E(){
    return (<div className="A E">
        <h1>Things that changed the way I see the world</h1>
        <br/>
        <br/>
        <h3>Once every couple of months I find an idea or a collection of ideas that completly change the way I see and interact with the world.</h3>
        <br/>
        <h3>I'm hoping this list will be useful to someone.</h3>

        <h2>Movies / Shows</h2>
        <br/>

        <div className="imagetext">
            <img src={fringe} alt="Fringe show."/>
            <h3>I watched Fringe for the first time when I was 7 years old. This show is the most mind-blowing thing I've ever seen, it got me interested in complex ideas and finding ways to improve the world. <br/> <br/>  It is the show that made me believe that "impossible" ideas can become a reality if you put some creativity and work into making them happen. I will forever be grateful to J.J. Abrams for creating this masterpiece.</h3>
        </div>

        <h2>Books</h2>
        <br/>
        <div className="imagetext">
            <img src={rules} alt="12 rules for life book cover."/>
            <h3>12 Rules for Life was definetly a life-changing book for me. It taught me many lessons, some of which are: <br/> <br/> 1. There are many games one can play in life, from the plumber's game to the CEO game. And you are free to create new games or change the rules of existing ones. <br/> <br/> 2. One must have a good relationship with time, anything you do right now affects you future, and anything you do in your future affects the way people see your past.</h3>
        </div>
        <h2>Podcasts</h2>
        <br/>
        <div className="imagetext">
            <img src={lex} className="lex" alt="Lex Fridman."/>
            <h3>Lex Fridman is truly an inspiration, I admire that someone with his knowledge and acomplishments can remain so humble. <br/> <br/> I've learned many things from his podcast, too many to summarize. And I'd say the most important thing I learned was that love always wins.</h3>
        </div>
        <br/>
        <br/>
    </div>);
}

export default E;