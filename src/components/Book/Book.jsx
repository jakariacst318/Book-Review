
const Book = ({book}) => {
    const {bookName,image} = book
    return (
        <div>
            <img src={image} alt="images" />
            <h2> {bookName}</h2>
        </div>
    );
};

export default Book;