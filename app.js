////////////////assignment1///////////////////////

var a = +prompt("type your tabel");

for (var repeat = 1; repeat <= 10; repeat++) {
    document.write(a + " X " + repeat + " = " + a * repeat + "<br>")
}

document.write("<br><br>")

////////////////assignment2///////////////////////


function diamond(n) {
    n = parseInt(n, 10);
    if (n % 2 == 0) {
        alert("Odd numbers only!");
        return false;
    }

    document.write("<pre>");

    // top
    for (i = 1; i <= n; i += 2) {
        for (s = 0; s < (n - i / 2 - n / 2); s++) { // -n/2 positions diamond pattern at left hand edge of page
            document.write(" ");
        }
        for (j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>")
    }

    // bottom
    for (i = n - 2; i >= 0; i = i - 2) {
        for (s = 0; s < (n - i / 2 - n / 2); s++) {
            document.write(" ");
        }
        for (j = 1; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>")
    }

    document.write("</pre>");
}

diamond(9);





