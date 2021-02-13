import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { white, grey2, black } from '../../ui/common/colors'
import Card from '../../ui/card/Card'

// App Imports
import userRoutes from '../../setup/routes/user'
import { updateDeliveryDate } from './api/actions'

const OrderCard = (props) => {

  const formatDate = (str) => {
    const splitDate = str.split('-')
    const year = splitDate[0]
    const month = splitDate[1]
    const day = splitDate[2]
    return `${month}/${day}/${year}`
  }

  const onChange = (event) => {
    const inputDate = formatDate(event.target.value)
    props.updateDeliveryDate(props.id, inputDate)
    props.handleUpdate()
  }

  const determineDeliveryButton = () => {
    if(props.deliveryStatus === 'scheduled') {
      return (
        <div>
          <p>Edit Delivery Date</p>
          <input 
            type='date'
            name='change-delivery'
            value='yyyy-MM-dd'
            onChange={() => onChange(event)}
          />
        </div>
      )
  }
}

  const determinedReturned = (key, returned) => {
    if (returned === true ) {
      return (
        <p key={key}>Returned</p>
      )
    } else {
      return (
        <p>Kept!</p>
      )
      }
  }

  const constructProductTable = () => {
    return(
      <Grid alignCenter={true} style={{ padding: '1em' }}>
        <GridCell>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                {props.deliveryStatus === 'delivered' &&
                <th>Returned</th>
                } 
              </tr>
            </thead>

            <tbody>
              
              {props.productDeliveries.map(delivery => (
                      <tr key={delivery.id}>

                        <td>
                          { delivery.product.name }
                        </td>

                        <td>
                          { delivery.product.description }
                        </td>

                        {props.deliveryStatus === 'delivered' &&
                        <td>
                          { determinedReturned(delivery.id, delivery.returned) }
                        </td>}

                      </tr>
                    ))
              }

              
            </tbody>
          </table>
        </GridCell>
      </Grid>
    )}

  const cardStyle = {
    justifyContent: 'center'
  }

  return (
    <Card key={props.key} style={{ width: '18em', backgroundColor: white }}>
      <div style={{ padding: '1em 1.2em' }}>
        <H3>{props.name}</H3>

        <p style={{ color: grey2, marginTop: '1em' }}>{props.deliveryDate}</p>

        <p style={{ color: grey2, marginTop: '1em' }}>{props.deliveryStatus}</p>

        <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}></p>
        {determineDeliveryButton()}
        <div>
          {constructProductTable()}
        </div>
      </div>
    </Card>
  )
}

OrderCard.propTypes = {
  id: PropTypes.number,
  deliveryDate: PropTypes.string,
  deliveryStatus: PropTypes.string,
  userId: PropTypes.number,
  crateId: PropTypes.number,
  updateDeliveryDate: PropTypes.func.isRequired
}

export default connect(null, { updateDeliveryDate })(OrderCard)
