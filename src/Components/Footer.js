import React from 'react';
import './Footer.css'

function LoginFooter({black}) {
    return (
        <div>
           <footer className={`footer ${black && "footer-black"}`}>
        <a href="#">Questions? Contact us.</a>
        <div className="row">
          <div className="col1">
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">Privacy</a>
            <a href="#">Speed Test</a>
          </div>
          <div className="col2">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Legal notices</a>
          </div>
          <div className="col3">
            <a href="#">Account</a>
            <a href="#">Ways to Watch</a>
            <a href="#">Cookie Corporate Information</a>
            <a href="#">Netflix Originals</a>
          </div>
          <div className="col4">
            <a href="#">Media Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <p>Netflix Nepal</p>
      </footer>
        </div>
    )
}

export default LoginFooter;
