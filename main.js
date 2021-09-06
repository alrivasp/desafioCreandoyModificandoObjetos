//Constructor Consultorio
const Consultorio = function(nombre, pacientes){
    let _nombre = nombre;
    this.pacientes = pacientes || [];

    //Get Nombre
    Object.defineProperty(this, "_getNombre", {
        get: function(){
            return _nombre;
        }
    });

    //set Nombre
    Object.defineProperty(this, '_setNombre', {
        set: function(nombre){
            _nombre = nombre;
        }
    });
};

Consultorio.prototype.getNombre = function(){
    return this._getNombre;
};

Consultorio.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
};

Consultorio.prototype.buscarPaciente = function(nombre){
    result = `No se encontro Paciente ${nombre}`
    this.pacientes.forEach(p => {
        if (p._getNombre == nombre){
            result = `> Paciente encontrado: ${p._getNombre} | ${p._getEdad} | ${p._getRut} | ${p._getDiagnostico}`;
        }
    });
    return result;
};

Consultorio.prototype.allPacientes = function(){
    this.pacientes.forEach(p => {
        console.log(`> Paciente: ${p._getNombre} | ${p._getEdad} | ${p._getRut} | ${p._getDiagnostico}`)
    });
};


//Constructor Paciente
const Paciente = function(nombre, edad, rut, diagnostico){
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;

    //Get Nombre
    Object.defineProperty(this, '_getNombre', {
        get: function(){
            return _nombre;
        }
    });

    //set Nombre
    Object.defineProperty(this, '_setNombre', {
        set: function(nombre){
            _nombre = nombre;
        }
    });

    //Get edad
    Object.defineProperty(this, '_getEdad', {
        get: function(){
            return _edad;
        }
    });

    //Set edad
    Object.defineProperty(this, '_setEdad', {
        set: function(edad){
            _edad = edad;
        }
    });

    //Get rut
    Object.defineProperty(this, '_getRut', {
        get: function(){
            return _rut;
        }
    });

    //Set rut
    Object.defineProperty(this, '_setRut', {
        set: function(rut){
            _rut = rut;
        }
    });

    //Get Diagnostico
    Object.defineProperty(this, '_getDiagnostico', {
        get: function(){
            return _diagnostico;
        }
    });

    //Set Diagnostico
    Object.defineProperty(this, '_setDiagnostico', {
        set: function(diagnostico){
            _diagnostico = diagnostico;
        }
    });
};

Paciente.prototype.getNombre = function(){
    return this._getNombre;
};

Paciente.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
};

Paciente.prototype.getEdad = function(){
    return this._getEdad;
};

Paciente.prototype.setEdad = function(edad){
    this._setEdad = edad;
};

Paciente.prototype.getRut = function(){
    return this._getRut;
};

Paciente.prototype.setRut = function(rut){
    this._setRut = rut;
};

Paciente.prototype.getDiagnostico = function(){
    return this._getDiagnostico;
};

Paciente.prototype.setDiagnostico = function(diagnostico){
    this._setDiagnostico = diagnostico;
};

//Nuevas Instancias
//Paciente 1
let p1 = new Paciente('Alvaro Rivas', 30, '12345678-9', 'Resfrio');
//Modificaciones
p1.setEdad(36);
console.log(`Nombre Paciente: ${p1.getNombre()}`);
console.log(`Edad Paciente: ${p1.getEdad()}`);
console.log(`Rut Paciente: ${p1.getRut()}`);
console.log(`Diagnostico Paciente: ${p1.getDiagnostico()}`);
//Paciente 2
let p2 = new Paciente('Jaime Muñoz', 36, '12345678-9', 'Gastritis');
//Modificaciones
p2.setDiagnostico('Apendicitis');
console.log(`Nombre Paciente: ${p2.getNombre()}`);
console.log(`Edad Paciente: ${p2.getEdad()}`);
console.log(`Rut Paciente: ${p2.getRut()}`);
console.log(`Diagnostico Paciente: ${p2.getDiagnostico()}`);
//Consultorio
let c1 = new Consultorio('CesFam - Santiago',[p1, p2]);
console.log(`Nombre consultorio: ${c1.getNombre()}`);
//Modificaciones
c1.setNombre('CesFam - San Miguel')
console.log(`Nombre consultorio: ${c1.getNombre()}`);
//Buscar Paciente
console.log(c1.buscarPaciente('Alexis Sanchez'));
console.log(c1.buscarPaciente('Alvaro Rivas'));
//Ver Todos
c1.allPacientes();
