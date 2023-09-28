// React Imports
import React, { useState } from 'react'

// MUI Imports
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

type ChipData = {
  key: number
  label: string
  avatar?: string
  avatarAlt?: string
}

const data: ChipData[] = [
  { key: 0, avatar: '/assets/avatars/avatars/1.png', avatarAlt: 'User Avatar', label: 'Norman Santiago' },
  { key: 1, avatar: '/assets/avatars/avatars/2.png', avatarAlt: 'User Avatar', label: 'Cecelia Tucker' },
  { key: 2, label: 'Max Burns' },
  { key: 3, avatar: '/assets/avatars/avatars/4.png', avatarAlt: 'User Avatar', label: 'Ellen Nguyen' },
  { key: 4, avatar: '/assets/avatars/avatars/5.png', avatarAlt: 'User Avatar', label: 'Edward Francis' }
];

const ChipsArray = () => {
  // States
  const [chipData, setChipData] = useState<ChipData[]>(data)

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key))
  }

  return (
    <div className='flex gap-4 flex-wrap'>
      {chipData.map(data => (
        <Chip
          key={data.key}
          label={data.label}
          avatar={<Avatar src={data.avatar} alt={data.avatarAlt} />}
          onDelete={data.key === 2 ? undefined : handleDelete(data)}
        />
      ))}
    </div>
  )
}

export default ChipsArray
