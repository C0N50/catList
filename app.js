$(document).ready(onReady);

function onReady () {
   // hello();
   // setInterval(hello, 10000);
   render();

   $('#addCatForm').on('submit', onAddCat);
}

// State

let cats = [
    {name : 'Xiu Xiu', color : 'Brown', age : 4, tabi : true},
    {name : 'Paladin', color : 'Brown', age : 4, tabi : true},
    {name : 'Zeke',    color : 'Brown', age : 30, tabi : true},
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


function onAddCat(evt) {
    evt.preventDefault();
    console.log('In onAddCat');

    let cat = {
        name : $('#nameInput').val(),
        color : $('#colorInput').val(),
        age : Number($('#ageInput').val()),
        tabi : $('#tabiInput').is(":checked")
    }
    
    cats.push(cat);
    console.log(cats);

    $('#cat-table').empty();
    render();
}





/*function hello() {
    console.log('Hello!');
    $('body').append(`<p>Hello 🐱!<p>`);
} */