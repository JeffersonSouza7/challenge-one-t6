
// Função para criptografar o texto usando a cifra específica
function criptografarTexto() {
    var texto = document.getElementById('texto_Input').value;
    
    // Verifica se o texto contém apenas letras minúsculas e sem acento
    if (/^[a-z]+$/.test(texto)) {
        var textoCriptografado = texto.replace(/e/g, 'enter')
                                       .replace(/i/g, 'imes')
                                       .replace(/a/g, 'ai')
                                       .replace(/o/g, 'ober')
                                       .replace(/u/g, 'ufat');

        document.getElementById('texto_Output').innerHTML = '<p>' + textoCriptografado + '</p>';
    } else {
        alert('Por favor, insira apenas letras minúsculas e sem acento.');
    }
}

// Função para descriptografar o texto usando a cifra específica
function descriptografarTexto() {
    var texto = document.getElementById('texto_Input').value;
    
    // Verifica se o texto contém apenas letras minúsculas e sem acento
    if (/^[a-z]+$/.test(texto)) {
        var textoDescriptografado = texto.replace(/enter/g, 'e')
                                         .replace(/imes/g, 'i')
                                         .replace(/ai/g, 'a')
                                         .replace(/ober/g, 'o')
                                         .replace(/ufat/g, 'u');

        document.getElementById('texto_Output').innerHTML = '<p>' + textoDescriptografado + '</p>';
    } else {
        alert('Por favor, insira apenas letras minúsculas e sem acento.');
    }
}

// Função para copiar o texto criptografado/descriptografado para a área de transferência
function copiarTexto() {
    var texto = document.getElementById('texto_Output').innerText;
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado com sucesso!');
    }, function(err) {
        console.error('Erro ao copiar o texto: ', err);
    });
}
