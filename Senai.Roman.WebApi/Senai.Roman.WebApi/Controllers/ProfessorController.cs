using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Roman.WebApi.Interfaces;
using Senai.Roman.WebApi.Repositories;

namespace Senai.Roman.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ProfessorController : ControllerBase
    {
       private IProfessorRepository ProfessoresRepository { get; set; }

       public ProfessorController()
       {
            ProfessoresRepository = new ProfessorRepository();
       }
       [HttpGet]
       public IActionResult Listar()
       {
            return Ok(ProfessoresRepository.Listar());
       }
    }
}