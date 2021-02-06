//TODO: for profile updates
/*

This will need to be updated to add:
1. edit profile button (to display Modal)
2. shipping address display
3. image display
4. description


will need to functionality to POST/GET to/from BE:
updated email
shipping address
description
image **This may need to be seperated from other profile state
We found how an image is uploaded by admin for a new product. 
We believe we can use that code for uploading an image for a user!
see TODO in:
 - src/modules/admin/product/CreateOrEdit.js
 - src/modules/admin/common/api/actions.js

BackEnd files associated with editing profile:
 - api/src/modules/user/model.js
 - api/src/modules/user/mutation.js
 - api/src/modules/user/query.js
 - api/src/modules/user/resolvers.js
 - api/src/modules/user/types.js

will need functionality on edit button to display Profile Edit Modal
**OR we can use the functionality of +ADD from the admin/product/CreateOrEdit.js 
to route to an edit for profile.

New Files/Components needed for this:
EditProfile (modal) probably a Class Component to update State
**See below export for notes on what will be needed in this component
*/

//TODO: for order history/next delivery date available update by user
/*
1. button to see product history/next shipment (in src/modules/common/header/Header.js) which will route to new page for user
- Will need functionality to route to product history/shipment
- Will need a class component for ProductHistory (or OrderHistory?)
  **See more on this below export!

This component will render the order history page with:
1. next delivery expected with:
  - data about products in the crate (we think) (api GET)
  - expected delivery date (api GET)
  - field/button to update the users available date for crate delivery (api POST adn then GET)
2. All previous products with:
  - data about each product (api GET)
  - boolean for whether that specific item was returned by the user (api GET/POST/GET)
   **We may not make a POST/GET for this. as we may not want to add the functionality for this MVP

New Files/Components needed for this:
ProductHistory Class Component
**See below export for notes on what will be needed in this component
*/

/*
NOTES from team discussions:
I think that we will likely use a lot of the logic from src/module/crate directory 

I am noticing there is also a src/module/product. It seems we could use pieces of that for order history?

on page load:
  - store will have been updated with user profile data on login
  - pull from store - photo, email, shipping address, description

edit profile button opens Form Modal:
  - has it's own state that is pulled from store on pageload
  - email, shipping, description
  - handleChange for fields
  - handleSubmit
    - get dispatch from user/api/action.js

update profile image:
  - 
*/

// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>
        {/* TODO: Add button (or Link?) to see user next delivery and order history (route to new page for user) */}

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        {/* TODO: add image, description and shipping address jsx tags */}
        {/* TODO: might just center all this new info, insteaad of trying to style ... unless we find we have time! */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>
        {/* TODO: Add button to edit profile - which goes to modal (or routes to hidden page for user to edit) */}

        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)


/* TODO:
New File:
src/modules/user/EditProfile.js
Class Component
    this.state = {
      user: {
        email: '',
        password: '',
        description: '',
        shippingAddress: '',
        profileImage: '', // probably need a default image here?
        userID: ???
      }
    }

    Will need defaults in the render for empty strings and for the default image if
    user has not uploaded an image yet.

    **See for further logic details on this section:
      - src/modules/admin/product/CreateOrEdit.js
      - src/modules/admin/common/api/actions.js
    onChange method to handle user inputs in fields
    onUpload method to handle user image input
    import { renderIf } from '../../../setup/helpers' to render the image a user uploads (before submitting)
    onSubmit method to handle submission of changes

*/

/* TODO:
New File:
src/modules/user/ProductHistory.js
Class Component

componentDidMount to call GET of next delivery crate AND Products already delieverd
And .then setState with that information

render: 
  Next Delivery
    I think we should be able to pull from:
    src/modules/admin/crate/Item.js for the logic of displaying this. 
    It will obviously need modifications for specifics of what we want displayed

  ProductHistory
    We should be able to pull from:
    src/admin/product/List.js for the logic of displaying order history
    

*/
