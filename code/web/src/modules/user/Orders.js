//TODO: for order history/next delivery date available update by user
/*

This component will render the order history page with:
1. next delivery expected with:
  - data about products in the crate (we think) (api GET)
  - expected delivery date (api GET)
  - field/button to update the users available date for crate delivery (api POST adn then GET)
2. All previous products with:
  - data about each product (api GET)
  - boolean for whether that specific item was returned by the user (api GET/POST/GET)
   **We may not make a POST/GET for this. as we may not want to add the functionality for this MVP

We decided to do the above as cards, but the first card will be under a heading of:
'Next Upcoming Crate Delivery'
with a boolean: true for date in the future.
All other cards will be under heading of:
'Delivered Crates'
with a boolean: false for date in the future.

BE Notes:
I think BE said they will need to make new files for the api calls for this
I did not make annotations for BE for this part, as it was getting a little over my head

*/

/* TODO:
New File:
src/modules/user/ProductHistory.js
Class Component

componentDidMount to call GET all users crates past and future
And .then setState with that information from the response

render: 
  Next Delivery and Delivered Crates
    I think we should be able to pull from:
    src/modules/admin/crate/List.js for the logic of displaying this. 
    It will obviously need modifications for specifics of what we want displayed

**We may possibly make a child component of Orders called CrateCards.js for displaying the
Crates, but our first inclination is to stay consistent with how things are already done 
int this repo, ie crate/List.js (with the logic in the render ...)
    
NOTES:
 - maybe could add an api call on Login to get crates/product history - We decided NO

 - To get all the past and future product ordering data is probably 1 call!
*/
