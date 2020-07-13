## Maskify Credentials in browser

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. </br>

Your task is to write a function maskify, which changes all but the last four characters into '#'.</br>
Examples

maskify("4556364607935616") == "############5616" </br>
maskify(     "64607935616") ==      "#######5616" </br>
maskify(               "1") ==                "1" </br>
maskify(                "") ==                 "" </br>

// "What was the name of your first pet?"</br>
maskify("Skippy")                                   == "##ippy" </br>
maskify("Nananananananananananananananana Batman!") == "####################################man!"
