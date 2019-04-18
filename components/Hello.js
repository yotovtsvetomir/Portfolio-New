import { h } from 'preact';
import render from 'preact-render-to-string'
import Download from 'react-icons/lib/md/file-download'
import { Element } from 'react-scroll'

const Hello = () => (
	<section className="section">
		<Element name="hello">
			<div className="shell">
				<div className="section_head">
					<h1 className="typer">Hi_</h1>
				</div>
				<div className="section_body">
					<div className="hello">
						<p className="section_desctiption">
						I am Full Stack Web developer able to build Web presence from the ground up - from concept, navigation,
						layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using
						current best practices in Web development. Fast learner, hard worker and team player who is proficient in
						an array of scripting languages and multimedia Web tools.
						</p>
						<div className="hello_actions">
							<a href="../assets/yotovCV.pdf" className="btn"><Download size={20} color="#fff" /> Download CV</a>
						</div>
					</div>
				</div>
			</div>
		</Element>
  </section>
);

export default Hello;
