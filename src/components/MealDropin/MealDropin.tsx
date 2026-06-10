/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { FunctionComponent } from 'preact';
import { HTMLAttributes } from 'preact/compat';
import { useEffect, useState } from 'preact/hooks';
import { classes } from '@adobe-commerce/elsie/lib';
import { Input } from '@adobe-commerce/elsie/components/Input';
import './MealDropin.css';
import { Meal, searchMeals } from '@/meal-dropin/api/meal';

export interface MealDropinProps extends HTMLAttributes<HTMLDivElement> {}

export const MealDropin: FunctionComponent<MealDropinProps> = ({
  className,
  children,
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState('a');
  const [debouncedQuery, setDebouncedQuery] = useState('a');
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    let cancelled = false;

    const loadMeals = async () => {
      setLoading(true);
      setError(null);

      try {
        const { meals: results } = await searchMeals(debouncedQuery);

        if (!cancelled) {
          setMeals(results ?? []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load meals');
          setMeals([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadMeals();

    return () => {
      cancelled = true;
    };
  }, [debouncedQuery]);

  return (
    <div {...props} className={classes(['meal-dropin-meals-app', className])}>
      {children}

      <header className="meal-dropin-meals-app__header">
        <div>
          <h2 className="meal-dropin-meals-app__title">Meal Explorer</h2>
          <p className="meal-dropin-meals-app__subtitle">
            Search by meal name or a single letter to browse TheMealDB.
          </p>
        </div>

        <div className="meal-dropin-meals-app__search">
          <Input
            id="meal-dropin-meal-search"
            name="meal-search"
            floatingLabel="Search meals"
            value={searchQuery}
            onInput={(event) => setSearchQuery((event.target as HTMLInputElement).value)}
            size="large"
          />
        </div>
      </header>

      <section className="meal-dropin-meals-app__results" aria-live="polite">
        <div className="meal-dropin-meals-app__results-header">
          <h3 className="meal-dropin-meals-app__results-title">Results</h3>
          {!loading && !error && (
            <span className="meal-dropin-meals-app__count">
              {meals.length} meal{meals.length === 1 ? '' : 's'}
            </span>
          )}
        </div>

        {loading && (
          <div className="meal-dropin-meals-app__status meal-dropin-meals-app__status--loading">
            Loading meals...
          </div>
        )}

        {error && (
          <div className="meal-dropin-meals-app__status meal-dropin-meals-app__status--error">
            {error}
          </div>
        )}

        {!loading && !error && meals.length === 0 && (
          <div className="meal-dropin-meals-app__status">
            No meals found for &quot;{debouncedQuery}&quot;.
          </div>
        )}

        {!loading && !error && meals.length > 0 && (
          <ul className="meal-dropin-meals-app__grid">
            {meals.map((item) => (
              <li key={item.idMeal} className="meal-dropin-meals-app__card">
                <div className="meal-dropin-meals-app__image-wrap">
                  <img
                    className="meal-dropin-meals-app__image"
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    loading="lazy"
                  />
                </div>
                <div className="meal-dropin-meals-app__card-body">
                  <h4 className="meal-dropin-meals-app__name">{item.strMeal}</h4>
                  <div className="meal-dropin-meals-app__tags">
                    <span className="meal-dropin-meals-app__tag">{item.strCategory}</span>
                    <span className="meal-dropin-meals-app__tag">{item.strArea}</span>
                    {item.strCountry && (
                      <span className="meal-dropin-meals-app__tag">{item.strCountry}</span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
