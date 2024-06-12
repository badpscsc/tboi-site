/*VOLTA AO TOPO*/
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('active', window.scrollY > 400)
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

/*PLAY ÁUDIO AO CLICAR NO CORAÇÃO CINZA*/
document.addEventListener('DOMContentLoaded', function () {
    var imagem = document.getElementById('imagem');
    var audio = document.getElementById('audio');

    imagem.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0; // Isso reinicia o áudio se já estiver reproduzindo
        }
    });
});

/*TROCA PRA PÁGINA SOBRE MIM*/
function funk() {
    window.open("paginas/sobremim.html", "_self");
}

/*VOLTAR PARA PÁGINA ANTERIOR*/
function goBack() {
    window.history.back();
}


/*FADE PARA O ÁUDIO INICIAR BAIXO*/
window.addEventListener('load', function () {
    var audio = document.getElementById('background-audio');
    var fadeDuration = 3000; // Duração do fade em milissegundos
    var fadeInterval = 50; // Intervalo entre ajustes de volume em milissegundos
    var volumeStep = fadeInterval / fadeDuration; // Incremento de volume a cada passo

    function fadeIn() {
        var volume = 0;
        audio.volume = volume;
        audio.play();

        var fadeInInterval = setInterval(function () {
            if (volume < 1) {
                volume += volumeStep;
                if (volume > 1) volume = 1;
                audio.volume = volume;
            } else {
                clearInterval(fadeInInterval);
            }
        }, fadeInterval);
    }

    function fadeOut() {
        var volume = audio.volume;

        var fadeOutInterval = setInterval(function () {
            if (volume > 0) {
                volume -= volumeStep;
                if (volume < 0) volume = 0;
                audio.volume = volume;
            } else {
                clearInterval(fadeOutInterval);
                audio.pause();
            }
        }, fadeInterval);
    }

    // Inicia o fade-in ao carregar a página
    fadeIn();

    // Inicia o fade-out alguns segundos antes do áudio terminar
    audio.addEventListener('timeupdate', function () {
        var timeLeft = audio.duration - audio.currentTime;
        if (timeLeft <= (fadeDuration / 1000)) {
            fadeOut();
        }
    });
});

/*CARROSSEL DE IMAGENS PARA PERSONAGENS PRINCIPAIS*/

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel img");
    const info = document.getElementById("character-info");

    let currentIndex = 0;

    const characters = [
        {
            name: "Isaac<br>( 1/17 )",
            info: "Isaac é o personagem principal da série, retornando do The Binding of Isaac original de 2011. Isaac é o único personagem desbloqueado por padrão.<br>Isaac começa com três contêineres Red Heart e uma bomba.<br>Ele também começará com o D6 assim que for desbloqueado (depois de derrotar Isaac(BOSS) como ???).",
        },
        {
            name: "Magdalene<br>( 2/17 )",
            info: "Madalena, ou Maggy, é uma personagem desbloqueada ao obter sete ou mais recipientes de coração de uma vez em uma corrida.<br>Madalena é mostrada como Isaac usando uma peruca amarela.<br>Madalena começa com quatro recipientes de coração vermelho e o Coração Yum.<br>(em Afterbirth †) Madalena começa com uma pílula Speed ​​​​Up após completar o desafio do Primeiro de Abril.<br>(em Arrependimento) Ela começa com uma pílula de Saúde Plena após completar o desafio do Primeiro de Abril. Tanto Full Health quanto Health Up estão garantidos na rotação de comprimidos da corrida.",
        },
        {
            name: "Cain<br>( 3/17 )",
            info: "Caim é um personagem desbloqueado ao obter 55 ou mais moedas de uma vez em uma corrida.<br>Cain começa com dois recipientes Red Heart, uma Key e Lucky Foot.<br>(exceto em Rebirth) Cain também começa com uma bugiganga de clipe de papel após 68 moedas terem sido doadas para a Máquina de Doação de Ganância.<br>(em Repentance) Lucky Foot agora transforma pílulas ruins em pílulas boas (semelhante ao PHD, embora não diga o efeito da pílula).",
        },
        {
            name: "Judas<br>( 4/17 )",
            info: "Judas é um personagem desbloqueado após derrotar Satanás pela primeira vez. Judas começa com um recipiente de coração vermelho e tem O Livro de Belial ao começar, além de 3 moedas. Judas também tem um multiplicador de dano de 1,35x.",
        },
        {
            name: "???<br>( 5/17 )",
            info: "???, também conhecido como Blue Baby, é um personagem desbloqueado ao derrotar Mom's Heart dez vezes.<br>Ele começa com três Soul Hearts, e seu medidor de saúde é o único que ele não pode ganhar recipientes de coração vermelho.<br>Se um item conceder a ele um recipiente de coração vermelho (incluindo um vazio), ele adiciona um Soul Heart.<br>Embora ele não tenha itens iniciais passivos, ele aparece com The Poop.",
        },
        {
            name: "Eve<br>( 6/17 )",
            info: "Eve é uma personagem desbloqueada ao vencer dois andares seguidos sem coletar nenhum coração. Eve começa com dois recipientes Red Heart, Whore of Babylon e Dead Bird.<br>(exceto em Rebirth) Eve também começará com a Razor Blade ao doar 439 moedas para a Greed Donation Machine.<br>(em Rebirth e Afterbirth †) No entanto, se a Lâmina Navalha não tiver sido desbloqueada ao derrotar Satanás com Eva, ela não começará com a Lâmina Navalha até que ambas as condições tenham sido cumpridas.",
        },
        {
            name: "Samson<br>( 7/17 )",
            info: "Samson é um personagem desbloqueado ao vencer dois andares seguidos sem sofrer nenhum dano. Samson começa com 3 recipientes Red Heart e Bloody Lust. Cada vez que Samson sofre dano, ele recebe um aumento de dano, até um máximo de 6 vezes. O aumento de dano é reiniciado quando ele desce um andar.<br>(em Afterbirth † e Arrependimento) Samson começará com a bugiganga Child's Heart após completar o desafio Ultra Hard.",
        },
        {
            name: "Azazel<br>( 8/17 )",
            info: "Azazel é um personagem desbloqueado ao fazer três acordos com o Diabo em uma única corrida. Azazel começa com uma versão de curto alcance de Brimstone que causa dano (exceto em Repentance) 13 vezes em um segundo (em Repentance) 9 vezes em um segundo, a habilidade de voar, 0 - A carta do Louco e três Corações Negros sem qualquer recipientes regulares Red Heart; no entanto, ao contrário de ??? e (em Repentance) Dark Judas / Tainted Judas, Azazel ainda pode obter contêineres Red Heart com itens.",
        },
        {
            name: "Lazarus<br>( 9/17 )",
            info: "Lazarus é um personagem desbloqueado ao ter quatro ou mais Soul Hearts (ou Black Hearts) ao mesmo tempo durante uma corrida. Ele foi apresentado em The Binding of Isaac: Rebirth. Ele começa com três recipientes de coração vermelho e uma pílula azul dupla com efeito não identificado. Ele tem alcance e sorte um pouco menores que Isaac, mas também começa com uma vida extra. Sua forma revivida aumenta as estatísticas básicas, com dano, velocidade e alcance acima da média. Embora com pouca saúde, suas estatísticas melhoradas contrabalançam bem essa fraqueza.",
        },
        {
            name: "Eden<br>( 10/17 )",
            info: "Eden é um personagem de The Binding of Isaac: Rebirth, desbloqueado ao completar Womb pela primeira vez. Eden é o único que só pode ser jogado quando o jogador possui pelo menos um Eden Token. Os Eden Tokens são concedidos toda vez que Mom's Heart, It Lives, (exceto em Rebirth) Ultra Greed ou (em Repentance) The Beast é derrotado. Cada vez que um jogo é iniciado como Éden, um token é consumido e um novo Éden é gerado aleatoriamente com base na semente, com um dos vários estilos de cabelo, estatísticas de base aleatórias, uma bugiganga aleatória e um item ativo inicial e um item passivo escolhidos aleatoriamente.<br>As estatísticas de Eden são centradas nas de Isaac, o que significa que são em média idênticas às de Isaac, mas podem variar significativamente de corrida para corrida. As estatísticas nesta página são todas faixas com as estatísticas de Isaac no centro, mais ou menos uma certa quantia até os valores listados.",
        },
        {
            name: "The Lost<br>( 11/17 )",
            info: "The Lost é um personagem secreto.<br>The Lost começa sem saúde e não pode ganhar saúde de forma alguma. Portanto, ele morrerá devido a qualquer dano sofrido.<br>The Lost começa com o vôo.<br>(em Afterbirth e Afterbirth †) The Lost começa com vôo, lágrimas espectrais, D4 (se desbloqueado) e o efeito do Manto Sagrado (depois de doar 879 moedas para a Máquina de Doação de Ganância)<br>(em Repentance) The Lost começa com vôo, lágrimas espectrais, Eterno D6 e o ​​efeito do Manto Sagrado (depois de doar 879 moedas para a Máquina de Doação de Ganância). Esta forma de Manto Sagrado é inerente ao personagem e não um item inicial e, como tal, estará presente ao mudar para The Lost no meio da corrida através do uso do Clicker, não estará presente ao mudar para The Lost e não pode ser removido por qualquer meio.",
        },
        {
            name: "Lilith<br>( 12/17 )",
            info: "Lilith é uma personagem adicionada em The Binding of Isaac: Afterbirth. Lilith começa com um recipiente de coração vermelho e dois corações pretos. Os itens iniciais de Lilith são a Caixa dos Amigos, Incubus e Cambion Conception. Lilith está permanentemente vendada, o que significa que ela não tem capacidade de lançar lágrimas; em vez disso, ela causa dano ao familiar Incubus que a segue.<br>Lilith é desbloqueada completando o modo Greed com Azazel.",
        },
        {
            name: "Keeper<br>( 13/17 )",
            info: "Keeper é desbloqueado doando 1.000 moedas para a Greed Donation Machine.<br>Ao contrário de outros personagens, Keeper usa moedas como saúde. Ele começa com dois Coin Hearts, perde um cada vez que é danificado e cura um cada vez que obtém uma moeda, ao custo de um centavo. Todos os tipos de corações se transformam em moscas azuis. Se o Keeper perder contêineres Coin Heart (Health Down, (exceto em Repentance) Devil Deals, ..), um HP Up aumentará sua saúde.",
        },
        {
            name: "Apollyon<br>( 14/17 )",
            info: "Apollyon é um personagem adicionado em The Binding of Isaac: Afterbirth †. Ele é desbloqueado após derrotar Mega Satan pela primeira vez.<br>Apollyon começa com dois contêineres Red Heart e Void.",
        },
        {
            name: "The Forgotten<br>( 15/17 )",
            info: "The Forgotten é um personagem secreto adicionado no Booster Pack #5 que se assemelha a um Bony(Inimigo Comum). Ele não pode disparar lágrimas regulares e, em vez disso, tem uma clava de osso que pode ser usada como arma corpo-a-corpo ou carregada para ser lançada.<br>The Forgotten não podem adquirir recipientes de coração normais. Quaisquer recipientes de coração normais adquiridos serão transformados em Bone Hearts, e quaisquer Soul Hearts ou Black Hearts serão dados à The Soul. The Forgotten e The Soul compartilham uma barra de saúde, então cada forma tem no máximo 6 corações em vez dos 12 normais.",
        },
        {
            name: "Bethany<br>( 16/17 )",
            info: "Betânia é uma personagem adicionada em The Binding of Isaac: Repentance. Ela é desbloqueada ao derrotar Mom's Heart ou It Lives no modo difícil com Lazarus sem perder uma vida.<br>Bethany começa com três recipientes Red Heart, quatro cargas de alma (2 Soul Hearts) e Livro das Virtudes.<br>Bethany é incapaz de utilizar Soul Hearts e Black Hearts como saúde. Quando recolhidos, eles são convertidos em um recurso exclusivo de Bethany chamado 'cargas de alma' à taxa de uma carga por meio coração. O número de cargas de alma possuídas atualmente está listado junto com os contadores de coleta. Cargas de alma podem ser consumidas para usar o item ativado de Bethany quando o item não estiver totalmente carregado, na proporção de uma carga de alma por barra vazia de carga.",
        },
        {
            name: "Jacob e Esau<br>( 17/17 )",
            info: "Jacob e Esau são um par de personagens adicionado em The Binding of Isaac: Repentance. Eles são desbloqueados ao derrotar a Mãe com qualquer personagem.<br>Jacob e Esaú são controlados como um só, movem-se na mesma velocidade e usam as mesmas moedas, bombas e chaves. Caso contrário, eles são completamente independentes em termos de estatísticas, itens e saúde. Ambos os personagens colidem e podem ser separados, embora o botão 'Soltar' possa ser pressionado para manter Esau no lugar enquanto Jacob está livre para se mover pela sala.<br>Se Jacob ou Esau morrerem, ambos morrerão independentemente da saúde restante do outro personagem.",
        }
    ];

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    function updateInfo(index) {
        const character = characters[index];
        info.innerHTML = `<h1>${character.name}</h1><p>${character.info}</p>`;
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
        updateInfo(currentIndex);
    }

    // Mostrar primeira imagem e informações iniciais
    showImage(currentIndex);
    updateInfo(currentIndex);

    // Trocar para a próxima imagem ao clicar
    document.addEventListener("click", function (event) {
        if (event.target.closest(".carousel")) {
            nextImage();
        }
    });
});


/*CARROSSEL DE IMAGENS PARA COOP BABYS*/

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel2 img");
    const info = document.getElementById("character-info");

    let currentIndex = 0;

    const characters = [
        {
            name: "Love Baby<br>( 1/17 )",
            info: "Solta um captador de coração quando morto. Também pode derrubar corações de alma.",
        },
        {
            name: "Bloat Baby<br>( 2/17 )",
            info: "Aparece com uma mosca bonita.",
        },
        {
            name: "Water Baby<br>( 3/17 )",
            info: "Explode em lágrimas quando morre.",
        },
        {
            name: "Psy Baby<br>( 4/17 )",
            info: "Gera com lágrimas direcionadas.",
        },
        {
            name: "Cursed Baby<br>( 5/17 )",
            info: "Atrai inimigos e lágrimas inimigas.",
        },
        {
            name: "Troll Baby<br>( 6/17 )",
            info: "Gera bombas trolls abaixo de si em momentos aleatórios e sempre gera uma após a morte.",
        },
        {
            name: "Ybab<br>( 7/17 )",
            info: "Botões embaralhados associados à direção do disparo de lágrima.",
        },
        {
            name: "Cockeyed Baby<br>( 8/17 )",
            info: "Atira lágrimas na diagonal, semelhante ao efeito do R U a Wizard? comprimido.",
        },
        {
            name: "Host Baby<br>( 9/17 )",
            info: "Gera de uma a três aranhas hostis após a morte.",
        },
        {
            name: "Lost Baby<br>( 10/17 )",
            info: "Sangra constantemente pequenas poças de fluência vermelha que podem causar danos aos inimigos. Libera uma poça maior de fluência após a morte. Lost Baby Derrote Mom's Heart no modo Hard como Isaac para desbloqueá-lo.",
        },
        {
            name: "Cute Baby<br>( 11/17 )",
            info: "Derrote Mom's Heart no modo Hard como Madalena para desbloqueá-lo.",
        },
        {
            name: "Crow Baby<br>( 12/17 )",
            info: "Causa dano de contato aos inimigos. Crow Baby Derrote Mom's Heart no modo Hard como Eve para desbloqueá-lo.",
        },
        {
            name: "Shadow Baby<br>( 13/17 )",
            info: "Dispara tiros de sangue vermelho e causa um pouco mais de dano do que outros bebês. Shadow Baby Derrote Mom's Heart no modo Hard como Judas para desbloqueá-lo.",
        },
        {
            name: "Glass Baby<br>( 14/17 )",
            info: "Solta uma coleta aleatória ao morrer. Glass Baby Derrote Mom's Heart no modo Hard como Cain para desbloqueá-lo.",
        },
        {
            name: "Gold Baby<br>( 15/17 )",
            info: "Deixa cair 1-3 moedas ao morrer.",
        },
        {
            name: "Cy-Baby<br>( 16/17 )",
            info: "Surge com um efeito semelhante ao Tech.5, disparando lasers aleatoriamente junto com rasgos normais.",
        },
        {
            name: "Bean Baby<br>( 17/17 )",
            info: "Peida quando atingido, como o efeito Black Bean.",
        }
    ];

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    function updateInfo(index) {
        const character = characters[index];
        info.innerHTML = `<h1>${character.name}</h1><p>${character.info}</p>`;
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
        updateInfo(currentIndex);
    }

    // Mostrar primeira imagem e informações iniciais
    showImage(currentIndex);
    updateInfo(currentIndex);

    // Trocar para a próxima imagem ao clicar
    document.addEventListener("click", function (event) {
        if (event.target.closest(".carousel2")) {
            nextImage();
        }
    });
});
