//RESUELVE TUS EJERCICIOS AQUI
var url = "";
/**
 * Función para conectar con una api mediante su URL.
 * @async  
 * @returns {Promise<data>}
 */
const connect = async (url) => {
  try {
    const resp = await fetch(url,{});
    //console.log(resp);
    if (resp.ok) {
      const data = await resp.json();
      //console.log(data);
      return data;
    } else {
      throw 'Este es el error';
    }

  } catch (error) {
    throw error + ' tenemos que gestionar este error';
  }
};

/* ====================================================== getAllBreeds ====================================================== */
/**
 * Función para obtener un array de strings con todas las razas de perro
 * @async  
 * @returns {Promise<Array<Object>>}
 */
const getAllBreeds = async() =>{
    try {
        url = "https://dog.ceo/api/breeds/list/all"
        const arrayPerros = await connect(url);
        //console.log(arrayPerros);
        const breeds = Object.keys(arrayPerros.message);
        //breeds.forEach((breed) => console.log(breed));
        return breeds;
        
    } catch (error) {
        throw console.log("ERROR");
    }
}
getAllBreeds();

/* ====================================================== getRandomDog ====================================================== */
/**
 * Función para obtener una imagen perro aleatorio.
 * @async  
 * @returns {Promise<string>}
 */
const getRandomDog = async() =>{
    try {
        url = "https://dog.ceo/api/breeds/image/random";
        const perro = await connect(url);
        const breed = perro.message;
        return breed;
        
    } catch (error) {
        throw console.log("ERROR");
    }
}
getRandomDog();


/* ====================================================== getAllImagesByBreed ====================================================== */
/**
 * Función para obtener todas las imagenes de la raza komondor.
 * @async  
 * @returns {Promise<Array<Object>>}
 */
const getAllImagesByBreed = async() =>{
    try {
        url = "https://dog.ceo/api/breed/komondor/images";
        const listaFotos = await connect(url);
        return listaFotos.message;
        
    } catch (error) {
        throw console.log("ERROR");
    }
}
getAllImagesByBreed();


/* ====================================================== getAllImagesByBreed2(breed) ====================================================== */
/**
 * Función para obtener todas las imagenes de una raza. 
 * @async  
 * @param {Object} perro 
 * @returns {Promise<string>}
 */
const getAllImagesByBreed2 = async(perro) =>{
    try {
        url = `https://dog.ceo/api/breed/${perro}/images`;
        const listaFotos = await connect(url);
        return listaFotos.message;
        
    } catch (error) {
        throw console.log("ERROR");
    }
}
getAllImagesByBreed2("komondor");

/*======================================================================================================================
                                                    GITHUB API
  ======================================================================================================================*/
/**
 * Función para conectar con una api mediante su URL.
 * @async  
 * @param {string} url 
 * @returns {Promise<*>}
 */
  const connectGitHub = async (url) => {
  try {
    const resp = await fetch(url,{});
    //console.log(resp);
    if (resp.ok) {
      const data = await resp.json();
      //console.log(data);
      return data;
    } else {
      throw 'Este es el error';
    }

  } catch (error) {
    throw error + ' tenemos que gestionar este error';
  }
};

/* ====================================================== getGitHubUserProfile(username) ====================================================== */
/**
 * Función para obtener el perfil de un usuario.
 * @async  
 * @param {*} username 
 * @returns {Promise<Object>}
 */
const getGitHubUserProfile = async (username) => {
    try {
        url = `https://api.github.com/users/${username}`;
        const usuario = await connectGitHub(url);
        console.log(usuario);
        return usuario;
        
    } catch (error) {
        throw console.log("ERROR");
    }
}


/* ====================================================== printGithubUserProfile(username) ====================================================== */
/**
 * funcion que devuelve una promesa con datos de usuario
 * @param {Object} username 
 * @returns {Promise<Object>}
 */
const printGithubUserProfile = async (username) => {
    try {
        url = `https://api.github.com/users/${username}`;
        const usuario = await connectGitHub(url);
        console.log(usuario);
        const usuarioSimple = {
            img: usuario.avatar_url,
            name: usuario.name,
        }
        //pintarEnDom(usuario);
        return usuarioSimple;
        
    } catch (error) {
        throw console.log("ERROR");
    }
}

const body = document.querySelector("body")
/**
 * Funcion para pintar en el DOM un usuario.
 * @param {usuario} usuario 
 */
const pintarEnDom = (usuario) => {
    const cardHTML = `
        <section>
            <img src="${usuario.img}" alt="imagen de usuario">
            <p>Nombre del usuario: ${usuario.name}</p>
        </section>`;
    body.append(cardHTML);
}

/* ====================================================== getAndPrintGitHubUserProfile(username) ====================================================== */
/**
 * Función para obtener y printear el perfil de un usuario.
 * @async  
 * @param {*} username 
 * @returns {Promise<string>} 
 */
const getAndPrintGitHubUserProfile = async (username) => {
    try {
        url = `https://api.github.com/users/${username}`;
        const usuario = await connectGitHub(url);
        const cardHTML = `
            <section>
                <img src="${usuario.avatar_url}" alt="${usuario.name}">
                <h1>${usuario.name}</h1>
                <p>Public repos: ${usuario.public_repos}</p>
            </section>`;
        return cardHTML;
    } catch (error) {
        throw console.log("ERROR");
    }
}

/* ====================================================== getAndPrintGitHubUserProfile(username) PART 2 ====================================================== */
const crearElementoDom = async (username) => {
}


/* ====================================================== fetchGithubUsers(userNames) ====================================================== */
/**
 * Función para obtener la imagen de un pokemon random.
 * @async  
 * @param {*} userNames 
 * @returns {Promise<listaPromesas>} 
 */
const fetchGithubUsers = async (userNames) => {
    try {
        const listaPromesas = userNames.map((name) => {
            url = `https://api.github.com/users/${name}`;
            return connectGitHub(url); // devuelve una promesa
        });
        const responses = await Promise.all(listaPromesas);
        responses.forEach((user) => {
        console.log(user.name, user.html_url);
        });
        return responses;
    } catch (error) {
        throw console.log("ERROR");
    }
}