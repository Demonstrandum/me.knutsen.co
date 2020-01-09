export default props => (
  <a id="GitLink" target="_blank" href={props.href}>
    <img
      src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
      height={props.height || 20}
      width={props.width || ""}
      alt="GitHub" />
  </a>
);
