// Animal2.js
import leopardo from '../assets/img/leopardo_02.jpg';
import PropTypes from 'prop-types';

export const Animal2 = ( {className} ) => {
  return (
    <div  className={`image-container ${className}`}>
      <img src={leopardo} alt="animal Leopardo" className='image' /> 
    </div>
  );
}

Animal2.propTypes = {
  className: PropTypes.string
};
