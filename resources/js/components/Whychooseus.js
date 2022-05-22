import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

function Whychooseus() {
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
                    <li className='mr-20'><a href="/about">About us</a></li>
                    <li className='mr-20'><a href="/signup">Sign up</a></li>
                    <li className='mr-20'><a href="/login">Log in</a></li>
                    <li className='mr-20'><a href="#">Rent a car</a></li>
                    <li className='mr-20'><a href="#">Buy a car</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
				
                <button className='text-blue-700 border-2 border-blue-700 rounded-sm px-3 py-2 hover:text-white hover:bg-blue-700 uppercase'>Sign Up Now</button>
            </nav>

            <h1 className='text-blue-700 text-4xl font-medium mt-5 uppercase mb-3'>Why choose us?</h1>
			<p className='text-blue-700 mb-3'>CarTrade uses a very complicated hashing algorithm so that <br /> someone who wants to have your car never steals your account.</p>
        
            <ul className="features">
                <ListItem>Automatic account encryption</ListItem>
                <ListItem>High quality cars</ListItem>
                <ListItem>Monthly payments</ListItem>
            </ul>
        </div>
    );
}

export default Whychooseus;

if (document.getElementById('whychooseus')) {
    ReactDOM.render(<Whychooseus />, document.getElementById('whychooseus'));
}
