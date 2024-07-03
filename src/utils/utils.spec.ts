import { format, toggleTheme } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(format('Joseph', undefined, undefined)).toEqual('Joseph');
  });

  it('formats first and last names', () => {
    expect(format('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
  });

  it('formats first, middle and last names', () => {
    expect(format('Joseph', 'Quincy', 'Publique')).toEqual('Joseph Quincy Publique');
  });
});

describe('toggleTheme', () => {
  it('adds the dark-theme class to the body when called once', () => {
    document.body.classList.remove('dark-theme');
    toggleTheme();
    expect(document.body.classList.contains('dark-theme')).toBe(true);
  });

  it('removes the dark-theme class from the body when called twice', () => {
    document.body.classList.remove('dark-theme');
    toggleTheme();
    toggleTheme();
    expect(document.body.classList.contains('dark-theme')).toBe(false);
  });
});
