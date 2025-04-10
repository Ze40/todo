import { cva } from '../../../styled-system/css';

export const card = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    transitionDuration: '0.2s',
    cursor: 'pointer',
    _hover: {
      background: 'foggy',
      transitionDuration: '0.2s',
    },
  },

  variants: {
    visual: {
      section: {
        borderRadius: '10px',
        justifyContent: 'space-between',
        width: '100%',
      },
    },
  },
});
