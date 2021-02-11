import React, { Component } from 'react'
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
import OrderCard from './OrderCard'

// Component
class Orders extends Component {
  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>My Orders - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">My Orders</H3>
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
Orders.propTypes = {
  user: PropTypes.object.isRequired,
}

// Component State
function ordersState(state) {
  return {
    user: state.user
  }
}

export default connect(ordersState)(Orders)
