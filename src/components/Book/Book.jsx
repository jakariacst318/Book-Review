import { AiTwotoneStar } from "react-icons/ai";
const Book = ({ book }) => {
    const { bookName, image, author, category, rating, tags } = book;
    const { } = tags;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl space-y-4">
                <figure><img className="h-80" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between font-medium text-base text-[#23BE0A]">
                        {
                            tags.map((ing, idx) =><p key={idx}>{ing}</p>)
                        }                       
                    </div>
                    <h2 className="card-title text-[#131313] font-bold text-2xl">{bookName}</h2>
                    <p className="font-medium text-base text-[#131313CC]">By: {author}</p>

                    <div className="card-actions justify-end font-medium text-base pt-10 text-[#131313CC]">
                        <p>{category}</p>
                        <p className="flex gap-2 justify-center items-center"><AiTwotoneStar /> {rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;