using Senai.Roman.WebApi.Domains;
using Senai.Roman.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.WebApi.Interfaces
{
    public interface IUsuarioRepository
    {
        Usuario BuscarPorEmailESenha(LoginViewModel login);
        void Cadastrar(Usuario usuario);
    }
}
