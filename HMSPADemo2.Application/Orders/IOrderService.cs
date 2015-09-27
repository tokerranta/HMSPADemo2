using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMSPADemo2.Application.Orders
{
    public interface IOrderService
    {
        IEnumerable<OrderModel> GetAll();
    }
}
