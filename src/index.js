import ReactDom from 'react-dom';
import './index.css'

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL906_SR906,600_.jpg',
    title: 'If Animals Could Kiss Goodnight',
    author: 'Ann Whitford Paul'
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71eJk7GtUOL._AC_UL906_SR906,600_.jpg',
    title: 'The Boy, the Mole, the Fox and the Horse',
    author: 'Charlie Mackesy'
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81EVdWdmOKL._AC_UL906_SR906,600_.jpg',
    title: 'Brown Bear, Brown Bear, What Do You See?',
    author: 'Bill Martin Jr'
  },
]

function BookList() {
  return (
  <section className='booklist'>
    {books.map((book) => {
      const {img, title, author} = book;
      return(
        <Book key={book.id} book={book}></Book>
      )
    })}
  </section>
  );
}

//object destructuring javascript
const Book = (props) => {
  const {img, title, author} = props.book
  return(
  <article className='book'>
    <img src={img}></img>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  )
};

ReactDom.render(<BookList/>,document.getElementById('root'));