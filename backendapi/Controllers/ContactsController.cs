using System.Linq;
using System.Threading.Tasks;
using backendapi.Data;
using backendapi.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backendapi.Controllers
{
    public class ContactsController : BaseApiController
    {
        private readonly DataContext _context;
        public ContactsController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public ActionResult<Contact> GetContacts()
        {
            var mymessages = _context.Contacts.ToList();
            return Ok(mymessages);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetContact(int id) 
        {
            var mymessage =await _context.Contacts.FirstOrDefaultAsync(m =>m.Id == id);
            return Ok(mymessage);
        }
         
        [HttpPost]
        public async Task<IActionResult> CreateContact([FromBody] Contact contact)
        {
            if(!ModelState.IsValid)
               return BadRequest(ModelState);
            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetContact", new { id = contact.Id}, contact);
        } 

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact([FromRoute] int id)
        {
            if(!ModelState.IsValid)
               return BadRequest(ModelState);
            var mymessage = await _context.Contacts.FindAsync(id);
            if(mymessage == null)
                return NotFound();
            _context.Contacts.Remove(mymessage);
            await _context.SaveChangesAsync();
            return Ok(mymessage);        
        }

    }

}