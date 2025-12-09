// Simulação de arquivo JSON (Dados Locais)
const agendaData = [
    {
        id: 1,
        titulo: "Abertura Oficial",
        descricao: "Cerimônia de abertura com líderes mundiais discutindo as metas do Acordo de Paris.",
        horario: "09:00 - 10:30"
    },
    {
        id: 2,
        titulo: "Bioeconomia Amazônica",
        descricao: "Debate sobre como a bioeconomia pode salvar a floresta em pé.",
        horario: "11:00 - 12:30"
    },
    {
        id: 3,
        titulo: "Energias Renováveis",
        descricao: "Transição energética e o papel do hidrogênio verde.",
        horario: "14:00 - 15:30"
    }
];

const agendaGrid = document.getElementById('agenda-grid');
const modal = document.getElementById('modalSessao');
const closeModal = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTime = document.getElementById('modalTime');
const form = document.getElementById('registroForm');
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        body.classList.add('dark-theme');
    }
}

function toggleTheme() {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function renderAgenda() {
    agendaData.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('card');
        
        card.onclick = () => openModal(item);

        card.innerHTML = `
            <div class="card-content">
                <h4>${item.titulo}</h4>
                <p>Clique para ver detalhes</p>
            </div>
        `;
        agendaGrid.appendChild(card);
    });
}

function openModal(item) {
    modalTitle.innerText = item.titulo;
    modalDesc.innerText = item.descricao;
    modalTime.innerText = item.horario;
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const uf = document.getElementById('uf').value;
    const lgpd = document.getElementById('lgpd').checked;
    
    const checkboxes = document.querySelectorAll('input[name="interesse"]:checked');

    if (nome.trim() === "" || email.trim() === "" || uf === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    if (checkboxes.length === 0) {
        alert("Selecione pelo menos uma área de interesse.");
        return;
    }

    if (!lgpd) {
        alert("Você deve aceitar os termos da LGPD.");
        return;
    }

    console.log(`Dados enviados: Nome: ${nome}, E-mail: ${email}, UF: ${uf}, Interesses: ${Array.from(checkboxes).map(cb => cb.value).join(', ')}`);
    alert(`Obrigado, ${nome}! Seu cadastro para a COP30 foi realizado com sucesso.`);
    form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderAgenda(); 
    themeBtn.addEventListener('click', toggleTheme);
});