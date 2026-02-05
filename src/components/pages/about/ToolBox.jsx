import Appearance from "@/components/animations/Appearance";
import { stack } from "./data";

const ToolCategory = ({ name, tools }) => (
  <div className="category__wrapper">
    <span className="category__name">{name}</span>
    <ul role="list" className="category__list">
      {tools.map((tool, idx) => (
        <li key={idx}>
          <span className="dot"></span>
          {tool}
        </li>
      ))}
    </ul>
  </div>
);

const ToolBox = () => {
  return (
    <section className="toolbox">
      <Appearance delay={0.1}>
        <header className="toolbox__header">
          <span className="eyebrow">The Stack</span>
          <h2 className="display-text">My Toolbox</h2>
        </header>
      </Appearance>
      <section className="toolbox__grid">
        <Appearance delay={0.2}>
          <ToolCategory name="Design" tools={stack.design} />
        </Appearance>
        <Appearance delay={0.3}>
          <ToolCategory name="Development" tools={stack.frontend} />
        </Appearance>
        <Appearance delay={0.4}>
          <ToolCategory name="Other Tools" tools={stack.other} />
        </Appearance>
      </section>
    </section>
  );
};

export default ToolBox;
