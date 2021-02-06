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
        {/* TODO: 
          call image within new element container: 
          {props.user.details.image}? 
            - this may be different once we have a better idea how to upload/store an image 
          initially, this will render default image state (vague user outline - store in /web/public/images)
          add button that says 'edit image' to allow users to upload a (new) image 
          when click on butt, redirect to new form page (imageComponent)
          on new image form, upload image, submit to dispatch change in state to display user image
        */}

        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

        {/* TODO: 
            // add paragraph tags to house user description, shipping address
            // <p style={ ?? }> { props.user.details.description } </p>}
            // <p style={ ?? }> { props.user.details.shippingAddress } </p>}
            // form component needs own state, in that state: have current description so user can edit 
            // form component will live inside profileForm in ../../ui/profileForm/profileForm.js
            // import component into this file 
            // add button that says 'edit'
            // render form inside of modal (part that pops out) - possibly reroute to new form 
            // when click on button, conditionally render modal (formComponent) 
            // on form, submit button (dispatch?) will update the Redux store description, email, and shippingAddress states */}
        
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

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
