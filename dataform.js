function popuppreview() {
    let fullName=document.getElementById('fullname').value;
    let nameShow=document.getElementById('namePreview');
    nameShow.innerHTML= fullName;
    console.log(fullName)


    let birthDate=document.getElementById('birthdate').value;
    let birthShow=document.getElementById('birthPreview');
    birthShow.innerHTML=birthDate;
    console.log(birthDate);


    let phoneNum=document.getElementById('phonenum').value;
    let phoneShow=document.getElementById('phonePreview');
    phoneShow.innerHTML=phoneNum;
    console.log(phoneNum);


    // let gender1=document.getElementById('female').value;
    // if (gender1 == "female") {
    //     let genderShow=document.getElementById('genderPreview');
    //     genderShow.innerHTML=gender1;
    //     console.log(genderShow);
    // }


    // let gender2=document.getElementById('male').value;
    // if (gender2 == "male") {
    //     let genderShow=document.getElementById('genderPreview');
    //     genderShow.innerHTML=gender1;
    //     console.log(genderShow);
    // }


    let gender1=document.getElementById('female');
    let gender2=document.getElementById('male');
    // let resultGender="";
    if (gender1.checked == true) {
        let genderPreview = document.getElementById('female').value;
        resultGender=genderPreview
        document.getElementById('genderPreview').innerHTML=resultGender
        console.log(genderPreview)
    }
    else if (gender2.checked == true) {
        let genderPreview = document.getElementById('male').value;
        resultGender=genderPreview
        document.getElementById('genderPreview').innerHTML=resultGender
        console.log(genderPreview)
    }


    

    let educationValue = document.getElementById('education').value;
    if(educationValue == "diploma") {
        let educationShow = document.getElementById('educationPreview');
        educationShow.innerHTML = "Diploma";
        console.log('Diploma');
    }
    else if(educationValue == 'bachelor') {
        let educationShow = document.getElementById('educationPreview');
        educationShow.innerHTML = 'Bachelor';
        console.log('Bachelor');
    }
    else if(educationValue == 'master') {
        let educationShow = document.getElementById('educationPreview');
        educationShow.innerHTML = 'Master';
        console.log('Master');
    }
    else {
        let educationShow = document.getElementById('educationPreview');
        educationShow.innerHTML = 'PhD';
        console.log('PhD')
    }



    let tech = document.getElementById('tech');
    let art = document.getElementById('art');
    let sales = document.getElementById('sales');
    let marketing = document.getElementById('marketing');

    var result="";
    if (tech.checked == true) {
        let techPreview = document.getElementById('tech').value;
        result=techPreview;
        document.getElementById('result').innerHTML=result;
        console.log(result);
    }
    else if(art.checked == true) {
        let artPreview = document.getElementById('art').value;
        result= result +''+ artPreview;
        document.getElementById('result').innerHTML=result;
        console.log(result);
    }
    else if(sales.checked == true) {
        let salesPreview = document.getElementById('sales').value;
        result=result +''+ salesPreview
        document.getElementById('result').innerHTML=result;
        console.log(result);
    }
    else if(marketing.checked == true) {
        let marketingPreview = document.getElementById('marketing').value;
        resultresult=result +''+ marketingPreview;
        document.getElementById('result').innerHTML=result;
        console.log(result);
    }
    

}


let loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};