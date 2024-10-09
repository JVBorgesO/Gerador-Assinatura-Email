const tellInput = document.getElementById('tell');
    
tellInput.addEventListener('input', function() {
    this.value = this.value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(.{15})$/, '$1'); 
});

document.getElementById('btn_gerar_copiar').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var cargo = document.getElementById('cargo').value;
    var email = document.getElementById('email').value;

    if (nome === "" || cargo === "" || email === "") {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    var ramal = document.getElementById('ramal').value;
    var tell = document.getElementById('tell').value;

    document.getElementById('nome_func').textContent = nome || 'Nome Funcionário';
    document.getElementById('cargo_func').textContent = cargo || 'Cargo';
    document.getElementById('email_func').setAttribute('href', 'mailto:' + email);
    document.getElementById('email_func').textContent = email || 'email@jnfraldas.com.br';

    if (ramal) {
        document.getElementById('ramal_row').style.display = 'block';
        document.getElementById('ramal_func').textContent = ramal;
    } else {
        document.getElementById('ramal_row').style.display = 'none';
    }
    if (tell) {
        document.getElementById('tell_row').style.display = 'block';
        document.getElementById('tell_func').textContent = tell;
    } else {
        document.getElementById('tell_row').style.display = 'none';
    }

    document.getElementById('tabela_assinatura').style.display = 'table';

    // Cria uma seleção de texto para copiar
    var range = document.createRange();
    range.selectNodeContents(document.getElementById('tabela_assinatura'));
    var selection = window.getSelection();
    selection.removeAllRanges();  
    selection.addRange(range);   

    // Copia o conteúdo selecionado
    document.execCommand('copy');
    alert('Assinatura copiada com sucesso!');
});