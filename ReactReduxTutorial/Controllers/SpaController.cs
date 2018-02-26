using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactReduxTutorial.Controllers
{
    public class SpaController : Controller
    {
        public ActionResult Index()
        {
            return File("~/index.html", "text/html");
        }
    }
}
