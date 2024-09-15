using mf_api_web_services.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace mf_api_web_services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ConsumosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ConsumosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Consumos.ToListAsync();
            return Ok(model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Consumos
                .Include(t => t.Veiculo)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (model == null)
                return NotFound();

            GerarLinks(model);
            return Ok(model);
        }

        [Authorize(Roles = "Usuario")]
        [HttpPost]
        public async Task<ActionResult> Create(Consumo model)
        {
           
            _context.Consumos.Add(model);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = model.Id }, model);

        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Consumo model)
        {
            if (model.Id != id)
                return BadRequest();

            var modelDb = _context.Consumos
                .AsNoTracking()
                .FirstOrDefault(x => x.Id == id);

            if (modelDb == null)
                return NotFound();

            _context.Consumos.Update(model);

            await _context.SaveChangesAsync();

            return NoContent();

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Consumos.FindAsync(id);

            if (model == null)
                return NotFound();

            _context.Consumos.Remove(model);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        private void GerarLinks(Consumo model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "DELETE"));
        }

    }
}
