using Senai.Roman.WebApi.Domains;
using Senai.Roman.WebApi.Interfaces;
using Senai.Roman.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public Usuario BuscarPorEmailESenha(LoginViewModel login)
        {
            using (RomanContext ctx = new RomanContext())
            {
                Usuario usuario = ctx.Usuario.FirstOrDefault(x => x.Email == login.Email && x.Senha == login.Senha);
                if (usuario == null)
                    return null;
                return usuario;
            }
        }
    }
}
