import ReactDom from 'react-dom';
import './index.css'
import { books } from 'books.js'
import { Book } from './book';

function BookList() {
  return (
  <section className='booklist'>
    {books.map((book) => {
      const {img, title, author} = book;
      return(
        <Book key={book.id} {...book}></Book>
        //... spread operator spreads out all the properties
        //that are coming in from book onto the prop
      )
    })}
  </section>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));