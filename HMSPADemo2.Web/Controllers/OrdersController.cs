using HMSPADemo2.Application.Orders;
using HMSPADemo2.Infrastructure.Persistence.Repositories;
using System;
using System.Web.Http;

namespace HMSPADemo2.Web.Controllers
{
    [RoutePrefix("api")]
    public class OrdersController : ApiController
    {
        private readonly IOrderService _orderService;
        public OrdersController(IOrderService orderRepository)
        {
            if (orderRepository == null)
            {
                throw new ArgumentNullException("orderRepository");
            }
            _orderService = orderRepository;
        }

        [Route("orders")]
        public IHttpActionResult Get()
        {
            var orders = _orderService.GetAll();
            return Ok(orders);
        }

        [Route("orders/{id}")]
        public IHttpActionResult Get(int id)
        {
            var orderDetails = _orderService.GetById(id);
            return Ok(orderDetails);
        }
    }
}
