// Animal4.js

import gato from '../assets/img/gato_04.jpg';
import PropTypes from 'prop-types';

export const Animal4 = ( {className} ) => {
  return (
    <div  className={`image-container ${className}`}>
      <img src={gato} alt="Mascota Gato" className='image' /> 
    </div>
  );
}

Animal4.propTypes = {
  className: PropTypes.string
};
