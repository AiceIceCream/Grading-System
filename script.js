function clr(){
    sub1.value="";
    sub2.value="";
    sub3.value="";
    sub4.value="";
    sub5.value="";
    sub6.value="";
    sub7.value="";

    document.getElementById('name1').innerHTML = "";
    document.getElementById('name2').innerHTML = "";
    document.getElementById('description').innerHTML = "";
}
function ok(){
    var s1=(sub1.value)*1;
    var s2=(sub2.value)*1;
    var s3=(sub3.value)*1;
    var s4=(sub4.value)*1;
    var s5=(sub5.value)*1;
    var s6=(sub6.value)*1;
    var s7=(sub7.value)*1;
    var avg=(s1+s2+s3+s4+s5+s6+s7)/7;


    document.getElementById("name1").innerHTML="Average = " + avg;

    if (avg < 75) {
        document.getElementById("name2").innerHTML = "REMARKS: Failed!";
        document.getElementById("description").innerHTML = "DESCRIPTOR: DID NOT MEET EXPECTATION";
    } else if (avg >= 75 && avg <= 79) {
        document.getElementById("name2").innerHTML = "REMARKS: Passed!";
        document.getElementById("description").innerHTML = "DESCRIPTOR: FAIRLY SATISFACTORY";
    } else if (avg >= 80 && avg <= 84) {
        document.getElementById("name2").innerHTML = "REMARKS: Passed!";
        document.getElementById("description").innerHTML = "DESCRIPTOR: SATISFACTORY";
    } else if (avg >= 85 && avg <= 89) {
        document.getElementById("name2").innerHTML = "REMARKS: Passed!";
        document.getElementById("description").innerHTML = "DESCRIPTOR: VERY SATISFACTORY";
    } else if (avg >= 90 && avg <= 100) {
        document.getElementById("name2").innerHTML = "REMARKS: Passed!";
        document.getElementById("description").innerHTML = "DESCRIPTOR: OUTSTANDING";
    } else {
        document.getElementById("name2").innerHTML = "REMARKS: DOES NOT EXIST";
        document.getElementById("description").innerHTML = "";
    }
}