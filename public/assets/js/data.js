var answerType = {
	a: "A",
	b: "B",
	c: "C",
	d: "D"
};

var questions = {
    pZlWRyuw: {
        a: "Penuh kehidupan, sering menggunakan isyarat tangan, lengan, dan wajah secara hidup.(Animated)",
        b: "Orang yang mau melakukan sesuatu hal yang baru dan berani bertekad untuk me-nguasainya.(Adventurous)",
        c: "Suka menyelidiki bagian - bagian yang logis. (Analitical)",
        d: "Mudah menyesuaikan diri dan senang dalam setiap situasi. (Adaptable)"
    },
    MivAiWXA: {
        a: "Penuh kesenangan dan selera humor yang baik. (Playful)",
        b: "Meyakinkan se-seorang dengan logika dan fakta, bukan dengan pesona / kekuasaan. (Persuasive)",
        c: "Melakukan sesuatu sampai selesai sebelum memulai yang lain. (Persistent)",
        d: "Tampak tidak ter-ganggu dan tenang serta menghindari setiap bentuk ke-kacauan. (Peaceful)"
    },
    LZYvvHfu: {
        a: "Orang yang memandang bersama orang lain sebagai kesempatan untuk bersikap manis dan menghibur, bukannya sebagai tantangan / kesempatan bisnis. (Sociable)",
        b: "Orang yang yakin dengan caranya sendiri. (Strong-Willed)",
        c: "Bersedia mengorban-kan dirinya untuk memenuhi kebutuhan orang lain.",
        d: "Dengan mudah menerima pandang-an / keinginan orang lain tanpa perlu banyak meng-ungkapkan pendapat sendiri. (Submissive)"
    },
    EdQvWneS: {
        a: "Bisa merebut hati orang lain melalui pesona kepribadian. (Convicing)",
        b: "Mengubah setiap situasi, kejadian atau permainan sebagai sebuah kontes dan selalu bermain untuk menang. (Competitive)",
        c: "Menghargai keperluan dan perasaan orang lain. (Considerate)",
        d: "Mempunyai perasaan emosional tapi jarang memperlihatkannya. (Controlled)"
    },
    KNHFMKRV: {
        a: "Memperbaharui dan membantu membuat orang lain merasa senang. (Refreshing)",
        b: "Bisa bertindak cepat dan efektif dalam semua situasi. (Resourceful)",
        c: "Memperlakukan orang lain dengan segan sebagai penghormatan dan penghargaan. (Respectfull)",
        d: "Menahan diri dalam menunjukkan emosi atau antusiasme. (Reserved)"
    },
    fsrybKsH: {
        a: "Penuh gairah dalam kehidupan. (Spirited)",
        b: "Orang mandiri yang bisa sepenuhnya mengandal-kan kemampuan dan sumber dayanya sendiri. (Self-Reliant)",
        c: "Secara intensif memperhatikan orang lain maupun hal apapun yang terjadi di sekitar. (Sensitive)",
        d: "Orang yang mudah menerima keadaan atau situasi apa saja. (Satisfied)"
    },
    yifEdUND: {
        a: "Dapat mendorong atau memaksa orang lain mengikuti dan bergabung melalui pesona kepribadian-nya. (Promoter)",
        b: "Mengetahui segalanya akan beres bila kita yang memimpin. (Positive)",
        c: "Memilih mempersiap-kan aturan yang terinci sebelumnya dalam menyelesaikan suatu proyek dan lebih menyukai keterlibatan dalam tahap-tahap perencanaan dan produk jadi, bukan dalam melaksanakan tugas. (Planner)",
        d: "Tidak terpengaruh oleh penundaan. Tetap tenang dan toleran. (Patient)"
    },
    SifPjUtP: {
        a: "Memilih agar semua kehidupan adalah kegiatan yang impulsif, tidak dipikirkan terlebih dahulu dan tidak terhambat oleh rencana.(Spontaneous)",
        b: "Yakin, tidak ragu-ragu. (Sure)",
        c: "Membuat dan meng-hayati hidup menurut rencana sehari-hari. Tidak menyukai bila rencananya terganggu.(Scheduled)",
        d: "Pendiam, tidak mudah terseret dalam per-cakapan. (Shy)"
    },
    RPNFQZwU: {
        a: "Orang yang riang dan dapat meyakinkan diri sendiri & orang lain bahwa semuanya akan beres. (Optimistic)",
        b: "Bicara terang-terangan dan terkadang tidak menahan diri. (Outspoken)",
        c: "Orang yang mengatur segala-galanya secara sistematis dan metodis. (Orderly)",
        d: "menerima apa saja, cepat melakukan sesuatu bahkan dengan cara orang lain. (Obliging)"
    },
    kIEpwvsu: {
        a: "Punya rasa humor yang cemerlang dan bisa membuat cerita apa saja menjadi peristiwa yang menyenangkan. (Funny)",
        b: "Pribadi yang mendominasi dan mampu menyebabkan orang lain ragu - ragu untuk melawannya. (Forceful)",
        c: "Secara konsisten dapat diandalkan, teguh, setia, dan mengabdi, bahkan terkadang tanpa alasan. (Faithful)",
        d: "Orang yang menang-gapi. Bukan orang yang punya inisiatif untuk memulai per-cakapan. (Friendly)"
    },
    LIFSXgTL: {
        a: "Orang yang me-nyenangkan sebagai teman. (Delightful)",
        b: "Bersedia mengambil resiko tanpa kenal takut. (Daring)",
        c: "Melakukan segala sesuatu secara ber-urutan dengan ingatan yang jernih akan segala hal yang terjadi. (Detailed)",
        d: "Berurusan dengan orang lain secara penuh siasat, perasa, dan sabar. (Diplomatic)"
    },
    VviFgYjh: {
        a: "Secara konsisten memiliki semangat yang tinggi dan suka membagkan ke-bahagiaan kepada orang lain. (Cheerful)",
        b: "Percaya diri dan yakin akan kemampuan dan kesuksesannya sendiri. (Confifent)",
        c: "Orang yang perhatiannya melibat-kan sesuatu yang berhubungan dengan intelektual dan artistik. (Cultured)",
        d: "Tetap memiliki ke-seimbangan secara emosional, me-nanggapi sebagaimana yang diharapkan orang lain. (Consisten)"
    },
    clmccHlG: {
        a: "Mendorong orang lain untuk bekerja dan ter-libat serta membuat seluruhnya menyenangkan. (Inspiring)",
        b: "Memenuhi diri sendiri, mandiri, penuh percaya diri dan nampak tidak begitu memerlukan bantuan. (Independent)",
        c: "Memvisualisasikan hal-hal dalam bentuk yang sempurna dan perlu memenuhi standar itu sendiri. (Idealistic)",
        d: "Tidak pernah me-ngatakan atau me-nyebabkan apapun yang tidak me-nyenangkan atau menimbulkan rasa keberatan. (Inoffensive)"
    },
    FeKvRXEP: {
        a: "Terang-terangan me-nyatakan emosi terutama rasa sayang dan tidak ragu menyentuh ketika berbicara dengan orang lain. (Demonstrative)",
        b: "Orang yang mempunyai kemampuan membuat penilaian yang cepat dan tuntas. (Decisive)",
        c: "Intensif dan introspektif tanpa rasa senang pada percakapan dan pengajaran yang pulasan. (Deep)",
        d: "Memperlihatkan ke-pandaian bicara yang mengigit'. Biasanya kalimat satu baris yang sifatnya sarkastik. (Dryhumor)"
    },
    nVLgFfBj: {
        a: "Menyukai pesta dan tidak bisa menunggu untuk bertemu setiap orang dalam ruangan, tidak pernah meng-anggap orang lain asing. (Mixes-easily)",
        b: "Terdorong oleh keperluan untuk produktif, pemimpin yang dituruti orang lain. (Mover)",
        c: "Punya apresiasi mendalam untuk musik, punya komitmen kepada musik sebagai bentuk seni, bukan hanya kesenangan pertunjukan. (Musical)",
        d: "Secara konsisten mencari peranan merukunkan pertikaian supaya bisa meng-hindari konflik. (Mediator)"
    },
    pfBNhQLK: {
        a: "Terus-menerus ber-bicara, biasanya men-ceritakan kisah lucu yang dapat menghibur setiap orang di sekitar-nya, merasa perlu mengisi kesunyian agar orang lain merasa senang. (Talker)",
        b: "Memegang teguh dengan keras kepala dan tidak mau melepaskan hingga tujuan tercapai. (Tenacious)",
        c: "Orang yang tanggap dan mengingat setiap kesempatan istimewa, cepat memberi isyarat yang baik. (Thoightful)",
        d: "Mudah menerima pemikiran dan cara orang lain tanpa perlu tidak menyetujuinya. (Tolerant)"
    },
    NcfLhGmX: {
        a: "Penuh kehidupan, kuat, dan penuh semangat. (Lively)",
        b: "Pemberi pengarahan karena pembawaan yang terdorong untuk memimpin dan sering merasa sulit mem-percayai bahwa orang lain bisa melakukan pekerjaan dengan sama baiknya. (Leader)",
        c: "Setia pada seseorang, gagasan, dan pekerja-an, terkadang dapat melampaui alasan. (Loyal)",
        d: "Selalu bersedia men-dengarkan apa yang orang lain katakan. (Listener)"
    },
    mZGtToif: {
        a: "Tak ternilai harganya, dicintai, pusat perhatian. (Cute)",
        b: "Memegang ke-pemimpinan dan meng-harapkan orang lain mengikuti. (Chief)",
        c: "Mengatur kehidupan, tugas, dan pemecahan masalah dengan membuat daftar. (Chartmaker)",
        d: "Mudah puas dengan apa yang dimiliki, jarang iri hati. (Contented)"
    },
    iEMiNuBr: {
        a: "Orang yang suka menghidupkan pesta sebagai diinginkan orang sebagai tamu pesta. (Populer)",
        b: "Harus terus-menerus bekerja atau mencapai sesuatu, sering merasa sulit ber-istirahat. (Productive)",
        c: "Menempatkan standar tinggi pada dirinya maupun orang lain. Menginginkan segala-galanya pada urutan semestinya.(Perfectionist)",
        d: "Mudah bergaul, bersifat terbuka, mudah diajak bicara. (Pleasant)"
    },
    GQBCJlWF: {
        a: "Kepribadian yang hidup, berlebihan, penuh tenaga. (Bouncy)",
        b: "Tidak kenal takut, berani, terus terang, tidak takut akan resiko. (Bold)",
        c: "Secara konsisten ingin membawa diri di dalam batas-batas apa yang dirasakan semestinya. (Behafed)",
        d: "Kepribadian yang stabil dan berada di tengah-tengah. (Balanced)"
    },
    JABSZnXT: {
        a: "Memperlihatkan sedikit emosi / mimik. (Blank)",
        b: "Menghindari perhatian akibat rasa malu. (Bashful)",
        c: "Suka pamer, mem-perlihatkan apa yang gemerlap dan kuat, terlalu bersuara. (Brassy)",
        d: "Suka memerintah, mendominasi, kadang-kadang mengesalkan antar hubungan orang dewasa. (Bossy)"
    },
    MhzQBqyJ: {
        a: "Kurang teraturan-nya mempengaruhi hampir semua bidang ke-hidupannya. (Undisipline)",
        b: "Merasa sulit mengenali masalah dan perasaan orang lain. (Unsympathetic)",
        c: "Sulit memaafkan dan melupakan sakit hati yang pernah dilakukan, biasa mendendam. (Unforgiving)",
        d: "Cenderung tidak ber-gairah, sering merasa bahwa bagaimana-pun sesuatu tidak akan berhasil. (Unenthusiastic)"
    },
    eFscOxDJ: {
        a: "Suka menceritakan kembali suatu kisah tanpa menyadari bahwa cerita tersebut pernah diceritakan sebelumnya, selalu perlu sesuatu untuk dikatakan. (Repetitious)",
        b: "Berjuang, melawan untuk menerima cara lain yang tidak sesuai dengan cara yang diinginkan. (Resistant)",
        c: "Sering memendam rasa tidak senang akibat merasa tersinggung oleh sesuatu. (Resenful)",
        d: "Tidak bersedia ikut terlibat terutama bila rumit. (Reticent)"
    },
    TRHcWwse: {
        a: "Punya ingatan kurang kuat, biasa-nya berkaitan dengan kurang disiplin dan tidak mau repot-repot mencatat hal-hal yang tidak menyenangkan. (Forgetful)",
        b: "Langsung, blak-blakan, tidak sungkan mengatakan apa yang dipikirkan. (Farank)",
        c: "Bersikeras tentang persoalan sepele, minta perhatian besar pada persoalan yang tidak penting. (Fussy)",
        d: "Sering merasa sangat khawatir, sedih, dan gelisah. (Fearful)"
    },
    XrtEebeM: {
        a: "Lebih banyak bicara daripada mendengar-kan, bila sudah bicara sulit berhenti. (Interrupts)",
        b: "Sulit bertahan untuk menghadapi kekesal-an. (Impatient)",
        c: "Kurang percaya diri. (Insecure)",
        d: "Sulit dalam membuat keputusan. (Indesecive)"
    },
    ZiNUoyRZ: {
        a: "Bisa bergairah sesaat dan sedih pada saat berikutnya. Bersedia membantu kemudian menghilang. Berjanji akan datang tapi kemudian lupa untuk muncul. (Unpredictable)",
        b: "Merasa sulit mem-perlihatkan kasih sayang dengan terbuka. (Unaffectionate)",
        c: "Tuntutannya akan kesempurnaan terlalu tinggi dan dapat membuat orang lain menjauhinya. (Unpopular)",
        d: "Tidak tertarik pada perkumpulan atau kelompok. (Uninfolved)"
    },
    whCvlMVs: {
        a: "Tidak punya cara yang konsisten untuk melakukan banyak hal. (Haphazard)",
        b: "Bersikeras memaksa-kan caranya sendiri. (Headstrong)",
        c: "Standar yang ditetapkan begitu tinggi sehingga orang lain sulit memuaskannya. (Hard to Please)",
        d: "Lambat dalam bergerak dan sulit untuk ikut terlibat. (Hesitant)"
    },
    FslqhRhC: {
        a: "Memperbolehkan orang lain, termasuk anak-anak untuk melakukan apa saja sesukanya untuk menghindari diri kita tidak disukai. (Permissive)",
        b: "Punya harga diri tinggi dan menganggap diri selalu benar dan yang terbaik dalam pekerja-an. (Proud)",
        c: "Dalam mengharapkan yang terbaik, biasanya melihat sisi buruk sesuatu terlebih dahulu. (Pessimistic)",
        d: "Memiliki kepribadian yang biasa saja dan tidak suka mem-perlihatkan banyak emosi. (Plain)"
    },
    PqDyAGoY: {
        a: "Memiliki perangai seperti anak-anak yang mengutarakan diri dengan ngambek dan berbuat ber-lebihan tetapi kemudian melupakan-nya seketika. (Angered-Easily)",
        b: "Mudah merasa ter-asing dari orang lain dikarenakan rasa tidak aman atau takut jangan-jangan orang lain tidak merasa senang bersamanya. (Alienated)",
        c: "Mengobarkan per-debatan karena biasanya selalu benar dan terkadang tidak peduli bagaimana situasi saat itu. (Argumentative)",
        d: "Bukan orang yang suka menetapkan tujuan dan tidak berharap menjadi orang yang seperti itu. (Aimless)"
    },
    ncczwhpT: {
        a: "Memiliki perspektif yang sederhana dan kekanak-kanakan, kurang pengertian terhadap tingkat kehidupan yang lebih mendalam. (Naive)",
        b: "Penuh keyakinan, semangat, dan keberanian (sering dalam pengertian negatif). (Nervy)",
        c: "Sikapnya jarang positif dan sering hanya melihat sisi buruk dari setiap situasi. (Negative-Atitude)",
        d: "Mudah bergaul, tidak peduli, dan masa bodoh. (Nonchalat)"
    },
    XmWNCwLv: {
        a: "Merasa senang mendapat pengharga-an dari orang lain. Sebagai penghibur menyukai tepuk tangan, tawa, dan penerimaan penonton. (Wants-Credit)",
        b: "Menetapkan tujuan secara agresif serta harus terus produktif, merasa bersalah bila beristirahat, bukan ter-dorong oleh keinginan untuk sempurna melainkan imbalan. (Workaholic)",
        c: "Suka menarik diri dan memerlukan banyak waktu untuk sendirian atau mengasingkan diri. (Withdrawn)",
        d: "Secara konsisten merasa terganggu atau resah. (Worrier)"
    },
    dvYgXDQw: {
        a: "Suka berbicara dan sulit mendengarkan. (Talkative)",
        b: "Kadang-kadang me-nyatakan diri dengan cara yang agak menyinggung perasaan dan kurang per-timbangan. (Tactless)",
        c: "Terlalu introspektif dan mudah tersinggung kalau disalahpahami. (Too Sensitive)",
        d: "Lebih suka mundur dari situasi sulit. (Timid)"
    },
    hyiraRKT: {
        a: "Kurang memiliki ke-mampuan dalam membuat kehidupan menjadi teratur. (Disorganized)",
        b: "Dengan paksa mengambil kontrol atas situasi atau orang lain, biasanya dengan mengatakan apa yang harus dilakukan. (Domineering)",
        c: "Hampir sepanjang waktu merasa tertekan. (Depressed)",
        d: "Mempunyai ciri khas selalu tidak tetap dan kurang keyakinan bahwa suatu hal akan berhasil. (Doubtful)"
    },
    ESiCZcgc: {
        a: "Tidak menentu, serba berlawanan dengan tindakan dan emosi yang tidak berdasar-kan logika. (Inconsistant)",
        b: "Tampaknya tidak bisa menerima sikap, pandangan, dan cara orang lain. (Intolerant)",
        c: "Pemikiran dan perhatian ditujukan ke dalam, hidup di dalam diri sendiri. (Introvert)",
        d: "Merasa bahwa ke-banyakan hal tidak penting dalam suatu cara atau cara yang lain. (Indifferent)"
    },
    vlSIRJgK: {
        a: "Hidup dalam keadaan tidak teratur, tidak dapat menemukan banyak benda. (Messy)",
        b: "Mempengaruhi dengan cerdik dan penuh tipu untuk kepentingan sendiri; dengan suatu cara dapat memaksakan kehendak. (Manipulative)",
        c: "Bicara pelan kalau didesak, tidak mau repot-repot bicara dengan jelas. (Mumbles)",
        d: "Tidak punya emosi yang tinggi, tetapi biasanya semangatnya merosot sekali, apalagi bila merasa tidak dihargai. (Moody)"
    },
    UHmjsxXT: {
        a: "Perlu menjadi pusat perhatian, ingin dilihat. (Show Off)",
        b: "Bertekad memaksakan kehendaknya, tidak mudah dibujuk, keras kepala. (Stubborn)",
        c: "Tidak mudah percaya, mempertanyakan motif di balik suatu perkataan. (Skeptical)",
        d: "Tidak sering bertindak atau berpikir cepat, sangat mengganggu. (Slow)"
    },
    WAMhdVZQ: {
        a: "Tawa dan suaranya dapat didengar di atas suara lainnya di di dalam ruangan. (Loud)",
        b: "Tidak ragu-ragu mengatakan benar dan dapat memegang kendali. (Lord Over)",
        c: "Memerlukan banyak waktu pribadi dan cenderung meng-hindari orang lain. (Loner)",
        d: "Menilai pekerjaan dan kegiatan dengan ukuran berapa banyak tenaga yang dibutuhkan. (Lazy)"
    },
    rwQmExbH: {
        a: "Tidak punya kekuatan untuk berkonsentrasi atau menaruh per-hatian pada sesuatu. (Scatterbrained)",
        b: "Punya kemarahan yang menuntut berdasarkan ketidak-sabaran. Kemarahan yang dinyatakan saat orang lain tak bergerak cukup cepat atau tidak menyelesaikan apa yang diperintahkan. (Short-Tempered)",
        c: "Cenderung mencurigai atau tidak mempercayai gagasan orang lain. (Suspicious)",
        d: "Lambat untuk me-mulai, perlu dorongan yang kuat untuk termotivasi. (Sluggish)"
    },
    oXHUDeqq: {
        a: "Menyukai kegiatan baru terus-menerus karena tidak merasa senang melakukan hal yang sama sepanjang waktu. (Restless)",
        b: "Bisa bertindak tergesa-gesa tanpa memikirkan dengan tuntas terlebih dahulu, biasanya karena ketidaksabaran. (Rash)",
        c: "Secara sadar maupun tidak mendendam, menghukum orang yang melanggar, diam-diam menahan persahabatan /kasih sayang. (Revengeful)",
        d: "Tidak bersedia untuk ikut terlibat dalam suatu hal. (Reluctant)"
    },
    hhxbCieh: {
        a: "Rentang perhatian kekanak-kanakan dan pendek, butuh banyak perubahan dan variasi supaya tak merasa bosan. (Changeable)",
        b: "Cerdik, orang yang selalu bisa menemu-kan cara untuk mencapai tujuan yang diinginkan. (Crafty)",
        c: "Selalu mengevaluasi dan membuat penilaian, sering memikirkan dan menyatakan reaksi negatif. (Critical)",
        d: "Sering mengendur kan pendiriannya, bahkan ketika merasa benar untuk menghindari terjadinya konflik. (Comrimissing)"
    }
};