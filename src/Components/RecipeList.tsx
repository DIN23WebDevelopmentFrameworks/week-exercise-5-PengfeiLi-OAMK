import React from 'react';
import Recipe from './Recipe';
import { IRecipe } from './Types';
import styles from './RecipeList.module.css';
import { useParams } from 'react-router-dom';
 
interface IRecipeListProps {
	recipes: IRecipe[];
	onGoBack: () => void;
}
export default function RecipeList({ recipes,onGoBack }: IRecipeListProps) {
	const { tagName } = useParams<{ tagName: string }>();

	return (
		<div>

	  <button onClick={onGoBack} className={styles.backButton}>Back</button>
	  <h2 className={styles.header}>Recipes for {tagName} </h2>
	  <div>
		{recipes.map((recipe)=>(
			<Recipe key={recipe.id} recipeData={recipe}/>))}
	  </div>
			</div>

	)
};
//

