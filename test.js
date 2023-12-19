const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e)=> {
    e.preventDefault();
    insert.innerHTML = `
    <div id= "table">
    <table>
        <tr>
            <th>key</th>
            <th>keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key=== " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
</div>`
})