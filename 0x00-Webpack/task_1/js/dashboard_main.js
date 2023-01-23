import $ from "jquery"
import _ from "lodash";

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>")
$('body').append('<p>Copyright - Holberton School</p>');


let count = 0;
$('button').on('click', _.debounce(function updateCounter() {
    // Do something
    count += 1;
    $("#count").html(`${count} clicks on the button`);
}, 500));
