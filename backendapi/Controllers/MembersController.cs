using System.Linq;
using System.Threading.Tasks;
using backendapi.Data;
using backendapi.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendapi.Controllers
{
    public class MembersController : BaseApiController
    {
        private readonly DataContext _context;
        public MembersController(DataContext context)
        {
            _context = context;

        }

        //GET: api/members
        [HttpGet]
        public IActionResult GetMembers()
        {
            var members = _context.Members.ToList();
            return Ok(members);
        }


        //GET: api/Members/5
        [HttpGet("{id}")]
        public IActionResult GetMember([FromRoute] int id) 
        {
            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }               
            
            var member = _context.Members
            .FirstOrDefault(m =>m.Id == id);
            
            if(member == null) 
               return NotFound();
            return Ok(member);   
        }
 
        //PUT: api/members/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMember(int id, Member member)
        {
            if(id != member.Id)
            {
                return BadRequest();
            }
            _context.Entry(member).State = EntityState.Modified;
           
           try
           {
              await _context.SaveChangesAsync();
           }    
           catch (DbUpdateConcurrencyException)
           {
               if(!MemberExists(id))
               {
                   return NotFound();
               }
               else
               {
                   throw;
               }
           }
           return NoContent();
        }

        //POST: api/members
        [HttpPost]
        public async Task<ActionResult<Member>> CreateMember(Member member)
        {
            _context.Members.Add(member);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMember", new {id = member.Id}, member);
        }      
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMember(int id) 
        {
            var member = await _context.Members.FindAsync(id);
            if(member == null)
               return NotFound();

            _context.Members.Remove(member);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MemberExists(int id)
        {
            return _context.Members.Any(m =>m.Id == id);
        }
    }
}