// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react';
import ReactDOM from 'react-dom';
import GuitarGallery from '../components/GuitarGallery';
import './fonts.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<GuitarGallery />, document.body.appendChild(document.createElement('div')));
});
