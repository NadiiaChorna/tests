import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Doe',
  email: 'joe@gmail.com',
  age: 25,
  onlineStatus: true
}];

class App extends Component {

  fetch = () => {
    this.props.fetchPosts();
  }

  render(){
    const {posts} = this.props;
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render the post." tempArr={tempArr} />
          <SharedButton {...configButton}/>
          { posts.length > 0 && 
            <div>
              {posts.map((post, index)=>{
                const {title, body} = post;
                const configListItem = {
                  title,
                  desc: body
                }
                return (
                  <ListItem key={index} {...configListItem}/>
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
