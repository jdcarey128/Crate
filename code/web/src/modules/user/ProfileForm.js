import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Input from '../../ui/input/Input'
import { H3, H4 } from '../../ui/typography'
import Icon from '../../ui/icon'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { routeImage } from "../../setup/routes"
import { renderIf } from '../../setup/helpers'
import { upload, messageShow, messageHide } from '../common/api/actions'


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
      isLoading: false
    }
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
        if (response.status === 200) {
          this.props.messageShow('File uploaded successfully.')

          let userDetails = this.state.userDetails
          userDetails.image = `/images/uploads/${ response.data.file }`

          this.setState({
            userDetails
          })
        } else {
          this.props.messageShow('Please try again.')
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error. Please try again.')

      })
      .then(() => {
        this.setState({
          isLoading: false
        })

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
              <Button><Icon size={1.2}>arrow_back</Icon> Back</Button>
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
                  placeholder="Email"
                  required="required"
                  name="email"
                  autoComplete="off"
                  value={this.state.email}
                  onChange={this.onChange}
                />

                {/* Address */}
                <Input
                  type="text"
                  fullWidth={true}
                  placeholder="Address"
                  required="required"
                  name="address"
                  autoComplete="off"
                  value={this.state.address}
                  onChange={this.onChange}
                />

                {/* Description */}
                <Input
                  type="text"
                  fullWidth={true}
                  placeholder="Description"
                  required="required"
                  name="description"
                  autoComplete="off"
                  value={this.state.description}
                  onChange={this.onChange}
                />

                {/* Upload File */}
                <div style={{ marginTop: '1em' }}>
                  <input
                    type="file"
                    onChange={this.onUpload}
                    // required={this.state.userDetails.image.id === 0}
                  />
                </div>

                {/* Uploaded image */}
                {renderIf(this.state.userDetails.image !== '', () => (
                  <img src={routeImage + this.state.userDetails.image} alt="Profile Image"
                    style={{ width: 200, marginTop: '1em' }}/>
                ))}

              </div>

            
              
            </form>
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

export default connect(profileFormState, { upload, messageShow, messageHide })(ProfileForm)