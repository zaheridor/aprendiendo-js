//class to map the R&M's Character API
class Character{
    constructor(id, name, status, species, type, gender, image, url, created){
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
        this.type = type;
        this.gender = gender;
        this.image = image;
        this.url = url;
        this.created = created;
    }
    //Getters
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get status(){
        return this._status;
    }
    get species(){
        return this._species;
    }
    get type(){
        return this._type;
    }
    get gender(){
        return this._gender;
    }
    get image(){
        return this._image;
    }
    get url(){
        return this._url;
    }
    get created(){
        return this._created;
    }
    //Setters
    set id(value){
        this._id=value;
    }
    set name(value){
        this._name=value;
    }
    set status(value){
        this._status=value;
    }
    set species(value){
        this._species=value;
    }
    set type(value){
        this._type=value;
    }
    set gender(value){
        this._gender=value;
    }
    set image(value){
        this._image=value;
    }
    set url(value){
        this._url=value;
    }
    set created(value){
        this._created=value;
    }
}

//accessing the API
var request = new XMLHttpRequest();
request.open('GET','https://rickandmortyapi.com/api/character/?page=13',true);

//getting data from API
request.onload = function(){
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status <400){
        console.log("Data count: "+data.info.count);

        data.results.forEach(c => {
            const personaje = new Character(c.id, c.name, c.status, c.species, c.type, c.gender, c.image, c.url, c.created);

            var image = document.createElement("img");
            image.setAttribute("src",personaje.image);
            image.setAttribute("height",250);
            image.setAttribute("weight",250);
            image.setAttribute("tittle",personaje.name);

            document.getElementById("container").append(image);
        });
    } else {
        console.log('error!');
    }
}

//send the request
request.send();