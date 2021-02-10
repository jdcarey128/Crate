// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'

// App Imports
import { ProductType } from '../product/types'

// Product Delivery Type
const ProductDeliveryType = new GraphQLObjectType({
  name: 'product delivery',
  description: 'Product Delivery Type',

  fields: () => ({
    id: { type: GraphQLInt },
    product: { type: ProductType },
    returned: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export { ProductDeliveryType }
