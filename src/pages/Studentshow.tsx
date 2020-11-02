import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Pagination } from 'antd';
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
  return res?.data?.value ?(
    <div>
    <div style={{width:"70%",marginLeft:'auto',marginRight:'auto'}}>
      <Row >
        
        {res.data.value.map((item: any)=>(
          <Col span={8} style={{display:'flex',justifyContent:'center'}}><GetStudentFliter state={item.state} studentName={item.studentName} position={item.position}></GetStudentFliter> </Col>
        ))}
      </Row>
       
    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}>
    <Pagination defaultCurrent={1} total={count} pageSize={props.row} onChange={(page)=>(setPage(page))}/>
    </div>  
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