import {Link} from "react-router-dom";
import Tag from "./Tag"

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">Back</Link>
        <Tag text={"TESTING 123"}/>
    </div>
  );
};

export default About;
