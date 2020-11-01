import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
import NewsShow from './NewsShow'
class HomePage extends Component {
    render() {
      return (
        <div>
          <div className="cs-picture">
            <img src={require('../asserts/homepage-cs.jpg')} />
          </div>
          <div id="news-total-flex">
            <p id="news-title">课题组新闻</p>
            <div>
              <NewsShow row='3'/>
            </div>
          </div>
        </div>
      );
    }
  }

  export default HomePage;