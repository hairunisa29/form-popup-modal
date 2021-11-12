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


    let address=document.getElementById('address').value;
    let addressShow=document.getElementById('addressPreview');
    addressShow.innerHTML=address;
    console.log(address);

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

    let techValue = tech.value;
    let artValue = art.value;
    let salesValue = sales.value;
    let marketingValue = marketing.value;

    let interest=document.getElementById('interestPreview');


    if (tech.checked == true && art.checked == false && sales.checked == false && marketing.checked == false) {
        interestShow=techValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == false && art.checked == true && sales.checked == false && marketing.checked == false) {
        interestShow=artValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == false && art.checked == true && sales.checked == false && marketing.checked == false) {
        interestShow=artValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == false && art.checked == false && sales.checked == true && marketing.checked == false) {
        interestShow=salesValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == false && art.checked == false && sales.checked == false && marketing.checked == true) {
        interestShow=marketingValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == true && art.checked == true && sales.checked == false && marketing.checked == false) {
        interestShow=techValue + ", " + artValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == true && art.checked == false && sales.checked == true && marketing.checked == false) {
        interestShow=techValue + ", " + salesValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == true && art.checked == false && sales.checked == false && marketing.checked == true) {
        interestShow=techValue + ", " + marketingValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == false && art.checked == true && sales.checked == true && marketing.checked == false) {
        interestShow=artValue + ", " + salesValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == false && art.checked == true && sales.checked == false && marketing.checked == true) {
        interestShow=artValue + ", " + marketingValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == false && art.checked == false && sales.checked == true && marketing.checked == true) {
        interestShow=salesValue + ", " + marketingValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == true && art.checked == true && sales.checked == true && marketing.checked == false) {
        interestShow=techValue + ", " + artValue + ", " + salesValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == false && art.checked == true && sales.checked == true && marketing.checked == true) {
        interestShow=artValue + ", " + salesValue + ", " + marketingValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == true && art.checked == false && sales.checked == true && marketing.checked == true) {
        interestShow=techValue + ", " + salesValue + ", " + marketingValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == true && art.checked == true && sales.checked == false && marketing.checked == true) {
        interestShow=techValue + ", " + artValue + ", " + marketingValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else if (tech.checked == true && art.checked == true && sales.checked == true && marketing.checked == true) {
        interestShow=techValue + ", " + artValue + ", " + salesValue + ", " + marketingValue;
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }

    else {
        interestShow="You haven't choose any interest";
        interest.innerHTML=interestShow;
        console.log(interestShow);
    }



    // else if(art.checked == true) {
    //     let artPreview = document.getElementById('art').value;
    //     result= result +''+ artPreview;
    //     document.getElementById('result').innerHTML=result;
    //     console.log(result);
    // }
    // else if(sales.checked == true) {
    //     let salesPreview = document.getElementById('sales').value;
    //     result=result +''+ salesPreview
    //     document.getElementById('result').innerHTML=result;
    //     console.log(result);
    // }
    // else if(marketing.checked == true) {
    //     let marketingPreview = document.getElementById('marketing').value;
    //     resultresult=result +''+ marketingPreview;
    //     document.getElementById('result').innerHTML=result;
    //     console.log(result);
    // }
    

}


let loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};