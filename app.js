// Data structure to store debts
let debts = {
    emmylou: [],
    majken: [],
    solvei: [],
    otto: []
};

// DOM Elements
const userSelectionView = document.getElementById('user-selection');
const passwordScreen = document.getElementById('password-screen');
const parentView = document.getElementById('parent-view');
const childView = document.getElementById('child-view');
const childDetails = document.getElementById('child-details');
const debtList = document.getElementById('debt-list');
const childDebtList = document.getElementById('child-debt-list');
const addDebtForm = document.getElementById('add-debt-form');
const passwordForm = document.getElementById('password-form');

// Track the currently active child
let activeChild = null;

// Password (in a real application, this should be stored securely)
const PARENT_PASSWORD = "1234"; // Change this to your desired password

// Load data from localStorage on startup
function loadData() {
    const savedData = localStorage.getItem('kidAllowanceDebts');
    if (savedData) {
        debts = JSON.parse(savedData);
    }
    updateAllViews();
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('kidAllowanceDebts', JSON.stringify(debts));
}

// Calculate total debt for a child
function calculateTotalDebt(childName) {
    return debts[childName].reduce((total, debt) => total + Math.round(debt.amount), 0);
}

// Add a new debt entry
function addDebt(childName, amount, reason) {
    const newDebt = {
        date: new Date().toLocaleDateString(),
        amount: Math.round(parseFloat(amount)), // Round to nearest whole number
        reason: reason
    };
    
    debts[childName].push(newDebt);
    saveData();
    updateAllViews();
}

// Update the parent dashboard view
function updateParentView() {
    // Update totals for each child
    const children = ['emmylou', 'majken', 'solvei', 'otto'];
    children.forEach(childName => {
        const totalElement = document.getElementById(`${childName}-total`);
        if (totalElement) {
            totalElement.textContent = calculateTotalDebt(childName);
        }
    });
}

// Update the child details view
function updateChildDetails(childName) {
    const selectedChildName = document.getElementById('selected-child-name');
    selectedChildName.textContent = `${childName.charAt(0).toUpperCase() + childName.slice(1)}'s Details`;
    
    debtList.innerHTML = '';
    debts[childName].forEach(debt => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="debt-entry">
                <span class="date">${debt.date}</span>
                <span class="amount">${debt.amount} kr</span>
                <span class="reason">${debt.reason}</span>
            </div>
        `;
        debtList.appendChild(li);
    });
}

// Update the child view
function updateChildView(childName) {
    const childNameElement = document.getElementById('child-name');
    const childTotalElement = document.getElementById('child-total');
    
    childNameElement.textContent = childName.charAt(0).toUpperCase() + childName.slice(1);
    childTotalElement.textContent = calculateTotalDebt(childName);
    
    childDebtList.innerHTML = '';
    debts[childName].forEach(debt => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="debt-entry">
                <span class="date">${debt.date}</span>
                <span class="amount">${debt.amount} kr</span>
                <span class="reason">${debt.reason}</span>
            </div>
        `;
        childDebtList.appendChild(li);
    });
}

// Update all views
function updateAllViews() {
    updateParentView();
    if (childDetails.classList.contains('active')) {
        updateChildDetails(activeChild);
    }
}

// Event Listeners
document.getElementById('parent-btn').addEventListener('click', () => {
    userSelectionView.classList.remove('active');
    passwordScreen.classList.add('active');
    document.getElementById('password-input').focus();
});

document.getElementById('password-back-btn').addEventListener('click', () => {
    passwordScreen.classList.remove('active');
    userSelectionView.classList.add('active');
    document.getElementById('password-form').reset();
});

passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password-input').value;
    
    if (password === PARENT_PASSWORD) {
        passwordScreen.classList.remove('active');
        parentView.classList.add('active');
        passwordForm.reset();
    } else {
        alert('Fel lösenord!');
        document.getElementById('password-input').value = '';
        document.getElementById('password-input').focus();
    }
});

document.getElementById('back-to-selection').addEventListener('click', () => {
    parentView.classList.remove('active');
    userSelectionView.classList.add('active');
});

document.getElementById('child-back-btn').addEventListener('click', () => {
    childView.classList.remove('active');
    userSelectionView.classList.add('active');
});

// Handle child selection
const children = ['emmylou', 'majken', 'solvei', 'otto'];
children.forEach(childName => {
    const childBtn = document.getElementById(`${childName}-btn`);
    childBtn.addEventListener('click', () => {
        userSelectionView.classList.remove('active');
        childView.classList.add('active');
        updateChildView(childName);
    });
});

// Handle view details button clicks
document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        activeChild = btn.dataset.child;
        childDetails.classList.remove('hidden');
        childDetails.classList.add('active');
        updateChildDetails(activeChild);
    });
});

// Handle form submission
addDebtForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = document.getElementById('debt-amount').value;
    const reason = document.getElementById('debt-reason').value;
    
    if (!activeChild) {
        alert('Vänligen välj ett barn först');
        return;
    }
    
    addDebt(activeChild, amount, reason);
    
    // Reset form
    addDebtForm.reset();
});

// Initialize the application
loadData(); 