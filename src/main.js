function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

document.body.onload = () => {
    console.log(getCookie("DCID") ? getCookie(DCID) : "no dcid set");
};

document.getElementById("DCA").addEventListener("click", (_) => {
    setCookie("DCID", "DCA", 1);
    console.log("set DCID to DCA");
});
document.getElementById("DCB").addEventListener("click", (_) => {
    setCookie("DCID", "DCB", 1);
    console.log("set DCID to DCB");
});
document.getElementById("DCC").addEventListener("click", (_) => {
    setCookie("DCID", "DCC", 1);
    console.log("set DCID to DCC");
});
document.getElementById("DCZ").addEventListener("click", (_) => {
    setCookie("DCID", "DCZ", 1);
    console.log("set DCID to DCZ");
});
document.getElementById("PDU").addEventListener("click", (_) => {
    setCookie("DCID", "PDU", 1);
    console.log("set DCID to PDU");
});
document.getElementById("MP4").addEventListener("click", (_) => {
    setCookie("DCID", "MP4", 1);
    console.log("set DCID to MP4");
});
