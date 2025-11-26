import React from 'react';

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  tags: string[];
  prepTime: string;
}

export default function RecipeCard({ title, description, image, slug, tags, prepTime }: RecipeCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <a href={`/recetas/${slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-brand-black mb-2 group-hover:text-brand-yellow transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag) => (
                <a
                  key={tag}
                  href={`/recetas/tags/${tag}`}
                  className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  {tag}
                </a>
              ))}
            </div>
            <span className="text-sm text-gray-500 font-medium">⏱️ {prepTime}</span>
          </div>
        </div>
      </a>
    </div>
  );
}
