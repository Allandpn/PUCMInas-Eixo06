﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace mf_api_web_services.Models
{
    [Table("VeiculoUsuarios")]
    public class VeiculoUsuarios
    {
       
        [Required]
        public int VeiculoId { get; set; }

        public Veiculo Veiculo { get; set; }

        [Required]
        public int UsuarioId { get; set; }

      
        public Usuario Usuario { get; set; }
                
    }
}
