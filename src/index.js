import ReactDom from 'react-dom';

function BookList() {
  return (
  <section>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
}

const Book = () => {
  return <article>
    this is a nook
  </article>
}

ReactDom.render(<BookList/>,document.getElementById('root'));