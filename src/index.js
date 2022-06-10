import ReactDom from 'react-dom';
import './index.css'

const title = 'If Animals Could Kiss Goodnight';
const author = 'Ann Whitford Paul';
const img = 'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL906_SR906,600_.jpg'

function BookList() {
  return (
  <section className='booklist'>
    <Book job='developer' />
    <Book/>
  </section>
  );
}

const Book = (props) => {
  console.log(props);
  return(
  <article className='book'>
    <img src={img}></img>
    <h1>{title}</h1>
    <h4>{author}</h4>
    {/* <Title/> */}
    {/* <Author/> */}
    {/* <Image/> */}
  </article>
  )
};
// const Image = () => {
//   return <img src='https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL906_SR906,600_.jpg'></img>
// }
// const Title = () => <h1>If Animals Kissed Good Night</h1>
// const Author = () => <h4>Ann Whitford Paul</h4>

ReactDom.render(<BookList/>,document.getElementById('root'));