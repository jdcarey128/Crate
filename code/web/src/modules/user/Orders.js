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
  constructor(props) {
    super(props)
    this.state = {
      orders: [
        {id: 1, deliveryDate: '3/12/21', deliveryStatus: 'scheduled', userId: 2, crateId: 1, createdAt: new Date(), updatedAt: new Date()},
        {id: 2, deliveryDate: '2/12/21', deliveryStatus: 'delivered', userId: 2, crateId: 1, createdAt: new Date(), updatedAt: new Date()},
        {id: 3, deliveryDate: '1/12/21', deliveryStatus: 'delivered', userId: 2, crateId: 1, createdAt: new Date(), updatedAt: new Date()},
        {id: 4, deliveryDate: '12/12/20', deliveryStatus: 'delivered', userId: 2, crateId: 1, createdAt: new Date(), updatedAt: new Date()},
        {id: 5, deliveryDate: '3/12/21', deliveryStatus: 'scheduled', userId: 3, crateId: 2, createdAt: new Date(), updatedAt: new Date()},
        {id: 6, deliveryDate: '3/12/21', deliveryStatus: 'scheduled', userId: 3, crateId: 2, createdAt: new Date(), updatedAt: new Date()},
        {id: 7, deliveryDate: '4/15/21', deliveryStatus: 'scheduled', userId: 3, crateId: 2, createdAt: new Date(), updatedAt: new Date()}
      ]
    }
  }

  displayOrders = (orders) => {
    return this.state.orders.map(order => {
      const {id, deliveryDate, deliveryStatus, userId, crateId} = order

      return (
        <OrderCard
          key={id}
          id={id}
          deliveryDate={deliveryDate}
          deliveryStatus={deliveryStatus}
          userId={userId}
          crateId={crateId}
        />
      )
    })
  }

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
        <Grid>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <section>
              {this.displayOrders(this.state.orders)}
            </section>
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
