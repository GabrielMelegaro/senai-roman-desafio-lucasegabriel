using Senai.Roman.WebApi.Domains;
using Senai.Roman.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.WebApi.Repositories
{
    public class ProfessorRepository : IProfessorRepository
    {
        public List<Professor> Listar()
        {
            using (RomanContext ctx = new RomanContext())
            {
                return ctx.Professor.ToList();
            }
        }
    }
}
