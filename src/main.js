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
    const DCID = getCookie("DCID");
    // console.log(getCookie("DCID") ? getCookie("DCID") : "no dcid set");
    document.title = dcidInfo[DCID].shortname;
    document.getElementById("DCID").innerText = dcidInfo[DCID].shortname;

    let devicedropdown = document.getElementById("deviceSelect")
    let devices = dcidInfo[DCID].devices;

    for (i in devices) {
        const device = devices[i];
        //create:
        //       dropdown list container
        let container = document.createElement("div");
        container.classList.add("col", "list-dropdown", "bg-clear", "w-100p");
        //       dropdown open button
        let btn = document.createElement("button");
        btn.classList.add("col", "list-dropdown", "bg-clear", "w-100p")
        btn.innerHTML = `${device.shortname}<span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>`;
        //       dropdown options container
        let menu = document.createElement('ul');
        menu.classList.add("menu");

        container.appendChild(btn);

        for (i in device.measures) {
            let measure = device.measures[i];
            let a = document.createElement("a");
            let li = document.createElement("li");
            li.classList.add("menu-item");
            a.setAttribute("href", "");
            a.id = measure;
            a.addEventListener(onclick, (_) => {
                setCookie("DEVID", measure, 1);
            });
            a.innerText = measure
            li.appendChild(a);
            menu.appendChild(li);
        }

        container.appendChild(menu);
        devicedropdown.append(container)
    }
};

function setDCID(self) {
    setCookie("DCID", self.id, 1);
    console.log(`set DCID to ${self.id}`);
}