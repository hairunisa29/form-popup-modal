function popuppreview() {
    let fullName=document.getElementById('fullname').value;
    let nameShow=document.getElementById('namePreview');
    nameShow.innerHTML= fullName;
    console.log(fullName)


    let birthDate=document.getElementById('birthdate').value;
    let birthShow=document.getElementById('birthPreview');
    birthShow.innerHTML=birthDate;
    console.log(birthDate)


    let phoneNum=document.getElementById('phonenum').value;
    let phoneShow=document.getElementById('phonePreview');
    phoneShow.innerHTML=phoneNum;
    console.log(phoneNum)



    let genderValue1=document.getElementById('female').value;
    if(genderValue1 == "female"){
        let genderShow=document.getElementById('genderPreview');
        genderShow.innerHTML='Female';
        console.log(genderValue1)
    }

    let genderValue2=document.getElementById('male').value;
    if(genderValue2 == 'male'){
        let genderShow=document.getElementById('genderPreview');
        genderShow.innerHTML='Male';
        console.log(genderValue2)

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


}


let loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};