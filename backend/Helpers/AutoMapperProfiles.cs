using System.Linq;
using AutoMapper;
using backend.Dtos;
using backend.Entities;
using backend.Extensions;
using backendapi.Dtos;
using backendapi.Entities;

namespace backend.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src=>
             src.Photos.FirstOrDefault(x =>x.IsMain).Url))
            .ForMember(des =>des.Age, opt =>opt.MapFrom(src=>src.DateOfBirth.CalculateAge()));
            CreateMap<Photo, PhotoDto>(); 
            CreateMap<MemberUpdateDto, AppUser>();
            CreateMap<RegisterDto, AppUser>();
            CreateMap<Message, MessageDto>()
                .ForMember(dest => dest.SenderPhotoUrl, opt => opt.MapFrom(src =>
                 src.Sender.Photos.FirstOrDefault(x => x.IsMain).Url))
                .ForMember(dest => dest.RecipientPhotoUrl, opt => opt.MapFrom(src =>
                   src.Recipient.Photos.FirstOrDefault(x => x.IsMain).Url));
        }
    }
}