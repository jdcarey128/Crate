import React, { Component } from 'react';
import Profile from './Profile';

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
}

export default ProfileForm;