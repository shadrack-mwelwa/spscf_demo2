const pDialog = document.getElementById('privacyDialog');
const btnOpen = document.querySelector('.privacyOpnBtn');
const btnClose = document.querySelector('.privacyCloseBtn');

//opens addAdmin dialog box
const openD = (dialogName, button) => {
    button.addEventListener('click', () => {
        dialogName.showModal();
    });
};
//close addAdmin dialog box
const closeD = (dialogName, clsBtn) => {
    clsBtn.addEventListener('click', e => {
        dialogName.close();
    });
};
openD(pDialog, btnOpen);
closeD(pDialog, btnClose);
