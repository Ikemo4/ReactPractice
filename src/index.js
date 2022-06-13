import ReactDom from 'react-dom';
import './index.css'

const books = [
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL906_SR906,600_.jpg',
  title: 'If Animals Could Kiss Goodnight',
  author: 'Ann Whitford Paul'
  },
  {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71eJk7GtUOL._AC_UL906_SR906,600_.jpg',
  title: 'The Boy, the Mole, the Fox and the Horse',
  author: 'Charlie Mackesy'
  }
]

function BookList() {
  return (
  <section className='booklist'>
    {books.map((book) => {
      const {img, title, author} = book;
      return(
      <div>
          <h2>{title}</h2>
          <h4>{author}</h4>
      </div>
      )
    })}
  </section>
  );
}

//object destructuring javascript
const Book = ({img, author, title}) => {

  return(
  <article className='book'>
    <img src={img}></img>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  )
};

ReactDom.render(<BookList/>,document.getElementById('root'));