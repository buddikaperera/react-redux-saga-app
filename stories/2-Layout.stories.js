import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../src/style.css';


import { Button, Welcome } from '@storybook/react/demo';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer'
import Home from '../src/components/Header';
import Navigation from '../src/components/Navigation';
import MessageAlerts from '../src/components/MessageAlerts';


storiesOf('Header', module).add('Default Header', () => <Header headerTxt="Twitter Clone" />);
storiesOf('Footer', module).add('Default Footer', () => <Footer footerTxt="Copyright © Twitter Clone 2019. Develop by ReactJS & PHP Back-End." />);
storiesOf('Home', module).add('Default Footer', () => <Home />);
storiesOf('Navigation', module).add('Default Footer', () => <Navigation />);
storiesOf('POST BUTTON', module).add('Default button', () => <button class="btn btn-primary">POST <i class="undefined"></i></button>);


storiesOf('DELETE BUTTON', module).add('Default button', () => <button class="btn btn-btn btn-danger">DELETE <i class="fa fa-trash-o fa-lg"></i></button>
);

storiesOf('LIKE BUTTON', module).add('Default button', () => <button class="btn btn-btn btn-success">Like <i class="fa fa-heart"></i>2</button>
);

storiesOf('UI TXT', module).add('Default button', () =>
    <p className="blockquote"><blockquote><p>Placing the history state into the Game component lets us remove the squares state from its child Board component. Just like we “lifted state up” from the Square component into the Board component, we are now lifting it up from the Board into the top-level Game component. This gives the Game component full control over the Board’s data, and lets it instruct the Board to render previous turns from the history.</p></blockquote></p>


);




//storiesOf('Button Likes', module).add('Default Footer', () => <Button alertType="btn btn-success" handler={() => { this.likePost(post) }} icon="fa fa-heart" count={post.likes} caption="Like");





storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

