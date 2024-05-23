import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillCheckCircle } from "react-icons/ai";

const BookDetailes = () => {
    const books = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    const { image, review, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleReadBook =() =>{
        toast(' Book Added to Read List')
    }
    const handleWishlist =() =>{
        toast(' Book Added to Wishlist List')
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-x-20">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold pb-5">{bookName}</h1>
                        <p className="text-[#131313CC] font-medium text-xl"> By: {author}</p>
                        <p className="text-[#131313CC] font-medium text-xl py-10">{category}</p>
                        <p className="text-[#131313] font-medium pb-6">Review : <span className="text-[#131313B3]">{review}</span></p>
                        <div className="flex gap-x-9 font-medium text-[#23BE0A] pb-12">
                            <h2 className="text-[#131313CC]">Tag </h2>
                            {
                                tags.map((ing, idx) => <p key={idx}>{ing}</p>)
                            }
                        </div>
                        <div className="space-y-3 ">
                            <p className="text-[#131313B3]">pages <span className="font-semibold text-[#131313] ms-[140px]">{totalPages}</span></p>

                            <p className="text-[#131313B3]">Publisher <span className="font-semibold text-[#131313] ms-[115px]">{publisher}</span></p>

                            <p className="text-[#131313B3]">Year Of Publishing <span className="font-semibold text-[#131313] ms-12">{yearOfPublishing}</span></p>

                            <p className="text-[#131313B3] pb-8">Rating <span className="font-semibold text-[#131313] ms-[130px]">{rating}</span></p>
                        </div>
                        <button onClick={handleReadBook} className="btn btn-outline btn-accent">Read</button> 
                        <button  onClick={handleWishlist} className="btn btn-accent ms-4">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetailes;