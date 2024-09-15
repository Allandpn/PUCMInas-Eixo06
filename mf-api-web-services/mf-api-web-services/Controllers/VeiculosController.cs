using mf_api_web_services.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace mf_api_web_services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeiculosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VeiculosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Veiculos.ToListAsync();
            return Ok(model);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Veiculos
                .Include(t => t.Usuarios).ThenInclude(t => t.Usuario)
                .Include(t => t.Consumos)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (model == null) 
                return NotFound();

            GerarLinks(model);
            return Ok(model);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Veiculo model)
        {
            if (model.AnoModelo <= 1900 && model.AnoFabricacao <= 1900)
            {
                return BadRequest(new { message = "Ano de Fabricação e Ano do Modelo devem ser maiores do que 1900" });
            }

            _context.Veiculos.Add(model);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = model.Id }, model);

        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Veiculo model)
        {
            if (model.Id != id)
                return BadRequest();

            var modelDb = _context.Veiculos
                .AsNoTracking()
                .FirstOrDefault(x => x.Id == id);

            if (modelDb == null)
                return NotFound();

            _context.Veiculos.Update(model);

            await _context.SaveChangesAsync();

            return NoContent();

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Veiculos.FindAsync(id);

            if (model == null)
                return NotFound();

            _context.Veiculos.Remove(model);

            await _context.SaveChangesAsync();
            
            return NoContent();
        }

        private void GerarLinks(Veiculo model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "DELETE"));
        }

        [HttpPost("{id}/usuarios")]
        public async Task<ActionResult> AddUsuario(int id, VeiculoUsuarios model)
        {
            if (id != model.VeiculoId)
                return BadRequest();

            _context.VeiculoUsuarios.Add(model);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(AddUsuario), new { id = model.VeiculoId }, model);

        }

        [HttpDelete("{id}/usuarios/{usuarioId}")]
        public async Task<ActionResult> DeleteUsuario(int id, int usuarioId)
        {
            var model = await _context.VeiculoUsuarios
                .Where(c => c.VeiculoId == id && c.UsuarioId == usuarioId)
                .FirstOrDefaultAsync();

            if (model == null)
                return NotFound();

            _context.VeiculoUsuarios.Remove(model);

            await _context.SaveChangesAsync();

            return NoContent();

        }

    }
}
