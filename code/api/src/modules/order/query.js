// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import  OrderType  from './types'
import { getByUser, getAll } from './resolvers'

// Orders All
export const orders = {
  type: new GraphQLList(OrderType),
  resolve: getAll
}

// Orders by user
export const ordersByUser = {
  type: new GraphQLList(OrderType),
  resolve: getByUser
}
