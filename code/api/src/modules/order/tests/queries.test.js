import { request, express, graphqlHTTP, schema, connection } from '../../../setup/test_helper'

describe('orders by user', () => {
  let server = express();
  let token;
  let userTest;

  beforeAll(() => {
    userTest = await models.User.create(name: 'Test Subject', password: 'password')

    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false,
        context: (
          auth: {
            user: userTest
          }
        )
      })
    )

  })

  afterAll(done => {
    connection.close();
    done();
  });

  it("returns all orders", async(done) =>{
    const response = await request(server)
    .post('/')
    .send({query: `query { orders {user { name } deliveryDate deliveryStatus }}`})
    .expect(200)

    expect(response.body.data.orders.length).toBe(7)
    expect(response.body.data.orders[0].user.name).toBe('Not a real human')
    expect(response.body.data.orders[0].deliveryDate).toBe('3/12/21')
    expect(response.body.data.orders[0].deliveryStatus).toBe('scheduled')
    done();
  } )

  it("returns all user orders with product delivery and product info", async(done) =>{
    // var userId = 4
    const response = await request(server)
    .post('/')
    .send({query: `query { ordersByUser{deliveryDate deliveryStatus }}`})
    console.log(response.body)
    .expect(200)

    var orders = response.data.userOrders.orders
    expect(orders[0].deliveryDate).toBe("3/12/21")
    expect(orders[0].deliveryStatus).toBe("scheduled")
    expect(orders[3].deliveryDate).toBe("12/12/20")
    expect(orders[3].deliveryStatus).toBe("delivered")

    var firstProductDeliveries = orders[0].productDeliveries
    expect(firstProductDeliveries[0].returned).toBe(false)
    expect(firstProductDeliveries[1].returned).toBe(true)
    expect(firstProductDeliveries[2].returned).toBe(false)

    var firstProduct = firstProductDeliveries[0].product
    expect(firstProduct.name).toBe("Belt for Women")
    expect(firstProduct.description).toBe("A very nice belt for women.")
    done();
  } )
})
