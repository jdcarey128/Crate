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

will need functionality on edit button to display Profile Edit Modal

New Files/Components needed:
ProfileEdit (modal) probably a Class Component to update State
UserHistory
*/

//TODO: for order history/next delivery date available update by user
/*
1. button to see product history/next shipment (in header??) which will route to new page for user
- Will need functionality to route to product history/shipment
- Will need a class component for ProductHistory (or OrderHistory?)

This component will render the order history page with:
1. next delivery expected with:
  - data about products in the crate (we think) (api GET)
  - expected delivery date (api GET)
  - field/button to update the users available date for crate delivery (api POST adn then GET)
2. All previous products with:
  - date about each product (api GET)
  - boolean for whether that specific item was returned by the user (api GET/POST/GET)
   **We may not make a POST/GET for this. as we may not want to add the functionality for this MVP

NOTES:
I think that we will likely use a lot of the logic from src/module/crate directory 

I am noticing there is also a src/module/product. It seems we could use pieces of that for order history?


on page load:
  - store will have been updated with user profile data on login
  - pull ofrom store - photo, email, shipping address, description

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
        {/* TODO: Add button to see user next delivery and order history (route to new page for user) */}

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        {/* TODO: add image, description and shipping address jsx tags */}
        {/* TODO: might just center all this new info, insteaad of trying to style ... unless we find we have time! */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>
        {/* TODO: Add button to edit profile - which goes to modal (or routes to hidden page for user to edit) */}
        {/* TODO: Maybe add seperate button for user to upload image? BE and FE need to do more research for this */}



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
