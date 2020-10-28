import '../asserts/App.css';
import React, { Component, useEffect, useState } from 'react';
import { findAllByDisplayValue } from '@testing-library/react';
function Downloadlayer(props: {
  title: React.ReactNode;
  form: React.ReactNode;
  space: React.ReactNode;
  numbers: React.ReactNode;
  date: React.ReactNode;
  name: React.ReactNode;
}) {
  return (
    <div>
      <div className="download-flex">
        <div className="download-layer-left">
          <p id="download-title-font">{props.title}</p>
        </div>
        <div className="download-layer-right">
          <div>
            <p id="download-margin">{props.form}</p>
          </div>
          <div>
            <p id="download-margin">{props.space}</p>
          </div>
          <div>
            <p id="download-margin">{props.numbers}</p>
          </div>
          <div>
            <p id="download-margin">{props.date}</p>
          </div>
          <div>
            <p id="download-margin">{props.name}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
function Time(time: string | number | Date) {
  function Changetime(time: string | number | Date) {
    let outcome = new Date(time);
    let final = String(outcome);
    return final;
  }
  let a = Changetime(time);
  let b = a.substring(4, 16);
  return b;
}
function DownloadShow(props: { row:any }) {
  const [res, setRes] = useState<any>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('/api/sci/resource/filter?page=' + page + '&rows=' + props.row).then(
      async (response) => {
        setRes(await response.json());
      },
    );
  }, [page]);

  let count = res ? res.data.count : NaN;
  let pages = Math.ceil(count / props.row);
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

  return res?.data?.value ? (
    <div>
      <div>
        <div>
          <div className="download-flex">
            <div className="download-layer-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 36 36"
              >
                <path
                  id="Icon_awesome-download"
                  data-name="Icon awesome-download"
                  d="M15.188,0h5.625A1.683,1.683,0,0,1,22.5,1.688V13.5h6.166a1.4,1.4,0,0,1,.991,2.4L18.963,26.6a1.362,1.362,0,0,1-1.92,0L6.335,15.9a1.4,1.4,0,0,1,.991-2.4H13.5V1.688A1.683,1.683,0,0,1,15.188,0ZM36,26.438v7.875A1.683,1.683,0,0,1,34.313,36H1.688A1.683,1.683,0,0,1,0,34.313V26.438A1.683,1.683,0,0,1,1.688,24.75H12L15.448,28.2a3.6,3.6,0,0,0,5.1,0L24,24.75H34.313A1.683,1.683,0,0,1,36,26.438Zm-8.719,6.188a1.406,1.406,0,1,0-1.406,1.406A1.41,1.41,0,0,0,27.281,32.625Zm4.5,0a1.406,1.406,0,1,0-1.406,1.406A1.41,1.41,0,0,0,31.781,32.625Z"
                />
              </svg>
              <p style={{marginLeft:'10px'}}>文件名称</p>
            </div>

            <div className="download-layer-right">
              <div>
                <p id="download-margin">文件类型</p>
              </div>
              <div>
                <p id="download-margin">文件大小</p>
              </div>
              <div>
                <p id="download-margin">下载量</p>
              </div>
              <div>
                <p id="download-margin">上传日期</p>
              </div>
              <div>
                <p id="download-margin">上传者</p>
              </div>
            </div>
          </div>
          <div>
            <hr />
          </div>
        </div>
        {res.data.value.map((item:any) => (
          <Downloadlayer
            title={item.title}
            form={item.type}
            space="50kb"
            numbers={item.downloads}
            date={Time(item.gmtCreate)}
            name={item.createBy}
          />
        ))}
      </div>
      <Fliptool />
    </div>
  ) : (
    <p>onLoding...</p>
  );
}
function Download()
{
  return(
    <div>
      <DownloadShow row='7'></DownloadShow>
    </div>
  );
}
export default Download;
