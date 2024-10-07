import React from 'react';
import RecipeTag from './RecipeTag';
import styles from './RecipeTagList.module.css';

interface IRecipeTagListProps {
	tagList: string[];
	onSelectTag: (tagName: string) => void;
  }
export default function RecipeTagList({ tagList, onSelectTag }: IRecipeTagListProps) {return (
    <div className={styles.listContainer}>
      <h2>Choose a tag below</h2>
      <ul className={styles.tagList}>
        {tagList.map((tag, index) => (
          <li key={index} className={styles.listItem}>
            <RecipeTag tagName={tag} onSelectTag={onSelectTag} />
          </li>
        ))}
      </ul>
    </div>
  );
};  