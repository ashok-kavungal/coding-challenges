write a function getValue(object,key) that searches for a key in a nested object and returns the value of the key. if not found return null<br>

const obj1 = {<br>
"Small cars": {<br>
"small-diesel-car": 142,<br>
"small-petrol-car": 154,<br>
"small-plugin-hybrid-car": 73,<br>
"small-electric-car": 50<br><br>
},<br>
"Medium cars": {<br>
"medium-diesel-car": 171,<br>
"medium-petrol-car": 192,<br>
"medium-plugin-hybrid-car": 110,<br>
"medium-electric-car": 58<br>
},<br>
"Large cars": {<br>
"large-diesel-car": 209,<br>
"large-petrol-car": 282,<br>
"large-plugin-hybrid-car": 126,<br>
"large-electric-car": 73<br>
},<br>
"bus": 27,<br>
"train": 6<br>
}<br>

getValue('train')//6<br>
getValue('flower')//null<br>
