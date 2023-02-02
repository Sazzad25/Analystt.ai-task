import React from "react";
import { Link } from "react-router-dom";

const Home1 = ({topics}) => {
    const {username, name, address, id} = topics;
  return (
    <div className='grid lg:grid-cols-5 sm:grid-flow-row m-5 shadow-lg py-10 px-20 bg-gray-200 rounded-lg' data-aos="fade-down" data-aos-duration="1500">
            <h2 className='text-lg font-medium flex items-center justify-center'>Hello {username}</h2>
            <div>
                <h1 className='text-lg font-medium'>Contact</h1>
                <p>{name}</p>
            </div>
            <div>
                <h1 className='text-lg font-medium'>Street</h1>
                <p>{address.street}</p>
            </div>
            <div>
                <h1 className='text-lg font-medium'>City</h1>
                <p>{address.city}</p>
            </div>
            <div>
                <Link to={`/details/${id}`}><button className="btn btn-error rounded-xl sm:mt-3 text-white">View Details</button></Link>
            </div>
        </div>
  );
};

export default Home1;
