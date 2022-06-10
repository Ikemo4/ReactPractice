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
  return(
  <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
  )
};
const Image = () => {
  return <img src='https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL906_SR906,600_.jpg'></img>
}
const Title = () => <h1>If Animals Kissed Good Night</h1>
const Author = () => <h4>Ann Whitford Paul</h4>

ReactDom.render(<BookList/>,document.getElementById('root'));