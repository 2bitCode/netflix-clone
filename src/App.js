import './App.css';
import GetStarted from './Components/GetStarted';
import Description from './Components/Description';
import Faq from './Components/Faq';
import { 
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className="upper">
        <div className="header">
          <img className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="oops!"></img>
          <Link to="/login" className="btn-link" ><button className="btn-signUp">Sign In</button></Link>
        </div>
        <div className="intro">
          <h1><p id="short">Unlimited movies, TV</p><p id="short"> shows, and more.</p></h1>
          <span>Watch anywhere. Cancel anytime.</span>
        </div>
        <GetStarted />
      </div>
      <Description title="Enjoy on your TV." des="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" rev={false}/>
      <Description title="Download your shows to watch offline." des="Save your favorites easily and always have something to watch." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" rev={true}/>
      <Description title="Watch everywhere." des="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" rev={false}/>
      <div class="lastPart">
        <h1>Frequently Asked Questions</h1>
        <Faq 
          fq="What is Netflix?"
          description1="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
          description2="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
        <Faq 
          fq="How much does Netflix cost?"
          description1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD7.99 to USD11.99 a month. No extra costs, no contracts."
          description2={null}
        />
        <Faq
          fq="Where can I watch?"
          description1="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          description2="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        />
        <Faq 
          fq="How do I cancel?"
          description1="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
          description2={null}
        />
        <Faq
          fq="What can I watch on Netflix?"
          description1="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          description2={null} 
        />
        <GetStarted />
      </div>
      <Footer black/>
    </div>
  );
}

export default App;

// API KEY
// d08339b6deda326aa654b1fbb293aedc