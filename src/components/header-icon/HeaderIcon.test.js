// Import dependencies and the component to be tested
import React from 'react';
import { render } from '@testing-library/react';
import HeaderIcon from './HeaderIcon';

describe('HeaderIcon component', () => {

    
  test('renders an image with the correct src, alt, className, and data-testid', () => {
    
    const src = '/src/assets/PNG/cover.png';
    const alt = 'icon name';
    const className = 'class-name';
    const dataTestid = 'data-testid';

    
    const { getByAltText, getByTestId } = render(
      <HeaderIcon
        src={src}
        alt={alt}
        className={className}
        dataTestid={dataTestid}
      />
    );

    
    expect(getByAltText(alt)).toHaveAttribute('src', src);
    expect(getByAltText(alt)).toHaveClass(className);
    expect(getByTestId(dataTestid)).toBeInTheDocument();
  });
});
