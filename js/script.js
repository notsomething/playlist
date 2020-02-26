let lists ={
    names: ["something1","something2","something3"],
    artists: ["someone1","someone2","someone3"],
};
lists.names.forEach(function (name){
    $(".lists").append("<p>" + name + "</p>")
});
lists.artists.forEach(function (people){
    $(".lists").append("<p>" + people + "</p>")
});
let songLength = [
    "length1",
    "length2",
    "length3"
];
let image = [
    "image1",
    "image2",
    "image3"
];
let link = [
    "link3",
    "link2",
    "link3"
];