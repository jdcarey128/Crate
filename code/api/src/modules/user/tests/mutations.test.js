import {
  isType
} from 'graphql';
import {
  request,
  express,
  graphqlHTTP,
  schema,
  connection
} from '../../../setup/test_helper'

describe('user login', () => {
  let server = express();

  beforeAll(() => {
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
  })

  afterAll(done => {
    connection.close();
    done();
  });

  it('can update user profile', async (done) => {
    const response = await request(server)
      .post('/')
      .send({
        query: '{users{email description image shippingAddress}}'
      })
      .expect(200)

    expect(response.body.data.users.length).toBe(4)
    expect(response.body.data.users[0].email).toBe('admin@crate.com')
    expect(response.body.data.users[0].description).toBe(null)
    expect(response.body.data.users[0].image).toBe('/images/stock/default_profile.jpg')
    expect(response.body.data.users[0].shippingAddress).toBe(null)

    done();
  })

})