$(document).ready(onReady);

function onReady () {
   // hello();
   // setInterval(hello, 10000);
   render();
}

// State

let cats = [
    {name : 'Xiu Xiu', color : 'brown', age : 4, tabi : true},
    {name : 'Paladin', color : 'brown', age : 4, tabi : true},
    {name : 'Zeke',    color : 'brown', age : 30, tabi : true},
    {name : 'Cheese',  color : 'Marmalade', age : 19, tabi : true},
    {name : 'Umbreon',  color : 'Black', age : 23, tabi : false},
];


function render() {
    console.log('in render()');

    for (let cat of cats) {
        $('#cat-table').append(
            `<tr>
                <td>${cat.name}</td> 
                <td>${cat.color}</td> 
                <td>${cat.age}</td> 
                <td>${cat.tabi}</td>
            </tr>`);
    }
}



/*function hello() {
    console.log('Hello!');
    $('body').append(`<p>Hello 🐱!<p>`);
} */