//RESUELVE TUS EJERCICIOS AQUI
var url = "";
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
const pintarEnDom = (usuario) => {
    const cardHTML = `
        <section>
            <img src="${usuario.img}" alt="imagen de usuario">
            <p>Nombre del usuario: ${usuario.name}</p>
        </section>`;
    body.append(cardHTML);
}

/* ====================================================== getAndPrintGitHubUserProfile(username) ====================================================== */
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