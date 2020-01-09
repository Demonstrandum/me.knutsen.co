import '../components/Utility';
import Layout from '../components/Layout';
import GitLink from '../components/GitLink';
import '../styles/global.css';

const RenderGit = props => {
  if (props.href)
    return <GitLink href={`https://github.com/Demonstrandum/${props.href}`} />
  else
    return <span />
};

const Project = props => (
  <div className="wrapper">
    <div className="project">
      <div>
        <div>
          <h3>{props.title} <RenderGit href={props.github} /> </h3>
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
        margin: 40px 0;
      }
      .project {
        position: relative;
        top: 0;
        transition: all .2s ease;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 16px 25px;
        height: 100%;
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        display: inline-flex;
        align-items: center;
        filter: drop-shadow(0 4px 4px rgba(0,0,0,0.1));
        background: #fff;
      }

      .wrapper:hover .project {
        top: -5px;
        filter: drop-shadow(0 7px 7px rgba(0,0,0,0.07));
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

const accent = () => `hsl(${Math.random()*360}deg, 55%, 80%)`;

const Index = () => (
  <Layout>
    <Title>Home</Title>
    <h1><span>Knutsen</span></h1>
    <img id="hordaland"
      src="https://images.pexels.com/photos/803250/pexels-photo-803250.jpeg"/>

    <div id="projects">
      <h2>Projects / Sub-domains</h2>
      <p>
          Fun projects for the web.  For other projects unrealted to the
          web (which is most of them) see my&nbsp;
        <a target="_blank" href="https://github.com/Demonstrandum">
          GitHub
        </a>.
      </p>
      <Project
        title="BasicCanvas"
        github="BasicCanvas"
        thumb={
          <iframe
            scrolling="no"
            src="https://canvas.knutsen.co/example/?vector_field.js"/>
        }>
        Simple JavaScript Canvas library for 2D graphics.
        <p />
        See <a target="_blank" href="https://canvas.knutsen.co/">canvas.knutsen.co</a> for
        examples.
      </Project>

      {/*
      <Project
        title="Veto"
        github="Veto"
        thumb={
          <img src="https://veto.vote/square.png" />
        }>
        Straw poll style website, with support
        for extra/alternative votes if enabled.
        <p />
        Go to the website, <a target="_blank" href="https://veto.vote/">veto.vote</a>.
      </Project>
      */}

      <Project
        title="FAMalam"
        github="FAMalam"
        thumb={
          <code>
            <pre>{fam_code}</pre>
          </code>
        }>
        Web interface for FAM, FAMalam. Interpreter for
        assembly-like langauge.
        <p/>
        See <a target="_blank" href="https://fam.knutsen.co/">fam.knutsen.co</a> to try
        it out.
      </Project>
    </div>
    <style jsx>{`

      h3 {
        z-index: 1;
      }
      #hordaland {
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 345px;
        right: 0;
        top: 35vh;
        z-index: -1;
        border-radius: 4px;
        filter: drop-shadow(0 4px 4px #00000077);
      }
      #projects {
        position: absolute;
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
      #projects code, #projects img {
        display: block;
        object-fit: contain;
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

      h1 span {
        background: ${accent()};
      }

    `}
    </style>
  </Layout>
);

export default Index;
