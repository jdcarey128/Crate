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
- use upload() from 
- NEW COMPONENT: ProfileForm component w/ route (class component) based on form in admin view
  (edit email address, shipping address, personal description)
  - handleChange, onSubmit functions
- src/setup/routes/user.js - add a route 
  edit: {
    path: '/user/profile/edit',
    component: ProfileForm,
    auth: true
  }
- default image for users with no profile pic


- 
for photo:
  - need to add an action in profile actions ()
 -------------------------
- ProfileForm component with route based on form in admin view
  this.state:
    details: {
      image,
      email, 
      shipping address, 
      description
    },
    isLoading

  methods & props:
    this.onUpload(event) - for photo upload
    this.props.upload(data) - for api call
    this.props.messageShow('File uploaded successfully.')  
    this.props.messageHide()
    this.onSubmit(event) - submit form
    this.props.editUserDetails(this.state)

  form inputs placeholder text = `'practice@email.com or new entry' || this.state.email`  
    
  save button - onClick will call this.props.editUserDetails()
  choose file button - 
  back button - <Link to='/user/profile'

  - src/modules/user/api/actions.js - file w/ actions:
  *This will be for all inputs on form

    export function editUserDetails() {
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
