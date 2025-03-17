// Card.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({ searchTerm }: { searchTerm: string }) => {
    const [recipes, setRecipes] = useState<any[]>([]);

    const fetchRecipes = async () => {
        if (!searchTerm) return;

        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}&apiKey=8862d212e8ea42e09854796faa3eb01d`);
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, [searchTerm]);

    return (
        <div>
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <img src={recipe.image} alt='recipe image'/>
                    </div>
                ))
            ) : (
                <p>No recipes found. Try searching with different ingredients.</p>
            )}
        </div>
    );
};

export default Card;
