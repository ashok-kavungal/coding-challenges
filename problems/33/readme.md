write a function getValue(object,key) that searches for a key in a nested object and returns the value of the key. if not found return null<br>

const obj1 = {
"Small cars": {
"small-diesel-car": 142,
"small-petrol-car": 154,
"small-plugin-hybrid-car": 73,
"small-electric-car": 50
},
"Medium cars": {
"medium-diesel-car": 171,
"medium-petrol-car": 192,
"medium-plugin-hybrid-car": 110,
"medium-electric-car": 58
},
"Large cars": {
"large-diesel-car": 209,
"large-petrol-car": 282,
"large-plugin-hybrid-car": 126,
"large-electric-car": 73
},
"bus": 27,
"train": 6
}

getValue('train')//6
getValue('flower')//null
