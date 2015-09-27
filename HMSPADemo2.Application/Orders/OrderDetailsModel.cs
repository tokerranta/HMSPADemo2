using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HMSPADemo2.Application.Orders
{
    public class OrderDetailsModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public decimal TotalCost { get; set; }
    }
}
