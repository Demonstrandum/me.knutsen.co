import '../components/Utility';
import Layout from '../components/Layout';
import '../styles/global.css';

const Project = props => (
  <div className="wrapper">
    <div className="project">
      <div>
        <div>
          <h3>{props.title}</h3>
          {props.children}
        </div>
      </div>
      <div>
        {props.thumb}
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
      }
      .project {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 16px 25px;
        height: 100%;
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        display: inline-flex;
        align-items: center;
        margin: 30px 0;
        filter: drop-shadow(0 4px 4px rgba(0,0,0,0.07));
        background: #fff;
      }

      .project h3 {
        margin: 0 0 10px 0;
      }

      .project > div {
        width: calc(50% - 20px);
        padding: 5px 10px;
        display: inline-block;
        overflow-x: hidden;
      }
    `}
    </style>
  </div>
);

const fam_code = `STORE 55 : @0
DATA dyn : 0b01101
LOAD -0xf : &DAT
LOAD &DAT : &ACC

LOOP:
ADD 1 : &ACC
OUT &ACC
STORE &ACC : dyn

MORE &ACC : 29
    | GOTO END
    | GOTO LOOP

END: HALT 0
`;
const Index = () => (
  <Layout>
    <Title>Home</Title>
    <h1><span>Knutsen</span></h1>

    <div id="projects">
      <h2>Projects</h2>

      <Project
        title="BasicCanvas"
        thumb={
          <iframe
            scrolling="no"
            src="https://canvas.knutsen.co/example/?vector_field.js"/>
        }
      >
        Simple JavaScript Canvas library for 2D graphics.
        <p/>
        See <a href="https://canvas.knutsen.co/">canvas.knutsen.co</a> for
        examples.
      </Project>

      <Project
        title="FAMalam"
        thumb={
          <code>
            <pre>{fam_code}</pre>
          </code>
        }
      >
        Web interface for FAM, FAMalam. Interpreter for
        assembly-like langauge.
        <p/>
        See <a href="https://fam.knutsen.co/">fam.knutsen.co</a> to try
        it out.
      </Project>
    </div>
    <style jsx>{`
      #projects {
        position: relative;
        top: 100vh;
        min-height: 100vh;
        padding: 50px 0 0 0;
        width: 100%;
        display: block;
      }

      #projects iframe {
        display: block;
        border: 2px solid #ddd;
        border-radius: 4px;
        height: 200px;
        width: 100%;
        overflow: hidden;
      }
      #projects code {
        display: block;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding 5px 10px;
        height: 200px;
        width: 95%;
        overflow: hidden;
      }
      #projects pre {
        padding: 0;
        margin: 0;
        width: 90%;
      }

    `}
    </style>
  </Layout>
);

export default Index;
