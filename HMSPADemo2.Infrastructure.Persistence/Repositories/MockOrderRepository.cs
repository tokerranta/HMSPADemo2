using System.Collections.Generic;
using HMSPADemo2.Domain.Entities;

namespace HMSPADemo2.Infrastructure.Persistence.Repositories
{
    public class MockOrderRepository : IOrderRepository
    {
        public IEnumerable<Order> GetAll()
        {
            return new List<Order>
            {
                new Order { Id = 1, Description = "Test1" },
                new Order { Id = 2, Description = "Test2" },
                new Order { Id = 3, Description = "Test3" },
                new Order { Id = 4, Description = "Test4" }
            };
        }
    }
}
