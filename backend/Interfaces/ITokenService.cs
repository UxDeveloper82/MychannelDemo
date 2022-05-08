using backendapi.Entities;

namespace backendapi.Interfaces
{
    public interface ITokenService
    {
         string CreateToken(AppUser user);
    }
}