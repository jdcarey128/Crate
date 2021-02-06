/* TODO:

This will need to be updated to add:
1. edit email
2. shipping address display
3. image display
4. description


will need to functionality to POST/GET to/from BE:
updated email
shipping address
description
image **This may need to be seperated from other profile state
We found how an image is uploaded by admin for a new product. 
We believe we can use that code for uploading an image for a user!
see TODO in for reference on how to upload image:
 - src/modules/admin/product/CreateOrEdit.js
 - src/modules/admin/common/api/actions.js

BackEnd files associated with editing profile:
 - api/src/modules/user/model.js
 - api/src/modules/user/mutation.js
 - api/src/modules/user/query.js
 - api/src/modules/user/resolvers.js
 - api/src/modules/user/types.js

*/


/* TODO:
New File:
src/modules/user/EditProfile.js
Class Component
    this.state = {
      user: {
        email: '',
        password: '',
        description: '',
        shippingAddress: '',
        profileImage: '', // probably need a default image here?
        userID: ???
      }
    }

    Will need defaults in the render for empty strings and for the default image if
    user has not uploaded an image yet.

    **See for further logic details on this section:
      - src/modules/admin/product/CreateOrEdit.js
      - src/modules/admin/common/api/actions.js
      
    onChange method to handle user inputs in fields
    onUpload method to handle user image input
    import { renderIf } from '../../../setup/helpers' to render the image a user uploads (before submitting)
    onSubmit method to handle submission of changes

*/