import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Icon from '../../ui/icon'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        id: 0,
        image: '',
        email: '',
        address: '',
        description: ''
      },
      isLoading: true
    }
  }
  
  render() {
    return (
      <div>
        {/* Top actions bar */}
        <Grid alignCenter={true} style={{ padding: '1em' }}>
          <GridCell style={{ textAlign: 'left' }}>
            <Link to={userRoutes.profile.path}>
              <Button><Icon size={1.2}>arrow_back</Icon> Back</Button>
            </Link>
          </GridCell>
        </Grid>

      </div>
    )
  }
}

function profileFormState(state) {
  return {
    userDetails: state.userDetails
  }
}

export default connect(profileFormState)(ProfileForm)