using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactReduxTutorial.Controllers.Models;
using ReactReduxTutorial.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxTutorial.Controllers
{
    [Route("api/[controller]")]
    public class SwimlanesController : Controller
    {
        private readonly DataContext _db;
        public SwimlanesController(DataContext db)
        {
            _db = db;
        }

        [HttpGet, Route("{guid}")]
        public async Task<ActionResult> Get(Guid guid)
        {
            var swimlane = await _db.Swimlanes
                                    .Where(it => it.Guid == guid)
                                    .Select(it => new
                                    {
                                        it.Guid,
                                        it.Title,
                                        Tasks = it.Tasks.Select(task => new
                                        {
                                            task.Guid,
                                            task.Title,
                                            task.Description,
                                            task.Status
                                        }).ToList()
                                    })
                                    .FirstOrDefaultAsync();

            if (swimlane == null)
            {
                return NotFound();
            }
            return Ok(swimlane);
        }

        [HttpPost, Route("{guid}/tasks")]
        public async Task<SprintTask> AddTask(Guid guid, [FromBody]CreateTaskModel model)
        {
            var task = new SprintTask { SwimlaneGuid = guid, Title = model.Title, Description = model.Description };
            _db.Tasks.Add(task);
            await _db.SaveChangesAsync();

            return task;
        }
    }
}
