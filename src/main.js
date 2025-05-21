import './style/main.scss';
import $ from 'jquery';
import { FaDiscord } from "react-icons/fa6";

$('#app').append(`
  <header>  
    <nav>
      <a href="." class="logo">
        <img src="./public/images/logo.png">
      </a>
      <ul>
        <li><a href="#">Streameur</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Connexion</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section id="acceuil">
      <div class="container">
        <div class="img_preview"></div>
          <div class="information">
              <h1>Une éxperience unique</h1>
              <h3>Offre une expérience unique à tes spectateurs en animant ton live avec des filtres et du contenu interactif !</h3>

              <button class="join-starea">
                crée un compte
              </button>
              <div class="separator">OU</div>
              <button class="join-discord">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>
                notre discord
              </button>
          </div>
      </div>
      <div class="wave">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="display: block; width: 100%; height: 80px;">
          <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="fill: #ffffff;"></path>
        </svg>
      </div>
    </section>
    <section id="streameurs">
      <div class="container">
        <div class="title">
          ils nous font confiance
        </div>
        <div class="container-carrousel">
          <div class="card" data-name="${data_stream[0].pseudo}" data-id="0">
            <div class="card_presentation">
              <div class="profil_picture">
                  <img src="${data_stream[0].picture}">
              </div>
              <div class="profil_name">
                ${data_stream[0].pseudo}
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <div class="card_body">
              <div class="message">
                <div class="chevron">
                  <svg stroke="#595656" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M11 7l-5 5l5 5"></path><path d="M17 7l-5 5l5 5"></path></svg>
                </div>
                <span>${data_stream[0].message}</span>
                <div class="chevron chevron-end">
                  <svg stroke="#595656" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M7 7l5 5l-5 5"></path><path d="M13 7l5 5l-5 5"></path></svg>
                </div>
              </div>
              <div class="reseau">
                streameur ${data_stream[0].platform} <a class="${data_stream[0].platform}" target="_blank" href="${data_stream[0].url}">@${data_stream[0].pseudo}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="container_line"></div>
      </div>
      <div class="wave">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="display: block; width: 100%; height: 80px;">
          <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="fill: #353131;"></path>
        </svg>
      </div>
    </section>
  </main>
  <footer>

  </footer>
`);

// observateur
$(window).on('scroll', function () {
  let $el = $('.ma-div');
  let windowBottom = $(window).scrollTop() + $(window).height();
  let elTop = $el.offset().top;

  if (windowBottom > elTop) {
    $el.addClass('visible');
    dejaVu = true; // pour ne le faire qu'une fois
  }
});

// CAROUSEL STREAMEUR

const go_carousel = () => {
  setTimeout(() => {
    const name = $('.card').data('name');
    const id = $('.card').data('id');

    $(`.card[data-name="${name}"]`).addClass('switch_left');
    $(`.card[data-name="${name}"]`).removeClass('switch_right');
    setTimeout(() => {
      $(`.card[data-name="${name}"]`).remove();
      create_new_card(id);
    }, 1200)
  }, 5000)
}
const create_new_card = (old_id) =>{
  let id = old_id + 1;

  if(id > data_stream.length - 1) id = 0;

  const card = `
    <div class="card switch_right" data-name="${data_stream[id].pseudo}" data-id="${id}">
            <div class="card_presentation">
              <div class="profil_picture">
                  <img src="${data_stream[id].picture}">
              </div>
              <div class="profil_name">
                ${data_stream[id].pseudo}
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <div class="card_body">
              <div class="message">
                <div class="chevron">
                  <svg stroke="#595656" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M11 7l-5 5l5 5"></path><path d="M17 7l-5 5l5 5"></path></svg>
                </div>
                <span>${data_stream[id].message}</span>
                <div class="chevron chevron-end">
                  <svg stroke="#595656" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M7 7l5 5l-5 5"></path><path d="M13 7l5 5l-5 5"></path></svg>
                </div>
              </div>
              <div class="reseau">
                streameur ${data_stream[id].platform} <a class="${data_stream[id].platform}" target="_blank" href="${data_stream[id].url}">@${data_stream[id].pseudo}</a>
              </div>
            </div>
          </div>
  `;

  $('.container-carrousel').append(card);

  go_carousel();
}
const go_line_carousel = () => {
  for(let i = 0; i < data_stream.length; i++){
    if(i <= 6){
      const streameur = `<div class="streameur">
            <div class="picture">
              <img src="${data_stream[i].picture}">
            </div>
            <div class="pseudo">
              ${data_stream[i].pseudo}
            </div>
          </div>`;

        $('.container_line').append(streameur);
    }
  }
}
go_carousel();
go_line_carousel();