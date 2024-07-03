// Animal1.js
import zorro from '../assets/img/zorro_01.jpg';
import PropTypes from 'prop-types';

export const Animal1 = ( {className} ) => {
  return (
    <div  className={`image-container ${className}`}>
      <img src={zorro} alt="animal zorro" className='image' /> 
    </div>
  );
}

Animal1.propTypes = {
  clasName: PropTypes.string
};