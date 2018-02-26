using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxTutorial.Data
{
    public class SprintTask
    {
        public int Id { get; set; }
        public Guid Guid { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }

        public Guid SwimlaneGuid { get; set; }
        [ForeignKey("SwimlaneGuid")]
        public Swimlane Swimlane { get; set; }

        public Status Status { get; set; }
    }

    public enum Status
    {
        Unknown = 0,
        ToDo = 1,
        InProgress = 2,
        InVerify = 3,
        Done = 4
    }
}
