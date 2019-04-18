import { h } from 'preact';
import render from 'preact-render-to-string'
import BackArrow from 'react-icons/lib/fa/long-arrow-left'
import Git from 'react-icons/lib/fa/github'
import ExLink from 'react-icons/lib/fa/external-link'

const Modal = ({img, title, desc, expl}) => (
	<div className="modal">
    <a className="backlink"><BackArrow size={12} color="#999" />Back</a>
    <div className="modal_content">
      <h1>{title}</h1>
      <span>April, 17, 2019</span>
      <p>{desc}</p>
      <p>{expl}</p>
      <div className="more">
        <a href="">
          Source Code
          <Git size={20} />
        </a>
        <a href="">
          Live Preview
          <ExLink size={20} />
        </a>
      </div>
    </div>
	</div>
);

export default Modal;
