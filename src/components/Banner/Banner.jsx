
import { Link } from 'react-router-dom';
import banner from './banner.png'
const Banner = () => {

    return (
        <div className=' grid lg:grid-cols-2  lg:gap-x-20 lg:h-96 justify-center items-center mx-28 my-16'>
            <div>
                <h2 className='font-bold text-5xl '> Books to freshen up  your bookshelf </h2>
               <Link to='/listed'> <button id='view-list' className='btn bg-[#23BE0A] text-white mt-12'>View The List</button></Link>
            </div>
            <div>
                <img className='lg:w-96 ' src={banner} alt="" />
            </div>

        </div>
    );
};

export default Banner;