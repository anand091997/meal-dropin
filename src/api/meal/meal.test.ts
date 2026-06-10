/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { searchMeals } from '@/meal-dropin/api/meal';

describe('meal-dropin/api/meal', () => {
  test('exports searchMeals function', () => {
    expect(typeof searchMeals).toBe('function');
  });
});
