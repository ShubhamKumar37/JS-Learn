const body = document.querySelector("body");
const div = document.getElementById("magic");
body.addEventListener("keypress", (event) => {
    div.innerHTML = `
    <table id="key-info-table">
        <thead>
            <tr>
                <th>Key</th>
                <th>Key Code</th>
                <th>Code</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id="key">${event.key}</td>
                <td id="key-code">${event.code}</td>
                <td id="key">${event.keyCode}</td>
            </tr>
        </tbody>
    </table>
    `;
});