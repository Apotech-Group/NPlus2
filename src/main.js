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

const measures = {
    CRAC: [
        "ST",
        "RT",
        "RH"
    ],
    PDU: [
        "KW",
        "KVA"
    ],
    NEST: [
        "&#8457;"
    ]
};

const types = {
    PDU: "PDU",
    CRAC: "CRAC",
    NEST: "NEST"
};

const dcidInfo = {
    DCA: {
        name: "Datacenter A",
        shortname: "DC-A",
        devices: [
            {
                name: "CRAC A-1",
                shortname: "A-1",
                type: types.CRAC,
                measures: measures.CRAC
            },
            {
                name: "1A-L-RX-04",
                shortname: "RX-04 A",
                type: types.PDU,
                measures: measures.PDU
            },
            {
                name: "1B-L-RX-04",
                shortname: "RX-04 B",
                type: types.PDU,
                measures: measures.PDU
            }
        ]
    },
    DCB: {
        name: "Datacenter B",
        shortname: "DC-B",
        devices: [
            {
                name: "CRAC B-4",
                shortname: "B-4",
                type: types.CRAC,
                measures: measures.CRAC
            }
        ]
    },
    DCC: {
        name: "Datacenter C",
        shortname: "DC-C",
        devices: [
            {
                name: "CRAC C-1",
                shortname: "C-1",
                type: types.CRAC,
                measures: measures.CRAC
            },
            {
                name: "CRAC C-3",
                shortname: "C-3",
                type: types.CRAC,
                measures: measures.CRAC
            },
            {
                name: "1A-H-FPC-01",
                shortname: "FPC-01 A",
                type: types.PDU,
                measures: measures.PDU
            },
            {
                name: "1B-H-FPC-01",
                shortname: "FPC-01 B",
                type: types.PDU,
                measures: measures.PDU
            },
            {
                name: "1A-H-FPC-02",
                shortname: "FPC-02 A",
                type: types.PDU,
                measures: measures.PDU
            },
            {
                name: "1B-H-FPC-02",
                shortname: "FPC-02 B",
                type: types.PDU,
                measures: measures.PDU
            }
        ]
    },
    DCZ: {
        name: "Datacenter Z",
        shortname: "DC-Z",
        devices: [
            {
                name: "CRAC Z-2",
                shortname: "Z-2",
                type: types.CRAC,
                measures: measures.CRAC
            },
            {
                name: "1A-H-FPC-03",
                shortname: "FPC-03 A",
                type: types.PDU,
                measures: measures.PDU
            },
            {
                name: "1B-H-FPC-03",
                shortname: "FPC-03 B",
                type: types.PDU,
                measures: measures.PDU,
            },
            {
                name: "1A-L-RX-03",
                shortname: "RX-03 A",
                type: types.PDU,
                measures: measures.PDU
            },
            {
                name: "1B-L-RX-03",
                shortname: "RX-03 B",
                type: types.PDU,
                measures: measures.PDU
            }
        ]
    },
    IST: {
        name: "Intelsat",
        shortname: "I-SAT",
        devices: [
            {
                name: "Intelsat Nest",
                shortname: "NEST",
                type: types.NEST
            }
        ]
    },
    //non-datacenter rooms
    //TODO: finish data input
    PDU: {
        name: "PDU gallery",
        shortname: types.PDU
    },
    MP4: {
        name: "MEP-4",
        shortname: "MEP-4"
    },
};

document.body.onload = () => {
    console.log(getCookie("DCID") ? getCookie("DCID") : "no dcid set");
    document.title = dcidInfo[getCookie("DCID")].shortname;
    document.getElementById("DCID").innerText = dcidInfo[getCookie("DCID")].shortname;
};

function setDCID(self) {
    setCookie("DCID", self.id, 1);
    console.log(`set DCID to ${self.id}`);
}
