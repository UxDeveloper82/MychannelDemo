using backendapi.Entities;
using Microsoft.EntityFrameworkCore;

namespace backendapi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }

        public DbSet<Member> Members { get; set; }

        public DbSet<Contact> Contacts { get; set; }
    }
}