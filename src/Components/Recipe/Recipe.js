import './Recipe.css';
import { recipe } from '../App/App';

export default function Recipe(props) {
  return (
    <div className="Recipe">

      <img src={recipe.img} alt="food" />

      <div className="info">
        <h2 className="recipe-name">{recipe.name}</h2>
        <p className="recipe-type">{recipe.type}</p>
        <p className="recipe-source">{recipe.source}</p>
      </div>

    </div>
  )
}