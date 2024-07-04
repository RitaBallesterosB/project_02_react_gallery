// Animal3.jsx
import mapache from '../assets/img/mapache_03.jpg';
import PropTypes from 'prop-types';

export const Animal3 = ( {className} ) => {
  return (
    <div  className={`image-container ${className}`}>
      <img src={mapache} alt="Mapache" className='image' /> 
    </div>
  );
}

Animal3.propTypes = {
  className: PropTypes.string
};
