using System;
using System.Collections.Generic;
using System.Linq;

namespace HMSPADemo2.Application.Orders
{
    public class OrderService : IOrderService
    {
        private readonly Infrastructure.Persistence.Repositories.IOrderRepository _orderRepository;
        public OrderService(Infrastructure.Persistence.Repositories.IOrderRepository orderRepository)
        {
            if (orderRepository == null)
            {
                throw new ArgumentNullException("orderRepository");
            }
            _orderRepository = orderRepository;
        }
        public IEnumerable<OrderModel> GetAll()
        {
            return _orderRepository.GetAll().Select(o => new OrderModel
            {
                Id = o.Id,
                Description = o.Description
            });
        }

        public OrderDetailsModel GetById(int id)
        {
            var orderDetails = _orderRepository.GetById(id);
            return new OrderDetailsModel
            {
                Id = orderDetails.Id,
                Description = orderDetails.Description,
                TotalCost = orderDetails.TotalCost
            };
        }
    }
}
