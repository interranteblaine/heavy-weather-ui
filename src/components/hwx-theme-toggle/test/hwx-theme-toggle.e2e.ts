import { newE2EPage } from '@stencil/core/testing';

describe('hwx-theme-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hwx-theme-toggle></hwx-theme-toggle>');

    const element = await page.find('hwx-theme-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
