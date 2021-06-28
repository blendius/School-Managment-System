using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Paralelet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle (Command request, CancellationToken cancellationToken)
            {
                var paralelja = await _context.Paralelet.FindAsync(request.Id);
                _context.Remove(paralelja);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}