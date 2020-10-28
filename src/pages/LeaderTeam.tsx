import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
function Getteachersfliter(props: { name: React.ReactNode; position: React.ReactNode; address: React.ReactNode; direction: React.ReactNode; award: React.ReactNode; experience: React.ReactNode; }) {
 
    return (
      <div className="content-leaderteam">
        <div className="content-leaderteam-left">
          <div>
            <img src={require('../asserts/导师团队.jpg')}></img>
          </div>
          <div id="flex-row">
            <div>
              <p id="paragraph-big">
                {props.name}
              </p>
            </div>
            <div>教授 博士生导师</div>
          </div>
          <div id="flex-row">
            任职：{props.position }
          </div>
          <div id="flex-row">
            <div>
              通讯地址：{props.address}
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
            <div>{props.direction}</div>
          </div>
          <div id="flex-row">
            <div id="title-small-font">学习⼯作经历</div>
          </div>
          <div id="flex-row">
            {props.award}
          </div>
          <div id="flex-row">
            <div id="title-small-font">重要学术奖项</div>
          </div>
          <div id="flex-row">
            <div>
              {props.experience}
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
  function TeachersShow(props: { row: any; })
  {
    const [res, setRes] = useState<any>();
    const [page, setPage] = useState(1);
    useEffect(() => {
      fetch('/api/sci/teacher/filter?page='+page+'&rows='+props.row).then(async (response) => {
        setRes(await response.json());
      });
    }, [page]);
    let count=res?res.data.count:NaN;
    let pages=Math.ceil(count/props.row);
    function Fliptool()
    {
      return( <div className="fliptool">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.615"
        height="18"
        viewBox="0 0 18.615 18"
        onClick={() => frontPage()}
      >
        <path
          id="Icon_material-first-page"
          data-name="Icon material-first-page"
          d="M27.615,24.885,20.73,18l6.885-6.885L25.5,9l-9,9,9,9ZM9,9h3V27H9Z"
          transform="translate(-9 -9)"
        />
      </svg>
  
      <div>首页</div>
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="18"
        viewBox="0 0 9 18"
        onClick={() => previousPage()}
      >
        <path
          id="Icon_ionic-md-arrow-dropleft"
          data-name="Icon ionic-md-arrow-dropleft"
          d="M22.5,9l-9,9,9,9Z"
          transform="translate(-13.5 -9)"
        />
      </svg>
  
      <div>上一页</div>
      <div>{page}/{pages}</div>
      <div>下一页</div>
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="18"
        viewBox="0 0 9 18"
        onClick={() => nextPage()}
      >
        <path
          id="Icon_ionic-md-arrow-dropright"
          data-name="Icon ionic-md-arrow-dropright"
          d="M13.5,9l9,9-9,9Z"
          transform="translate(-13.5 -9)"
        />
      </svg>
  
      <div>尾页</div>
  
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18.615"
        height="18"
        viewBox="0 0 18.615 18"
        onClick={() => lastPage()}
      >
        <path
          id="Icon_material-last-page"
          data-name="Icon material-last-page"
          d="M8.385,11.115,15.27,18,8.385,24.885,10.5,27l9-9-9-9ZM24,9h3V27H24Z"
          transform="translate(-8.385 -9)"
        />
      </svg>
    </div>);
    }

    function nextPage() {
      if (page < pages) setPage((page)=>page+1);
      else setPage((page)=>(pages));
    }
    function previousPage() {
      if (page > 1) setPage((page)=>(page - 1));
      else setPage((page)=>(1));
    }
    function lastPage() {
      setPage((page)=>(pages));
    }
    function frontPage() {
      setPage((page)=>(1));
    }
  
    return res?.data?.value ?(
      <div >
      
          {res.data.value.map((item: any)=>(
           <Getteachersfliter name={item.teacherName} position={item.position} experience={item.experience} direction={item.direction} address={item.address} award={item.award}></Getteachersfliter> 
          ))}
        
       
        <Fliptool/>
      </div>
    ):(
       <p>isLoading...</p>
    );
  }
class LeaderTeam extends Component {
    render() {
      return (
        <TeachersShow row='1'/>
      );
    }
  }
  export default LeaderTeam;