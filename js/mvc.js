var model = {
  numPosicoes: 0,
  posicaoInicial: 0,
  tamanhoLinha: 0,
  arquivoLido: ''
};

var view = {
  init() {
    'use strict';
    // Verificação de suporte as APIs necessárias
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
      alert("O navegador não tem suporte para uma ou mais das seguintes bibliotecas: File, FileReader, FileList e Blob!");
      return;
    }

    this.listenersIniciais();
  },

  renderizarTabelas(paramTabelas) {
    'use strict';
    const tabelas = document.getElementById('tabelas');
    tabelas.innerHTML = '';
    tabelas.insertAdjacentHTML('beforeend', paramTabelas);
  },

  renderizarConfiguracoes() {
    'use strict';
    const configuracoes = document.getElementById('configuracoes');
    configuracoes.innerHTML = '';
    configuracoes.innerHTML = `<input id="ckb_quebrarLinha" type="checkbox">&nbsp;<label for="ckb_quebrarLinha">Quebrar linhas dos cabeçalhos</label>&nbsp;|&nbsp;
        <input id="ckb_tabelasResponsivas" type="checkbox" checked>&nbsp;<label for="ckb_tabelasResponsivas">Tabelas responsivas</label>&nbsp;|&nbsp;
        <input id="ckb_tabelasPequenas" type="checkbox">&nbsp;<label for="ckb_tabelasPequenas">Tabelas pequenas</label>&nbsp;|&nbsp;
        <input id="ckb_tabelasBordadas" type="checkbox">&nbsp;<label for="ckb_tabelasBordadas">Tabelas com bordas</label>&nbsp;|&nbsp;
        <input id="ckb_tabelasBrancas" type="checkbox">&nbsp;<label for="ckb_tabelasBrancas">Tabelas na cor branca</label>&nbsp;|&nbsp;
        <input id="ckb_tabelasHoverState" type="checkbox">&nbsp;<label for="ckb_tabelasHoverState">Tabelas com "Hover State"</label>&nbsp;|&nbsp;
        <input id="ckb_tabelasListradas" type="checkbox">&nbsp;<label for="ckb_tabelasListradas">Tabelas listradas</label>&nbsp;|&nbsp;`;
  },

  renderizarOpcoesBanco(opcaoLeitura) {
    'use strict';
    const selecionarBanco = document.getElementById('selecionarBanco');
    selecionarBanco.innerHTML = '';

    switch (opcaoLeitura) {
      // 1 = Remessa
      case 1:
        selecionarBanco.innerHTML = `<option value="nenhum" selected disabled>Selecione o Banco</option>
            <option value="1">Banco do Brasil 400</option>
            <option value="3">Bradesco 400</option>
            <option value="7">Itaú 400</option>
            <option value="9">Santander 400</option>`;
        break;
        // 2 = Retorno
      case 2:
        selecionarBanco.innerHTML = `<option value="nenhum" selected disabled>Selecione o Banco</option>
            <option value="21">Banco do Brasil 400</option>
            <option value="23">Bradesco 400</option>
            <option value="27">Itaú 400</option>`;
        break;
      default:
        break;
    }
  },

  listenersIniciais() {
    'use strict';

    document.getElementById('radioRemessa').addEventListener('click', function () {
      view.renderizarOpcoesBanco(1);
    });

    document.getElementById('radioRetorno').addEventListener('click', function () {
      view.renderizarOpcoesBanco(2);
    });

    const ARQUIVO_SELECIONADO = document.getElementById('arquivoSelecionado');
    ARQUIVO_SELECIONADO.addEventListener('change', function () {

      switch (document.getElementById('selecionarBanco').value) {
        case '1':
          bbRemessa400.init();
          break;
        case '3':
          bradescoRemessa400.init();
          break;
        case '7':
          itauRemessa400.init();
          break;
        case '9':
          santanderRemessa400.init();
          break;
        case '21':
          bbRetorno400.init();
          break;
        case '23':
          bradescoRetorno400.init();
          break;
        case '27':
          itauRetorno400.init();
          break;
        default:
          break;
      }
    });

    // Caso o input de seleção de arquivo seja clicado e nenhum banco tenha sido selecionado,
    // será apresentada uma mensagem de alerta
    ARQUIVO_SELECIONADO.addEventListener('click', function () {
      const BANCO_SELECIONADO = document.getElementById('selecionarBanco').value;

      if (BANCO_SELECIONADO === 'nenhum' || !BANCO_SELECIONADO) {
        const ALERTAS = document.getElementById('alertas');
        ALERTAS.innerHTML = '';
        ALERTAS.innerHTML = `<div class="alert alert-primary" role="alert">Selecione um banco.</div>`;
      }
    });
  },

  listenersFinais() {
    'use strict';
    const TABELA_CABECALHO = document.getElementById('tabelaCabecalho');
    const TABELA_TRANSACAO = document.getElementById('tabelaTransacao');

    document.getElementById('ckb_quebrarLinha').addEventListener('change', function () {
      TABELA_CABECALHO.classList.toggle('quebrar-linhas');
      TABELA_TRANSACAO.classList.toggle('quebrar-linhas');
    });

    document.getElementById('ckb_tabelasBrancas').addEventListener('change', function () {
      TABELA_CABECALHO.classList.toggle('table-dark');
      TABELA_TRANSACAO.classList.toggle('table-dark');
    });

    document.getElementById('ckb_tabelasListradas').addEventListener('change', function () {
      TABELA_CABECALHO.classList.toggle('table-striped');
      TABELA_TRANSACAO.classList.toggle('table-striped');
    });

    document.getElementById('ckb_tabelasHoverState').addEventListener('change', function () {
      TABELA_CABECALHO.classList.toggle('table-hover');
      TABELA_TRANSACAO.classList.toggle('table-hover');
    });

    document.getElementById('ckb_tabelasBordadas').addEventListener('change', function () {
      TABELA_CABECALHO.classList.toggle('table-bordered');
      TABELA_TRANSACAO.classList.toggle('table-bordered');
    });

    document.getElementById('ckb_tabelasPequenas').addEventListener('change', function () {
      TABELA_CABECALHO.classList.toggle('table-sm');
      TABELA_TRANSACAO.classList.toggle('table-sm');
    });

    document.getElementById('ckb_tabelasResponsivas').addEventListener('change', function () {
      TABELA_CABECALHO.classList.toggle('table-responsive');
      TABELA_TRANSACAO.classList.toggle('table-responsive');
    });
  },

  registroCabecalhoPosicoes(arquivoLido, tbody, tr, posInicial, posFinal) {
    'use strict';
    const TD = document.createElement('td');

    TD.innerText = arquivoLido.slice(posInicial, posFinal);
    tr.appendChild(TD);
    tbody.appendChild(tr);
  },

  registroTransacaoPosicoes(linhaDeTransacao, tbody, tr, posInicial, posFinal) {
    'use strict';
    const TD = document.createElement('td');
    TD.innerText = linhaDeTransacao.slice(posInicial, posFinal);
    tr.appendChild(TD);
    tbody.appendChild(tr);
  },

  lerLinha(arquivoLido, posInicial, objeto) {
    'use strict';
    let linha = '';
    let posFinal = posInicial + controller.getTamanhoLinha();
    linha = arquivoLido.slice(posInicial, posFinal);

    objeto.verificarLinha(linha);
  }
};

var controller = {
  init() {
    view.init();
  },

  getNumPosicoes() {
    return model.numPosicoes;
  },

  setNumPosicoes(numPosicoesParam) {
    model.numPosicoes = numPosicoesParam;
  },

  getPosicaoInicial() {
    return model.posicaoInicial;
  },

  setPosicaoInicial(posicaoInicialParam) {
    model.posicaoInicial = posicaoInicialParam;
  },

  getTamanhoLinha() {
    return model.tamanhoLinha;
  },

  setTamanhoLinha(tamanhoLinhaParam) {
    model.tamanhoLinha = tamanhoLinhaParam;
  },

  getArquivoLido() {
    return model.arquivoLido;
  },

  setArquivoLido(arquivoLidoParam) {
    model.arquivoLido = arquivoLidoParam;
  }
};

controller.init();
