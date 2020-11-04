import React, { Component, useEffect, useState } from 'react';
import './asserts/App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,useParams } from 'react-router-dom';
import Title from './pages/Title'
import Bottom from './pages/Bottom'
import TeamNews from './pages/TeamNews'
import Teacher from './pages/Teacher'
import ArticalPublished from './pages/ArticalPublished'
import ResourseDownload from './pages/Download'
import ResearchTarget from './pages/ResearchTarget'
import English from './pages/English'
import HomePage from './pages/HomePage'
import StudentShow from './pages/Studentshow'
import News from './pages/News';
function Main ()
{
  



    return (
     
        
        <Router>
          
          <Title />
        <div id='body-flex'>
          <Route path="/"  exact >
          <HomePage/>
          </Route>
          <Route path="/leaderteam/:id">
            <Teacher/>
          </Route>
          <Route path="/news/:id">
          <News/>
          </Route>
          <Route path="/teamnews" component={TeamNews} />
          <Route path="/studentshow" component={StudentShow} />
          <Route path="/researchtarget" component={ResearchTarget} />
          <Route path="/resoursedownload" component={ResourseDownload} />
          <Route path="/articalpublished" component={ArticalPublished} />
          <Route path="/english" component={English} />
        </div>
           <Bottom />
           
          </Router>
     
    );
    
     
   
  
}

export default Main;
