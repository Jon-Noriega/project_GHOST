<h1>swiftly</h1>
swiftly was designed to get friends together in short order. We are an event-based instant messaging app. Event messages come equipped with built-in countdown timers. If you really want to join in on the event then you have to act fast before the event disappears.
<br></br>
<h2>General Info</h2>
<p>
We strive to connect friends through a real-time, bidirectional, event-based messaging platform. Don't wait too long though, you might miss your opportunity to join in on the fun if you dont click before the event message disappears.

:blue_heart:
</p>

<h2>Inspiration</h2>

<p>
My inspiration for this project came about early days pandemic (April 2020). With lock-down restrictions easing in Denver, our friend group was eager to get out for bike rides though the city. We were missing: eachother, being outdoors, and the freedom that comes with being on your wheels. So we began messaging about daily bike rides but it was hard to rally the whole group for a set time. Often times we wouldn't hear from everyone until late afternoon, at which point some early commits had already backed out of the ride. What if there was a way to facilitate timely responses from all groups members? Cue up disappearing event messages! The core feature of swiftly was born
</p>

<h2>Technologies</h2>

<ul>
 <li>React: version 17.0.1</li>
 <li>Express.js: version 4.17.1</li>
 <li>Socket.io: version 3.0.3</li>
 <li>Bootstrap: version 4.5.3</li>
 <li>Animate.css: version 4.1.1</li>
 <li>JavaScript: version 1.1.1</li>
</ul>

<h2>Setup</h2>
To run this project, create a folder on your local environment where you can clone the "project_GHOST" GitHub repository. Open this repository in your code editor.<br><br>
From your backend folder perform the following commands:<br>
<li><code>npm init -y</code></li>
<li><code>npm install express</code></li>
<li><code>npm install socket.io</code></li>
<li><code>npm i -g http-server</code></li>
<li><code>node index.js</code></li><br>
From your frontend folder perform the following commands:<br>
<li><code>npm i socket.io-client</code></li>
<li><code>npm start</code></li><br>
You are now ready to start using the first iteration of swiftly.<br>

<h2>Instructions</h2>
<ol>
 <li>Explore our member community, by ski pass. We ecourage you to connect with community members who may not already be 1st-degree connections. Make a new friend to ski with. Especially when they have the same pass as you. Don't let the passes restrict you either, you can always share a buddy pass with a member who has a different ski pass!</li>
 <li>Invite friends to a ski trip by flipping their card and clicking on the invite button.</li>
 <li>Once you have rounded out your friend group for the upcoming trip, it's now time to find a resort to ski at. Do so by clicking on the "Toggle View" button.</li>
 <li>Explore the resort community and once you're ready to reserve priority access to the resort of your choosing, click on the card to flip it over.</li>
 <li>You will now see an input area which you can click on to be taken to the reservation calendar.</li>
 <li>Select a reservation date and a reservation start time, then click on "set".</li>
 <li>You will now see details for your upcoming Ski Day which will include your invited friends along with the reserved ski resort.</li>
</ol>

<h2>Code Examples</h2>

<h4>Hooks: Setting Interval & Message Expiration Class</h4>

```
const [seconds, setSeconds] = useState(10)
const [expired, setExpired] = useState(false)

const status = expired ? "expired" : "active"

useEffect(() => {
        
  const interval = setInterval(() => {
     if(seconds !== 0){
        setSeconds(seconds - 1)
     }
     else {  
        setExpired(true)
     }
   }, 1000)
   return () => clearInterval(interval)
}, [seconds] )
```

<h4>Event Message Rendering</h4>

```
return (
        
   <div className={`message ${fromMe}`}>

      <div id={`message-username ${status}`} className={`message-username ${fromMe}`}>
         { props.username }
      </div>

      {messageType === "text"
         ?
            <div className={`text-message-body ${fromMe}`}>
               <p>{ textInput }</p>
            </div>
         :
         <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className={`event-message-body ${status}`}>

               <Button
                  variant="outline-light" size="sm" className="countdown-button">
                     <span className={`event-message-countdown`}>{ seconds }</span>
               </Button><br></br>

                  <br></br>
                  <p>{eventNameInput}</p>
                  <p>{locationInput}</p>
                  <p>{timeInput}</p>
            </div>
         </Animated>
      }
      
   </div>
```

<h4>Event Message Styling: Disappear Upon Interval Expiration</h4>

```
.event-message-body.active{
    font-family: 'Roboto', sans-serif;
    width: auto;
    height: auto;
    background-color: rgb(201, 47, 47);
    color: white;
    padding: 20px;
    border-style: double;
    border-color: white;
    border-radius: 50px 50px 50px 50px;
    display: inline-block;
    margin: 0 0.5rem;
    animation: flash;
    animation-duration: 10s;
}

.event-message-body.expired{
    display: none;
}
```

<h2>Status</h2>

We're looking forward to rolling-out the following features:
<li>A user sign-in workflow with full end-to-end user auth.</li>
<li>Availability calendars for our community members, allowing them to coordinate a ski trip based on shared availability.</li>
<li>Full end-to-end resort reservation system with persisting of reserved dates and rendering of blackout dates.</li>
<li>An "Accept Invite" button for community members.</li>
<li>Ability to send and accept friend requests.</li>
<li>A "Chat with Friends" feature to assist with trip planning or just connecting.</li>
<li>Introduction of a "pass swap" feature where members can arrange to swap their passes for a period of time, granting them access to more ski resorts.</li>

<h2>Contact</h2>
<a href="https://www.linkedin.com/in/jonathannoriega/"><img src="https://user-images.githubusercontent.com/68958970/94946276-dc7b8a00-04a9-11eb-9431-366689b9fa06.png" alt="Jon Noriega" style="width:10px;height:10px;"></a>Jon Noriega :ocean:<br>
