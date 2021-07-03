using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Autobusat
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Autobusi Autobusi { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var autobusi = await _context.Autobusat.FindAsync(request.Autobusi.targatId);

                _mapper.Map(request.Autobusi, autobusi);

                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }
    }
}