import { request, express, graphqlHTTP, schema, connection } from '../../../setup/test_helper'

import serverConfig from '../../../config/server.json'
import models from '../../../setup/models'
import authentication from '../../../setup/authentication'

describe('orders by user', () => {
  let server;

  beforeAll(async () => {
    var userTest = await models.User.findOne({raw: true, where: {email: 'fake@example.com'}})

    server = express();
    server.use(authentication);
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false,
        context: {
          auth: {
            user: userTest
          }
        }
      })
    );

  })

  afterAll(async() => {
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
    const response = await request(server)
    .post('/')
    .send({query: '{ ordersByUser { deliveryDate deliveryStatus crate { id name description } user { id name } productDeliveries { returned product { name description } }}}'})
    .expect(200)
    console.log(response.body.data)

    var orders = response.body.data.ordersByUser
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
