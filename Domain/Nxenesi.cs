using System;

namespace Domain
{
    public class Nxenesi
    {
        public Guid Id { get; set; }
        public string FullName{ get; set; }
        public string ParentName{ get; set; } //we need to make this foreign key to the table Prindi, for the moment we'll keep it as text.
        public string Class{ get; set; } //for the moment we'll keep it as text.
        //public string Grades { get; set; } we'll be added as foreign key to the relation that connects Profesori, Nxenesi and Lenda and contains the grade.
        public string Email {get; set; }
        public string Password {get; set; }
        public DateTime DateOfBirth {get; set; }
        public int YearOfRegistration { get; set; }
        public string PhoneNumber{ get; set; }
    }
}