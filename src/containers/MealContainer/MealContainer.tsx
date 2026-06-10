/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
import { HTMLAttributes } from 'preact/compat';
import { Container } from '@adobe-commerce/elsie/lib';
import { MealDropin } from '@/meal-dropin/components/MealDropin';
export interface MealContainerProps extends HTMLAttributes<HTMLDivElement> {}
    
export const MealContainer: Container<MealContainerProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      <MealDropin />
    </div>
  );
};
