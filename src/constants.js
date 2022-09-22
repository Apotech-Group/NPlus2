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
        devices: [{
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
        devices: [{
            name: "CRAC B-4",
            shortname: "B-4",
            type: types.CRAC,
            measures: measures.CRAC
        }]
    },
    DCC: {
        name: "Datacenter C",
        shortname: "DC-C",
        devices: [{
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
        devices: [{
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
        devices: [{
            name: "Intelsat Nest",
            shortname: "NEST",
            type: types.NEST
        }]
    },
    //non-datacenter rooms
    PDU: {
        name: "PDU gallery",
        shortname: types.PDU,
        devices: [{
                name: "1A-H-FPC-05",
                shortname: "FPC-05 A",
                type: types.PDU,
                measures: measures.PDU
            },
            {
                name: "1B-H-FPC-05",
                shortname: "FPC-05 B",
                type: types.PDU,
                measures: measures.PDU
            }
        ]
    },
    MP4: {
        name: "MEP-4",
        shortname: "MEP-4",
        devices: [{
                name: "MEP-4 Nest",
                shortname: "NEST",
                type: types.NEST,
                measures: measures.NEST
            },
            {
                name: "1A-H-UPS-01",
                shortname: "UPS-01 A",
                type: types.PDU,
                measures: measures.PDU
            },
            {
                name: "1B-H-UPS-01",
                shortname: "UPS-01 B",
                type: types.PDU,
                measures: measures.PDU
            }
        ]

    },
};