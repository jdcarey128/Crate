//TODO: for profile updates
/*
This will need to add button for Orders and to Edit Profile
  - for Edit Profile button reference: web/src/modules/admin/product/List.js             line 30, 114

Will also need to add image, description, shipping address to render

Add Orders.js to user directory
Add ProfileForm.js to user directory
See notes on each of those files!
*/

/*
List of files that need to be modified/added for FE:
- web/src/modulues/user/Profile.js          line 62, 65, 66, 70
- web/src/modulues/user/Orders.js           NEW
- web/src/modulues/user/ProfileForm.js      NEW
- web/src/modulues/user/actions.js          line 86
- web/src/modulues/user/state.js            line 23
- web/src/modulues/common/header/Header.js  line 58

??web/src/modulues/user/Login.js ??

List of files to reference for adding the new features:
add image:
- web/src/modules/admin/product/CreateOrEdit.js     line 173, 310, 319
- web/src/modules/admin/product/List.js             line 30, 114
- web/src/modules/common/api/actions.js             line 17

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
        {/* TODO: Add button (or Link?) to see user Orders (route to new page for user) */}

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        {/* TODO: add image, description and shipping address jsx tags */}
        {/* TODO: might just center all this new info, insteaad of trying to style ... unless we find we have time! */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>
        {/* TODO: Add button to edit profile - which routes to path for user to edit) */}

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
