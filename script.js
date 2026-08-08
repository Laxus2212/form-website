const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydJ14oHI5q7lnWPfqiTRnDcEwL7Qw2z57yhYQWGAEAEs8cT2T3_1M87hd00y36Ws7K/exec";

const form = document.getElementById("dataForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const keterangan = document.getElementById("keterangan").value.trim();

    if (!email || !keterangan) {
        statusText.textContent = "Mohon isi semua data.";
        return;
    }

    const button = form.querySelector("button");

    button.disabled = true;
    button.textContent = "Mengirim...";
    statusText.textContent = "";

    try {
        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                email: email,
                keterangan: keterangan
            })
        });

        statusText.textContent = "Data berhasil dikirim. ✓";

        form.reset();

    } catch (error) {

        console.error(error);

        statusText.textContent =
            "Gagal mengirim data. Silakan coba lagi.";

    } finally {

        button.disabled = false;
        button.textContent = "Kirim Data";
    }
});
