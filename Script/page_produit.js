// Variables globales
let currentQuantity = 1;
const colorNames = {
    'transparent': 'Transparent',
    'rouge': 'Rouge',
    'vert': 'Vert',
    'bleu': 'Bleu'
};

// Initialisation
document.addEventListener('DOMContentLoaded', function () {
    initializeSelectors();
    initializeColorOptions();
    initializeQuantityControls();
    initializeCollapsibleSections();
});

// Gestion des sélecteurs déroulants
function initializeSelectors() {
    const selects = document.querySelectorAll('.custom-select');

    selects.forEach(select => {
        const trigger = select.querySelector('.select-trigger');
        const options = select.querySelectorAll('.select-option');

        trigger.addEventListener('click', function () {
            closeAllSelects();
            select.classList.toggle('open');
        });

        options.forEach(option => {
            option.addEventListener('click', function () {
                const value = this.textContent;
                trigger.querySelector('span').textContent = value;

                // Mettre à jour l'option active
                options.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');

                select.classList.remove('open');
            });
        });
    });

    // Fermer les sélecteurs en cliquant ailleurs
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.custom-select')) {
            closeAllSelects();
        }
    });
}

function closeAllSelects() {
    document.querySelectorAll('.custom-select').forEach(select => {
        select.classList.remove('open');
    });
}

// Gestion des options de couleur
function initializeColorOptions() {
    const colorOptions = document.querySelectorAll('.color-option');
    const currentColorDisplay = document.querySelector('.current-color');

    colorOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Retirer la classe active de toutes les options
            colorOptions.forEach(opt => opt.classList.remove('active'));

            // Ajouter la classe active à l'option sélectionnée
            this.classList.add('active');

            // Mettre à jour l'affichage de la couleur courante
            const colorKey = this.getAttribute('data-color');
            currentColorDisplay.textContent = colorNames[colorKey];
        });
    });
}

// Gestion des contrôles de quantité
// === JAVASCRIPT LOGIC ===
let counter = 1;

const counterDisplay = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

function updateDisplay() {
    counterDisplay.textContent = counter;
    decrementBtn.disabled = counter <= 0;
}

incrementBtn.addEventListener('click', () => {
    counter++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        updateDisplay();
    }
});

// Initialize
updateDisplay();
// Gestion des sections dépliantes
function initializeCollapsibleSections() {
    const headers = document.querySelectorAll('.collapsible-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const isOpen = item.classList.contains('open');

            // Fermer toutes les autres sections
            document.querySelectorAll('.collapsible-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });

            // Basculer la section courante
            item.classList.toggle('open');
        });
    });
}

// Gestion des miniatures d'images
document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
    thumb.addEventListener('click', function () {
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Ici vous pourriez changer l'image principale
        console.log('Image sélectionnée:', index);
    });
});

// Gestion des boutons d'action
document.querySelector('.add-to-cart').addEventListener('click', function () {
    console.log('Ajouté au panier - Quantité:', currentQuantity);
    // Ici vous ajouteriez la logique pour ajouter au panier
});

document.querySelector('.buy-now').addEventListener('click', function () {
    console.log('Achat immédiat - Quantité:', currentQuantity);
    // Ici vous ajouteriez la logique pour l'achat immédiat
});