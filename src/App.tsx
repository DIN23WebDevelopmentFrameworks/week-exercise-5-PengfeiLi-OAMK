import React from 'react';
import { useEffect, useState } from 'react';
import RecipeTagList from './Components/RecipeTagList';
import RecipeList from './Components/RecipeList';
import { IRecipe } from './Components/Types';



const App = () => {
 
  const [tagList, setTagList] = useState<string[]>([]);
  const [recipeList, setRecipeList] = useState<IRecipe[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  //const navigate = useNavigate();
  useEffect(getMeTheTagList, []);
  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((response) => response.json())
        .then((data) => setRecipeList(data.recipes)); // Assuming `data.recipes` holds the recipes array
    } }, [selectedTag]);
  
  function onSelectTag(tagName: string) {
    setSelectedTag(tagName); // Set the selected tag
    //navigate(`/recipes/${tagName}`); 
  
  }
  function getMeTheTagList() {
    fetch('https://dummyjson.com/recipes/tags')
    .then(response => response.json())
    .then(data => setTagList(data));
  }
  const handleGoBack = () => {
    setSelectedTag(null);  // Reset the selected tag to null
  };

  return (
    <div>
 <h1>ACME Recipe O'Master</h1>
{selectedTag ? (
        // Render the RecipeList when a tag is selected
        <RecipeList recipes={recipeList} onGoBack={handleGoBack} />
      ) : (
        // Render the RecipeTagList when no tag is selected
        <RecipeTagList tagList={tagList} onSelectTag={onSelectTag} />
      )}
       
    </div>
  );


};


export default App;
