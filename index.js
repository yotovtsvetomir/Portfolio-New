import './styles/style.scss';
import { h } from 'preact';
import render from 'preact-render-to-string'
import Favicon from 'react-favicon'
import MetaTags from 'react-meta-tags'
import Header from './components/Header'
import Intro from './components/Intro'
import Hello from './components/Hello'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Quotes from './components/Quotes'
import Posts from './components/Posts'
import Footer from './components/Footer'

function closeMod() {
	window.onclick = function(event) {
		var allmods = document.getElementsByClassName('modal');
		var blur = document.getElementById('mask');
		for (var i = 0; i < allmods.length; i++) {
			if (allmods[i].style.opacity == "1") {
				allmods[i].style.opacity = "0";
				blur.style.opacity = "0";
				allmods[i].style.display = "none";
				blur.style.display = "none";
			}
		}
	}
}

const App = () => (
	<div className="rapper" onClick={closeMod}>
		<MetaTags>
			<title>Tsvetomir Yotov - Portfolio</title>
		</MetaTags>
		<Favicon url="../assets/favicon.ico" />
		<div className="mask" id="mask"></div>
		<Header />
		<Intro />
		<Hello />
		<Resume />
		<Portfolio />
		<Quotes />
		<Posts />
		<Footer />
	</div>
);

export default App;
