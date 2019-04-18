import { h } from 'preact';
import render from 'preact-render-to-string'
import { Line } from 'rc-progress';
import { Element } from 'react-scroll'
import { Waypoint } from 'react-waypoint';

function damn() {
	document.getElementById("typewrite").classList.add("typer");
}

function thegreatest() {
	var skills = document.getElementsByClassName('skill');
	var i = 0;
	for (i = 0; i < skills.length; i++) {
    var t = skills[i].children[0].children[1].innerHTML;
		var g = t.replace("%", "px");
		skills[i].children[1].children[1].style = "stroke-dasharray:" + g + ", 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 1.5s ease 0s, stroke-dasharray 1.5s ease 0s, stroke 1.5s linear 0s;";
  }
}

const Resume = () => (
	<section className="section">
		<Element name="resume">
			<div className="shell">
				<div className="section_head">
					<Waypoint onEnter={damn}>
						<h1 id="typewrite">Resume_</h1>
					</Waypoint>
				</div>
				<div className="section_body">
					<div className="resume">
						<div className="resume_list">
							<h3 className="resume_title">Education</h3>
							<div className="resume_block">
								<h4>Fontys University, The Netherlands</h4>
								<span>2012-2016</span>
								<p>Bachelor ICT & Software Development</p>
							</div>
							<div className="resume_block">
								<h4>PGI D-r Ivan Bogorov, Bulgaria</h4>
								<span>2007-2012</span>
								<p>School of Economics, Diploma</p>
							</div>
						</div>
						<div className="resume_list">
							<h3 className="resume_title">Employment</h3>
							<div className="resume_block">
								<h4>Freelance, Bulgaria</h4>
								<span>2018-2019</span>
								<p>Full Stack Developer</p>
							</div>
							<div className="resume_block">
								<h4>2Create Studio, Bulgaria</h4>
								<span>2018-2018</span>
								<p>Front End Developer</p>
							</div>
							<div className="resume_block">
								<h4>Dynatrace, USA</h4>
								<span>2017-2017</span>
								<p>Software Development Consultant</p>
							</div>
							<div className="resume_block">
								<h4>Huawei, The Netherlands</h4>
								<span>2016-2016</span>
								<p>Software Test Engineer</p>
							</div>
							<div className="resume_block">
								<h4>Sim-Ci, The Netherlands</h4>
								<span>2015-2016</span>
								<p>Software Developer</p>
							</div>
						</div>
						<div className="skills">
							<Waypoint onEnter={thegreatest} />
							<h3 className="resume_title">General Skills</h3>
							<div className="skill">
								<div className="skill_content">
									<p>React JS</p>
									<p>77%</p>
								</div>
								<Line percent="0" strokeWidth="2" strokeColor="#6d56c1" trailWidth="2" trailColor="#e9ecef" />
							</div>
							<div className="skill">
								<div className="skill_content">
									<p>HTML5</p>
									<p>90%</p>
								</div>
								<Line percent="0" strokeWidth="2" strokeColor="#6d56c1" trailWidth="2" trailColor="#e9ecef" />
							</div>
							<div className="skill">
								<div className="skill_content">
									<p>SCSS</p>
									<p>80%</p>
								</div>
								<Line percent="0" strokeWidth="2" strokeColor="#6d56c1" trailWidth="2" trailColor="#e9ecef" />
							</div>
							<div className="skill">
								<div className="skill_content">
									<p>JavaScript</p>
									<p>80%</p>
								</div>
								<Line percent="0" strokeWidth="2" strokeColor="#6d56c1" trailWidth="2" trailColor="#e9ecef" />
							</div>
							<div className="skill">
								<div className="skill_content">
									<p>Linux</p>
									<p>70%</p>
								</div>
								<Line percent="0" strokeWidth="2" strokeColor="#6d56c1" trailWidth="2" trailColor="#e9ecef" />
							</div>
							<div className="skill">
								<div className="skill_content">
									<p>Webpack</p>
									<p>60%</p>
								</div>
								<Line percent="0" strokeWidth="2" strokeColor="#6d56c1" trailWidth="2" trailColor="#e9ecef" />
							</div>
							<div className="skill">
								<div className="skill_content">
									<p>Node.js</p>
									<p>70%</p>
								</div>
								<Line percent="0" strokeWidth="2" strokeColor="#6d56c1" trailWidth="2" trailColor="#e9ecef" />
							</div>
							<div className="skill">
								<div className="skill_content">
									<p>Python</p>
									<p>80%</p>
								</div>
								<Line percent="0" strokeWidth="2" strokeColor="#6d56c1" trailWidth="2" trailColor="#e9ecef" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Element>
  </section>
);

export default Resume;
