import Link from 'next/link';
import '../styles/Header.css';
import GitLink from './GitLink'

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
        <a href="/#projects">Projects</a>
        <Link href="/emails">
          <a>Emails</a>
        </Link>
      </div>
      <div className="right">
        <GitLink href="https://github.com/Demonstrandum/knutsen.co" />
      </div>
    </div>
  </header>
);
