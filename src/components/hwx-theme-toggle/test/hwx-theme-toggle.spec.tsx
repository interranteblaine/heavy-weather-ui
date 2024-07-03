import { newSpecPage } from '@stencil/core/testing';
import { HwxThemeToggle } from '../hwx-theme-toggle';

describe('hwx-theme-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HwxThemeToggle],
      html: `<hwx-theme-toggle></hwx-theme-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <hwx-theme-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </hwx-theme-toggle>
    `);
  });
});
