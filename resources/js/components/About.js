import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function About() {
	const [open, setOpen] = useState(false);

    function isOpen() {
        return open;
    }

    function handleToggle() {
        setOpen(!open);
    }

    return (
        <div className="w-5/6 m-auto mt-3">
            <nav className={!isOpen() ? "flex justify-between align-items-center" : "flex justify-between align-items-center enabled"}>
				<div className="flex align-items-center">
					<div className="hamburger" onClick={handleToggle}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<img src="/imgs/logo.svg" alt="CarTrade" className='w-32'/>
				</div>

				<ul className="flex text-blue-700">
                    <li className='mr-20'><a href="/">Home</a></li>
                    <li className='mr-20'><a href="/whychooseus">Why choose us?</a></li>
                    <li className='mr-20'><a href="/signup">Sign up</a></li>
                    <li className='mr-20'><a href="/login">Log in</a></li>
                    <li className='mr-20'><a href="#">Rent a car</a></li>
                    <li className='mr-20'><a href="#">Buy a car</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
				
                <button className='text-blue-700 border-2 border-blue-700 rounded-sm px-3 py-2 hover:text-white hover:bg-blue-700 uppercase'>Sign Up Now</button>
            </nav>

            <h1 className='text-blue-700 text-4xl font-medium mt-5 uppercase mb-3'>About Us</h1>
			<p className='text-blue-700 mb-3'>CarTrade is a big website that you can buy and rent cars from them <br /> with confidence. CarTrade has a lot of types of cars from <br /> Volkswagen beetles to Chevrolet corvettes.</p>
			<button className='hover:bg-blue-600 hover:border-blue-600 mr-3 border-2 border-blue-700 rounded-sm px-12 py-2 text-white bg-blue-700 uppercase'>Rent a car</button>
            <button className='text-blue-700 border-2 border-blue-700 rounded-sm px-12 py-2 hover:text-white hover:bg-blue-700 uppercase'>Buy a car</button>
		</div>
    );
}

export default About;

if (document.getElementById('about')) {
	ReactDOM.render(<About />, document.getElementById('about'));
}
