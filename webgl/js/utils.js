
function rand(a, b) {
    return (b - a) * Math.random() + a;
}


function display(num_lifes, score) {
    document.getElementById('num-lifes').innerHTML = num_lifes;
    document.getElementById('score').innerHTML = score;
}
