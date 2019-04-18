import { h } from 'preact'
import Menu from 'react-icons/lib/md/menu'
import Close from 'react-icons/lib/md/close'
import { Link } from 'react-scroll'

function openMenu() {
	document.getElementById('mob-menu').classList.add('mob-active');
}

function closeMenu() {
	document.getElementById('mob-menu').classList.remove('mob-active');
}

const Header = () => (
	<header className="header">
		<div className="header_wrap">
			<div className="shell">
				<div className="header_inner">
					<a onClick={openMenu} className="btn-open">
						<Menu size={35} color="#555" />
					</a>
					<div className="nav">
					 	<Link to="hello" smooth={true} duration={500} offset={-120}>Hello</Link>
						<Link to="resume" smooth={true} duration={500} offset={-120}>Resume</Link>
						<Link to="portfolio" smooth={true} duration={500} offset={-120}>Portfolio</Link>
						<Link to="testimonials" smooth={true} duration={500} offset={-120}>Quotes</Link>
						<Link to="blog" smooth={true} duration={500} offset={-120}>Blog</Link>
						<Link to="contact" smooth={true} duration={500} offset={-120}>Contact</Link>
					</div>
				</div>
			</div>
		</div>
		<div className="mobile-menu" id="mob-menu">
			<div className="shell">
				<div className="mob-actions">
					<a onClick={closeMenu} className="btn-close">
						<Close size={35} color="#fff" />
					</a>
				</div>
				<div className="mob-nav">
					<Link to="hello" onClick={closeMenu} smooth={true} duration={500} offset={-120}>Hello</Link>
					<Link to="resume" onClick={closeMenu} smooth={true} duration={500} offset={-120}>Resume</Link>
					<Link to="portfolio" onClick={closeMenu} smooth={true} duration={500} offset={-120}>Portfolio</Link>
					<Link to="testimonials" onClick={closeMenu} smooth={true} duration={500} offset={-120}>Quotes</Link>
					<Link to="blog" onClick={closeMenu} smooth={true} duration={500} offset={-120}>Blog</Link>
					<Link to="contact" onClick={closeMenu} smooth={true} duration={500} offset={-120}>Contact</Link>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
