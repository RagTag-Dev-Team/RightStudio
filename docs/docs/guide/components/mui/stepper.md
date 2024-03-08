# Stepper

## Overview

To understand the `Stepper` component better, please refer to the [MUI Stepper Documentation](https://mui.com/material-ui/react-stepper/).

We've upgraded the basic Stepper component to improve both its aesthetics and features. Below is a quick summary of the improvements made.

:::tip Note
This guide focuses exclusively on the new properties we've added. Feel free to use any of the standard props provided by MUI's Stepper component in addition.
:::

## StepIcon

The `StepperCustomDot` component, situated at `src/components/stepper-dot/index.tsx`, is designed to customize the visual representation of each step within the `Stepper`. It adjusts icons based on the step's state.

To use the `StepperCustomDot` within a stepper, you can incorporate it in the `StepIconComponent` prop in the `StepLabel`  component. Here's a basic example of using `StepperCustomDot` within a `Stepper` component:

```tsx
import StepperCustomDot from '@components/stepper-dot';

<Stepper activeStep={activeStep} orientation='vertical'>
  {steps.map((step, index) => (
    <Step key={index}>
      <StepLabel StepIconComponent={StepperCustomDot}>
        {/* Step content here */}
      </StepLabel>
    </Step>
  ))}
</Stepper>

```

### Component States

**Error State**: Displays an icon indicating an error in the step.

**Completed State**: Shows a filled circle icon, marking the step as completed.

**Active State**: Highlights the dot, indicating it is the current active step.

## StepperWrapper

The `StepperWrapper` component, situated at `src/@core/styles/stepper.ts`, is designed to enhance the appearance of MUI's `Stepper` component.

### Styling the Stepper

We leverage MUI's `styled` function to create the `StepperWrapper`, injecting theme-based styles for responsive design and visual enhancements. This approach ensures that the stepper adheres to the application's design language and behaves responsively across devices.

`StepperWrapper` encapsulates styles targeting different parts of the stepper, including horizontal and vertical alignments, step icons, labels, numbers, titles, subtitles, and connector lines. It makes extensive use of theme breakpoints for responsive design, typography for consistent font styling, and color variables for state-based styling.

#### Example Code

```tsx
// MUI imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { BoxProps } from '@mui/material/Box'

const StepperWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  // Responsive and state-based style definitions...
}))

export default StepperWrapper
```

This snippet creates a `StepperWrapper` component applying predefined styles to enhance the default `Stepper` component's appearance and functionality.

### Implementing the Styled Stepper

To utilize the `StepperWrapper`, simply wrap the `Stepper` component within this wrapper.

#### Example Usage

```tsx
import StepperWrapper from '@core/styles/stepper.ts'
import Stepper from '@mui/material/Stepper'

const MyComponent = () => {
  // States and functions...
  
  return (
    <div>
      <StepperWrapper>
          <Stepper activeStep={activeStep}>
            {/* Step components */}
          </Stepper>
        </StepperWrapper>
      {/* Additional content */}
    </Card>
  )
}

export default MyComponent
```

By incorporating the `StepperWrapper`, users can easily enhance their stepper component's responsiveness and visual appeal, aligning it with their application's overall design theme.