import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
import NewsShow from './NewsShow'

class TeamNews extends Component {
    render() {
      return (
           <div style={{display:'flex',justifyContent:'center'}}>
         <NewsShow row='6'/>
          </div>
       
      );
    }
  }
  export default TeamNews;