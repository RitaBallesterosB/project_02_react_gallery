// Animal6.jsx
import colibri from '../assets/img/colibri_06.jpg';
import PropTypes from 'prop-types';

export const Animal6 = ( {className} ) => {
  return (
    <div  className={`image-container ${className}`}>
      <img src={colibri} alt="Colibri" className='image' /> 
    </div>
  );
}

Animal6.propTypes = {
  className: PropTypes.string
};
