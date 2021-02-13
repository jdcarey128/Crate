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
import { getUserOrders } from './api/actions'
import { messageShow, messageHide } from '../common/api/actions'


const cardStyle = {
  justifyContent: 'center'
}

// Component
class Orders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    this.props.getUserOrders()
    .then(response => {
      console.log('response', response)
      if(response.status === 200) {
        this.setState({orders: response.data.data.ordersByUser})
      } else {
        throw new Error('Whoops, something went wrong')
      }
    })
    .catch(error => {
      this.props.messageShow('There was some error. Please try again.')
    })
    .then(
      window.setTimeout(() => {
        this.props.messageHide()
      }, 5000)
    )
  }

  handleUpdate = () => {
    this.props.getUserOrders()
    .then(response => {
      if(response.status === 200) {
        this.setState({orders: response.data.data.ordersByUser})
      } else {
        throw new Error('Whoops, something went wrong')
      }
    })
    .catch(error => {
      this.props.messageShow('There was some error. Please try again.')
    })
    .then(
      window.setTimeout(() => {
        this.props.messageHide()
      }, 5000)
    )
  }

  displayOrders = (orders) => {
    const ordersToDisplay =  orders.map(order => {
      const {id, deliveryDate, deliveryStatus, crateId, productDeliveries} = order

      return (
        <OrderCard
          key={id}
          id={id}
          name={order.crate.name}
          deliveryDate={deliveryDate}
          deliveryStatus={deliveryStatus}
          crateId={crateId}
          productDeliveries={productDeliveries}
          handleUpdate={this.handleUpdate}
        />
      )
    })
    return ordersToDisplay
  }

  sortOrdersByDeliveryStatus = (status) => {
    const filteredOrders = this.state.orders.filter(order => {
      return order.deliveryStatus === status
    })
    return this.displayOrders(filteredOrders)
  }


  render() {
    return (
      <div style={{ style: cardStyle }}>
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
          <GridCell style={{ padding: '2em', textAlign: 'center', style: 'justifyCenter' }}>
              <H3>Upcoming Crates</H3>
              {this.sortOrdersByDeliveryStatus('scheduled')}
          </GridCell>
          <GridCell style={{ padding: '2em', textAlign: 'center', style: 'justifyCenter'  }}>
              <H3>Delivered Crates</H3>
              {this.sortOrdersByDeliveryStatus('delivered')}
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
Orders.propTypes = {
  user: PropTypes.object.isRequired,
  getUserOrders: PropTypes.func.isRequired
}

// Component State
function ordersState(state) {
  return {
    user: state.user
  }
}

export default connect(ordersState, { getUserOrders, messageShow, messageHide })(Orders)
