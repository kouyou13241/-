import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
function GetStudentFliter(props: { studentName: React.ReactNode; state: React.ReactNode; position: React.ReactNode; })
{
  return(
<div className="news-discription">
              <div>
                <div>
                  <img id="nobel-picture" src={require('../asserts/学生.jpg')} />
                </div>
                <div id="student-bottom-font">
                 <p>{props.studentName} {props.state} {props.position}</p>
                </div>
              </div>
            </div>
  );
}
function Student(props: { row: any; })
{
  const [res, setRes] = useState<any>();
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    fetch('/platform-scientific/api/sci/student/filter/detail?page='+page+'&rows='+props.row).then(async (response) => {
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
      
      
      <Row>
        
        {res.data.value.map((item: any)=>(
          <Col span={8} style={{display:'flex',justifyContent:'center'}}><GetStudentFliter state={item.state} studentName={item.studentName} position={item.position}></GetStudentFliter> </Col>
        ))}
      </Row>
        
      
      <Fliptool/>
    </div>
  ):(
     <p>isLoading...</p>
  );
     

  
  }
  function StudentShow()
  {
     return(
        <div>
          <Student row='6'></Student>
        </div>
     );
  }
  export default StudentShow;