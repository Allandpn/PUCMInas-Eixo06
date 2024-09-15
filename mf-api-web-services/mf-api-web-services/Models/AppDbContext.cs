using Microsoft.EntityFrameworkCore;

namespace mf_api_web_services.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {              
        }

        public DbSet<Veiculo> Veiculo { get; set; }

        public DbSet<Consumo> Consumos { get; set; }
    }
}
