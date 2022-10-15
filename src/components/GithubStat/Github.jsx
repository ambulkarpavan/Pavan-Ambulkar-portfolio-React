import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "./Github.css"
function Github() {
  return (
    <div>
        <div style={{marginTop:"50px", marginBottom:"50px"}}>
                <h3 style={{textAlign:"center" , marginBottom:"50px"}} >My Advantages</h3>
                {/* <div><p>1200+ <span style={{fontSize:"18px"}}> Hrs <br/> Coding</span></p></div> */}
    <div className="advantage">
      <div><p>1200+ <span style={{fontSize:"18px"}}> Hrs <br/> Coding</span></p></div>
      <div><p>150+ <span style={{fontSize:"18px"}}> Que <br/> DSA</span></p></div>
      <div><p>150+ <span style={{fontSize:"18px"}}> <br/> Git Commits</span></p></div>
      <div><p>3+ <span style={{fontSize:"18px"}}><br/>Collaborative Projects</span></p></div>
    </div>
        </div>
        <div>
        <h3 style={{textAlign:"center", marginBottom:"50px"}} > GitHub Contribution</h3>
        <Row style={{ justifyContent: "center", padding: "10px",color:"wheat" , backgroundColor:"#23283e" }}>
      {/* <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1> */}
      
      <GitHubCalendar
      className="project-heading"
       style={{width:"100%"}}
        username="ambulkarpavan"
        blockSize={15}
        blockMargin={5}
        color="#C084F5"
        fontSize={15}
      />
    </Row>
        </div>
    </div>
  );
}

export default Github;