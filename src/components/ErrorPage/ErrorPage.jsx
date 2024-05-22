import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
const ErrorPage = () => {
    return (
        <div >
            <h2 className="text-5xl text-red-500 text-center mt-20"> Oops !!!  </h2>
            <Link to='/'><button className="btn btn-outline btn-accent ms-10"><AiOutlineArrowLeft /> Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;