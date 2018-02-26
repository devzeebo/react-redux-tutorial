using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactReduxTutorial.Controllers.Models;
using ReactReduxTutorial.Data;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxTutorial.Controllers
{
    [Route("api/[controller]")]
    public class SprintsController : Controller
    {
        private readonly DataContext _db;
        public SprintsController(DataContext db)
        {
            _db = db;
        }

        [HttpGet, Route("")]
        public async Task<IEnumerable<Sprint>> Get()
        {
            return await _db.Sprints.ToListAsync();
        }

        [HttpGet, Route("{guid:guid}")]
        public async Task<ActionResult> Get(Guid guid)
        {
            var sprint = await _db.Sprints
                .Select(it => new SprintDto
                {
                    Guid = it.Guid,
                    SprintStart = it.SprintStart,
                    SprintEnd = it.SprintEnd,
                    Title = it.Title,
                    Swimlanes = it.Swimlanes.Select(sl => new SwimlaneDto
                    {
                        Guid = sl.Guid,
                        Title = sl.Title,
                        TasksToDo = sl.Tasks.Count(t => t.Status == Status.ToDo),
                        TasksInProgress = sl.Tasks.Count(t => t.Status == Status.InProgress),
                        TasksInVerify = sl.Tasks.Count(t => t.Status == Status.InVerify),
                        TasksDone = sl.Tasks.Count(t => t.Status == Status.Done)
                    }).ToList()
                }).FirstOrDefaultAsync(it => it.Guid == guid);
            
            if (sprint == null)
            {
                return NotFound();
            }

            return Ok(sprint);
        }

        [HttpPost, Route("")]
        public async Task<ActionResult> Create([FromBody]CreateSprintModel model)
        {
            if (model.Title == default(string)) return BadRequest("title cannot be empty");
            if (model.Start == default(DateTime)) return BadRequest("start cannot be empty");
            if (model.End == default(DateTime)) return BadRequest("end cannot be empty");

            var sprint = new Sprint { Title = model.Title, SprintStart = model.Start, SprintEnd = model.End };
            _db.Sprints.Add(sprint);
            await _db.SaveChangesAsync();

            return Created(Url.Action("Get", "Sprints", new { guid = sprint.Guid }), sprint);
        }

        [HttpDelete, Route("{guid}")]
        public async Task<ActionResult> Delete(Guid guid)
        {
            var sprint = await _db.Sprints.FirstOrDefaultAsync(it => it.Guid == guid);
            _db.Sprints.Remove(sprint);
            await _db.SaveChangesAsync();

            return Ok();
        }

        [HttpGet, Route("{guid}/swimlanes")]
        public async Task<ActionResult> GetSwimlanes(Guid guid)
        {
            var swimlanes = await _db.Sprints
                .Where(it => it.Guid == guid)
                .SelectMany(it => it.Swimlanes)
                .ToListAsync();

            if (swimlanes == null)
            {
                return NotFound();
            }

            return Ok(swimlanes);
        }

        [HttpPost, Route("{guid}/swimlanes")]
        public async Task<ActionResult> AddSwimlane(Guid guid, [FromBody]string title)
        {
            var swimlane = new Swimlane { SprintGuid = guid, Title = title };
            _db.Swimlanes.Add(swimlane);
            await _db.SaveChangesAsync();

            return Created(Url.Action("Get", "Swimlanes", new { guid = swimlane.Guid }), swimlane);
        }
    }
}
