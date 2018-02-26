using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxTutorial.Controllers.Models
{
    public class CreateSprintModel
    {
        [BindRequired]
        public string Title { get; set; }
        [BindRequired]
        public DateTime Start { get; set; }
        [BindRequired]
        public DateTime End { get; set; }
    }
}
