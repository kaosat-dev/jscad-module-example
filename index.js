const scadApi = require('@jscad/scad-api').default
const {cube, sphere, cylinder} = scadApi.primitives3d
const {union, difference, intersection} = scadApi.booleanOps
const {translate} = scadApi.transformations

// NOTE : all the functions below are taken from the official examples of OpenJSCAD.org

/**
 * jscadLogo - description
 * function that generate the openjscad logo
 * @param  {type} size=10 description
 * @return {type}         description
 */
function jscadLogo (size = 10) {
  return union(
      difference(
         cube({size: 3, center: true}),
         sphere({r: 2, center: true})
      ),
      intersection(
          sphere({r: 1.3, center: true}),
          cube({size: 2.1, center: true})
      )
   ).translate([0, 0, 1.5]).scale(size)
}

function coneWithCutouts () {
  return intersection(
    difference(
      union(
        cube({size: [30, 30, 30], center: true}),
        translate([0, 0, -25],
        cube({size: [15, 15, 50], center: true}))
      ),
      union(
        cube({size: [50, 10, 10], center: true}),
        cube({size: [10, 50, 10], center: true}),
        cube({size: [10, 10, 50], center: true})
      )
    ),
    translate([0, 0, 5], cylinder({h: 50, r1: 20, r2: 5, center: true})))
}

// now any other project can re-use these
module.exports = {
  jscadLogo,
  coneWithCutouts
}
