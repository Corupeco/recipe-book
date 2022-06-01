import './Header.css';
import HeaderButton from '../HeaderButton/HeaderButton';


export default function Header({ setState }) {
  function goToHome() {
    setState(prevState => {
      return {...prevState,
        home: true,
        recipes: false,
        about: false,
      }
    });
  }

  function goToRecipes() {
    setState(prevState => {
      return {...prevState,
        home: false,
        recipes: true,
        about: false,
      }
    });
  }

  function goToAbout() {
    setState(prevState => {
      return {...prevState,
        home: false,
        recipes: false,
        about: true,
      }
    });
  }

  return (
    <div className="Header">
      <h1 className="home-logo">RecipeBook</h1>
      <ul className="header-buttons">
        <HeaderButton onClick={goToHome}>Home</HeaderButton>
        <HeaderButton onClick={goToRecipes}>Recipes</HeaderButton>
        <HeaderButton onClick={goToAbout}>About</HeaderButton>
      </ul>
    </div>
  );
}