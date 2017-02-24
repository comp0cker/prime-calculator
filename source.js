function ifPrime()
{
    var string = $('#number').val();
    var number = parseInt(string);



    if (Math.pow(2, number) % number == (2 % number))
        alert("prime");
    else
        alert("not prime");
}