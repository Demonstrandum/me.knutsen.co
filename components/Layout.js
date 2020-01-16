import './Utility';
import Link from 'next/link';
import Head from 'next/head';
import Header from './Header';
import DarkToggle from './DarkToggle';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('load', () => {
        document.body.style.top = toString(
          document.getElementsByTagName('header')[0].clientHeight
        );
        console.log(document.body.style.top);
      });
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Unnamed</title>
        </Head>
        <Header/>
        <DarkToggle/>
        {this.props.children}
      </div>
    );
  }
}
