import Link from 'next/link';
import '../styles/Header.css';

export default () => (
  <header>
    <div>
      <div className="aside">
        <Link href="/">
          <span style={{cursor: 'pointer'}} id="home">K</span>
        </Link>
      </div>
      <div className="aside">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="#projects">
          <a>Projects</a>
        </Link>
        <Link href="/emails">
          <a>Emails</a>
        </Link>
      </div>
      <div className="right"/>
    </div>
  </header>
);
