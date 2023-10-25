// Third-party Imports
import styled from '@emotion/styled'
import { KBarAnimator } from 'kbar'

const StyledKBarAnimator = styled(KBarAnimator)`
  max-inline-size: 600px;
  min-block-size: 580px;
  max-block-size: 580px;
  background: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);

  &.smallScreen {
    min-block-size: 100dvh;
    max-block-size: 100dvh;
    border-radius: 0;
  }

  & > * {
    display: flex;
    flex-direction: column;
    block-size: 100%;
  }
`

export default StyledKBarAnimator
