// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// TODO: import and productDeliveriesType in crate type 
// import GraphQLList from graphql 
// define CrateOrdersType
// add crate and productDeliveries
// write resolve for crate; type: CrateType, resolve: filter so parent.crateId === crates.id
// productDeliveries should be a list 
// type: new GraphQLList(ProductDeliveriesType)

// Crate type
const CrateType = new GraphQLObjectType({
  name: 'crate',
  description: 'Crate Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default CrateType
