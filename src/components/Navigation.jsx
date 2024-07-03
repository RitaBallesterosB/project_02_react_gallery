import { Link } from "react-router-dom"
import { Animal1 } from './Animal1';
import { Animal2 } from './Animal2';
import { Animal3 } from './Animal3';
import { Animal4 } from './Animal4';
import { Animal5 } from './Animal5';
import { Animal6 } from './Animal6';


export const Navigation = () => {
  return (
    <div className="mt-1 father">
        <Link to="/zorro " className="links">
        <figure className ="image-size">
            <Animal1 />
            <figcaption >Zorro Salvaje</figcaption>
        </figure>
        </Link>
        

        <Link to="/leopardo"  className="links" >
            <figure className ="image-size">
                <Animal2 />
                <figcaption >Leopardo Salvaje</figcaption>
            </figure>
        </Link>

        <Link to="/mapache "  className="links">
            <figure className ="image-size">
                <Animal3 />
                <figcaption >Mapache Salvaje</figcaption>
            </figure>
        </Link>

        <Link to="/gato "  className="links">
            <figure className ="image-size">
                <Animal4 />
                <figcaption>Gato Mascota</figcaption>
            </figure>
        </Link>

        <Link to="/hamster"  className = "links">
            <figure className ="image-size" >
                <Animal5 />
                 <figcaption >Hamster</figcaption>
            </figure>
        </Link>

            <Link to="/colibri" className = "links">
                <figure  className ="image-size">
                    <Animal6 />
                <figcaption >Colibri</figcaption>
                </figure>
           </Link>
    
    </div>
  )
}
