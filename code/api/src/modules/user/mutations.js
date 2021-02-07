// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports TODO: will need to import update method from resolvers
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}
// --------------------------------------
// TODO: Add a userUpdate method
// Update
// export const userUpdate = {
//   type: UserType,
//   args: {
//     name: {
//       name: 'name',
//       type: GraphQLString
//     },
//
//     email: {
//       name: 'email',
//       type: GraphQLString
//     },
//
//
//     description: {
//       name: 'description',
//       type: GraphQLString
//     },
//
//     image: {
//       name: 'image',
//       type: GraphQLString
//     },
//
//     shippingAddress {
//       name: 'shippingAddress',
//       type: GraphQLString
//     }
//   },
//   resolve: update
// }
// --------------------------------------

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
