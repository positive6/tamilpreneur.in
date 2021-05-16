import React from "react";
import "./style.css";

const blogpage = (props) => {
  return (
    <div class="content">
      <h2>{props.heading}</h2>
      <h5>{props.subtext}</h5>
      <p>{props.footnote}</p>
      <p>
        {props.content} <br></br>
        <br></br> {props.content1}
        <br></br>
        <br></br> {props.content2}
        <br></br>
        <br></br> {props.content3}
        <br></br>
        <br></br> {props.content4}
        <br></br>
        <br></br> {props.content5}
        <br></br>
        <br></br> {props.content6}
        <br></br>
        <br></br> {props.content7}
        <br></br>
        <br></br> {props.content8}
      </p>
    </div>
  );
};
export default blogpage;
