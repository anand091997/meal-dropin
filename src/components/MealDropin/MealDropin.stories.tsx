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
import { MealDropin as component, MealDropinProps } from '@/meal-dropin/components/MealDropin';

/**
 * Use MealDropins to [replace this text with components purpose].
 */
const meta: Meta<MealDropinProps> = {
  title: 'Components/MealDropin',
  component,
  argTypes: {
    children: {
      description: 'Add text to the MealDropin.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'MealDropin defaultValue for children.' },
      },
    },
    onClick: {
      description: 'Add a click handler.',
      table: {
        type: { summary: 'function' },
      },
      action: 'onClick',
    },
  },
};

export default meta;

type Story = StoryObj<MealDropinProps>;

/**
 * <MealDropin>👋 Hello from your new MealDropin story!</MealDropin>
 */
export const MealDropin: Story = {
  args: {
    children: "👋 Hello from your new MealDropin story!",
  },
};
