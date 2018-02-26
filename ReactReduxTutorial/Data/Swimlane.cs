using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxTutorial.Data
{
    public class Swimlane
    {
        public int Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Guid { get; set; }

        public string Title { get; set; }

        public Guid SprintGuid { get; set; }
        [ForeignKey("SprintGuid")]
        public Sprint Sprint { get; set; }

        public IList<SprintTask> Tasks { get; set; }
    }
}
