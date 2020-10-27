import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
function Getteachersfliter(props: { numbers: React.ReactText }) {
    const [res, setRes] = useState<any>();
    useEffect(() => {
      fetch('/api/sci/teacher/filter?page=1&rows=3').then(async (response) => {
        setRes(await response.json());
      });
    }, []);
    return (
      <div className="content-leaderteam">
        <div className="content-leaderteam-left">
          <div>
            <img src={require('../asserts/导师团队.jpg')}></img>
          </div>
          <div id="flex-row">
            <div>
              <p id="paragraph-big">
                {res ? res.data.value[props.numbers].name : 'waiting'}
              </p>
            </div>
            <div>教授 博士生导师</div>
          </div>
          <div id="flex-row">
            任职：{res ? res.data.value[props.numbers].name : 'waiting'}
          </div>
          <div id="flex-row">
            <div>
              通讯地址：{res ? res.data.value[props.numbers].address : 'waiting'}
            </div>
          </div>
          <div id="flex-row">
            <div>联系电话：027-68775371</div>
          </div>
          <div id="flex-row">
            <div>电⼦邮件：bingli@whu.edu.cn</div>
          </div>
        </div>
  
        <div className="content-leaderteam-right">
          <div id="flex-row">
            <div id="title-small-font">研究方向</div>
          </div>
          <div id="flex-row">
            <div>{res ? res.data.value[props.numbers].direction : 'waiting'}</div>
          </div>
          <div id="flex-row">
            <div id="title-small-font">学习⼯作经历</div>
          </div>
          <div id="flex-row">
            {res ? res.data.value[props.numbers].award : 'waiting'}
          </div>
          <div id="flex-row">
            <div id="title-small-font">重要学术奖项</div>
          </div>
          <div id="flex-row">
            <div>
              {res ? res.data.value[props.numbers].experience : 'waiting'}
            </div>
          </div>
          <div id="flex-row">
            <div id="title-small-font">发表论⽂</div>
          </div>
          <div id="flex-row">
            <div>
              杨荣， 李兵. 流程⽚段⾃适应重⽤策略研究. 软件学报，2015,
              26(4):778-789.（EI）
              <br />
              熊伟， 李兵. 云计算环境下基于能耗感知的弹性资源管理机制.
              四川⼤学学报 (⼯程科学
              <br />
              版) .2015, 2[3]. （EI）
              <br />
              汪⽂娟， 李兵， 何鹏. 开源软件社区开发者⾓⾊的演化分析.
              复杂系统与复杂性科学.
              <br />
              2015, 12(1). （EI） <br />
              何鹏， 李兵， 程璨， 曾诚.
              开源软件系统中社会-技术⽹络的协同演化分析. 复杂系统与
              <br />
              复杂性科学. 2015, 12(2). （EI）
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
class LeaderTeam extends Component {
    render() {
      return (
        <div>
          <div className="margin-top-discription">
            <div id="margin-left">
              <hr />
            </div>
            <div id="margin-mid">
              <p id="title-big-font">导师介绍</p>
            </div>
            <div id="margin-right">
              <hr />
            </div>
          </div>
          <div className="content-leaderteam">
            <div className="content-leaderteam-left">
              <div>
                <img src={require('../asserts/导师团队.jpg')}></img>
              </div>
              <div id="flex-row">
                <div>
                  <p id="paragraph-big">李兵</p>
                </div>
                <div>教授 博士生导师</div>
              </div>
              <div id="flex-row">任职：计算机学院副院长</div>
              <div id="flex-row">
                <div>通讯地址：武汉大学</div>
              </div>
              <div id="flex-row">
                <div>联系电话：027-68775371</div>
              </div>
              <div id="flex-row">
                <div>电⼦邮件：bingli@whu.edu.cn</div>
              </div>
            </div>
  
            <div className="content-leaderteam-right">
              <div id="flex-row">
                <div id="title-small-font">研究方向</div>
              </div>
              <div id="flex-row">
                <div>
                  ⼤数据安全,复杂系统建模,⾯向服务的软件⼯程,⼈⼯智能,软件⼯程,云
                  <br />
                  计算与⼤数据处理
                </div>
              </div>
              <div id="flex-row">
                <div id="title-small-font">学习⼯作经历</div>
              </div>
              <div id="flex-row">
                <div>
                  2018.01—现在，武汉⼤学，计算机学院，教授、博⼠⽣导师。
                  <br />
                  2014.07—2017.12，武汉⼤学，国际软件学院，教授、博⼠⽣导师。
                  <br />
                  2005.05—2014.06，武汉⼤学，计算机学院，教授、博⼠⽣导师。
                  <br />
                  2003.05—2005.05，武汉⼤学，计算机科学与技术流动站，博⼠后。
                  <br />
                  1990.09—2005.05，湖北⼤学，数学与计算机科学学院，副教授。
                </div>
              </div>
              <div id="flex-row">
                <div id="title-small-font">重要学术奖项</div>
              </div>
              <div id="flex-row">
                <div>
                  2015年湖北省科技进步⼀等奖（⽀撑⼤型企业云管理的软件服务化关
                  <br />
                  键技术、国际标准、平台及应⽤）；
                  <br />
                  2014年中国计算机学会科技进步⼀等奖(云计算中软件服务化的关键
                  <br />
                  技术、国际标准、平台及应⽤);
                  <br />
                  2011年湖北省科技进步⼀等奖（⾯向服务的软件互操作性关键技术及
                  <br />
                  其ISO标准化）；
                  <br />
                  2010年湖北省标准创新贡献奖⼀等奖；
                </div>
              </div>
              <div id="flex-row">
                <div id="title-small-font">发表论⽂</div>
              </div>
              <div id="flex-row">
                <div>
                  杨荣， 李兵. 流程⽚段⾃适应重⽤策略研究. 软件学报，2015,
                  26(4):778-789.（EI）
                  <br />
                  熊伟， 李兵. 云计算环境下基于能耗感知的弹性资源管理机制.
                  四川⼤学学报 (⼯程科学
                  <br />
                  版) .2015, 2[3]. （EI）
                  <br />
                  汪⽂娟， 李兵， 何鹏. 开源软件社区开发者⾓⾊的演化分析.
                  复杂系统与复杂性科学.
                  <br />
                  2015, 12(1). （EI） <br />
                  何鹏， 李兵， 程璨， 曾诚.
                  开源软件系统中社会-技术⽹络的协同演化分析. 复杂系统与
                  <br />
                  复杂性科学. 2015, 12(2). （EI）
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default LeaderTeam;