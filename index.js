const CHORDS = [
  "1_Aaug",
  "1_Aaug_2",
  "1_Abaug",
  "1_Abaug_2",
  "1_akord_Absus4",
  "1_akord_Adim",
  "1_akord_Adim7",
  "1_akord_Asus4",
  "1_akord_B9",
  "1_akord_Badd9",
  "1_akord_Bbsus4",
  "1_akord_Bsus4",
  "1_akord_C%239",
  "1_akord_C%23sus4",
  "1_akord_C9",
  "1_akord_Cadd9",
  "1_akord_Cadd9_2",
  "1_akord_Csus4",
  "1_akord_D7_A",
  "1_akord_Dadd9",
  "1_akord_Dsus4",
  "1_akord_Ebsus4",
  "1_akord_Esus4",
  "1_akord_F%23sus4",
  "1_akord_Fsus4",
  "1_akord_Fsus4_2",
  "1_akord_Gadd9",
  "1_akord_Gsus4",
  "1_akord_Gsus4_2",
  "1_Baug",
  "1_Baug_2",
  "1_Bbaug",
  "1_Bbaug_2",
  "1_C%23aug",
  "1_C%23aug_2",
  "1_Caug",
  "1_Caug_2",
  "1_Daug",
  "1_Daug_2",
  "1_E",
  "1_Eaug",
  "1_Eaug_2",
  "1_Eaug_3",
  "1_Eb",
  "1_Ebaug",
  "1_Ebm",
  "1_Em",
  "1_F%23aug",
  "1_F%23aug_2",
  "1_Faug",
  "1_Faug_2",
  "1_Gaug",
  "1_Gaug_2",
  "2_akord_Bb7",
  "A",
  "A5",
  "A5_2",
  "A7",
  "Aaug",
  "Aaug_2",
  "Ab",
  "Ab5",
  "Ab7",
  "Abaug",
  "Abaug_2",
  "Abm",
  "Abm7",
  "Abmaj7",
  "akord_A6",
  "akord_A9",
  "akord_A_2",
  "akord_A_Ab",
  "akord_A_B",
  "akord_A_Bb",
  "akord_A_Bb_2",
  "akord_A_C%23",
  "akord_A_C",
  "akord_A_D",
  "akord_A_E",
  "akord_A_Eb",
  "akord_A_F%23",
  "akord_A_F",
  "akord_A_G",
  "akord_Aadd9",
  "akord_Ab6",
  "akord_Ab9",
  "akord_Ab_A",
  "akord_Ab_Bb",
  "akord_Ab_C%23",
  "akord_Ab_C",
  "akord_Ab_Eb",
  "akord_Ab_F%23",
  "akord_Ab_G",
  "akord_Abdim",
  "akord_Abdim7",
  "akord_Abm7b5",
  "akord_Abm_F%23",
  "akord_Absus4",
  "akord_Am7b5",
  "akord_Am9",
  "akord_Am_Ab",
  "akord_Am_B",
  "akord_Am_Bb",
  "akord_Am_C",
  "akord_Am_D",
  "akord_Am_E",
  "akord_Am_F%23",
  "akord_Am_F",
  "akord_Am_G",
  "akord_Asus4",
  "akord_B6",
  "akord_B6_2",
  "akord_B9_2",
  "akord_B_A",
  "akord_B_Ab",
  "akord_Badd9",
  "akord_Bb6",
  "akord_Bb9",
  "akord_Bb9_2",
  "akord_Bb_A",
  "akord_Bb_Ab",
  "akord_Bb_B",
  "akord_Bb_Eb",
  "akord_Bbadd9",
  "akord_Bbdim",
  "akord_Bbdim7",
  "akord_Bbm7b5",
  "akord_Bbm9",
  "akord_Bbm_Ab",
  "akord_Bbsus4",
  "akord_Bdim",
  "akord_Bdim7",
  "akord_Bm7b5",
  "akord_Bm9",
  "akord_Bm_A",
  "akord_Bm_Ab",
  "akord_Bm_Bb",
  "akord_Bm_C%23",
  "akord_Bm_C",
  "akord_Bm_F%23",
  "akord_Bsus4",
  "akord_C%236",
  "akord_C%239_2",
  "akord_C%23add9",
  "akord_C%23dim",
  "akord_C%23dim7",
  "akord_C%23m7b5",
  "akord_C%23m9",
  "akord_C%23sus4",
  "akord_C6",
  "akord_C9_2",
  "akord_C_A",
  "akord_C_B",
  "akord_C_Bb",
  "akord_C_C%23",
  "akord_C_G",
  "akord_Cadd9",
  "akord_Cadd9_2",
  "akord_Cadd9_B",
  "akord_Cdim",
  "akord_Cdim7",
  "akord_Cm7b5",
  "akord_Cm9",
  "akord_Cm9_2",
  "akord_Cmaj7_C%23",
  "akord_Csus4",
  "akord_D6",
  "akord_D9",
  "akord_D_A",
  "akord_D_B",
  "akord_D_Bb",
  "akord_D_C%23",
  "akord_D_C",
  "akord_D_F%23",
  "akord_Dadd9",
  "akord_Dadd9_A",
  "akord_Dadd9_B",
  "akord_Dadd9_Bb",
  "akord_Dadd9_C",
  "akord_Ddim",
  "akord_Ddim7",
  "akord_Dm7b5",
  "akord_Dm9",
  "akord_Dm_A",
  "akord_Dm_B",
  "akord_Dm_C",
  "akord_Dmaj7_C%23",
  "akord_Dsus4",
  "akord_E6",
  "akord_E9",
  "akord_E_A",
  "akord_E_Ab",
  "akord_E_Ab_2",
  "akord_E_B",
  "akord_E_Bb",
  "akord_E_C%23",
  "akord_E_C",
  "akord_E_D",
  "akord_E_Eb",
  "akord_E_F%23",
  "akord_E_F",
  "akord_E_G",
  "akord_Eadd9",
  "akord_Eb6",
  "akord_Eb9",
  "akord_Eb9_2",
  "akord_Ebadd9",
  "akord_Ebdim",
  "akord_Ebdim7",
  "akord_Ebm7b5",
  "akord_Ebm9",
  "akord_Ebsus4",
  "akord_Edim",
  "akord_Edim7",
  "akord_Em7b5",
  "akord_Em9",
  "akord_Em9_2",
  "akord_Em_A",
  "akord_Em_Ab",
  "akord_Em_B",
  "akord_Em_Bb",
  "akord_Em_C%23",
  "akord_Em_C",
  "akord_Em_D",
  "akord_Em_Eb",
  "akord_Em_F%23",
  "akord_Em_F",
  "akord_Em_G",
  "akord_Esus4",
  "akord_F%236",
  "akord_F%239",
  "akord_F%23_Ab",
  "akord_F%23_B",
  "akord_F%23_Bb",
  "akord_F%23_C%23",
  "akord_F%23_E",
  "akord_F%23_F",
  "akord_F%23_G",
  "akord_F%23dim",
  "akord_F%23dim7",
  "akord_F%23m7b5",
  "akord_F%23m9",
  "akord_F%23m9_2",
  "akord_F%23m_E",
  "akord_F%23m_F",
  "akord_F%23m_G",
  "akord_F%23sus4",
  "akord_F6",
  "akord_F9_2",
  "akord_F_A",
  "akord_F_Bb",
  "akord_F_C",
  "akord_F_D",
  "akord_F_E",
  "akord_F_Eb",
  "akord_F_F%23",
  "akord_F_G",
  "akord_Fadd9",
  "akord_Fdim",
  "akord_Fdim7",
  "akord_Fm7b5",
  "akord_Fm9",
  "akord_Fm9_2",
  "akord_Fm_Ab",
  "akord_Fm_D",
  "akord_Fm_E",
  "akord_Fm_Eb",
  "akord_Fm_F%23",
  "akord_Fsus4",
  "akord_Fsus4_2",
  "akord_G6",
  "akord_G6_2",
  "akord_G9",
  "akord_G_3",
  "akord_G_C",
  "akord_G_D",
  "akord_G_D_2",
  "akord_G_E",
  "akord_G_F%23",
  "akord_G_F",
  "akord_Gadd9",
  "akord_Gdim",
  "akord_Gdim7",
  "akord_Gm7b5",
  "akord_Gm9",
  "akord_Gm9_2",
  "akord_Gm_Ab",
  "akord_Gm_D",
  "akord_Gm_D_2",
  "akord_Gm_E",
  "akord_Gm_E_2",
  "akord_Gm_F",
  "akord_Gsus4",
  "akord_Gsus4_2",
  "Am",
  "Am7",
  "Amaj7",
  "Ammaj7",
  "B",
  "B5_",
  "B5_2",
  "B7",
  "Baug",
  "Baug_2",
  "Bb",
  "Bb5",
  "Bb5_2",
  "Bbaug",
  "Bbaug_2",
  "Bbm",
  "Bbm7",
  "Bbmaj7",
  "Bm",
  "Bm7",
  "Bmaj7",
  "C%23",
  "C%235",
  "C%235_2",
  "C%237",
  "C%23aug",
  "C%23aug_2",
  "C%23m",
  "C%23m7",
  "C%23maj7",
  "C%23mmaj7",
  "C",
  "C5",
  "C5_2",
  "C7",
  "Caug",
  "Caug_2",
  "Cm",
  "Cm7",
  "Cmaj7",
  "Cmaj7_2",
  "D",
  "D5",
  "D5_2",
  "D7",
  "Daug",
  "Daug_2",
  "Dm",
  "Dm7",
  "Dmaj7",
  "E5",
  "E5_2",
  "E7",
  "Eaug",
  "Eaug_2",
  "Eaug_3",
  "Eb5",
  "Eb7",
  "Ebaug",
  "Ebm7",
  "Ebmaj7",
  "Em7",
  "Emaj7",
  "F%23",
  "F%235",
  "F%235_2",
  "F%23aug",
  "F%23aug_2",
  "F%23m",
  "F%23m7",
  "F%23maj7",
  "F",
  "F5",
  "F5_2",
  "F7",
  "Faug",
  "Faug_2",
  "Fm",
  "Fm7",
  "Fmaj7",
  "G",
  "G5",
  "G5_2",
  "G7",
  "G_2",
  "G_A",
  "G_A_2",
  "G_Ab",
  "G_B",
  "Gaug",
  "Gaug_2",
  "Gm",
  "Gm7",
  "Gmaj7",
];
const notes = ["B", "A#", "A", "G#", "G", "F#", "F", "E", "D#", "D", "C#", "C"];
const notes_f = [
  "C",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
  "Db",
];

//global

var oldTone = 0;
var EASY_TONE;

function Easy() {
  $('select[name ="RealTonChange"]')[0].value = EASY_TONE;
  RealTonChanged();
  CalculateCapo();
  // TransposeTabs()
}

function TransposePage(semiTones) {
  // Transpose image
  $.each($(".chords img"), function () {
    var new_chord;
    const original_chord = this.src.split("/").pop().split(".")[0];
    //console.log('original_chord: ' + original_chord);
    let ret = "";
    let notes_to_transpose;
    for (let c of (notes_to_transpose = original_chord
      .replace("%23", "#")
      .split("_"))) {
      //console.log(notes_to_transpose);
      for (let note of c.includes("b") ? notes_f : notes) {
        if (c.includes(note)) {
          ret +=
            c.replace(note, TransposeNote(note, semiTones)) +
            (notes_to_transpose.length > 1 ? "\\" : "");
          //console.log('note: ' + note + ' Transposed: ' + TransposeNote(note, semiTones));
          break;
        }
      }
    }
    //console.log(SearchChordImageName(ret.replace(/\\$/, '')));
    this.src =
      "https://www.tab4u.com/additions/chords_imgs/" +
      SearchChordImageName(ret.replace(/\\$/, "")) +
      ".gif";
  });

  // Transpose Text
  $.each($(".chords span"), function () {
    let l = this.innerText.split("/");
    var ret = this.innerText;

    for (element of l) {
      for (n of this.innerText.includes("b") ? notes_f : notes) {
        if (element.includes(n)) {
          ret = ret.replace(n, TransposeNote(n, semiTones));
          break;
        }
      }
    }
    this.innerText = ret
      .replace("G#", "Ab")
      .replace("A#", "Bb")
      .replace("D#", "Eb")
      .replace("E#", "F")
      .replace("B#", "C")
      .replace("Gb", "F#")
      .replace("Db", "C#");
  });
}
function TransposeNote(note, semiTones) {
  const n = note.replace("%23", "#");
  if (n.includes("b")) {
    //console.log('n: ' + n + ' TransposeNote Returned:' + notes_f[(12 + notes_f.indexOf(n) + semiTones -1) % 12] + 'index: ' + notes_f.indexOf(n))
    return notes_f[(12 + notes_f.indexOf(n) + semiTones) % 12];
  } else {
    //console.log('n: ' + n + ' TransposeNote Returned:' + notes[(12 + notes.indexOf(n) + (-semiTones)) % 12] + 'index: ' + notes.indexOf(n))
    return notes[(12 + notes.indexOf(n) + -semiTones) % 12];
  }
}

function RealTonChanged() {
  let selector =
    parseFloat($("select#tonChange.lItem[name='RealTonChange']")[0].value) * 2;
  let newTon = selector - oldTone;
  TransposePage(newTon);
  oldTone = selector;
}

const toneOption = `<div class="lItem npt">
<span id="tonChangeArea">
<span class="iconInMenuIS"><img class="tonChangeIcon" src="/images/upDownTon.png"></span>
<select class="lItem" name="RealTonChange" id="tonChange" onchange="RealTonChanged();CalculateCapo();">
<option value="0" disabled="" selected="">שנה טון בחאווה</option>
<option value="-2.5">-2.5</option>
<option value="-2">-2</option>
<option value="-1.5">-1.5</option>
<option value="-1">-1</option>
<option value="-0.5">-0.5</option>
<option value="0">0</option>
<option value="0.5">+0.5</option>
<option value="1">+1</option>
<option value="1.5">+1.5</option>
<option value="2">+2</option>
<option value="2.5">+2.5</option>
<option value="3">+3</option>
</select>
</span>
</div>`;

const easyButton = `<div class="lItem npt">
<span id="easyVer">
<i onclick="Easy();" class="lM2" id="eLinkZ"><span class="iconInMenuIS"><img class="shpaIcon" src="/images/icon_yesB.png"></span>גרסה קלה!</i>
</span>
</div>`;

function SearchChordImageName(chordString) {
  var t = chordString
    .replace("/", "_")
    .replace("G#", "Ab")
    .replace("A#", "Bb")
    .replace("D#", "Eb")
    .replace("E#", "F")
    .replace("B#", "C")
    .replace("Gb", "F#")
    .replace("Db", "C#")
    .replace("#", "%23");

  var ret = "";
  for (c of CHORDS) {
    if (c.includes(t)) {
      if (ret == "") {
        ret = c;
      } else {
        if (
          (c.replace("1_", "").length < ret.replace("1_", "").length) |
          (/\d/.test(ret.replace("1_", "")) & !/\d/.test(c.replace("1_", "")))
        ) {
          ret = c;
        }
      }
    }
  }
  return ret;
}

function CalculateCapo() {
  let capo = -oldTone;
  if (capo < 0){
    //transposition is positive os capo needs to be after 12
    capo = 12 + capo;
  }
  let capoHTML = 
                `<style>
                #capo {color: red;
                        font-size: 28px;}

                </style>
                <div id="capo">
                קאפו בשריג ${capo}
                </div>`;

  if ($("div#capo").length > 0) {
    $("div#capo")[0].innerHTML = capoHTML;
  } else {
    let element = $("#songContentTPL")[0];
    element.insertAdjacentHTML("beforebegin", capoHTML);
  }
}

// function TransposeTabs(){
//   $('td.tabs').each(function (index){
//     let text = this.innerText;
//     for (var i = 0; i < text.length; i++) {
//       if (!Number.isNaN(parseInt(text[i]))){
//         console.log(text[i], '' + text.substring(0,i) + (parseInt(text[i]) + oldTone).toString() + text.substring(i + 1))
//         $('td.tabs')[index].innerText = '' + text.substring(0,i) + (parseInt(text[i]) + oldTone).toString() + text.substring(i + 1)
//       };
//     }
//   })
//   };

let element = document.querySelector("div#shpa");
element.insertAdjacentHTML("afterend", toneOption);

let easy = $("#eLinkZ");
if (easy.length > 0) {
  element.insertAdjacentHTML("afterend", easyButton);
  EASY_TONE = /ton=[-\.01235]*/.exec(easy[0].href)[0].substring(4);
}
