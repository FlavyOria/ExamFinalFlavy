document.addEventListener('DOMContentLoaded', function () {
    // Validation du formulaire
    function Verif() {
      var nom = document.getElementById('nom').value;
      var prenom = document.getElementById('prenom').value;
      var date_naissance = document.getElementById('date_naissance').value;
      var mail = document.getElementById('mail').value;
      var site = document.getElementById('site').value;
      var mdp = document.getElementById('mdp');
      var genreMale = document.querySelector('input[name="gender"][value="male"]');
      var genreFemale = document.querySelector('input[name="gender"][value="female"]');
      var pays = document.getElementById('pays').value;
      var formationHtml5 = document.querySelector('input[name="FormationHtml5"]').checked;
      var formationCss3 = document.querySelector('input[name="formationCss3"]').checked;
      var formationJs = document.querySelector('input[name="formationJs"]').checked;
      var file = document.getElementById('file').value;
  
      var isValid = true;
  
      // Les messages d'erreur
      function showError(inputField, errorMessage) {
        inputField.style.border = '2px solid red';
        var errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        inputField.parentNode.appendChild(errorElement);
      }
  
      // Supprime les mauvaises erreurs 
      function clearErrorAndSetGreen(inputField) {
        inputField.style.border = '2px solid green';
        var errorElement = inputField.parentNode.querySelector('.error-message');
        if (errorElement) {
          inputField.parentNode.removeChild(errorElement);
        }
      }
  
      clearErrorAndSetGreen(document.getElementById('nom'));
      clearErrorAndSetGreen(document.getElementById('prenom'));
      clearErrorAndSetGreen(document.getElementById('date_naissance'));
      clearErrorAndSetGreen(document.getElementById('mail'));
      clearErrorAndSetGreen(document.getElementById('site'));
      clearErrorAndSetGreen(mdp);
      clearErrorAndSetGreen(document.querySelector('input[name="gender"][value="male"]'));
      clearErrorAndSetGreen(document.getElementById('pays'));
      clearErrorAndSetGreen(document.querySelector('input[name="FormationHtml5"]'));
      clearErrorAndSetGreen(document.getElementById('file'));
  
      // Regarde si vide ou pas
      function checkEmpty(inputField, errorMessage) {
        if (inputField.value.trim() === '') {
          showError(inputField, errorMessage);
          isValid = false;
        } else {
          clearErrorAndSetGreen(inputField); // Supprime les messages d'erreurs 
        }
      }
  
      // Validation du mot de passe 
      function validatePassword(inputField) {
        var password = inputField.value.trim();
        if (password.length !== 8) {
          showError(inputField, 'Le mot de passe doit être exactement composé de 8 caractères');
          isValid = false;
        } else {
          clearErrorAndSetGreen(inputField); // Supprime les messages d'erreurs 
        }
      }
  
      checkEmpty(document.getElementById('nom'), 'Entrer votre nom');
      checkEmpty(document.getElementById('prenom'), 'Entrer votre prénom');
      checkEmpty(document.getElementById('date_naissance'), 'Entrer votre date de naissance');
      checkEmpty(document.getElementById('mail'), 'Entrer votre email');
      checkEmpty(document.getElementById('site'), 'Entrer votre site');
      checkEmpty(mdp, 'Entrer votre mot de passe');
      checkEmpty(document.querySelector('input[name="gender"][value="male"]'), 'Sélectionnez votre genre');
      checkEmpty(document.getElementById('pays'), 'Choisissez votre pays');
      checkEmpty(document.querySelector('input[name="FormationHtml5"]'), 'Choisissez au moins une option');
      checkEmpty(document.getElementById('file'), 'Veuillez télécharger votre fichier');
  
      // Validation du mot de passe 
      mdp.addEventListener('input', function () {
        validatePassword(this);
      });
  
      validatePassword(mdp);
  
      return isValid;
    }
  
    var submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', function (event) {
      if (!Verif()) {
        event.preventDefault(); // Empêche la validation si erreur de validation
      }
    });
  });
  