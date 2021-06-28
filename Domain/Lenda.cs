using System;
using System.Collections.Generic;

namespace Domain
{
    public class Lenda
    {
        public Guid LendaId {get;set;}
        public string EmriLendes{get;set;}
        public string Pershkrimi{get;set;}
        public string Syllabusi{get;set;}

        public DateTime DataEShtimit{get;set;}
        public ICollection<Laburatiori> Laburatoret{get;set;}

        //public Profesori Profesori{get;set;}

    }
}