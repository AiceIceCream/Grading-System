function displaygrade(){
    let grade = document.querySelector('#grade');
    let message = document.querySelector('#message');
    const notExist = grade.value + ": Does not Exist!";
    const Outstanding = grade.value + ": PASSED! : Outstanding";
    const Very = grade.value + " : PASSED! : Very Satisfactory";
    const Satisfactory = grade.value + " : PASSED! : Satisfactory";
    const Fairly = grade.value + " : PASSED! : Fairly Satisfactory";
    const Failed = grade.value + " : FAILED! : Did not Meet Expectations";


    if (grade.value > 100 ) grade = notExist;
    else if (grade.value >= 90) grade = Outstanding;
    else if (grade.value >= 85) grade = Very;
    else if (grade.value >= 80) grade = Satisfactory;
    else if (grade.value >= 75) grade = Fairly;
    else if (grade.value < 75 ) grade = Failed;

    message.innerHTML = grade;
}