import { h } from 'preact';
import render from 'preact-render-to-string'
import { Element } from 'react-scroll'
import { Waypoint } from 'react-waypoint'
import Modal from './Modal'

function damn() {
	document.getElementById("typewrite2").classList.add("typer");
}

function modal() {
	var blur = document.getElementById('mask');
	var modal = event.target.closest('.project').children[1].children[0];
	modal.style.display = "block";
	blur.style.display = "block";
	setTimeout(function(){ modal.style.opacity = "1"; }, 100);
	setTimeout(function(){ blur.style.opacity = "1"; }, 100);
}

const Portfolio = () => (
	<section className="section">
		<Element name="portfolio">
			<div className="shell">
				<div className="section_head">
					<Waypoint onEnter={damn}>
						<h1 id="typewrite2">Some Projects_</h1>
					</Waypoint>
				</div>
				<div className="section_body">
					<div className="portfolio">
						<div className="portfolio_nav">
						</div>
						<div className="projects">
							<div className="project" onClick={modal}>
								<div className="project_image">
									<img src="../assets/seoweb.png" alt="project" />
								</div>
								<div className="project_content">
									<Modal img="../assets/p1.png" title="Mobile and desktop app for SEO Professionals" desc="It's a single page application and I have used functional stateless components for the whole app for better performance. I've used Mobile first approach and some external npmjs libraries." />
									<div className="project_head">
										<h3>Mobile and desktop app for SEO Professionals</h3>
										<p>It's a single page application and I have used functional stateless components for the whole app for better performance.</p>
									</div>
									<div className="project_stack">
										<p>Used Stack:</p>
										<ul>
											<li>html5</li>
											<li>scss</li>
											<li>JavaScript</li>
											<li>preact</li>
											<li>react</li>
										</ul>
									</div>
									<div className="weblink">
										<a href="https://www.cherry.tyotov.tk/">www.cherry.tyotov.tk</a>
									</div>
								</div>
							</div>
							<div className="project" onClick={modal}>
								<div className="project_image">
									<img src="../assets/allawaken.png" alt="project" />
								</div>
								<div className="project_content">
									<Modal img="../assets/p1.png" title="Social Network - Full stack PWA" desc=" I have used AI fingerprint recognition for remembering the users without using cookies. I am using external image api to resize,convert and store images. I deliver and use the images resized for optimizing performance. I am creating DHTML pages for new users, in the same time I am updating the sitemap and resubmitting it to google for SEO. I am ok with the results, but the design still needs improvement."  />
									<div className="project_head">
										<h3>Social Network - Full stack PWA</h3>
										<p>Social Network with all the basics that Facebook has. Registration, Profiles, Chat, Friends system and more. I developed everything from back end to front end.</p>
									</div>
									<div className="project_stack">
										<p>Used Stack:</p>
										<ul>
											<li>html5</li>
											<li>css</li>
											<li>JavaScript</li>
											<li>preact</li>
											<li>react</li>
											<li>python</li>
											<li>uwsgi</li>
											<li>flask</li>
											<li>mongodb</li>
											<li>nginx</li>
											<li>socketIO</li>
											<li>prerender</li>
										</ul>
									</div>
									<div className="weblink">
										<a href="https://www.portal.allawaken.com">www.portal.allawaken.com</a>
									</div>
								</div>
							</div>
							<div className="project" onClick={modal}>
								<div className="project_image">
									<img src="../assets/portfolio.png" alt="project" />
								</div>
								<div className="project_content">
									<Modal img="../assets/p1.png" expl="It's a single page application and I have used functional stateless components for the whole app for better performance." title="Another idea for my portfolio" />
									<div className="project_head">
										<h3>Another idea for my portfolio</h3>
										<p>It's a single page application and I have used functional stateless components for the whole app for better performance.</p>
									</div>
									<div className="project_stack">
										<p>Used Stack:</p>
										<ul>
											<li>html5</li>
											<li>scss</li>
											<li>JavaScript</li>
											<li>preact</li>
											<li>react</li>
										</ul>
									</div>
									<div className="weblink">
										<a href="https://www.portfolio.tyotov.tk/">www.portfolio.tyotov.tk</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Element>
  </section>
);

export default Portfolio;
