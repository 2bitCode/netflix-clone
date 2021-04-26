import './GetStarted.css';

function GetStarted() {
 return (
     <>
        <div className="getstarted">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="inputs">
                <input id="email" type="email" placeholder="Enter email" required/>
                <input id="btn-submit" type="submit" value="Get Started" />
            </div>
        </div>
    </>
 )
}

export default GetStarted;
