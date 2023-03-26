import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

describe('Image component', () => {

  test('renders an image with the correct src, alt, and className', () => {
    const src = '/src/assets/PNG/cover.png';
    const alt = 'alt name';
    const className = 'className';

    const { getByAltText } = render(<Image src={src} alt={alt} className={className} />);

    expect(getByAltText(alt)).toHaveAttribute('src', src);
    expect(getByAltText(alt)).toHaveClass(className);
  });
});
