import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="avatar.png" alt="avatar"></img>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1 className="name">J0Santos</h1>
      <p>
        C and C++ Developer, currently walking the hellish path of learning
        front-end, in hopes he can get a job so he can be able to put food on
        the table for all his kids, parents, friends and neighbours, cause he is
        a really good guy.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML" emoji="😀" color="#BB3022" />
      <Skill name="CSS" emoji="😁" color="#BB7522" />
      <Skill name="JavaScript" emoji="😂" color="#B6BB22" />
      <Skill name="C++" emoji="😃" color="#5ABB22" />
      <Skill name="C" emoji="😄" color="#22BB50" />
      <Skill name="Github" emoji="😅" color="#22BBAB" />
      <Skill name="React" emoji="😆" color="#2260BB" />
      <Skill name="Linux" emoji="😇" color="#5522BB" />
      <Skill name="TypeScript" emoji="😈" color="#BB22B6" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
