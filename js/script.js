document.getElementById('count').onclick = function() {
    var ves = document.getElementById('ves').value;
    var ploshad = document.getElementById('ploshad').value;
    var gm = 9.8;

    document.getElementById('out').innerHTML = ves * gm / ploshad + 'Па';
};