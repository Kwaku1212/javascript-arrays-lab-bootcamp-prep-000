const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var neww = [...kittens, name]
  return neww
}

function prependKitten(name) {
  var newarray = [name, ...kittens]
  return (newarray)
}

function removeLastKitten() {
  var last = [...kittens(0),...kittens(-2)]
  return las
}
