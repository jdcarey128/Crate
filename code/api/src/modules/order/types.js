// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql' // can also use GraphQLId

import { UserType } from '../user/types'
import CrateType from  '../crate/types'
import { ProductType } from  '../product/types'
import { ProductDeliveryType } from '../productDelivery/types'

// Order type
const OrderType = new GraphQLObjectType({
  name: 'order',
  description: 'Order type',

  fields: () => ({
    id: {type: GraphQLInt },
    user: { type: UserType },
    crate: { type: CrateType },
    productDeliveries: { type: new GraphQLList(ProductDeliveryType) },
    products: { type: new GraphQLList(ProductType) },
    deliveryDate: { type: GraphQLString },
    deliveryStatus: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default OrderType 
