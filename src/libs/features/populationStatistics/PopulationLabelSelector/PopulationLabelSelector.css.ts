import { style } from '@vanilla-extract/css';

import { theme } from '@/libs/styles/theme.css';

export const populationLabelSelect = style({
  display: 'flex',
  width: '100%',
  gap: theme.spaces[24],
  flexWrap: 'wrap',
  marginBottom: theme.spaces[40],
});
