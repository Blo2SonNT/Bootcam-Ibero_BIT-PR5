var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hola asdadasdsdadas mundo con TS pepe");
var texto = "Tipo de dato de texto";
var numero = 4;
var booleano = false;
var variable = true;
variable = 2;
var arreglo = [true, "pepe", 8];
var arregloTexto = ["hola", "mundo", "con", "ts"];
var arregloNumeros = [2, 5, 7];
var arregloBoleano = [false, true, false, false, false];
var arregloEstructurado = [[5, 4, ""]];
function sumarNumero(a, b) {
    return a + b;
}
// let varVoid: void = undefined
var varnull = null;
// let varUndefined: undefined = undefined
console.log(typeof (varnull));
console.log(sumarNumero(4, 5));
function saludarusuario(nombre) {
    if (nombre === void 0) { nombre = "Pepe"; }
    return "";
}
function titarseDelPuente(persona, puente) {
    return "me tire del puente 🙃🙃";
}
function prueba(variable) {
    console.log(variable.cantidadEstudiantes);
}
prueba({ cantidadEstudiantes: 17 });
var Usuario = /** @class */ (function () {
    function Usuario(nombre, correo, edad) {
        this.nombre = nombre;
        this.correo = correo;
        this.edad = edad;
    }
    Usuario.prototype.saludando = function () {
        return "Buenas noches ".concat(this.nombre);
    };
    Usuario.prototype.mostrarEdad = function () {
        return "La edad del usuario es: ".concat(this.edad);
    };
    Usuario.prototype.mostarCorreo = function () {
        return "El correo del usuario es: ".concat(this.correo);
    };
    return Usuario;
}());
var clUsuario = new Usuario("Miguelito", "miguel@correo.com", 44);
console.log(clUsuario.saludando());
var Premio = /** @class */ (function (_super) {
    __extends(Premio, _super);
    function Premio(nombre, correo, edad, gano) {
        var _this = _super.call(this, nombre, correo, edad) || this;
        _this.gano = gano;
        return _this;
    }
    Premio.prototype.mostrarEdad = function () {
        return _super.prototype.mostrarEdad.call(this);
    };
    return Premio;
}(Usuario));
var clPremio = new Premio("Miguelito", "miguel@correo.com", 44, true);
console.log(clPremio.mostrarEdad());
