﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogProject.Models
{
    public class Teacher
    {
        //The following fields define a teacher
        public int TeacherId {get; set;}
        public string TeacherFname {get; set;}
        public string TeacherLname {get; set;}
        public string EmployeeNumber {get; set;}
        public DateTime HireDate { get; set;}
        public decimal Salary { get; set;}

    }
}