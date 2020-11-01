import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
function Getteachersfliter(props: {
  value:any;
  name: React.ReactNode;
  position: React.ReactNode;
  address: React.ReactNode;
  direction: React.ReactNode;
  award: any;
  experience: any;
}) {
  return (
    <div className="content-leaderteam">
      <div className="content-leaderteam-left">
        <div>
          <img src={require('../asserts/导师团队.jpg')}></img>
        </div>
        <div id="flex-row">
          <div>
            <p id="paragraph-big">{props.name}</p>
          </div>
          <div>教授 博士生导师</div>
        </div>
        <div id="flex-row">任职：{props.position}</div>
        <div id="flex-row">
          <div>通讯地址：{props.address}</div>
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
          <div dangerouslySetInnerHTML={{ __html: props.experience }}></div>
        </div>
        <div id="flex-row">
          <div id="title-small-font">重要学术奖项</div>
        </div>
        <div id="flex-row">
          <div dangerouslySetInnerHTML={{ __html: props.award }}></div>
        </div>
        <div id="flex-row">
          <div id="title-small-font">发表论⽂</div>
        </div>
        <div id="flex-row">
          <div>
          {
          props.value.map
          (
            (item: { reference: React.ReactNode; })=>
            {return(<p>{item.reference}</p>)}
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
function TeachersShow(props: { page:string; }) {
  const [res, setRes] = useState<any>();
  const [author, setAuthor] = useState<any>();
  useEffect(() => {
    fetch(
      '/platform-scientific/api/sci/teacher/filter/detail?page='+props.page+'&rows=1'   )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setRes(res);
        return res;
      })
      .then((res) => {
        return fetch(
          '/platform-scientific/api/sci/paper/filter/detail?author=' +
            res.data.value[0].teacherName,
        );
      })
      .then((response) => {
        return response.json();
      })
      .then((author) => {
        setAuthor(author);
      });
  }, []);
  let count = res ? res.data.count : NaN;
  console.log(res);
  let value = res ? res.data.value[0] : NaN;
  let Author=author?author.data.value:NaN;
 

  return (res?.data?.value &&author)? (
    <div>
      <Getteachersfliter
        value={Author}
        name={value.teacherName}
        position={value.position}
        experience={value.experience}
        direction={value.direction}
        address={value.address}
        award={value.awards}/> 
    </div>
  ) : (
    <p>isLoading...</p>
  );
}
function Wangjian()
{
    return(
        <TeachersShow page='2'></TeachersShow>
    );
}
export default Wangjian;
