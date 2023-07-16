import React from 'react';

const Header = () => {
    return (
    <>
        <div className="row1">
            <div className="col1" >
                <img src="Movie_icon.svg" />
            </div>
            <div className="col2" >
                <p>Movie Hub</p>
            </div>
            <div className="col3" >Add Movie</div>
            <div className="col4" >Watch</div>
        </div>
        <div className="row2"><h3 className="List"> Watch</h3></div>
    </>
    );
};

export default Header;

