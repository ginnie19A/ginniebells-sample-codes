function showMessage(){
    var name = document.getElementById("name").value;
    var display_name = document.getElementById('display_name');
    display_name.innerHTML= name;
    var age = document.getElementById("age").value;
    var display_age=document.getElementById('display_age');
    display_age.innerHTML= age;
    var gender = document.querySelector('input[name=gender]:checked').value;
    var result =document.getElementById('result');
    result.innerHTML = gender;
}

export{
    showMessage
}