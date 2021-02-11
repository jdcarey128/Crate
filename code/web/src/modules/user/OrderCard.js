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
import { logout } from './api/actions'

const OrderCard = (props) => {
    // constructGrid =() => {
  //   return(
    //   <Grid alignCenter={true} style={{ padding: '1em' }}>
    //     <GridCell>
    //       <table className="striped">
    //         <thead>
    //           <tr>
    //             <th>Image</th>
    //             <th>Name</th>
    //             <th>Description</th>
    //             <th>Created at</th>
    //             <th>Updated at</th>
    //             <th style={{ textAlign: 'center' }}>Actions</th>
    //           </tr>
    //         </thead>

    //         <tbody>
    //         {
    //           isLoading
    //             ? <tr>
    //                 <td colSpan="6">
    //                   <Loading message="loading products..."/>
    //                 </td>
    //               </tr>
    //             : list.length > 0
    //               ? list.map(({ id, image, name, description, createdAt, updatedAt }) => (
    //                   <tr key={id}>
    //                     <td>
    //                       <img src={routeImage + image} alt={name} style={{ width: 100 }}/>
    //                     </td>

    //                     <td>
    //                       { name }
    //                     </td>

    //                     <td>
    //                       { description }
    //                     </td>

    //                     <td>
    //                       { new Date(parseInt(createdAt)).toDateString() }
    //                     </td>

    //                     <td>
    //                       { new Date(parseInt(updatedAt)).toDateString() }
    //                     </td>

    //                     <td style={{ textAlign: 'center' }}>
    //                       <Link to={admin.productEdit.path(id)}>
    //                         <Icon size={2} style={{ color: black }}>mode_edit</Icon>
    //                       </Link>

    //                       <span style={{ cursor: 'pointer' }} onClick={this.remove.bind(this, id)}>
    //                           <Icon size={2} style={{ marginLeft: '0.5em' }}>delete</Icon>
    //                         </span>
    //                     </td>
    //                   </tr>
    //                 ))
    //               : <tr>
    //                   <td colSpan="6">
    //                     <EmptyMessage message="No products to show."/>
    //                   </td>
    //                 </tr>
    //         }
    //         </tbody>
    //       </table>
    //     </GridCell>
    //   </Grid>
    // )}
  return (
    <Card style={{ width: '18em', backgroundColor: white }}>
      <div style={{ padding: '1em 1.2em' }}>
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
