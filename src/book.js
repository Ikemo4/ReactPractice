export const Book = ({img, title, author}) => {
    //attribute, event handler
    //onClick, onMouseOver
    const clickHandler = (event) => {
        console.log(event);
        alert('hello world');
    };
    const complexExample = (author) => {
        console.log(author);
    };
    return(
    <article className='book' onMouseOver={() => {
        console.log(title)
    }}>
        <img src={img}></img>
        <h1 onClick={()=> console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>
        reference example
        </button>
        <button type='button' onClick={() => complexExample(author)}> {/* can't just do complexExample(author) because that calls the function immediately */}
        more complex example
        </button>
    </article>
    )
};