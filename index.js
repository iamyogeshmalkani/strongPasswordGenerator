
document.getElementById("generate").onclick = function () { generateP() };
document.getElementById("copytext").onclick = function () { copytext() };
document.getElementById("save").onclick = function () { savepasswords() };
document.getElementById("generator").onclick = function () { displayc("generator-tab") };
document.getElementById("saved").onclick = function () { displayc("savedpass") };







var users = JSON.parse(localStorage.getItem("userd") || "[]");






users.map(display);

function display(item) {
   
   

    var p1 = document.createElement("p");
    
    var node1 = document.createTextNode(item.site+" :  ");
    var node2 = document.createTextNode(item.password);
    var bold = document.createElement('strong');
     bold.appendChild(node1);
  
    
    p1.appendChild(bold );
  
    p1.appendChild(node2);
   

    
    var element = document.getElementById("savedpass");
    element.appendChild(p1);
    

   
}
function displayc(str){
if(str=="generator-tab"){
    document.getElementById("savedpass").style.display = "none";
    document.getElementById("generator-tab").style.display = "block";
}
else{
  document.getElementById("savedpass").style.display = "block";
  document.getElementById("generator-tab").style.display = "none";

}

}





document.getElementById("copytext").style.visibility = "hidden";
function generate(string, l) {
    var pass = "";
    for (var i = 0; i < l; i++) {

        var ind = Math.floor(Math.random() * string.length);
        pass += string.charAt(ind);
        string.slice(ind, 1)



    }

    return pass;
}
function savepasswords() {
    var newp = document.getElementById("password").value;
    var website = document.getElementById("site").value;
   users.push({site: website,password: newp })
    localStorage.setItem('userd', JSON.stringify(users));
   


   
   

    var p1 = document.createElement("p");
    var node1 = document.createTextNode(newp);
    
    var node2 = document.createTextNode(website+" :  ");
    var bold = document.createElement('strong');
    bold.appendChild(node2); 
    
    
    p1.appendChild(bold);
    
    p1.appendChild(node1);
  
   
    var element = document.getElementById("savedpass");
    element.appendChild(p1);
   
    alert("Your password is saved successfully");
  




}

function generateP() {
    var al = document.getElementById("alphabets");
    var num = document.getElementById("numbers");
    var sp = document.getElementById("special");

    var pass = "";
    var length = document.getElementById("length").value;
    if (length < 1) {
        
    }
    else {

        if (al.checked == true && num.checked == true && sp.checked == true) {
            var alphabets = "abcdefghijklmnopqrstuvwxyz";
            var numbers = "0123456789";
            var special = "@#$!%&*?><";
           




            var temp = generate(alphabets, Math.floor(length / 3));
            
            var ind = Math.floor(Math.random() * Math.floor(length / 3));
           

            pass += temp.slice(0, ind) + temp.charAt(ind).toUpperCase() + temp.slice(ind + 1);


            pass += generate(numbers, Math.floor(length / 3));
            pass += generate(special, Math.floor(length / 3));
            pass += generate(alphabets, length % 3);
            
        }
        else if (num.checked == true && al.checked == true) {
            var alphabets = "abcdefghijklmnopqrstuvwxyz";
            var numbers = "0123456789";
           





            var temp = generate(alphabets, Math.floor(length / 2));
           
            var ind = Math.floor(Math.random() * Math.floor(length / 2));
            

            pass += temp.slice(0, ind) + temp.charAt(ind).toUpperCase() + temp.slice(ind + 1);


            pass += generate(numbers, Math.floor(length / 2));

            pass += generate(alphabets, length % 2);

        }
        else if (al.checked == true && sp.checked == true) {
            var alphabets = "abcdefghijklmnopqrstuvwxyz";
            var special = "@#$!%&*?><";
           





            var temp = generate(alphabets, Math.floor(length / 2));
            
            var ind = Math.floor(Math.random() * Math.floor(length / 2));
            

            pass += temp.slice(0, ind) + temp.charAt(ind).toUpperCase() + temp.slice(ind + 1);


            pass += generate(special, Math.floor(length / 2));

            pass += generate(alphabets, length % 2);
        }
        else if (num.checked == true && sp.checked == true) {
            var numbers = "0123456789";
            var special = "@#$!%&*?><";
           









            pass += generate(special, Math.floor(length / 2));

            pass += generate(numbers, length % 2 + length / 2);
        }
        else if (al.checked == true) {
            var alphabets = "abcdefghijklmnopqrstuvwxyz";
           






            var temp = generate(alphabets, Math.floor(length));
            
            var ind = Math.floor(Math.random() * Math.floor(length));
            

            pass += temp.slice(0, ind) + temp.charAt(ind).toUpperCase() + temp.slice(ind + 1);




        }
        else if (num.checked == true) {
           

            var numbers = "0123456789";
            pass += generate(numbers, Math.floor(length));


        }
        else {
            var special = "@#$!%&*?><";
            







            pass += generate(special, Math.floor(length));



        }

    }





    pass = pass.split('').sort(function () { return 0.5 - Math.random() }).join('');





    document.getElementById("password").value = pass;






    document.getElementById("copytext").style.visibility = "visible";
    document.getElementById("password").style.visibility = "visible";
    document.getElementById("save").style.visibility = "visible";
    document.getElementById("site").style.visibility = "visible";


}
function copytext() {
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    




}
