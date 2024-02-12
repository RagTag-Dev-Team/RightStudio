// React Imports
import React from 'react'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

const AvatarsVariants = () => {
  return (
    <div className="flex gap-4">
      <CustomAvatar color="primary" variant="square">
        <i className="tabler-bell" />
      </CustomAvatar>
      <CustomAvatar color="success" variant="rounded">
        <i className="tabler-device-floppy" />
      </CustomAvatar>
      <CustomAvatar skin="light" color="primary" variant="square">
        <i className="tabler-bell" />
      </CustomAvatar>
      <CustomAvatar skin="light" color="success" variant="rounded">
        <i className="tabler-device-floppy" />
      </CustomAvatar>
    </div>
  );
}

export default AvatarsVariants
