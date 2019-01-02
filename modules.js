// Export par défaut
export default + expression
export default (a, b) => a + b

// Importer l'export par défaut
import variable from "module";

// Exports nommés
export + déclaration
export const x = 42
export const plus = (a, b) => a + b
export function toto () { … }

// Import nommé
import { named1, named2, ... } from "module"
import { named1 as named1bis } from "module2"

// Import de tous les nommés
import * as localObject from "module"

// a.js, b.js, index.js
export * from './a.js'
export { a, b, c } from 'module'
