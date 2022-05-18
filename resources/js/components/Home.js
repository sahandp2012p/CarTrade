import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
        <div className="w-5/6 m-auto mt-3">
            <nav className="flex justify-between align-items-center">
                <img src="/imgs/logo.svg" alt="CarTrade" className='w-32'/>
            
                <ul className="flex text-blue-700">
                    <li className='mr-20'><a href="/about">About us</a></li>
                    <li className='mr-20'><a href="/whychooseus">Why choose us?</a></li>
                    <li className='mr-20'><a href="#">Sign up</a></li>
                    <li className='mr-20'><a href="#">Rent a car</a></li>
                    <li className='mr-20'><a href="#">Buy a car</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>

                <button className='text-blue-700 border-2 border-blue-700 rounded-sm px-3 py-2 hover:text-white hover:bg-blue-700 uppercase'>Sign Up Now</button>
            </nav>

            <h1 className='text-blue-700 text-4xl font-medium mt-5'>Welcome to CarTrade, <br /> <strong className='uppercase'>The Place you Buy and Rent cars.</strong></h1>
        
            <p className='w-96 text-blue-600 mt-4 mb-4'>CarTrade is a big website that you can buy and rent cars from them with confidence. CarTrade has a lot of types of cars from Volkswagen beetles to Chevrolet corvettes.</p>
            <button className='hover:bg-blue-600 hover:border-blue-600 mr-3 border-2 border-blue-700 rounded-sm px-12 py-2 text-white bg-blue-700 uppercase'>Rent a car</button>
            <button className='text-blue-700 border-2 border-blue-700 rounded-sm px-12 py-2 hover:text-white hover:bg-blue-700 uppercase'>Buy a car</button>
        </div>
    );
}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
