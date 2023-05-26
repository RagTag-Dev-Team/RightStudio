'use client'
import useLayout from '@/@layouts/hooks/useLayout'

const SwitchLayout = () => {
  const { switchLayout, layout } = useLayout()

  // Function to handle the layout change
  const handleLayout = (layout: 'vertical' | 'horizontal') => {
    // Set the layout in the context
    // This will trigger a re-render of the layout

    switchLayout(layout)
  }

  return (
    <div>
      {/* Radio Buttons To Select Vertical Menu Layout or Horizontal Menu Layout */}
      <form>
        <input
          type='radio'
          id='vertical'
          name='layout'
          value='vertical'
          checked={layout === 'vertical'}
          onChange={() => handleLayout('vertical')}
        />
        <label htmlFor='vertical'>Vertical Menu Layout</label>
        <br />
        <input
          type='radio'
          id='horizontal'
          name='layout'
          value='horizontal'
          checked={layout === 'horizontal'}
          onChange={() => handleLayout('horizontal')}
        />
        <label htmlFor='horizontal'>Horizontal Menu Layout</label>
      </form>
    </div>
  )
}

export default SwitchLayout
