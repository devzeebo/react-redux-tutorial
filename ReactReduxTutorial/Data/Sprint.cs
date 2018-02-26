using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxTutorial.Data
{
    public class Sprint
    {
        public int Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Guid { get; set; }

        public string Title { get; set; }

        public DateTime SprintStart { get; set; }
        public DateTime SprintEnd { get; set; }

        public IList<Swimlane> Swimlanes { get; set; }
    }
}
