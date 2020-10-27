import React, { Component, useEffect, useState } from 'react';
import './asserts/App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Title from './pages/Title'
import Bottom from './pages/Bottom'
import NewsShow from './pages/NewsShow'
import LeaderTeam from './pages/LeaderTeam'
import ArticalPublished from './pages/ArticalPublished'
import ResourseDownload from './pages/Download'
import ResearchTarget from './pages/ResearchTarget'
import HomePage from './pages/NewsShow'
import English from './pages/English'
import TeamNews from './pages/TeamNews'
import StudentShow from './pages/Studentshow'
class Main extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Title />
          <Route path="/" component={HomePage} exact />
          <Route path="/leaderteam" component={LeaderTeam} />
          <Route path="/teamnews" component={TeamNews} />
          <Route path="/studentshow" component={StudentShow} />
          <Route path="/researchtarget" component={ResearchTarget} />
          <Route path="/resoursedownload" component={ResourseDownload} />
          <Route path="/articalpublished" component={ArticalPublished} />
          <Route path="/english" component={English} />
        </Router>
        <Bottom />
      </div>
    );
  }
}

export default Main;
