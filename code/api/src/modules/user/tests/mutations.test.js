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
    var email = 'test@test.com'
    var description = 'test description'
    var id = 2
 const response = await request(server)
      .post('/')
      .send({
        query: `mutation{userUpdate(id: ${id}, email: "${email}", description: "${description}" ) {id email description image shippingAddress}}`})
      .expect(200)
    expect(response.body.data.userUpdate.email).toBe('test@test.com')
    expect(response.body.data.userUpdate.description).toBe('test description')
    expect(response.body.data.userUpdate.image).toBe('/images/stock/default_profile.jpg')
    expect(response.body.data.userUpdate.shippingAddress).toBe(null)

    done();
  })

})
