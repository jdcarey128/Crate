import { request, express, graphqlHTTP, schema, connection } from '../../../setup/test_helper'

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

  xit('can return users', async (done) => {
    const response = await request(server)
      .post('/')
      .send({query: '{users{name email description}}'})
      .expect(200)


    expect(response.body.data.users.length).toBe(4)
    expect(response.body.data.users[0].name).toBe('The Admin')
    expect(response.body.data.users[0].email).toBe('admin@crate.com')
    expect(response.body.data.users[0].description).toBe(null)

    done();
  })

  xit('can return user profile info', async (done) => {
    var email = 'fake@example.com';
    var passwordInput = 'password';

    const response = await request(server)
      .post('/')

      .send({query: `query {userLogin(email: "${email}", password: "${passwordInput}") {user {id email description shippingAddress image} token}}`})
      .expect(200)

    var resp = response.body.data.userLogin.user

    expect(resp.email).toBe('fake@example.com')
    expect(resp.description).toBe('I am actually a robot designed to buy clothes.')
    expect(resp.shippingAddress).toBe('123 Robot Ave., Denver, CO 80202')
    expect(resp.image).toBe('/images/stock/default_profile.jpg')

    done();
  })

  xit('returns error for incorrect email', async (done) => {
    var email = 'faker@example.com';
    var passwordInput = 'password';

    const response = await request(server)
      .post('/')
      .send({query: `query {userLogin(email: "${email}", password: "${passwordInput}") {user {id email description shippingAddress image} token}}`})
      .expect(200)

    expect(response.body.errors[0].message).toBe(`We do not have any user registered with ${ email } email address. Please signup.`)

    done();
  })

  xit('returns illadvised error for incorrect password', async (done) => {
    var email = 'fake@example.com';
    var passwordInput = 'password123';

    const response = await request(server)
      .post('/')
      .send({query: `query {userLogin(email: "${email}", password: "${passwordInput}") {user {id email description shippingAddress image} token}}`})
      .expect(200)

    expect(response.body.errors[0].message).toBe(`Sorry, the password you entered is incorrect. Please try again.`)

    done();
  })

})
