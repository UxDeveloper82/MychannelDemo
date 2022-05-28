using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Dtos;
using backend.Entities;
using backend.Helpers;
using backendapi.Entities;

namespace backend.Interfaces
{
    public interface ILikesRepository
    {
         Task<UserLike> GetUserLike(int sourceUserId, int likedUserId);
         Task<AppUser> GetUserWithLikes(int userId);
         Task<PagedList<LikeDto>> GetUserLikes(LikesParams likesParams);

    }
}