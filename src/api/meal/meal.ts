/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/

const MEALDB_API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php';

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string | null;
  strCategory: string;
  strArea: string;
  strCountry?: string;
  strInstructions?: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube?: string;
  strSource?: string;
}

export interface MealSearchResponse {
  meals: Meal[] | null;
}

const buildSearchUrl = (query: string) => {
  const trimmed = query.trim();

  if (!trimmed) {
    return `${MEALDB_API_URL}?f=a`;
  }

  if (trimmed.length === 1) {
    return `${MEALDB_API_URL}?f=${encodeURIComponent(trimmed)}`;
  }

  return `${MEALDB_API_URL}?s=${encodeURIComponent(trimmed)}`;
};

export const searchMeals = async (query = 'a'): Promise<MealSearchResponse> => {
  const response = await fetch(buildSearchUrl(query));

  if (!response.ok) {
    throw new Error(`Meal API request failed: ${response.status}`);
  }

  return response.json() as Promise<MealSearchResponse>;
};
