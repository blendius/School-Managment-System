using System;

namespace Domain
{
    public class Laburatiori
    {
        public Guid Id { get; set; }
        public string Lloji { get; set; }
        public int NrPaisjeve { get; set; }
        public DateTime DataEKrijimit { get; set; }
        public Guid LendaId { get; set; }
        public Lenda Lenda { get; set; }
    }
}