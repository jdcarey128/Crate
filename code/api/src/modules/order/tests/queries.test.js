import { request, express, graphqlHTTP, schema, connection } from '../../../setup/test_helper'

describe('orders by user', () => {
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

  it("returns all user orders with product delivery and product info", async(done) =>{
    var userId = 4
    const response = await request(server)
    .post('/')
    .send({query: `query { ordersByUser( userId: "${userId}") {orders { deliveryDate deliveryStatus }}}`})
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
