import { h } from 'preact';
import render from 'preact-render-to-string'
import { Element } from 'react-scroll'
import { Waypoint } from 'react-waypoint';

function damn() {
	document.getElementById("typewrite3").classList.add("typer");
}

const Posts = () => (
	<section className="section">
		<Element name="blog">
			<div className="shell">
				<div className="section_head">
					<Waypoint onEnter={damn}>
						<h1 id="typewrite3">Latest Posts_</h1>
					</Waypoint>
				</div>
				<div className="section_body">
					<div className="posts">
						<div className="post">
							<div className="post_image">
								<img src="../assets/res1.png" alt="post" />
							</div>
							<div className="post_content">
								<span>April 7, 2019</span>
								<h3>Optimization Results</h3>
								<p>Functional Stateless Components significantly increase performance, but lower functionality.</p>
							</div>
						</div>
						<div className="post">
							<div className="post_image">
								<img src="../assets/res2.png" alt="post" />
							</div>
							<div className="post_content">
								<span>April 7, 2019</span>
								<h3>Optimization Factors</h3>
								<p>Taking care of the images by converting, resizing and the way you serve them. Lazy loading resources is great, but not in all cases. </p>
							</div>
						</div>
						<div className="post">
							<div className="post_image">
								<img src="../assets/res3.jpg" alt="post" />
							</div>
							<div className="post_content">
								<span>April 7, 2019</span>
								<h3>Business Optimization</h3>
								<p>Nowadays, it is far more important for a page to load fast than anything else. If your web app is not fast you will simply loose to the competition. </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Element>
  </section>
);

export default Posts;
