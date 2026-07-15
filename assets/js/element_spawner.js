fillers = [ "topbar", "ad-marquee", "footer" ]

window.onload = (event) => {
    for (let i = 0; i < fillers.length; i++) {
        const name = fillers[i];
        const path = `/assets/html/${name}.html`
        const filler = document.getElementById(`${name}-filler`)

        if(filler === null) continue;
        fetch(path)
            .then((response) => {
                if(!response.ok) return "";
                return response.text();
            })
            .then((text) => {
                filler.innerHTML = text;

                const inserter = document.getElementById("to-head")
                if(inserter === null) return;
                const scripts = inserter.querySelectorAll("script")

                scripts.forEach(orig => {
                    const newScript = document.createElement("script")
                    for(const attr of orig.attributes)
                        newScript.setAttribute(attr.name, attr.value)

                    if(orig.textContent)
                        newScript.textContent = orig.textContent

                    document.head.appendChild(newScript)
                })

                inserter.remove();
            })
    }
}