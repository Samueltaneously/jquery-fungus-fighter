$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let ap = 100;

function onReady() {
    $('.arcane-scepter').on('click', handleArcane);
    $('.entangle').on('click', handleEntangle);
    $('.dragon-blade').on('click', handleDragon);
    $('.star-fire').on('click', handleStar);

    $('.attack-btn').on('click', handleDisabled);
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}




function handleArcane(event) {
    event.preventDefault();
    ap -= 12;
    fungusHP -= 14;
    updateValues();
    if(ap<=0) {
        $('.freaky-fungus walk').toggleClass('.freaky-fungus.jump ');
    }
    if (fungusHP <= 0) {
        $('.freaky-fungus walk').toggleClass('freaky-fungus.dead');
    }
  }

  function handleEntangle(event) {
    event.preventDefault();
    ap-= 23;
    fungusHP -= 9;
    updateValues();
    if(ap<=0) {
        $('.freaky-fungus walk').toggleClass('.freaky-fungus.jump ');
    }
    if (fungusHP <= 0) {
        $('.freaky-fungus walk').toggleClass('freaky-fungus.dead');
    }
  }

  function handleDragon(event) {
    event.preventDefault();
    ap -= 38;
    fungusHP -= 47;
    updateValues();
    if(ap<=0) {
        $('.freaky-fungus walk').toggleClass('.freaky-fungus.jump ');
    }
    if (fungusHP <= 0) {
        $('.freaky-fungus walk').toggleClass('freaky-fungus.dead');
    }
  }

  function handleStar(event) {
    event.preventDefault();
    ap -= 33;
    fungusHP -= 25;
    updateValues();
    if(ap<=0) {
        $('.freaky-fungus walk').toggleClass('.freaky-fungus.jump ');
    }
    if (fungusHP <= 0) {
        $('.freaky-fungus walk').toggleClass('freaky-fungus.dead');
    }
  }

function handleDisabled(){
    if (ap <=0) {
        $('.attack-btn').attr('disabled');
    }
}

  function updateValues() {
    $('.ap-text').text(ap);
    $('.hp-text').text(fungusHP);
  }


//   ### ![arcane scepter](./images/arcane-scepter.png) Arcane Scepter
// - **AP Cost:** 12
// - **HP Damage:** 14
// ### ![entangle](./images/entangle-3.png) Entangle
// - **AP Cost:** 23
// - **HP Damage:** 9
// ### ![dragon blade](./images/dragon-blade-3.png) Dragon Blade
// - **AP Cost:** 38
// - **HP Damage:** 47
// ### ![star fire](./images/star-fire.png) Star Fire
// - **AP Cost:** 33
// - **HP Damage:** 25