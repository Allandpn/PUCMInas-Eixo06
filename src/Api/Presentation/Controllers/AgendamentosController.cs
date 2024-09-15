using Domain.Interfaces.Repositorys;
using Domain.Interfaces.Services;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

[Route("[controller]")]
[ApiController]
public class AgendamentosController : ControllerBase
{
    private readonly IAgendamentoService _agendamentoService;
    public AgendamentosController(IAgendamentoService agendamentoService)
    {
        _agendamentoService = agendamentoService;
    }

    [HttpGet]
    public IEnumerable<string> BuscarTodosAgendamentosAsync()
    {
        return new string[] { "value1", "value2" };
    }

    [HttpGet("{id}")]
    public string Get(int id)
    {
        return "value";
    }

    [HttpPost]
    public IActionResult Post([FromBody] AgendamentoModel input)
    {

        return Ok(input);
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
}
