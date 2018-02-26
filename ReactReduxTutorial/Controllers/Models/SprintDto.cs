using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxTutorial.Controllers.Models
{
    public class SprintDto
    {
        public Guid Guid { get; set; }

        public string Title { get; set; }

        public DateTime SprintStart { get; set; }
        public DateTime SprintEnd { get; set; }

        public IList<SwimlaneDto> Swimlanes { get; set; }
    }

    public class SwimlaneDto
    {
        public Guid Guid { get; set; }

        public string Title { get; set; }

        public int TasksToDo { get; set; }
        public int TasksInProgress { get; set; }
        public int TasksInVerify { get; set; }
        public int TasksDone { get; set; }
    }
}
