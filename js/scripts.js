//class to map the R&M's Character API
class Character{
    constructor(data){
        // We set up a try-catch block in case something goes kaput
        try {
            // We detect that the parameter is an object
            if (typeof data === 'object') {
                // If this matches, we traverse through its properties
                for (let prop in data) {
                    // `this` is an object, so you can access its props using either the
                    // brackets syntax or the dot one. The first is better for this case.
                    this[prop] = data[prop];
                }
            } else {
                // If the type doesn't match, throw an error
                throw new Error('Missing data');
            }
        } catch (error) {
            // This is string interpolation FYI
            console.error(`Something went wrong ${error}`);
        }
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

fetch('https://rickandmortyapi.com/api/character/')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Data count: "+data.info.count);

        data.results.forEach(rawCharacter => {
            const character = new Character(rawCharacter);

            var image = document.createElement("img");
            image.setAttribute("src",character.image);
            image.setAttribute("height",250);
            image.setAttribute("weight",250);
            image.setAttribute("tittle",character.name);

            document.getElementById("container").append(image);
        });
    });

/** 
Futher suggestions:

1) Replace XMLHttpRequest for Fetch, I think you'll learn a lot about promises by using it
2) Create a separate class to handle the requests, as well as the rendering of the grid. Always keep in mind SRP (single responsability principle)
3) Great work anyway! You're on the right track.

PD: The API error seems to be related to the lack of an HTTP server, use the one I suggested on the email (I just tested it and it works here)
*/
