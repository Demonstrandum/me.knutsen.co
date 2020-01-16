export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        if (!window) return;

        const w = window;
        const d = window.document;

        let hue = Math.random() * 360;
        let h1_span = d.querySelector('h1 span');
        if (h1_span)
            h1_span.style.background = `hsl(${hue}deg, 60%, 80%)`;

        let mode = w.localStorage.getItem('mode');
        if (mode === null) {
            mode = 'light';
            w.localStorage.setItem('mode', mode);
        }

        const toggle = () => {
            let link = d.getElementById('dark-css');
            if (link === null) {
                d.getElementsByTagName("head")[0].insertAdjacentHTML(
                    "beforeend",
                    `<link id="dark-css" rel="stylesheet" href="/static/dark.css" />`
                );
                if (h1_span)
                    h1_span.style.background = `hsl(${hue}deg, 40%, 20%)`;
                w.localStorage.setItem('mode', 'dark');
            } else {
                link.outerHTML = "";
                if (h1_span)
                    h1_span.style.background = `hsl(${hue}deg, 60%, 80%)`;
                w.localStorage.setItem('mode', 'light');
            }
        }

        if (mode === 'dark') toggle();

        d.getElementById('dark-toggle').addEventListener('click', toggle);
    }

    render() {
        return (
            <div id="dark-toggle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Font_Awesome_5_solid_moon.svg" />
            </div>
        );
    }
}
