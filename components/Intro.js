import { h } from 'preact';
import render from 'preact-render-to-string'
import Git from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin-square'

const Intro = () => (
  <div className="pt70">
    <div className="intro">
      <div className="fixwrap">
        <div className="shell">
          <div className="intro_inner">
            <div className="intro_image">
              <img src="../assets/me.jpg" alt="me" />
            </div>
            <div className="intro_content">
              <div className="intro_title">
                <h1>Tsvetomir Yotov_</h1>
                <p>full stack web developer</p>
              </div>
              <div className="info">
                <div className="block">
                  <p>Age:</p>
                  <span>26</span>
                </div>
                <div className="block">
                  <p>Phone:</p>
                  <a href="tel:+359888778723">+359 888 77 87 23</a>
                </div>
                <div className="block">
                  <p>Email:</p>
                  <a href="mailto:yotovtsvetomir@gmail.com">yotovtsvetomir@gmail.com</a>
                </div>
                <div className="block">
                  <p>Address:</p>
                  <span>Varna 9000, Bulgaria</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
