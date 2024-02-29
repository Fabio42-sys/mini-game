document.getElementById('init').addEventListener('click', () => {
    let init = prompt('Deseja iniciar o jogo? Digite "true" para sim ou "false" para não');

    if (init === 'true') {
        alert('Jogo iniciado');
        document.querySelector('.question-container').style.display = 'block';
    } else if (init === 'false') {
        alert('Jogo não iniciado');
        return;
    } else {
        return;
    }

    let acertos = 0;
    let erros = 0;

    document.getElementById('questionsForm').addEventListener('submit', function(e) {
        e.preventDefault();

        let respostas = {
            q1: document.getElementById('q1').value.toLowerCase().trim(),
            q2: document.getElementById('q2').value.toLowerCase().trim(),
            q3: document.getElementById('q3').value.toLowerCase().trim(),
            q4: document.getElementById('q4').value.toLowerCase().trim()
        };

        if (respostas.q1 === 'false') {
            acertos++;
        } else {
            erros++;
        }

        if (respostas.q2 === 'false') {
            acertos++;
        } else {
            erros++;
        }

        if (respostas.q3 === 'false') {
            acertos++;
        } else {
            erros++;
        }

        if (respostas.q4 === 'false') {
            acertos++;
        } else {
            erros++;
        }

        document.querySelector('.question-container').style.display = 'none';

        let score = document.getElementById('screen');
        score.innerHTML = '<p>Acertos: ' + acertos + ', Erros: ' + erros + '</p>';
        score.style.display = 'flex';
    });
});
