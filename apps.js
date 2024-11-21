window.onload = function (){
    
    var searchbutton = document.querySelector("button")
    var searchInput = document.querySelector("input")
    var input;
    var httpRequest;
    

    searchbutton.addEventListener('click', function (ele)
    {
            ele.preventDefault()
            // get request
            var input=searchInput.value.trim()
            console.log(input)
           
            httpRequest = new XMLHttpRequest()
            var url = "superheroes.php?query="+input;
            httpRequest.onreadystatechange = myFunction;
            httpRequest.open('Get', url);
            httpRequest.send();
          });

            function myFunction(){
              if (this.readyState === XMLHttpRequest.DONE)
              {
                if (this.status===200)
                {
          
                 var t= document.getElementById("result").innerHTML = this.responseText;
                 console.log(t)
                
                }
                //httpRequest.open("Get", 'superheroes.php?h='+input);
                //httpRequest.send();
              }
            }
          }