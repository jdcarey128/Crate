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
    code/web/src/modules/user/Profile.js
    code/web/src/modules/user/api/actions.js

  BE:
    code/api/src/modules/user/mutation.js
    code/api/src/modules/user/query.js
    code/api/src/migrations/user.js
    code/api/src/modules/setup/schema/index.js
    code/api/src/modules/setup/schema/queries.js
    code/api/src/modules/setup/schema/mutations.js

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
    code/web/src/modules/user/Profile.js
    code/web/src/modules/user/api/actions.js

  BE:
    code/api/src/modules/user/mutation.js
    code/api/src/modules/user/query.js
    code/api/src/migrations/user.js
    code/api/src/modules/setup/schema/index.js
    code/api/src/modules/setup/schema/queries.js
    code/api/src/modules/setup/schema/mutations.js


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
    code/web/src/modules/user/Profile.js
    code/web/src/modules/user/api/actions.js

  BE:
    code/api/src/modules/user/mutation.js
    code/api/src/modules/user/query.js
    code/api/src/migrations/user.js
    code/api/src/modules/setup/schema/index.js
    code/api/src/modules/setup/schema/queries.js
    code/api/src/modules/setup/schema/mutations.js

## User can edit shipping address
FE:
As a user,
When I am logged in,
I want to be able to edit my shipping address,
So that I have a more complete user profile.

BE:
* create userShippingAddresses table with userId (belongs to users), address (varchar), address2 (varchar), city, state, zip
* update User mutation to edit shipping address

Files:
  FE:
    code/web/src/modules/user/Profile.js
    code/web/src/modules/user/api/actions.js

  BE:
    code/api/src/modules/user/mutation.js
    code/api/src/modules/user/query.js
    code/api/src/migrations/user.js
    code/api/src/modules/setup/schema/index.js
    code/api/src/modules/setup/schema/queries.js
    code/api/src/modules/setup/schema/mutations.js

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
    code/web/src/modules/deliveries/Orders.js
    code/web/src/modules/orders/api/actions.js

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
    code/web/src/modules/deliveries/Orders.js
    code/web/src/modules/deliveries/api/actions.js
