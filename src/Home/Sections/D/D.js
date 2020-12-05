import './D.css';
import protocol1 from '../../../Assets/Protocol1.png';

function D(){
    return (<div className="A">
        <h1>Wild Ideas</h1>
        <br/>
        <br/>
        <h3>These are some of my own wild theories and ideas, they are most likely impossible, I swear I believe in science.</h3>
        <br/>
        <h3>Disclaimer: I came up with most of these theories at the ages of 13-15, so give them a break.</h3>
        <h2>Ryan's Zero-Time Communication Protocol Paradox</h2>
        <br/>
        <h3>There are about 26 constants in the universe that we know of so far.</h3>
        <br/>
        <h3>And there are many constants that we are yet still to find, we don't even know why some constants are the value they are. <br/><br/>
            There is a posibility that in the far-far future, when we are a Type 3 or Type 4 civilization we might know how to modify the value of some constants, and 
            encode messages within them. 
            <br/><br/> 
            
        </h3>
        <h3>There is a posibility that when these constants are changed in the future, they will also be changed in the past. I propose that we try to find patterns or certain hidden messages/codes in the constants we've found so far.</h3>
        <br/>
        <h3>We will most likely not be the first or only civilization to modify a constant, so we need to make sure all of the civilizations in the universe agree on a certain "universal constant communication protocol".</h3>
        <br/>
        <img src={protocol1} className="protocol" alt="Protocol"/>
        <h3><span className="note">The protocol: </span>We assign each year that passes 900 decimals worth of information, 90 "encryption decimals" and 10 "buffer decimals", we call that a "time slot". Each time slot can only be modified once. And is only allowed to be modified 10 years after the original slot space has been allocated.</h3>
        <br/>
        <h3>The encryption decimals: The encryption decimals ensure that you can only read the timeslot for your current year and all previous years, but not next year's timeslot. They store the private key needed to decrypt the hidden message. The public key is generated each year, and broadcasted through the universe, to make sure 99% of us agree on what the public key should be for that year, and 10 years in the future, be able to generate the private key using that public key.</h3>
        <br/>

        <h3><span className="note">Protocol rules: </span>To ensure Timeslots for 10 years ago don't share information that will be recieved from the current year's Timeslot, they are only allowed to be filled on a certain day called "Timeslot day". Timeslot day is calculated this way: last year's Timeslot day plus 10 days.</h3>
        <h3></h3>
        <h3></h3>

        <h2>Ryan's 1024 byte Wikipedia</h2>
        <br/>
        <h3><a href="https://en.wikipedia.org/wiki/Wikipedia:Size_of_Wikipedia">In April 2010, the size of the full English Wikipedia edit history was 5.6 TB uncompressed.</a></h3>
        <h3>But there might be a way to send 5.6 TB worth of information using less than 1024 bytes.</h3>
        <br/>
        <br/>
        <h3>Irrational numbers have some pretty unique properties: they are infite, and non-repeating.</h3>
        <h3>I propose we use an irrational number, like Pi <a href="https://techxplore.com/news/2019-03-pi-trillion-decimals-google-day.html">(of which we know 31.4 trillion decimals so far)</a>, and develop a transpiler that takes the bytecode of any program then finds huge sections of it stored in Pi. Get the coordenates and store them in a .pifind file.</h3>
        <br/>
        <h3>Then send the 1024 byte file to another user that's very far away (in mars for example) or that has very bad connection and they can compute Pi on their planet, and re-construct the sourcecode using the .pifind file.</h3>
        <br/>
        <h3>That way, we can share the full 5.6TB of Wikipedia across the universe, using only 1024 bytes.</h3>

        <h2>Ryan-João Zero-Day Universe Exploit</h2>
        <br/>
        <h3>One boring night my friend João and I set to find ways to crash the universe.</h3>
        <br/>
        <h3>The theory: If warp-drives are possible, then use an autonomous warp drive, send it to the edge of the universe plus 1cm, we're hoping this might result in a memory allocation error in this universe and it will crash.</h3>
        <br/>
        <h3>If, by chance you are working on warp-drive technology and are reading this, please email me, I would love to help.</h3>
        <br/>
        <br/>


</div>);
}

export default D;