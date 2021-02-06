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

/* annot:  
- upload my own image, 
- set personal description, 
- edit my email address and shipping address

User Walkthrough:
on page load user will see profile page with img (if uploaded, else default img)
to upload a profile picture, click add profile picture button (SEE Q)
to edit their profile, click Edit button,
modal will pop up with controlled form

Expected Needs:
- a way to upload a photo
- NEW COMPONENT: Form component w/ route (class component) based on form in admin view
  (edit email address, shipping address, personal description)
  - handleChange, onSubmit functions
- default image for users with no profile pic
- connect to state through dispatchToProps in Profile? (dont think we need. see line 60 in signup)

Questions:
- remove Grid below to keep things simple?
- should we have a button to add profile pic separate from modal? 
- is it better to submit all form values at once or individually? Does it make a difference
  for backend? and if not, what is best for front-end mvp




for photo:
  - need to add an action in profile actions
 -------------------------
- Form component with route based on form in admin view:
  this.state:
    email, 
    shipping address, 
    description
    
  form will call this.props.changeUserDetails()

  - file of actions:
  export function changeUserDetails() {
    return dispatch => {
      return axios.patch(routeApi, mutation)
    }
  }


*/



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

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

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
