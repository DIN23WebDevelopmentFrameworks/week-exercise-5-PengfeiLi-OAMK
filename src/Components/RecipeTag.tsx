import React from 'react';
import classes from './RecipeTag.module.css';

interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}
export default function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps) {
	return (
		<button onClick={() => onSelectTag(tagName)} className={classes.tagButton}>
		{tagName}
	  </button>)
  }