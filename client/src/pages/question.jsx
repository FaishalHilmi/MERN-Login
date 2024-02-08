import React from "react";
import { useState } from "react";

function Question() {
  const [soalIndex, setSoalIndex] = useState(0);
  const [jawabanPilihan, setJawabanPilihan] = useState(null);
  const [skor, setSkor] = useState(0);

  const handleNextSoal = () => {
    // Cek jawaban yang dipilih
    if (jawabanPilihan === SoalQuiz[soalIndex].jawabanBenar) {
      setSkor((prevSkor) => prevSkor + 1);
    }

    // Pindah ke soal berikutnya
    setSoalIndex((prevIndex) => prevIndex + 1);
    setJawabanPilihan(null);
  };

  const handlePilihJawaban = (jawaban) => {
    setJawabanPilihan(jawaban);
  };

  const SoalQuiz = [
    {
      pertanyaan: "Siapa Calonmu ?",
      opsi1: "WOWO",
      opsi2: "WIWI",
      opsi3: "WAWA",
    },
    {
      pertanyaan: "Siapa Ketuamu ?",
      opsi1: "POPO",
      opsi2: "PIPI",
      opsi3: "PAPA",
    },
  ];

  return (
    <div className="App">
      <h1>Quiz React</h1>
      {soalIndex < SoalQuiz.length ? (
        <div>
          <h2>{SoalQuiz[soalIndex].pertanyaan}</h2>
          <div>
            {Object.keys(SoalQuiz[soalIndex]).map((key) => {
              // Menampilkan hanya opsi jawaban (opsi1, opsi2, opsi3)
              if (key.includes("opsi")) {
                return (
                  <div key={key}>
                    <label>
                      <input
                        type="radio"
                        name="jawaban"
                        value={SoalQuiz[soalIndex][key]}
                        checked={jawabanPilihan === SoalQuiz[soalIndex][key]}
                        onChange={handlePilihJawaban}
                      />
                      {SoalQuiz[soalIndex][key]}
                    </label>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <button onClick={handleNextSoal} disabled={!jawabanPilihan}>
            Next
          </button>
        </div>
      ) : (
        <div>
          <p>Quiz Selesai!</p>
          <p>Skor Anda: {skor}</p>
        </div>
      )}
    </div>
  );
}

export default Question;
