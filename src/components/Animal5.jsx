// Animal5.jsx

import hamster from '../assets/img/hamster_05.jpg';
import PropTypes from 'prop-types';

export const Animal5 = ( {className} ) => {
  return (
    <div  className={`image-container ${className}`}>
      <img src={hamster} alt="Hamster" className='image' /> 
    </div>
  );
}

Animal5.propTypes = {
  className: PropTypes.string
};
