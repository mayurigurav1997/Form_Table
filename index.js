

function my_func(){
    let a = document.getElementsByClassName('checkbox');  //array of checkboxes
    let total = 0;
    let count;
    for(count=0;count<a.length;count++){
        if(a[count].checked==true){
            total++;
        }
    }
    console.log(total);
    if(total < 2){
        document.getElementById('notvalid').innerHTML = "**Please select at least 2 options";
        // return false;
    }
    else if(total=>2){
        document.getElementById('notvalid').innerHTML = "";
    }
};


document.getElementById('submit').addEventListener("click",function(event){
    event.preventDefault();  //prevent the page from refresh after submit  text
    let first_name = document.getElementById('first-name');
    let last_name = document.getElementById('last-name');
    let address = document.getElementById('address');
    let pincode = document.getElementById('pincode');
    let gender = document.getElementsByClassName('gender');
    
    if(gender[0].checked==true){
        gender.value="Male";
    }
    else if(gender[1].checked==true){
        gender.value="Female";
    }
    else if(gender[2].checked==true){
        gender.value="Other";
    }
    
    let a = document.getElementsByClassName('checkbox');
    let food1 = [];

    if(a[0].checked==true){
            food1.push("Chinese");
     }
    if(a[1].checked==true){
        food1.push("Pizza");
     }
    if(a[2].checked==true){
        food1.push("Burger");
     }
    if(a[3].checked==true){
        food1.push("Momo");
     }
    if(a[4].checked==true){
        food1.push("Sandwhich");
     }
    let state = document.getElementById('state');
    let country = document.getElementById('country');
    let table = document.getElementById("table_information");

    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML = first_name.value;
    row.insertCell(1).innerHTML = last_name.value;
    row.insertCell(2).innerHTML = address.value;
    row.insertCell(3).innerHTML = pincode.value;
    row.insertCell(4).innerHTML = gender.value;
    row.insertCell(5).innerHTML = food1;
    row.insertCell(6).innerHTML = state.value;
    row.insertCell(7).innerHTML = country.value;

    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
    address.value = '';
});

