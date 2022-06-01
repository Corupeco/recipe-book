import './RecipeList.css';
import Recipe from '../Recipe/Recipe';

export default function RecipeList({ recipes }) {
  return (
    <div className="RecipeList">
      {recipes.map(recipe => {
        return (
          <Recipe recipe={recipe} />
        );
      })}
    </div>
  );
}