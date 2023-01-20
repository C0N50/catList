$(document).ready(onReady);

function onReady () {
   // hello();
   // setInterval(hello, 10000);
   render();

   //handle addCatForm
   $('#addCatForm').on('submit', onAddCat);

   //handle deleteCatBtn - Make sure to listen to parent elements that are not altered in a render.
   $('#cat-table').on('click', '.deleteCatBtn', onDeleteCat);
}

// State Variables

let cats = [
    {name : 'Xiu Xiu', color : 'Brown', age : 4, tabi : true},
    {name : 'Paladin', color : 'Brown', age : 4, tabi : true},
    {name : 'Zeke',    color : 'Brown', age : 30, tabi : true},
    {name : 'Cheese',  color : 'Marmalade', age : 19, tabi : true},
    {name : 'Umbreon',  color : 'Black', age : 23, tabi : false},
];


function render() {
    console.log('in render()');

    $('#cat-table').empty();

    for (let cat of cats) {
        $('#cat-table').append(
            `<tr>
                <td>${cat.name}</td> 
                <td>${cat.color}</td> 
                <td>${cat.age}</td> 
                <td>${cat.tabi}</td>
                <td> <button class='deleteCatBtn'> Delete Cat 😿 </button> </td>
            </tr>`);
    }
}


function onAddCat(evt) {
    evt.preventDefault();
    console.log('In onAddCat');

    //create new cat object
    let cat = {
        name : $('#nameInput').val(),
        color : $('#colorInput').val(),
        age : Number($('#ageInput').val()),
        tabi : $('#tabiInput').is(":checked")
    };
    
    //push cat to the array
    cats.push(cat);
    console.log(cats);

    //render new page
    render();
}

function onDeleteCat() {
    console.log('onDeleteCat');
    //$(this).parent().parent().remove();

        //       btn    td      tr
    let myTR = $(this).parent().parent();
    let indexOFCat = myTR.index();
    console.log(('indexOfCat'), indexOFCat);

    cats.splice(indexOFCat, 1); // 👋🐈

    console.log('cats after removal', cats);
    render();
}




/*function hello() {
    console.log('Hello!');
    $('body').append(`<p>Hello 🐱!<p>`);
} */