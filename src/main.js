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

const dcidToName = {
    DCA: {
        name: "Datacenter A",
        shortname: "DC-A"
    },
    DCB: {
        name: "Datacenter B",
        shortname: "DC-B"
    },
    DCC: {
        name: "Datacenter C",
        shortname: "DC-C"
    },
    DCZ: {
        name: "Datacenter Z",
        shortname: "DC-Z"
    },
    //non-datacenter rooms
    PDU: {
        name: "PDU gallery",
        shortname: "PDU"
    },
    MP4: {
        name: "MEP-4",
        shortname: "MEP-4"
    },
};

document.body.onload = () => {
    console.log(getCookie("DCID") ? getCookie("DCID") : "no dcid set");
    document.title = getCookie("DCID");
    document.getElementById("DCID").innerText = getCookie("DCID");
};

function setDCID(self) {
    setCookie("DCID", self.id, 1);
    console.log(`set DCID to ${self.id}`);
}
