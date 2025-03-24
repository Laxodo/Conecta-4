class Scene{
    _Container = null;

    constructor(constructores){
        this._Container = constructores;
    }

    start(){
        throw new Error('Método start de la Scene(Clase base abstracta), se tiene que implementar en el hijo');
    }
    stop(){
        throw new Error('Método stop de la Scene(Clase base abstracta), se tiene que implementar en el hijo');
    }
    restart(){
        throw new Error('Método restart de la Scene(Clase base abstracta), se tiene que implementar en el hijo');
    }
}