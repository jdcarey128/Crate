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

const OrderCard = (props) => {
  // const determinedReturned = (key, returned) => {
  //   if (returned === true ) {
  //     return (
  //       <p key={key}>Returned</p>
  //     )
  //   } else {
  //     return (
  //       <p>Kept!</p>
  //     )
  //     }
  // }

  // const constructProductTable = () => {
  //   return(
  //     <Grid alignCenter={true} style={{ padding: '1em' }}>
  //       <GridCell>
  //         <table className="striped">
  //           <thead>
  //             <tr>
  //               <th>Product Name</th>
  //               <th>Description</th>
  //               <th>Returned</th>
  //             </tr>
  //           </thead>

  //           <tbody>
  //             {
  //               isLoading
  //                 ? <tr>
  //                     <td colSpan="6">
  //                       <Loading message="loading products..."/>
  //                     </td>
  //                   </tr>
  //                 : props.order.length > 0
  //                   ? props.order.products.map(({ name, key, description, returned }) => (
  //                     <tr key={id}>

  //                       <td>
  //                         { name }
  //                       </td>

  //                       <td>
  //                         { description }
  //                       </td>

  //                       <td>
  //                         { determinedReturned(key, returned) }
  //                       </td>

  //                     </tr>
  //                   ))
  //                 : <tr>
  //                     <td colSpan="6">
  //                       <EmptyMessage message="No products to show."/>
  //                     </td>
  //                   </tr>
  //             }
  //           </tbody>
  //         </table>
  //       </GridCell>
  //     </Grid>
  //   )}

  const cardStyle = {
    justifyContent: 'center'
  }

  return (
    <Card key={props.key} style={{ width: '18em', backgroundColor: white }}>
      <div style={{ padding: '1em 1.2em' }}>
        <H3>Crate Name</H3>
        <H4 font="secondary" style={{ color: black }}>{props.id}</H4>

        <p style={{ color: grey2, marginTop: '1em' }}>{props.deliveryDate}</p>

        <p style={{ color: grey2, marginTop: '1em' }}>{props.deliveryStatus}</p>

        <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}></p>
        {/* <div>
          {constructProductTable()}
        </div> */}
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
}

export default connect()(OrderCard)
