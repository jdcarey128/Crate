Make a list of the specific files of code that will need to be updated in order to add the additional features outlined in your track.

For each file, walk through the code and add a comment above each line/block that describes what that code is doing.

## User can upload own image BE
FE:
As a user,
When I am logged in,
I want to be able to upload my own image,
So that I have a more complete user profile.

BE:
* Migrate userImage to users table
* Create mutation for user type
* API Contract Reference #__

Files:
  FE:
    * code/web/src/modules/user/Profile.js
    * code/web/src/modules/user/api/actions.js

  BE:
    * code/api/src/modules/user/mutation.js
      - add userUpdate method
      - import update from resolvers
    * code/api/src/migrations/user.js
      - Add image column
    * code/api/src/modules/user/model.js
      - add image datatype
      - user has many orders
      - user has many products through orders
    * code/api/src/modules/user/resolvers.js
      - add image detail
      - userUpdate method
    * code/api/src/modules/user/types.js
      - Add image to user type
    * code/api/src/seeders/user.js
      - Seed more users with new data as well
    * code/api/src/seeders/products.js
      - Seed more data, products will need to have a foreign key to orders

=>psql

=>\c crate;

=>ALTER TABLE users
=>ADD COLUMN description VARCHAR;



## User can create/edit personal description
FE:
As a user,
When I am logged in,
I want to be able to set a personal description,
So that I have a more complete user profile.

BE:
* add personal description to Users table
* add GraphQL mutations for add/edit personal description

Files:
  FE:
    * code/web/src/modules/user/Profile.js
    * code/web/src/modules/user/api/actions.js

  BE:
    * code/api/src/modules/user/mutation.js
      - add userUpdate method
      - import update from resolvers
    * code/api/src/migrations/user.js
      - Add description column
    * code/api/src/modules/user/model.js
      - add description datatype
      - user has many orders
      - user has many products through orders
    * code/api/src/modules/user/resolvers.js
      - add description detail
      - userUpdate method
    * code/api/src/modules/user/types.js
      - Add description to user type
    * code/api/src/seeders/user.js
      - Seed more users with new data as well
    * code/api/src/seeders/products.js
      - Seed more data, products will need to have a foreign key to orders

From GraphiQL:


## User can edit email
FE:
As a user,
When I am logged in,
I want to be able to edit my email address,
So that I have a more complete user profile.

BE:
* update GraphQL mutation to include email update on Users table

Files:
  FE:
    * code/web/src/modules/user/Profile.js
    * code/web/src/modules/user/api/actions.js

  BE:
    * code/api/src/modules/user/mutation.js
      - add userUpdate method
      - import update from resolvers
    * code/api/src/modules/user/resolvers.js
      - userUpdate method
    * code/api/src/seeders/user.js
      - Seed more users with new data as well
    * code/api/src/seeders/products.js
      - Seed more data, products will need to have a foreign key to orders

## User can edit shipping address
FE:
As a user,
When I am logged in,
I want to be able to edit my shipping address,
So that I have a more complete user profile.

BE:
* add shippingAddress to Users table
* add GraphQL mutations for add/edit shippingAddress

Files:
  FE:
    * code/web/src/modules/user/Profile.js
    * code/web/src/modules/user/api/actions.js

  BE:
    * code/api/src/modules/user/mutation.js
      - add userUpdate method
      - import update from resolvers
    * code/api/src/migrations/user.js
      - Add shippingAddress column
    * code/api/src/modules/user/model.js
      - add shippingAddress datatype
      - user has many orders
      - user has many products through orders
    * code/api/src/modules/user/resolvers.js
      - add shippingAddress detail
      - userUpdate method
    * code/api/src/modules/user/types.js
      - import GraphQLList
      - Add shippingAddress to user type
      - Add userOrderType method and export
    * code/api/src/seeders/user.js
      - Seed more users with new data as well
    * code/api/src/seeders/products.js
      - Seed more data, products will need to have a foreign key to orders

## User can get product history
FE:
As a user,
When I am logged in,
I want to be able to see a history of products that have been delivered to me and what I have kept,
So that I have a more complete user profile.

BE:
* create crateDeliveries table with deliveryDate (datetime) and deliveryStatus (varchar)
* create productDeliveries table with userId (belongs to user), productId (belongs to product), crateDeliveryId (belongs to crateDelivery), and dateReturned (datetime)
* Create GraphQL query to find delivery dates for products

Files:
  FE:
    * code/web/src/modules/deliveries/Orders.js
    * code/web/src/modules/orders/api/actions.js

  BE:
    * code/api/src/migrations/orders.js
      - Migrate orders table
    * code/api/src/modules/order/model.js
      - order function with relationships
    * code/api/src/setup/models.js
      - add orders to models
    * code/api/src/modules/order/mutations.js
      - import graphqlstring and graphqlint from graphql
      - import orderType from types
      - import create and remove from resolvers
      - add create and remove method
    * code/api/src/modules/order/query.js
      - import graphqlint, graphqlstring, and graphqllist from graphql
      - import orderType from types
      - import getAll and getById from resolvers
      - method get All
      - method get by Id
    * code/api/src/modules/order/resolvers.js
      - import serverConfig, params and model
      - create, get by Id, get All, delete
    * code/api/src/modules/order/types.js
      - import GraphQLObjectType, GraphQLString, GraphQLInt from graphql
      - orderType
      - export orderType
    * code/api/src/setup/schema/queries.js
      - import order query
      - order migration goes here
    * code/api/src/modules/user/types.js
      - import GraphQLList
      - Add userOrderType method and export

      DO THE SAME FOR PRODUCTDELIVERIES

## User can edit delivery date
FE:
As a user,
When I am logged in,
I should also see when my next delivery is coming and
adjust the date for when I am available.

BE:
* create GraphQL mutation to allow users to edit deliveryDate (if deliveryStatus === 'Scheduled')

Files:
  FE:
    * code/web/src/modules/deliveries/Orders.js
    * code/web/src/modules/deliveries/api/actions.js
  BE:
    * code/api/src/modules/order/mutation.js
      - add orderEdit method
      - import Edit from resolvers
    * code/api/src/modules/user/resolvers.js
      - orderEdit method
    * code/api/src/modules/user/types.js
      - import GraphQLList
      - Add orderProductType method and export
