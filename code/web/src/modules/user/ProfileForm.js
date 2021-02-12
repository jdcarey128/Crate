import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Input from '../../ui/input/Input'
import { H3, H4 } from '../../ui/typography'
import Icon from '../../ui/icon'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'
import { white } from "../../ui/common/colors"

// App Imports
import userRoutes from '../../setup/routes/user'
import { updateUserInfo } from './api/actions'
import { routeImage } from '../../setup/routes'
import { renderIf } from '../../setup/helpers'
import { upload, messageShow, messageHide } from '../common/api/actions'


class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {
        id: 0,
        image: '/images/stock/default_profile.jpg',
        email: '',
        shippingAddress: '',
        description: ''
      },
      isLoading: false
    }
  }

  componentDidMount() {
    let shippingAddress = ''
    let description = ''
    let image = '/images/stock/default_profile.jpg'
    let userDetails; 

    if (this.props.user.details.address) {
      shippingAddress = this.props.user.details.address
    } 

    if (this.props.user.details.description) {
      description = this.props.user.details.description
    }

    if (this.props.user.details.image) {
      image = this.props.user.details.image
    }

    userDetails = {
      id: this.props.user.details.id,
      image: image,
      email: this.props.user.details.email,
      shippingAddress: shippingAddress,
      description: description
    }

    this.setState({ userDetails })
  }

  onChange = (event) => {
    let userDetails = this.state.userDetails
    userDetails[event.target.name] = event.target.value
    
    this.setState({
      userDetails
    })
  }

  onUpload = (event) => {
    this.props.messageShow('Uploading file, please wait...')
  
    this.setState({
      isLoading: true
    })

    let profileImage = new FormData()
    profileImage.append('file', event.target.files[0])

    this.props.upload(profileImage)
      .then(response => {
        if (response.ok) {
          this.props.messageShow('File uploaded successfully.')

          let userDetails = this.state.userDetails
          userDetails.image = `/images/uploads/${ response.data.file }`

          this.setState({
            userDetails
          })
          
          this.setState({
            isLoading: false
          })
    
          window.setTimeout(() => {
            this.props.messageHide()
          }, 5000)
        } else {
          throw new Error('Please try again')
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error. Please try again.')
      })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.setState({
      isLoading: true
    })

    this.props.messageShow('Saving details, please wait...')

    // Save details

    this.props.updateUserInfo(this.state.userDetails)
      .then(response => {

        this.setState({
          isLoading: false
        })

        this.props.messageShow('Profile saved successfully.')

      })
      .catch(error => {
        this.props.messageShow('There was some error. Please try again.')
        this.setState({
          isLoading: false
        })
      })
      .then(() => {
        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  render() {
    return (
      <div>
        {/* Top actions bar */}
        <Grid alignCenter={true} style={{ padding: '1em' }}>
          <GridCell style={{ textAlign: 'left' }}>
            <Link to={userRoutes.profile.path}>
              <Button><Icon size={1.2}>arrow_back</Icon>Back</Button>
            </Link>
          </GridCell>
        </Grid>

        <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell>
              <H4 font="secondary" style={{ marginBottom: '1em', textAlign: 'center' }}>
                Edit Profile Details
              </H4>

            {/* Form */}
            <form onSubmit={this.onSubmit}>
              <div style={{ width: '25em', margin: '0 auto' }}>

                {/* Email */}
                <Input
                  type="text"
                  fullWidth={true}
                  placeholder='Email'
                  required="required"
                  name="email"
                  autoComplete="off"
                  value={this.state.userDetails.email}
                  onChange={this.onChange}
                />

                {/* Address */}
                <Input
                  type="text"
                  fullWidth={true}
                  placeholder="Shipping Address"
                  name="shippingAddress"
                  autoComplete="off"
                  value={this.state.userDetails.shippingAddress}
                  onChange={this.onChange}
                />

                {/* Description */}
                <Input
                  type="text"
                  fullWidth={true}
                  placeholder="Description"
                  name="description"
                  autoComplete="off"
                  value={this.state.userDetails.description}
                  onChange={this.onChange}
                />

                {/* Upload File */}
                <div style={{ marginTop: '1em' }}>
                  <input
                    type="file"
                    onChange={this.onUpload}
                    name='image'
                  />
                </div>

                {/* Uploaded image */}

                {renderIf(this.state.userDetails.image !== '/images/stock/default_profile.jpg', () => (
                  <img src={routeImage + this.state.userDetails.image} alt="Profile Image"
                    style={{ width: 200, marginTop: '1em' }}/>
                ))}
               
              </div>

              {/* Form submit */}

              <Grid>
                <GridCell style={{ padding: '2em', textAlign: 'center' }}>
                <Link to={userRoutes.profile.path} style={{ marginRight: '1em' }}>
                  <Button type="submit" theme="secondary"  disabled={this.state.isLoading}>
                  <Icon size={1.2} style={{ color: white }}>remove_circle_outline</Icon> Cancel
                  </Button>
                </Link>

                <Button type="submit" theme="primary" disabled={this.state.isLoading}>
                    <Icon size={1.2} style={{ color: white }}>check</Icon> Save
                </Button>

                </GridCell>
              </Grid>

            </form>
          </GridCell>
        </Grid>

      </div>
    )
  }
}

// Component Properties
ProfileForm.propTypes = {
  user: PropTypes.object.isRequired,
  updateUserInfo: PropTypes.func.isRequired
}

function profileFormState(state) {
  return {
    user: state.user
  }
}

export default connect(profileFormState, { upload, messageShow, messageHide, updateUserInfo })(ProfileForm)