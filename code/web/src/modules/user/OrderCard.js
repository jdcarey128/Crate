import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import moment from 'moment'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { white, grey2, black } from '../../ui/common/colors'
import Card from '../../ui/card/Card'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

const OrderCard = (props) => {
  const determinedReturned = (returned) => {
    if (returned === true ) {
      return (
        <p>Returned</p>
      )
    } else {
      return (
        <p>Kept!</p>
      )
      }
  }

  const constructGrid = () => {
    return(
      <Grid alignCenter={true} style={{ padding: '1em' }}>
        <GridCell>
          <table className="striped">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Returned</th>
              </tr>
            </thead>

            <tbody>
            {
              isLoading
                ? <tr>
                    <td colSpan="6">
                      <Loading message="loading products..."/>
                    </td>
                  </tr>
                : props.order.length > 0
                  ? props.order.products /*we aren't sure what the nest is*/.map(({ name, description, returned }) => (
                      <tr key={id}>

                        <td>
                          { name }
                        </td>

                        <td>
                          { description }
                        </td>

                        <td>
                          { determinedReturned(returned) }
                        </td>

                        <td style={{ textAlign: 'center' }}>
                          <Link to={admin.productEdit.path(id)}>
                            <Icon size={2} style={{ color: black }}>mode_edit</Icon>
                          </Link>

                          <span style={{ cursor: 'pointer' }} onClick={this.remove.bind(this, id)}>
                              <Icon size={2} style={{ marginLeft: '0.5em' }}>delete</Icon>
                            </span>
                        </td>
                      </tr>
                    ))
                  : <tr>
                      <td colSpan="6">
                        <EmptyMessage message="No products to show."/>
                      </td>
                    </tr>
            }
            </tbody>
          </table>
        </GridCell>
      </Grid>
    )}
  return (
    <Card style={{ width: '18em', backgroundColor: white }}>
      <div style={{ padding: '1em 1.2em' }}>
        <H3>Delivered Crates</H3>
        <H4 font="secondary" style={{ color: black }}>{props.id}</H4>

        <p style={{ color: grey2, marginTop: '1em' }}>{props.deliveryDate}</p>

        <p style={{ color: grey2, marginTop: '1em' }}>{props.deliveryStatus}</p>

        <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
        </p>
      </div>
    </Card>
  )
}


export default connect()(OrderCard)
