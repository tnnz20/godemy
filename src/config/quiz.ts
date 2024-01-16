import { QuizConfig } from "@/types"

export const QuizChapter: QuizConfig[] = [
  {
    category: "Your First Program",
    quizItem: [
      {
        id: 1,
        question:
          "Sebutkan 3 orang yang berperan dalam pembuatan pemrograman Golang?",
        answers: [
          "Robert Griesemer, Rob Pike, and Ken Thompson.",
          "Bill Gates, Mark Zuckberk, Elon Musk",
          "Jack ma, Jacky Chan, Eddie Wu",
          "Jeff Bezos, Bernard Arnault, Bill Gates",
        ],
        correctAnswer: "Robert Griesemer, Rob Pike, and Ken Thompson.",
        isCode: false,
      },
      {
        id: 2,
        question:
          "Dibawah ini pilihlah karakteristik Pemrograman Golang, Kecuali?",
        answers: [
          "Static typing dan run-time",
          "Readability",
          "General purpose programming",
          "High - Performance dan multi-processing",
        ],
        correctAnswer: "General purpose programming",
        isCode: false,
      },
      {
        id: 3,
        question:
          "Apa library built - in atau bawaan yang disediakan oleh Golang untuk menampilkan teks ke dalam console?",
        answers: ["time", "fmt", "String", "I/O"],
        correctAnswer: "fmt",
        isCode: false,
      },
      {
        id: 4,
        question:
          "Penulisan sebuah komentar pada pemrograman Golang dapat menggunakan tanda...",
        answers: ["#", "*", "//", "$$"],
        correctAnswer: "//",
        isCode: false,
      },
      {
        id: 5,
        question:
          "Fungsi apa yang akan dijalankan pertama kali ketika program Golang dijalankan?",
        answers: ["main", "important", "function", "first"],
        correctAnswer: "main",
        isCode: false,
      },
    ],
  },
  {
    category: "Variabels, Data Types, Operators",
    quizItem: [
      {
        id: 1,
        question:
          "Keyword yang digunakan untuk mendeklarasikan sebuah variabel adalah?",
        answers: ["let", "variable", "def", "var"],
        correctAnswer: "var",
        isCode: false,
      },
      {
        id: 2,
        question: "Tanda yang digunakan untuk melakukan type inference?",
        answers: ["==", ":=", "//", "%"],
        correctAnswer: ":=",
        isCode: false,
      },
      {
        id: 3,
        question:
          "Jika terdapat bilangan 840194 sebaiknya kita menggunakan tipe data apa ketika mendeklarasikan nilai tersebut ke dalam variable?",
        answers: ["int32", "float32", "byte", "string"],
        correctAnswer: "int32",
        isCode: false,
      },
      {
        id: 4,
        question:
          "Operator yang digunakan untuk membandingkan dua buah nilai apakah sama adalah?",
        answers: ["!=", "==", ">=", "<="],
        correctAnswer: "==",
        isCode: false,
      },
      {
        id: 5,
        question:
          "Apa output atau hasil ketika kita menggunakan Operator Logika?",
        answers: ["string", "float", "int", "boolean"],
        correctAnswer: "boolean",
        isCode: false,
      },
    ],
  },
  {
    category: "Control Flow",
    quizItem: [
      {
        id: 1,
        question:
          "Dibawah ini yang merupakan sebuah control-flow adalah, kecuali",
        answers: [
          "looping",
          "seleksi kondisi (if-else)",
          "switch-case",
          "Struktur Data",
        ],
        correctAnswer: "Struktur Data",
        isCode: false,
      },
      {
        id: 2,
        question:
          "Keyword yang digunakan untuk menambahkan kondisi pada sebuah seleksi kondisi (if-else) adalah?",
        answers: ["else", "elif", " if else", "else if"],
        correctAnswer: "else if",
        isCode: false,
      },
      {
        id: 3,
        question:
          "Struktur kontrol yang digunakan dalam pemrograman untuk membuat keputusan berdasarkan nilai dari ekspresi tertentu. Adalah pengertian dari?",
        answers: ["looping", "seleksi kondisi", "switch-case", "Struktur Data"],
        correctAnswer: "switch-case",
        isCode: false,
      },
      {
        id: 4,
        question:
          "Apa yang men Triger atau yang membuat suatu switch case akan menampilkan nilai default?",
        answers: [
          "Semua kondisi case terpenuhi",
          "Salah satu kondisi case terpenuhi",
          "Jika tidak ada kondisi yang terpenuhi",
          "Bukan salah satu di atas",
        ],
        correctAnswer: "Jika tidak ada kondisi yang terpenuhi",
        isCode: false,
      },
      {
        id: 5,
        question: `var score int = 85
        if score >= 80{
          fmt.Println("Bagus Sekali")
        } else if score > 50{
          fmt.Println("Cukup Bagus")
        } else{
          fmt.Println("Coba Lagi")
        }`,
        subQuestion: "Apa output dari code di atas?",
        answers: ["Bagus Sekali", "Cukup Bagus", "Coba Lagi", "Kosong"],
        correctAnswer: "Bagus Sekali",
        isCode: true,
      },
    ],
  },
  {
    category: "Looping",
    quizItem: [
      {
        id: 1,
        question:
          "Digunakan untuk mengotomatiskan tugas-tugas yang memerlukan repetisi, seperti memproses item dalam sebuah daftar, menghitung iterasi, atau menjalankan instruksi berulang kali. Merupakan fungsi dari?",
        answers: ["if else", "fmt", "fungsi", "looping"],
        correctAnswer: "looping",
        isCode: false,
      },
      {
        id: 2,
        question:
          "Keyword yang digunakan untuk melakukan sebuah perulangan atau looping pada Go adalah?",
        answers: ["func", "import", "break", "for"],
        correctAnswer: "for",
        isCode: false,
      },
      {
        id: 3,
        question: "Sebutkan komponen utama dalam looping, kecuali",
        answers: ["Inisialisasi", "Kondisi", "scope", " Post - statement"],
        correctAnswer: "scope",
        isCode: false,
      },
      {
        id: 4,
        question:
          "Dalam standard looping terdapat sebuah statement “i++” apa yang dimaksud dari statement tersebut?",
        answers: [
          "Melakukan penjumlah nilai i dengan nilai i",
          "Melakukan increment nilai i",
          "Melakukan decrement nilai i",
          "Tidak terjadi apa apa",
        ],
        correctAnswer: "Melakukan increment nilai i",
        isCode: false,
      },
      {
        id: 5,
        question:
          "Keyword yang digunakan untuk menghentikan sebuah looping tanpa argument adalah?",
        answers: ["break", "fmt", "if", "continue"],
        correctAnswer: "break",
        isCode: false,
      },
    ],
  },
  {
    category: "Composite Types",
    quizItem: [
      {
        id: 1,
        question:
          "Terdiri dari tipe data umum yang digunakan untuk mengelompokkan data, sehingga lebih mudah untuk dikelola dan di manipulasi dalam kode Anda. Merupakan pengertian dari?",
        answers: ["Tipe data", "Function", "Scope", "Tipe data komposit"],
        correctAnswer: "Tipe data komposit",
        isCode: false,
      },
      {
        id: 2,
        question: "Berikut yang merupakan tipe data dari komposit adalah?",
        answers: ["boolean", "string", "array", "integer"],
        correctAnswer: "Array",
        isCode: false,
      },
      {
        id: 3,
        question: "Bagaimana sintaks untuk mendeklarasikan sebuah array?",
        answers: [
          "var keranjang [5]string",
          "var keranjang {5}string",
          "var keranjang array",
          "var keranjang",
        ],
        correctAnswer: "var keranjang [5]string",
        isCode: false,
      },
      {
        id: 4,
        question:
          "Terdapat sebuah variabel data sebagai berikut var data = [4]int{1, 2, 3, 4} bagaimana cara untuk mendapatkan nilai “3 dan 4” menggunakan slice?",
        answers: ["data[:]", "data[:2]", "data[2:]", "data"],
        correctAnswer: "looping",
        isCode: false,
      },
      {
        id: 5,
        question:
          "Keyword yang digunakan mendeklarasikan sebuah struct pada pemrograman Go adalah",
        answers: [
          "type dan struct",
          "sturct dan type",
          "var dan struct",
          "struct dan array",
        ],
        correctAnswer: "type dan struct",
        isCode: false,
      },
    ],
  },
  {
    category: "Function",
    quizItem: [
      {
        id: 1,
        question:
          "Keyword yang digunakan untuk mendeklarasikan sebuah fungsi adalah",
        answers: ["def", "function", "func", "void"],
        correctAnswer: "func",
        isCode: false,
      },
      {
        id: 2,
        question:
          "Berikut adalah jenis jenis scope yang tersedia pada Go, kecuali",
        answers: [
          "Universal Scope",
          "Package Scope",
          "Block Scope",
          "Inter Scope",
        ],
        correctAnswer: "Inter Scope",
        isCode: false,
      },
      {
        id: 3,
        question:
          "Berapa banyak parameter yang bisa dimiliki oleh suatu function?",
        answers: [
          "hanya satu",
          "satu atau dua",
          "minimal tiga",
          "sesuai kebutuhan",
        ],
        correctAnswer: "sesuai kebutuhan",
        isCode: false,
      },
      {
        id: 4,
        question:
          "Tanda yang digunakan untuk membuat sebuah paramter untuk fungsi variadic adalah?",
        answers: ["#", "...", "*", "&"],
        correctAnswer: "...",
        isCode: false,
      },
      {
        id: 5,
        question:
          "Fungsi dalam bahasa pemrograman yang memiliki kemampuan untuk menangkap dan mengakses variabel yang ada di luar cakupannya (lexical scope). Merupakan pengertian dari?",
        answers: [
          "Fungsi Closure",
          "Fungsi Variadic",
          "Return Fungsi",
          "Fungsi",
        ],
        correctAnswer: "Fungsi Closure",
        isCode: false,
      },
    ],
  },
]

export const QuizEval: QuizConfig = {
  category: "Evaluasi",
  quizItem: [
    {
      id: 1,
      question: "Siapa yang awalnya mengembangkan bahasa pemrograman Go?",
      answers: ["Google", "Microsoft", "Apple", "Facebook"],
      correctAnswer: "Google",
      isCode: false,
    },
    {
      id: 2,
      question:
        "Kapan Bahasa pemrograman Go pertama kali diperkenalkan ke publik?",
      answers: ["2005", "2007", "2009", "2011"],
      correctAnswer: "2009",
      isCode: false,
    },
    {
      id: 3,
      question:
        "Apa perbedaan antara deklarasi variabel dengan inisialisasi variabel dalam Go?",
      answers: [
        "Tidak ada perbedaan",
        "Deklarasi adalah membuat variabel, sedangkan inisialisasi adalah memberikan nilai awal pada variabel.",
        "Inisialisasi adalah membuat variabel, sedangkan deklarasi adalah memberikan nilai awal pada variabel.",
        "Deklarasi adalah memberikan nilai awal pada variabel, sedangkan inisialisasi adalah membuat variabel.",
      ],
      correctAnswer:
        "Deklarasi adalah membuat variabel, sedangkan inisialisasi adalah memberikan nilai awal pada variabel.",
      isCode: false,
    },
    {
      id: 4,
      question: "Tipe data float64 digunakan untuk menyimpan?",
      answers: ["Angka bulat", "Karakter", "Angka pecahan", "Teks"],
      correctAnswer: "Angka pecahan",
      isCode: false,
    },
    {
      id: 5,
      question: "Apa hasil dari operasi 3 % 2 dalam Go?",
      answers: ["1", "1.5", "2", "0"],
      correctAnswer: "1",
      isCode: false,
    },
    {
      id: 6,
      question: "Apa perbedaan antara operator == dan = dalam Go?",
      answers: [
        "== adalah operator perbandingan, sedangkan = adalah operator assignment.",
        "== adalah operator assignment, sedangkan = adalah operator perbandingan.",
        "Keduanya adalah operator perbandingan dengan fungsi yang sama.",
        "Keduanya adalah operator assignment dengan fungsi yang sama.",
      ],
      correctAnswer:
        "== adalah operator perbandingan, sedangkan = adalah operator assignment.",
      isCode: false,
    },
    {
      id: 7,
      question:
        "Apa yang akan dilakukan oleh pernyataan if jika kondisi bernilai false?",
      answers: [
        "Menjalankan blok kode di dalamnya",
        "Melewati blok kode dan melanjutkan ke pernyataan berikutnya",
        "Menghentikan program",
        "Mencetak pesan kesalahan",
      ],
      correctAnswer:
        "Melewati blok kode dan melanjutkan ke pernyataan berikutnya",
      isCode: false,
    },
    {
      id: 8,
      question: "Apa itu pernyataan else if dalam Go?",
      answers: [
        "Pernyataan untuk mengeksekusi blok kode jika kondisi pertama bernilai true",
        "Pernyataan untuk mengeksekusi blok kode jika kondisi pertama bernilai false dan kondisi kedua bernilai true",
        "Pernyataan untuk mengeksekusi blok kode jika kondisi pertama dan kedua bernilai true",
        "Pernyataan untuk mengeksekusi blok kode jika kondisi pertama dan kedua bernilai false",
      ],
      correctAnswer:
        "Pernyataan untuk mengeksekusi blok kode jika kondisi pertama bernilai false dan kondisi kedua bernilai true",
      isCode: false,
    },
    {
      id: 9,
      question: "Apa hasil dari pernyataan for i := 0; i < 5; i++ dalam Go?",
      answers: [
        "0, 1, 2, 3, 4",
        "1, 2, 3, 4, 5",
        "5, 4, 3, 2, 1",
        "4, 3, 2, 1, 0",
      ],
      correctAnswer: "0, 1, 2, 3, 4",
      isCode: false,
    },
    {
      id: 10,
      question: "Apa fungsi dari pernyataan break dalam Go?",
      answers: [
        "Menghentikan program secara keseluruhan",
        "Menghentikan iterasi loop saat ini",
        "Melanjutkan ke iterasi berikutnya dalam loop",
        "Tidak melakukan apa-apa",
      ],
      correctAnswer: "Menghentikan iterasi loop saat ini",
      isCode: false,
    },
    {
      id: 11,
      question: "Apa perbedaan utama antara array dan slice dalam Go?",
      answers: [
        "Array memiliki panjang tetap, sedangkan slice dapat tumbuh dan menyusut.",
        "Array dapat mengandung tipe data campuran, sedangkan slice hanya dapat mengandung tipe data tunggal.",
        "Array hanya dapat digunakan untuk tipe data numerik, sedangkan slice dapat digunakan untuk tipe data apa saja.",
        "Array bersifat dinamis, sedangkan slice bersifat statis.",
      ],
      correctAnswer:
        "Array memiliki panjang tetap, sedangkan slice dapat tumbuh dan menyusut.",
      isCode: false,
    },
    {
      id: 12,
      question: "Apa itu map dalam Go?",
      answers: [
        "Tipe data untuk menyimpan kumpulan data dengan indeks numerik",
        "Tipe data untuk menyimpan pasangan kunci-nilai",
        "Tipe data untuk menyimpan data dalam urutan terurut",
        "Tipe data untuk menyimpan data yang tidak memiliki urutan tertentu",
      ],
      correctAnswer: "Tipe data untuk menyimpan pasangan kunci-nilai",
      isCode: false,
    },
    {
      id: 13,
      question:
        "Bagaimana cara mengembalikan nilai dari sebuah fungsi dalam Go?",
      answers: [
        "Dengan menggunakan pernyataan return",
        "Dengan menggunakan pernyataan break",
        "Dengan menggunakan pernyataan yield",
        "Dengan menggunakan pernyataan continue",
      ],
      correctAnswer: "Dengan menggunakan pernyataan return",
      isCode: false,
    },
    {
      id: 14,
      question:
        "Sebuah program Go memiliki slice siswa, var siswa = []string{udin, malik, lana, wahyu, yanti}. Diketahui slice siswa dari program diatas adalah udin, malik, lana, wahu, dan yanti. Untuk menambahkan siswa baru bernama lisa pada irisan siswa dapat menggunakan fungsi dari?",
      answers: ["append", "copy", "return", "add"],
      correctAnswer: "append",
      isCode: false,
    },
    {
      id: 15,
      question:
        "Deklarasi multi variabel memungkinkan untuk memuat banyak data secara bersamaan. Tentukan tipe data dari deklarasi berikut var x, y, z = 12, 1.6, “Lebar”?",
      answers: [
        "x string, y int, z boolean",
        "x float, y string, z byte",
        "x string, y string, z string",
        "x int, y float, z string",
      ],
      correctAnswer: "x int, y float, z string",
      isCode: false,
    },
    {
      id: 16,
      question:
        "Berikut ini merupakan jenis-jenis operator pada Go, kecuali...",
      answers: ["+", "/", "%", "$"],
      correctAnswer: "$",
      isCode: false,
    },
    {
      id: 17,
      question: "Apa fungsi “%d” pada fmt.Printf",
      answers: [
        "Untuk menampilkan nilai tipe data integer",
        "Untuk menampilkan nilai tipe data string",
        "Untuk menampilkan nilai Boolean",
        "Tidak ada dipilihan",
      ],
      correctAnswer: "Untuk menampilkan nilai tipe data integer",
      isCode: false,
    },
    {
      id: 18,
      question: "Bentuk umum dari pernyataan perulangan for adalah...",
      answers: [
        "for (kondisi; increment_atau_decrement) nilai_awal;",
        "for (increment_atau_decrement;kondisi) pernyataan;",
        "for (Inisialisasi awal; kondisi; post - statement)",
        "for (nilai_awal; kondisi; increment_atau_decrement) pernyataan;",
      ],
      correctAnswer: "for (Inisialisasi awal; kondisi; post - statement)",
      isCode: false,
    },
    {
      id: 19,
      question:
        "Di bawah ini merupakan tipe data yang ada pada pemrograman Go, kecuali",
      answers: ["byte", "struct", "float", "double"],
      correctAnswer: "double",
      isCode: false,
    },
    {
      id: 20,
      question:
        "Apa yang terjadi ketika kita tidak mendefinisikan kondisi pada sebuah looping?",
      answers: [
        "Infinity looping",
        "Looping tidak akan berjalan",
        "Looping akan berjalan satu kali setelah itu akan muncul error",
        "Looping akan dilewati",
      ],
      correctAnswer: "Infinity looping",
      isCode: false,
    },
  ],
}
