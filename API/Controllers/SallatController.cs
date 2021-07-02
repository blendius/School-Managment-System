using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Sallat;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class SallatController : BaseApiController
    {   
        [HttpGet]
        public async Task<ActionResult<List<Salla>>> GetSallat()
        {
            return await Mediator.Send(new List.Query());
        }
        
        [HttpGet("{id}")]   
        public async Task<ActionResult<Salla>> GetSalla(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }

        [HttpPost]
        public async Task <IActionResult> CreateSalla(Salla salla)
        {
            return Ok(await Mediator.Send(new Create.Command{Salla=salla}));
        }

        [HttpPut("{id}")]
         public async Task <IActionResult> EditSalla(Guid id ,Salla salla)
        {
            salla.SallaId=id;
            return Ok(await Mediator.Send(new Edit.Command{Salla=salla}));
        }
        [HttpDelete("{id}")]
        public async Task <IActionResult> DeleteSalla(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id=id}));
        }
    }
}