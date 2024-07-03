import { Component, h } from '@stencil/core';
import { toggleTheme } from '../../utils/utils';

@Component({
  tag: 'hwx-theme-toggle',
  styleUrl: 'hwx-theme-toggle.css',
  shadow: true,
})
export class HwxThemeToggle {
  render() {
    return <button onClick={toggleTheme}>Toggle Theme</button>;
  }
}
