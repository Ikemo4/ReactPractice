import ReactDom from 'react-dom';

function Greeting() {
  return (
  <div>
    <Person/>
    <Message/>
  </div>
  );
}

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>simple message</p>;
}

ReactDom.render(<Greeting/>,document.getElementById('root'));