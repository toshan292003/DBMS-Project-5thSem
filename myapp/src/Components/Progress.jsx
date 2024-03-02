import {React , useState} from "react";
import "./progress.css";
export default function Progress(props) {
    const something = 400 - props.percentage * 4;
    function something2(){
      if(props.percentage == 100){
        return 5000;
      }
      else{
        return 400;
      }
    }
    function something3(){
      if(props.percentage == 0){
        return 0;
      }
      else{
        return 20;
      }
    }
  return (
    <>
      <div class="outer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            style={{strokeDashoffset:`${something}`, strokeDasharray:`${something2()}`,strokeWidth:`${something3()}`}}
          />
        </svg>
        <span>{props.percentage}%</span>
      </div>
    </>
  );
}
