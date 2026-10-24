const mainText = document.getElementById('mainText');
const Info = document.getElementById('Info');

var apparitionDefinitionOld = `A Ghostly Figure: Seeing a transparent or full-bodied figure of a person who is dead or not physically present (for example, claiming to see a Victorian man in a top hat standing silently in a parlor)`;

var Menifestationtxt = `Manifestation is the practice of bringing your goals, desires, and dreams into reality through focused thought, belief, and intentional action. It is based on the idea that your mindset and energy can attract specific outcomes into your life.`;

var Anomalytxt = `An anomaly is something that is different, abnormal, peculiar, or a deviation from the common rule and the expected norm`;

var Crypt1ctxt = `The best definition of cryptic is something that is mysterious, puzzling, or difficult to understand, often because it contains a hidden or purposely concealed meaning`;

function Apparition() {
    mainText.textContent = "Apparition";
    Info.textContent = apparitionDefinitionOld;
}

function Menifestation() {
    mainText.textContent = "Menifestation";
    Info.textContent = Menifestationtxt;
}

function Anomaly() {
     mainText.textContent = "Anomalies";
    Info.textContent = Anomalytxt;
}

function Cryptic() {
     mainText.textContent = "Cryptic";
    Info.textContent = Crypt1ctxt;
}

function mainT() {
    
     mainText.textContent = "Spooker";
    Info.textContent = "A website for spookish knowledge";
}