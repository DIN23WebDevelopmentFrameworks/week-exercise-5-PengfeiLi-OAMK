
import React from 'react';
import { IRecipe } from './Types';
import styles from './Recipe.module.css';

interface IRecipeProps {
    recipeData: IRecipe;
}
export default function Recipe({ recipeData }: IRecipeProps) {
	return (
		<div className={styles.recipeContainer}>
		  <h3 className={styles.recipeTitle}>{recipeData.name}</h3>
		  <h4 className={styles.sectionHeader}>Ingredients</h4>
		  <ul className={styles.ingredientsList}>
			{recipeData.ingredients.map((ingredient, index) => (
			  <li key={index}>{ingredient}</li>
			))}
		  </ul>
		  <h4 className={styles.sectionHeader}>Instructions</h4>
		  <ol className={styles.instructionsList}>
			{recipeData.instructions.map((instruction, index) => (
			  <li key={index}>{instruction}</li>
			))}
		  </ol>
		</div>
	);
};

