import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
class ResearchTarget extends Component {
    render() {
      return (
        <div>
          <div className="content-researchtarget">
            <div id="title-big-font">人工智能</div>
            <div className="content-researchtarget-bottom">
              <div id="title-small-font">简介</div>
              <div>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;⼈⼯智能（Artificial
                  Intelligence），英⽂缩写为AI。它是研究、开发⽤于模拟、延伸和扩展⼈的智能的
                  理论、⽅法、技术及应⽤系统的⼀门新的技术科学。
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;⼈⼯智能是计算机科学的⼀个分⽀，它企图了解智能的实质，并⽣产出⼀种新的能以⼈类智能相似的⽅
                  式做出反应的智能机器，该领域的研究包括机器⼈、语⾔识别、图像识别、⾃然语⾔处理和专家系统等。⼈⼯
                  智能从诞⽣以来，理论和技术⽇益成熟，应⽤领域也不断扩⼤，可以设想，未来⼈⼯智能带来的科技产
                  品，将会是⼈类智慧的“容器”。⼈⼯智能可以对⼈的意识、思维的信息过程的模拟。⼈⼯智能不是⼈的智能，
                  但能像⼈那样思考、也可能超过⼈的智能。
                </p>
              </div>
              <div id="flex-row">
                <img
                  src={require('../asserts/人工智能.jpg')}
                  style={{ width: '300px' }}
                />
              </div>
              <div>
                {' '}
                <p id="title-small-font">主研方向</p>
              </div>
              <div>
                <p>持续学习、迁移学习、图像识别</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default ResearchTarget;