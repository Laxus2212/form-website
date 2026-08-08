document.addEventListener("DOMContentLoaded", function () {

    /*
     * Semua gambar yang tersedia.
     * Tambahkan nama file lain di sini kalau ada.
     */

    const images = [
        "gambar1.jpeg",
        "gambar2.jpeg",
        "gambar3.jpeg"
    ];


    /*
     * Acak array
     */

    function shuffle(array) {

        const result = [...array];

        for (
            let i = result.length - 1;
            i > 0;
            i--
        ) {

            const random =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [
                result[i],
                result[random]
            ] = [
                result[random],
                result[i]
            ];
        }

        return result;
    }


    /*
     * Ambil 3 gambar berbeda
     */

    const selectedImages = shuffle(images);


    /*
     * Masukkan gambar ke card
     */

    const photo1 =
        document.getElementById("photo1");

    const photo2 =
        document.getElementById("photo2");

    const photo3 =
        document.getElementById("photo3");


    if (photo1) {
        photo1.src = selectedImages[0];
    }


    if (photo2) {
        photo2.src = selectedImages[1];
    }


    if (photo3) {
        photo3.src = selectedImages[2];
    }

});
