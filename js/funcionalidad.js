let texto = document.getElementById("salida");
let btn1 = document.getElementById("btn1");
let url = document.getElementById("url");


//Funciones

const capital = () =>{
    let departamento =prompt("Escriba un departamento");
    departamento = departamento.toLowerCase();
    if (departamento === "amazonas") {
        texto.innerHTML="La capital es Leticia<br>Ingresa aqui para ver su informacion<br>";
        url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Leticia_(Colombia)">Leticia</a>'
    } else {
        if (departamento === "antioquia") {
            texto.innerHTML="La capital es Medellin<br>Ingresa aqui para ver su informacion<br>";
            url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Medell%C3%ADn">Medellin</a>'
        } else {
            if (departamento === "arauca") {
                texto.innerHTML="La capital es Arauca<br>Ingresa aqui para ver su informacion<br>";
                url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Arauca_(Colombia)">Arauca</a>'
            } else {
                if (departamento === "atlantico") {
                    texto.innerHTML="La capital es Barranquilla<br>Ingresa aqui para ver su informacion<br>";
                    url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Barranquilla">Barranquilla</a>'
                } else {
                    if (departamento === "bogota") {
                        texto.innerHTML="La capital es Bogota<br>Ingresa aqui para ver su informacion<br>";
                        url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Bogot%C3%A1">Bogota</a>'
                    } else {
                        if (departamento === "bolivar") {
                            texto.innerHTML="La capital es Cartagena<br>Ingresa aqui para ver su informacion<br>";
                            url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Cartagena_de_Indias">Cartagena</a>'
                        } else {
                            if (departamento === "boyaca") {
                                texto.innerHTML="La capital es Tunja<br>Ingresa aqui para ver su informacion<br>";
                                url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Tunja">Tunja</a>'
                            } else {
                                if (departamento === "caldas") {
                                    texto.innerHTML="La capital es Manizales<br>Ingresa aqui para ver su informacion<br>";
                                    url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Manizales">Manizales</a>'
                                } else {
                                    if (departamento === "caqueta") {
                                        texto.innerHTML="La capital es Florencia<br>Ingresa aqui para ver su informacion<br>";
                                        url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Florencia_(Caquet%C3%A1)">Florencia</a>'
                                    } else {
                                        if (departamento === "casanare") {
                                            texto.innerHTML="La capital es Yopal<br>Ingresa aqui para ver su informacion<br>";
                                            url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Yopal">Yopal</a>'
                                        } else {
                                            if (departamento === "cauca") {
                                                texto.innerHTML="La capital es Popayan<br>Ingresa aqui para ver su informacion<br>";
                                                url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Popay%C3%A1n">Popayan</a>'
                                            } else {
                                                if (departamento === "cesar") {
                                                    texto.innerHTML="La capital es Valledupar<br>Ingresa aqui para ver su informacion<br>";
                                                    url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Valledupar">Valledupar</a>'
                                                } else {
                                                    if (departamento === "choco") {
                                                        texto.innerHTML="La capital es Quibdo<br>Ingresa aqui para ver su informacion<br>";
                                                        url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Quibd%C3%B3">Quibdo</a>'
                                                    } else {
                                                        if (departamento === "cundinamarca") {
                                                            texto.innerHTML="La capital es Bogota<br>Ingresa aqui para ver su informacion<br>";
                                                            url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Cundinamarca">Bogota</a>'
                                                        } else {
                                                            if (departamento === "guainia") {
                                                                texto.innerHTML="La capital es Inirida<br>Ingresa aqui para ver su informacion<br>";
                                                                url.innerHTML= '<a href="https://es.wikipedia.org/wiki/In%C3%ADrida">Inirida</a>'
                                                            } else {
                                                                if (departamento === "guaviare") {
                                                                    texto.innerHTML="La capital es San Jose del Guaviare<br>Ingresa aqui para ver su informacion<br>";
                                                                    url.innerHTML= '<a href="https://es.wikipedia.org/wiki/San_Jos%C3%A9_del_Guaviare">San Jose del Guaviare</a>'
                                                                } else {
                                                                    if (departamento === "huila") {
                                                                        texto.innerHTML="La capital es Neiva<br>Ingresa aqui para ver su informacion<br>";
                                                                        url.innerHTML= '<a href="https://es.wikipedia.org/wiki/San_Jos%C3%A9_del_Guaviare">Neiva</a>'
                                                                    } else {
                                                                        if (departamento === "guajira") {
                                                                            texto.innerHTML="La capital es Riohacha<br>Ingresa aqui para ver su informacion<br>";
                                                                            url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Riohacha">Riohacha</a>'
                                                                        } else {
                                                                            if (departamento === "magdalena") {
                                                                                texto.innerHTML="La capital es Santa Marta<br>Ingresa aqui para ver su informacion<br>";
                                                                                url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Santa_Marta_(Colombia)">Santa Marta</a>'
                                                                            } else {
                                                                                if (departamento === "meta") {
                                                                                    texto.innerHTML="La capital es Villavicencio<br>Ingresa aqui para ver su informacion<br>";
                                                                                    url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Villavicencio">Villavicencio</a>'
                                                                                } else {
                                                                                    if (departamento === "nariño") {
                                                                                        texto.innerHTML="La capital es Nariño<br>Ingresa aqui para ver su informacion<br>";
                                                                                        url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Nari%C3%B1o_(Colombia)">Nariño</a>'
                                                                                    } else {
                                                                                        if (departamento === "norte de santander") {
                                                                                            texto.innerHTML="La capital es Cucuta<br>Ingresa aqui para ver su informacion<br>";
                                                                                            url.innerHTML= '<a href="https://es.wikipedia.org/wiki/C%C3%BAcuta">Cucuta</a>'
                                                                                        } else {
                                                                                            if (departamento === "putumayo") {
                                                                                                texto.innerHTML="La capital es Mocoa<br>Ingresa aqui para ver su informacion<br>";
                                                                                                url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Mocoa">Mocoa</a>'
                                                                                            } else {
                                                                                                if (departamento === "risaralda") {
                                                                                                    texto.innerHTML="La capital es Pereira<br>Ingresa aqui para ver su informacion<br>";
                                                                                                    url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Mocoa">Pereira</a>'
                                                                                                } else {
                                                                                                    if (departamento === "san andres") {
                                                                                                        texto.innerHTML="La capital es San Andres<br>Ingresa aqui para ver su informacion<br>";
                                                                                                        url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Isla_de_San_Andr%C3%A9s_(Colombia)">San Andres</a>'
                                                                                                    } else {
                                                                                                        if (departamento === "santander") {
                                                                                                            texto.innerHTML="La capital es Bucaramanga<br>Ingresa aqui para ver su informacion<br>";
                                                                                                            url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Bucaramanga">Bucaramanga</a>'
                                                                                                        } else {
                                                                                                            if (departamento === "tolima") {
                                                                                                                texto.innerHTML="La capital es Ibague<br>Ingresa aqui para ver su informacion<br>";
                                                                                                                url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Ibagu%C3%A9">Ibague</a>'
                                                                                                            } else {
                                                                                                                if (departamento === "valle del cauca") {
                                                                                                                    texto.innerHTML="La capital es Cali<br>Ingresa aqui para ver su informacion<br>";
                                                                                                                    url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Cali">Cali</a>'
                                                                                                                } else {
                                                                                                                    if (departamento === "vaupes") {
                                                                                                                        texto.innerHTML="La capital es Mitu<br>Ingresa aqui para ver su informacion<br>";
                                                                                                                        url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Mit%C3%BA">Mitu</a>'
                                                                                                                    } else {
                                                                                                                        if (departamento === "vichada") {
                                                                                                                            texto.innerHTML="La capital es Puerto Carreño<br>Ingresa aqui para ver su informacion<br>";
                                                                                                                            url.innerHTML= '<a href="https://es.wikipedia.org/wiki/Puerto_Carre%C3%B1o">Puerto Carreño</a>'
                                                                                                                        } else {
                                                                                                                            
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


//eventos
btn1.onclick = function(){
    capital();
}