document.getElementById('translate').onclick = function() {
    var smk = document.getElementById('smk').value;
    var mk = 10000;

    document.getElementById('outm').innerHTML = smk / mk;
};

document.getElementById('count').onclick = function() {
    var ves = document.getElementById('ves').value;
    var ploshad = document.getElementById('ploshad').value;
    var gm = 9.8;

    document.getElementById('out').innerHTML = ves * gm / ploshad + 'Па';
};