---
hide_table_of_contents: true
---

# AppKeenSlider

This guide explains how to use the `keen-slider` library with Material-UI styling in a Next.js application. For detailed features of Keen-Slider, visit the [official documentation](https://keen-slider.io/).

## Overview

Keen-Slider is a touch-friendly and fully customizable JavaScript slider library. We have integrated it with Material-UI to create a seamless and visually appealing slider experience in our Next.js project.

## Styling Keen-Slider with Material-UI

We employ Material-UI's styling approach to customize Keen-Slider's appearance. The `AppKeenSlider` component is a styled `div` that encapsulates Keen-Slider and applies various styles for enhanced usability.

### Styled Component: AppKeenSlider

`AppKeenSlider` is a styled div designed specifically for Keen-Slider. It contains styles for the slider, slides, navigation controls, and other elements, ensuring they align with Material-UI's theme.

#### Example Code

```tsx
// MUI Imports
import { styled } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

// Import Keen-Slider CSS
import 'keen-slider/keen-slider.min.css';

// Styled Components
const AppKeenSlider = styled('div')(({ theme }: { theme: Theme }) => ({
  // Style rules for Keen-Slider...
}));

export default AppKeenSlider;
```

This code snippet sets up `AppKeenSlider`, applying custom styles to Keen-Slider for a cohesive design in line with Material-UI.

## Implementing the Styled Keen-Slider

To use Keen-Slider with our custom styles, wrap the slider or the entire page (if multiple sliders are used) in the `AppKeenSlider` component.

Example: Basic Keen-Slider Implementation

```tsx
import AppKeenSlider from '@libs/styles/AppKeenSlider';

const SwiperBasic = () => {
  // Keen-Slider hook for slider functionality
  const [ref] = useKeenSlider<HTMLDivElement>();

  return (
    <AppKeenSlider>
      <div ref={ref} className='keen-slider'>
        {/* Slider slides */}
        <div className='keen-slider__slide'><img src='img1' alt='swiper 1' /></div>
        <div className='keen-slider__slide'><img src='img2' alt='swiper 2' /></div>
        <div className='keen-slider__slide'><img src='img3' alt='swiper 3' /></div>
        <div className='keen-slider__slide'><img src='img4' alt='swiper 4' /></div>
        <div className='keen-slider__slide'><img src='img5' alt='swiper 5' /></div>
      </div>
    </AppKeenSlider>
  )
}

export default SwiperBasic;
```

In this example, `SwiperBasic` is a functional component that utilizes `AppKeenSlider` to display a series of images in a slider format.

By integrating AppKeenSlider into your Next.js application, you can create beautifully styled sliders that are consistent with your Material-UI themed UI.
