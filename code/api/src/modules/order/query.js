// Imports
import { GraphQLList } from 'graphql'

// App Imports
import { OrderType } from './types'
import { getByUser } from './resolvers'

// Orders by user
export const ordersByUser = {
  type: new GraphQLList(OrderType),
  resolve: getByUser
}
