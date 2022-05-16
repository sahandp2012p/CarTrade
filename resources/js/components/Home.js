import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
        <div className="w-5/6 m-auto mt-3">
            <nav className="flex justify-between align-items-center">
                <img src="/imgs/logo.svg" alt="CarTrade" className='w-32'/>
            
                <ul className="flex text-blue-700">
                    <li className='mr-20'><a href="#">About us</a></li>
                    <li className='mr-20'><a href="#">Why choose us?</a></li>
                    <li className='mr-20'><a href="#">Sign up</a></li>
                    <li className='mr-20'><a href="#">Rent a car</a></li>
                    <li className='mr-20'><a href="#">Buy a car</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>

                <button className='text-blue-700 border-2 border-blue-700 rounded-sm px-3 py-2 hover:text-white hover:bg-blue-700'>Sign Up Now</button>
            </nav>

            <h1 className='text-blue-700 text-3xl font-medium mt-5'>Welcome to CarTrade, <br /> <strong className='uppercase'>The Place you Buy and Rent cars.</strong></h1>
        </div>
    );
}

export default Home;

ReactDOM.render(<Home />, document.getElementById('home'));
