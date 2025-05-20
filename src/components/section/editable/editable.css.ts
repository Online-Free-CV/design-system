import { style } from '@vanilla-extract/css';

export const section = style({
  padding: '1.5rem',
  border: '1px solid #ccc',
  borderRadius: '12px',
  marginBottom: '1.5rem',
});

export const sectionHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
});

export const sectionTitle = style({
  fontSize: '1.25rem',
  fontWeight: 'bold',
});

export const addButton = style({
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '0.4rem 0.75rem',
  borderRadius: '6px',
  cursor: 'pointer',
});

export const itemBox = style({
  border: '1px solid #e1e1e1',
  padding: '1rem',
  borderRadius: '8px',
  marginBottom: '1.5rem',
});

export const fieldLabel = style({
  display: 'block',
  marginBottom: '0.25rem',
  fontWeight: 500,
});

export const input = style({
  width: '100%',
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  marginBottom: '1rem',
  boxSizing: 'border-box', 
});

export const smallInput = style([
  input,
  {
    width: '180px',
  },
]);

export const textarea = style([
  input,
  {
    height: '80px',
    resize: 'vertical',
  },
]);

export const saveButton = style({
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'background-color 0.2s ease-in-out',
    selectors: {
      '&:hover': {
        backgroundColor: '#218838',
      },
    },
  });
  
  export const editButton = style({
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'background-color 0.2s ease-in-out',
    selectors: {
      '&:hover': {
        backgroundColor: '#0069d9',
      },
    },
  });