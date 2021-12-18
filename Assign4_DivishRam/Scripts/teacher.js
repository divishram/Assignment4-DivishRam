//alert("Its connected!);

window.onload = function () {

    var formHandle = document.forms.myForm;
    console.log(formHandle);

    formHandle.onsubmit = processForm;

    //validate form
    function processForm() {

        //Get all the variables
        var TeacherFname = formHandle.teacherfname;
        var TeacherLname = formHandle.teacherlname;
        var EmployeeNumber = formHandle.employee;

        //Validate first name
        if (TeacherFname.value == "" || TeacherFname.value == null) {
            TeacherFname.style.background = "#ff0000";
            TeacherFname.focus();

            //prevents form from submitting
            return false;
        }

        //Validate last name
        if (TeacherLname.value == "" || TeacherLname.value == null) {
            TeacherLname.style.background = "#ff0000";
            TeacherLname.focus();

            //prevent form from submitting
            return false;
        }

        //Validate employee number
        if (EmployeeNumber.value == "" || EmployeeNumber.value == null) {
            EmployeeNumber.style.background = "#ff0000";
            EmployeeNumber.focus();

            //prevent form from submitting
            return false;
        }

        //submit form is validation is correct
        return true;
      
    }

}