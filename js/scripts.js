//class to map the R&M's Character API.
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

//class to map the image grid properties.
class ImageGrid{
    constructor(image,height,weight,tittle){
        this.image=image;
        this.height=height;
        this.weight=weight;
        this.tittle=tittle;
    }
    get image(){
        return this._image;
    }
    get height(){
        return this._height;
    }
    get weight(){
        return this._weight;
    }
    get tittle(){
        return this._tittle;
    }
    set image(value){
        this._image=value;
    }
    set height(value){
        this._height=value;
    }
    set weight(value){
        this._weight=value;
    }
    set tittle(value){
        this._tittle=value;
    }
}

//class to handle the API's request.
class Request{
    constructor(url){
        this.url=url;
    }
    get url(){
        return this._url;
    }
    set url(value){
        this._url=value;
    }
    handleAPI(){
        fetch(this._url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                data.results.forEach(rawCharacter => {
                    const character = new Character(rawCharacter);
                    const imageGrid = new ImageGrid(character.image,250,250,character.name);
        
                    var image = document.createElement("img");
                    image.setAttribute("src",imageGrid.image);
                    image.setAttribute("height",imageGrid.height);
                    image.setAttribute("weight",imageGrid.weight);
                    image.setAttribute("tittle",imageGrid.name);
        
                    document.getElementById("container").append(image);
                });
            });
    }
}

new Request('https://rickandmortyapi.com/api/character/').handleAPI();
