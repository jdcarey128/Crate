import { request, express, graphqlHTTP, schema, connection } from '../../../setup/test_helper'

import serverConfig from '../../../config/server.json'
import models from '../../../setup/models'
import authentication from '../../../setup/authentication'

describe('orders by user', () => {
  let server;
  let userTest;
  let crateTest;
  let orderTest;
  
  beforeAll(async () => {
    crateTest =  await models.Crate.findOne({raw: true, where: {name: 'Clothes for Men'}});
    userTest =  await models.User.findOne({raw: true, where: {email: 'fake@example.com'}});
    orderTest =  await models.Order.create({
      userId: userTest.id, 
      crateId: crateTest.id,
      deliveryDate: '3/12/21', 
      deliveryStatus: 'scheduled'
    });

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
    await models.Order.destroy({
      where: {
        id: orderTest.id
      }
    })
    connection.close();
    done();
  });

  it('can change the delivery date for scheduled delivieries', async(done) => {
    var newDate = '3/14/21'
    var orderId = orderTest.id
    
    const response = await request(server)
    .post('/')
    .send({query: `mutation { orderUpdate(deliveryDate: "${newDate}", id: ${orderId}) { id deliveryDate deliveryStatus }}`})
    .expect(200)

    expect(response.body.data.orderUpdate.deliveryDate).toBe(newDate)
    expect(response.body.data.orderUpdate.deliveryStatus).toBe('scheduled')
    done();
  })

})
