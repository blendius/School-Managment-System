using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Klubet
{
    public class Details
    {
        public class Query : IRequest<Klubi>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Klubi>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Klubi> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Klubet.FindAsync(request.Id);
            }
        }
    }
}