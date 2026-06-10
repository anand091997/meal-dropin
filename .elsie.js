/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/

module.exports = {
  name: 'meal-dropin',
  api: {
    root: './src/api',
    importAliasRoot: '@/meal-dropin/api',
  },
  components: [
    {
      id: 'Components',
      root: './src/components',
      importAliasRoot: '@/meal-dropin/components',
      cssPrefix: 'meal-dropin',
      default: true,
    },
  ],
  containers: {
    root: './src/containers',
    importAliasRoot: '@/meal-dropin/containers',
  },
  schema: {
    endpoint: process.env.ENDPOINT,
    headers: {}
  }
};
