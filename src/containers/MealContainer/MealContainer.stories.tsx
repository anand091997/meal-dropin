/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/
  
// https://storybook.js.org/docs/7.0/preact/writing-stories/introduction
import type { Meta, StoryObj } from '@storybook/preact';
import { MealContainer as component, MealContainerProps } from '@/meal-dropin/containers/MealContainer';

const meta: Meta<MealContainerProps> = {
  title: 'Containers/MealContainer',
  component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // centered | fullscreen
  },
};

export default meta;

type Story = StoryObj<MealContainerProps>;

/**
 * ```ts
 * import { MealContainer } from '@/meal-dropin/containers/MealContainer';
 * ```
 */

export const MealContainer: Story = {
  args: {
    children: "👋 Howdy, I'm Howdy!",
  },
};
