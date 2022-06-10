import ReactDom from 'react-dom';
import './index.css'

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL906_SR906,600_.jpg',
  title: 'If Animals Could Kiss Goodnight',
  author: 'Ann Whitford Paul'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71eJk7GtUOL._AC_UL906_SR906,600_.jpg',
  title: 'The Boy, the Mole, the Fox and the Horse',
  author: 'Charlie Mackesy'
}


function BookList() {
  return (
  <section className='booklist'>
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
  </section>
  );
}

const Book = (props) => {
  console.log(props);
  return(
  <article className='book'>
    <img src={props.img}></img>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
  )
};

ReactDom.render(<BookList/>,document.getElementById('root'));