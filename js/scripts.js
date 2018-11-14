//accessing the API
var request = new XMLHttpRequest();
request.open('GET','https://rickandmortyapi.com/api/character',true);

//getting data from API
request.onload = function(){
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status <400){
        console.log(data.info.count);

        data.results.forEach(c => {
            var image = document.createElement("img");
            image.setAttribute("src",c.image);
            image.setAttribute("height",250);
            image.setAttribute("weight",250);
            image.setAttribute("tittle",c.name);
            document.getElementById("container").append(image);
        });
    } else {
        console.log('error!');
    }
}

//send the request
request.send();