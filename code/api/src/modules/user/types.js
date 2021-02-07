// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'
// import { OrderType } from '../order/types'

// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

  // TODO: Add description, shippingAddress and image types 

  // Run migration for orders and product deliveries
  // add UserOrdersType and export at the bottom 
  // import GraphQLList in imports above 
  // import OrdersType above 
  // OrdersType should be a list defined in UserORdersType
  // resolve for OrdersType should grab all orders where parent.id === userId
  // move resolve to user resolvers once it is working 
  
// const UserOrdersType = new GraphQLObjectType({
//   name: 'userOrders',

//   fields: () => ({
//     user: { type: UserType },
//     orders: { 
//       type: new GraphQLList(OrderType)
//       resolve(parent, args){
//         return (orders where { parent.id })
//       }
//     }
//   })
// })


// User Login type
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

// User Gender type
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

export { UserType, UserLoginType, UserGenderType }
