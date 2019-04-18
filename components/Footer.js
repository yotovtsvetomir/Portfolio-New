import { h } from 'preact';
import render from 'preact-render-to-string'
import Git from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin-square'
import { Element } from 'react-scroll'
import { Waypoint } from 'react-waypoint';

function damn() {
	document.getElementById("typewrite4").classList.add("typer");
}

const Footer = () => (
  <footer className="footer">
    <Element name="contact">
      <div className="shell">
        <div className="footer_inner">
          <div className="section_head">
            <Waypoint onEnter={damn}>
              <h1 id="typewrite4">Get in touch_</h1>
            </Waypoint>
          </div>
          <div className="info">
            <div className="block">
              <p>Phone:</p>
              <span>+359 888 77 87 23</span>
            </div>
            <div className="block">
              <p>Email:</p>
              <span>yotovtsvetomir@gmail.com</span>
            </div>
          </div>
          <div className="social">
            <a href="https://www.github.com/yotovtsvetomir">
              <Git size={25} color="#fff" />
            </a>
            <a href="https://www.linkedin.com/in/yotovts">
              <LinkedIn size={25} color="#fff" />
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 Tsvetonir Yotov. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </Element>
  </footer>
);

export default Footer;
