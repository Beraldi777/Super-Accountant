function contar() {
var inc = document.getElementById("n1txt");
var fim = document.getElementById("n2txt");
var pas = document.getElementById("n3txt");
var res = document.getElementById("restxt");
if (inc.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    alert("[ERRO] Faltam Dados!")
    } else if (inc.value >= 115 || fim.value >= 115) {
        alert("O Valor não pode ultrapassar 114 números!!")
    } else {
        res.innerHTML = " Contando:"
        var i = Number(inc.value);
        var f = Number(fim.value);
        var p = Number(pas.value);
        if (p == 0) {
            alert("Passo Inválido! Considerando Passo 1.");
            p = 1
        } else if (i >= 36 || f >= 36 && p == 1) {
            res.style.fontSize = "12pt";
        } else if (i >= 111 || f >= 111 && p == 1) {
            res.style.fontSize = "8pt";
        }
        if (i < f) {
            for (var c=i;c <= f;c+=p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else if (i > f) {
            for (var c=i;c >= f;c-=p) {
                res.innerHTML += ` ${c} \u{1F448}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}