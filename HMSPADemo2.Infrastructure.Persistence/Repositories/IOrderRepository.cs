using HMSPADemo2.Domain.Entities;
using System.Collections.Generic;

namespace HMSPADemo2.Infrastructure.Persistence.Repositories
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetAll();
        OrderDetails GetById(int id);
    }
}
