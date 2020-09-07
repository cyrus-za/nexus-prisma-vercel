import app, { settings, use } from 'nexus'
import nextConnect from 'next-connect'
import { prisma } from 'nexus-plugin-prisma'

use(prisma())

settings.change({
  server: {
    cors: {
      origin: '*',
    },
    playground: true,
    path: '/api/graphql',
    graphql: {
      introspection: true,
    },
  },
})

import './schema/Post'
app.assemble()
app.start()

export default nextConnect().use(app.server.handlers.graphql)
