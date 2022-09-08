var num = document.getElementById('txtnum')
var res = document.getElementById('numeros')
var anali = document.getElementById('analise')
var a = []

function inserir(x){
    if(a.indexOf(x) >= 0){
        window.alert('Numero já adicionado')
        num.value = null
    }else{
        num.focus()
        a.push(x)
        var item = document.createElement('option')
        item.text = `Numero ${x} adicionado.`
        res.appendChild(item)
        num.value = null
        anal.innerHTML = ''
    }
}

function adicionar(){
        if(num.value.length == 0 || num.value < 1 || num.value > 100){
            window.alert('Por favor, insira um numero entre 1 à 100!')
        } else {
            inserir(Number(num.value))
        }
}

function analisar(){
    a.sort()
    var sum = 0
    var menor = a[0]
    var maior = a[0]
    for (var i in a) {
        sum += a[i];
    }if(a[i] > maior){
        maior = a[i]
    }if(a[i] < menor){
        menor = a[i]
    }

    if(a.length < 2){
        window.alert('Adicione pelo menos dois números para analisar!')
    }else {
        anali.innerHTML = `<p>Foram adicionados ${a.length} Numeros</p>`

        anali.innerHTML += `<p>A soma de todos os números é ${sum}</p>`

        anali.innerHTML += `<p>A média dos números é ${sum / a.length}</p>`

        anali.innerHTML += `<p>O menor número é ${menor}</p>`

        anali.innerHTML += `<p>O maior número é ${maior}</p>`

        res.innerHTML = ''
        a = []
    }
}