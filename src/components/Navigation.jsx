import { Link } from "react-router-dom"
import { Animal1 } from './Animal1';
import { Animal2 } from './Animal2';
import { Animal3 } from './Animal3';
import { Animal4 } from './Animal4';
import { Animal5 } from './Animal5';
import { Animal6 } from './Animal6';


export const Navigation = () => {
  return (
    <div>
        <Link to="/zorro">
        <figure>
            <Animal1 />
            <figcaption>Zorro Salvaje</figcaption>
        </figure>
        </Link>
        

        <Link to="/leopardo">
            <figure>
                <Animal2 />
                <figcaption>Leopardo Salvaje</figcaption>
            </figure>
        </Link>

        <Link to="/mapache">
            <figure>
                <Animal3 />
                <figcaption>Mapache Salvaje</figcaption>
            </figure>
        </Link>

        <Link to="/gato">
            <figure>
                <Animal4 />
                <figcaption>Gato Mascota</figcaption>
            </figure>
        </Link>

        <Link to="/hamster">
            <figure>
                <Animal5 />
                 <figcaption>Hamster</figcaption>
            </figure>

            <Link to="/colibri">
            <figure>
                <Animal6 />
                <figcaption>Colibri</figcaption>
            </figure>
 </Link>
 </Link>

        

    </div>
  )
}
