import React from 'react';
const GenresUI= ({img}) => {
    return (
        <>
          <div className="container">
            <div className="genres--items">
                <img src={img} alt="img" />
            </div>
          </div>
        </>
    );
};

export default GenresUI;