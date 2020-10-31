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
function TeachersShow(props: { row: any }) {
  const [res, setRes] = useState<any>();
  const [page, setPage] = useState(1);
  const [author, setAuthor] = useState<any>();
  useEffect(() => {
    fetch(
      '/platform-scientific/api/sci/teacher/filter?page=' +
        page +
        '&rows=' +
        props.row,
    )
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
  }, [page]);

 

  let count = res ? res.data.count : NaN;
  let value = res ? res.data.value[0] : NaN;
  let pages = Math.ceil(count / props.row);
  let Author=author?author.data.value:NaN;
  function Fliptool() {
    return (
      <div className="fliptool">
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
        <div>
          {page}/{pages}
        </div>
        <div >下一页</div>

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
      </div>
    );
  }

  function nextPage() {
    if (page < pages) setPage((page) => page + 1);
    else setPage((page) => pages);
  }
  function previousPage() {
    if (page > 1) setPage((page) => page - 1);
    else setPage((page) => 1);
  }
  function lastPage() {
    setPage((page) => pages);
  }
  function frontPage() {
    setPage((page) => 1);
  }

  return (res?.data?.value &&author)? (
    <div>
      <Getteachersfliter
        value={Author}
        name={value.teacherName}
        position={value.position}
        experience={value.experience}
        direction={value.direction}
        address={value.address}
        award={value.awards}
      ></Getteachersfliter>

      <Fliptool />
    </div>
  ) : (
    <p>isLoading...</p>
  );
}
class LeaderTeam extends Component {
  render() {
    return <TeachersShow row="1" />;
  }
}
export default LeaderTeam;
