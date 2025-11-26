import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
  slug: string;
  data: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    prepTime: string;
  };
}

interface FeaturedRecipesProps {
  recipes: Recipe[];
}

export default function FeaturedRecipes({ recipes }: FeaturedRecipesProps) {
  const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Shuffle and select 3 random recipes on mount
    const shuffled = [...recipes].sort(() => 0.5 - Math.random());
    setSelectedRecipes(shuffled.slice(0, 3));
  }, [recipes]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-brand-black">
            Ideas para esta semana
          </h2>
          <a
            href="/recetas"
            className="text-brand-black font-semibold hover:text-brand-yellow transition-colors hidden md:block"
          >
            Ver más &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.slug}
              title={recipe.data.title}
              description={recipe.data.description}
              image={recipe.data.image}
              slug={recipe.slug}
              tags={recipe.data.tags}
              prepTime={recipe.data.prepTime}
            />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a
            href="/recetas"
            className="text-brand-black font-semibold hover:text-brand-yellow transition-colors"
          >
            Ver más recetas &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
