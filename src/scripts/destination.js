const destinations = {
  Jalapao: {
    title: "Jalapão (TO)",
    star: 4.9,
    price: 4900,
    description: `Sabe aquele lugar praticamente selvagem, com muita aventura e
			perfeito para curtir a natureza? O Jalapão, no Tocantins,
			preenche todos esses requisitos. É um destino para quem é
			aventureiro e gosta de adrenalina e tem ganhando fama nos
			últimos anos como um dos últimos locais pouco explorados no
			Brasil.`,
    days: "7 dias",
    hotel: "Hotel Aventura br",
    location: {
      lat: -10.1707836,
      lng: -46.6591501,
    },
    img: "./img/pacages/jalapao.jpg",
  },
  Salvador: {
    title: "Salvador (BA)",
    star: 4.7,
    price: 1500,
    description: `Quem vai à Salvador, não pode deixar de fazer a visita pelo
			Memorial do Descobrimento, onde é possível ver o barco que
			trouxe Pedro Alvares Cabral em 1500, de onde ele gritou “terra à
			vista”.`,
    days: "3 dias",
    hotel: "Hotel Pedro Alvares",
    location: {
      lat: -12.9913021,
      lng: -38.5255229,
    },
    img: "./img/pacages/salvador-ba.webp",
  },
  Galinhos: {
    title: "Galinhos (RN)",
    star: 4.7,
    price: 3500,
    days: "7 dias",
    description: `As praias tranquilas de águas mornas e transparentes da península de 
		Galinhos são mais facilmente acessíveis de barco, partindo de Pratagil, que já torna o passeio mais romântico desde o começo.`,
    hotel: "Hotel Férias e você",
    location: {
      lat: -5.0942356,
      lng: -36.2745671,
    },
    img: "./img/casal.webp",
  },
  SerraDaCanastra: {
    title: "Serra da Canastra (MG)",
    star: 4.8,
    price: 1500,
    days: "4 dias",
    description: `
		Pensou em queijo, pensou em Minas Gerais, claro! Além de reservar ao viajante inúmeras paisagens e atrações 
		naturais, a Serra da Canastra, localizada a 310km de Belo Horizonte, também é conhecida pela sua excelente fabricação de queijos artesanais.
		`,
    hotel: "Hotel Aventura br",
    location: {
      lat: -20.166646,
      lng: -46.6754215,
    },
    img: "./img/pacages/jalapao.jpg",
  },
  Bonito: {
    title: "Bonito (MS)",
    star: 4.9,
    price: 3600,
    days: "4 dias",
    hotel: "Hotel Nemo",
    location: {
      lat: -21.1238793,
      lng: -56.5083537,
    },
    img: "./img/pacages/jalapao.jpg",
  },
};

const initSearch = () => {
  const destino = document.getElementById("destination");
  const printLocation = document.getElementById("container-destination");
  destino.addEventListener("change", (el) => {
    initMap(destinations[el.target.value]);
    printLocation.innerHTML = renderInfoPackages(destinations[el.target.value]);
  });
  printLocation.innerHTML = renderInfoPackages();
};
function renderInfoPackages(obj = destinations.Jalapao) {
  const { title, price, star, days, description, hotel } = obj;
  return `
	<div class="text-gray-50 text-sm mb-2">
                <span class="mr-2">${title} |</span
                ><span class="mr-2">${hotel} |</span
                ><span class="mr-2 inline-flex items-center"
                  >${star}
                  <svg
                    class="fill-current text-yellow-300 h-4 w-4 ml-1 inline"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                    />
                  </svg>
                </span>
              </div>
              <p>
                ${description}
              </p>
							<p> pacote de ${days} por apenas: </p>
              <p>12x de <span class="text-3xl text-yellow-300">${(
                price / 12
              ).toLocaleString(`pt-br`,{style: 'currency', currency: 'BRL'})}</span></p>
              <p>ou ${price.toLocaleString(`pt-br`,{style: 'currency', currency: 'BRL'})}</p>
              <button onclick="clickMe()" class="text-gray-800 bg-yellow-300 p-3 mt-2 ">
                Comprar agora
              </button>
	`;
}

function clickMe (el) {
	console.log(this)
	console.log("clicou me")
}

function initMap(
  obj = {
    location: {
      lat: -10.1707836,
      lng: -46.6591501,
    },
  }
) {
  const { location } = obj;
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: location,
    mapTypeControl: false,
    panControl: false,
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "Férias BR",
  });
}

initSearch();
