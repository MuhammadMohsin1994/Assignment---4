function Biodata(Name, Gender, Adress, education, profession) {
    this.Name = Name;
    this.Gender = Gender;
    this.Adress = Adress;
    this.education = education;
    this.profession = profession;
}
var biodat = [];
var obj;
Biodata.prototype.Add = function () {
    
    obj = {
        OName: this.Name,
        OGender: this.Gender,
        OAdress: this.Adress,
        OEducation: this.education,
        Oprofession: this.profession,

    }
    biodat.push(obj);


}

var biodata1 = new Biodata("Muhammad Mohsin", "Male", "233", "Graduate", "Software Developer");
biodata1.Add();
var biodata2 = new Biodata("Muhammad Farhan", "Male", "234", "Intermediate", "Accountant");
biodata2.Add();
var biodata3 = new Biodata("Mehreen", "Female", "235", "Intermediate", "Architecture")
biodata3.Add();
var biodata4 = new Biodata("Arif Alvi", "Female", "236", "Matric", "Watchman");
biodata4.Add();
var biodata5 = new Biodata("Arif", "Male", "237", "Graduate", "Software Developer");
biodata5.Add();
var biodata6 = new Biodata("Haneef", "Male", "238", "Intermediate", "Accountant");
biodata6.Add();
var biodata7 = new Biodata("Salma", "Female", "239", "Intermediate", "Architecture")
biodata7.Add();
var biodata8 = new Biodata("Mahum", "Female", "240", "Matric", "Watchman");
biodata8.Add();
var biodata9 = new Biodata("Shakeel", "Male", "241", "Graduate", "Software Developer");
biodata9.Add();
var biodata10 = new Biodata("Ghafoor", "Male", "242", "Intermediate", "Accountant");
biodata10.Add();
var biodata11 = new Biodata("Mahnoor", "Female", "243", "Intermediate", "Architecture")
biodata11.Add();
var biodata12 = new Biodata("Misbah", "Female", "244", "Matric", "Watchman");
biodata12.Add();
function getdata() {
    var edu = document.getElementById("education").value;
    var prof = document.getElementById("Profession").value;
    var Gender = document.getElementById('Male').checked;
    if(Gender=true)
    {
        Gender="Male"
    }
    else
    {
        Gender="Female"
    }
    var popu = 0;
    for(var i =0;i<biodat.length;i++)
    {
    if(biodat[i]["OEducation"]==edu && biodat[i]["Oprofession"]==prof&& biodat[i]["OGender"]==Gender)    
    {
        popu++;
    }


    }
    document.write("Total Popualtion of "+ edu + " engaged in a Profession of " + prof  +"is " + popu);

}