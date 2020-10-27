import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
class ArticalPublished extends Component {
    render() {
      return (
        <div className="content-articalpublished">
          <div>
            <h2>2019年</h2>
          </div>
          <div id="flex-row">
            2. Fuyu Yuan, Juan Li, Supawadee Namuangruk,*, Nawee Kungwan, Jia
            Guo,* and Changchun Wang, Microporous, Self-
            <br />
            Segregated, Graphenal Polymer Nanosheets Prepared by Dehydrogenative
            Condensation of Aza-PAHs Building Blocks in the
            <br />
            Solid State, Chemistry of Materials 2017, 29, 3971-3979.
          </div>
  
          <div id="flex-row">
            <img
              src={require('../asserts/发表文章.jpg')}
              style={{ width: '200px' }}
            />
          </div>
  
          <p id="flex-row">
            1. Yongjing Li, Jiaxun Wan, Zihao Zhang, Jia Guo, and Changchun Wang*,
            Targeted Soft Biodegradable Glycine/PEG/RGDModified
            <br />
            Poly(methacrylic acid) Nanobubbles as Intelligent Theranostic Vehicles
            for Drug Delivery, ACS Applied Materials <br />
            Interfaces, 2017, 9, 35604-35612.
          </p>
          <div id="flex-row">
            <img
              src={require('../asserts/发表文章.jpg')}
              style={{ width: '200px' }}
            />
          </div>
        </div>
      );
    }
  }
  


export default ArticalPublished;