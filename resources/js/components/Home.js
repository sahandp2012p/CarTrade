import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
        <div className="w-3/4 m-auto">
            <h1 className="text-2xl font-medium">Home</h1>
        </div>
    );
}

export default Home;

ReactDOM.render(<Home />, document.getElementById('home'));
