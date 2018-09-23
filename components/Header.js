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
        <a href="/#projects">Projects</a>
        <Link href="/emails">
          <a>Emails</a>
        </Link>
      </div>
      <div className="right">
        <a href="https://github.com/Demonstrandum/knutsen.co">
          <img
            height="20"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"/>
        </a>
      </div>
    </div>
  </header>
);
