import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter'
import { ExpressAdapter } from '@bull-board/express'

import { imageQueue } from '@/app/server/queues/imageQueue'

const serverAdapter = new ExpressAdapter()

serverAdapter.setBasePath('/api/admin/queues')

createBullBoard({
  queues: [new BullAdapter(imageQueue)],
  serverAdapter
})

export const GET = serverAdapter.getRouter()
