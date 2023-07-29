import React from "react";

const PageTitle = (props) => {
  const { title, subtitle1, subtitle2 } = props;
  return (
    <div className="pagetitle">
      <h1>{title}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">{subtitle1}</a>
          </li>
          <li className="breadcrumb-item">{subtitle2}</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageTitle;
