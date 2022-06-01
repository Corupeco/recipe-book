import './HeaderButton.css';

export default function HeaderButton(props) {
  return (
    <button className="HeaderButton" onClick={props.onClick}>
      {props.children}
    </button>
  )
}