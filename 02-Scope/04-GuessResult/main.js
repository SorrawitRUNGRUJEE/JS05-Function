let x = 1;
function func() {
    console.log(x); // *
    let x = 2;
}
func();

// error => must deaclare before use the variablr in a expression