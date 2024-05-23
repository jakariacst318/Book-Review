
const Listed = () => {
    return (
        <div>
            <div>
                <h2 className="text-[#131313] font-bold text-4xl text-center py-10">Books</h2>

            </div>
            <div className="flex justify-center">
                <select className="select w-36 max-w-xs bg-[#23BE0A] text-white font-semibold ">
                    <option disabled selected>Sort By</option>
                    <option>Rating</option>
                    <option>Number of Page</option>
                    <option>Publish date</option>
                </select>
            </div>
        </div>
    );
};

export default Listed;