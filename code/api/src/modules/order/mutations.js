// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import OrderType from './types'
import { update } from './resolvers'

export const orderUpdate = {
  type: OrderType,
  args: {
    id: {
      name: 'id', 
      type: GraphQLInt
    },

    deliveryDate: {
      name: 'deliveryDate',
      type: GraphQLString
    }
  },
  resolve: update
}
