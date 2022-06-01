import './Recipes.css';
import RecipeList from '../RecipeList/RecipeList';

export default function Recipes({ recipes }) {
  return (
    <div className="Recipes">
      <h1>Recipes</h1>
      <RecipeList recipes={recipes} />
    </div>
  );
}