function generateDiagram() {
    const source = document.getElementById('source').value || 'Source';
    const destination = document.getElementById('destination').value || 'Destination';

    const components = [];
    document.querySelectorAll('input[name="component"]:checked').forEach(el => {
        components.push(el.value);
    });

    let diagram = 'graph LR\n';
    let prev = source;
    components.forEach(comp => {
        diagram += `${prev}-->${comp}\n`;
        prev = comp;
    });
    diagram += `${prev}-->${destination}`;

    const container = document.getElementById('diagram');
    container.innerHTML = `<pre class="mermaid">${diagram}</pre>`;
    mermaid.init(undefined, container);
}

document.getElementById('generate').addEventListener('click', generateDiagram);
