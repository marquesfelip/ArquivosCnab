var bradescoRetorno400 = {
  init() {
    'use strict';
    // 'this' é passado para 'SELF' para que o objeto 'bradescoRetorno400' possa ser chamado em qualquer camada do código
    const SELF = this;
    controller.setTamanhoLinha(400);
    controller.setNumPosicoes(402);
    controller.setPosicaoInicial(controller.getNumPosicoes());

    // O arquivo selecionado é passado para a constante
    const ARQUIVO_A_SER_LIDO = document.getElementById('arquivoSelecionado').files[0];

    // Checagem da extensão do arquivo
    if (ARQUIVO_A_SER_LIDO.name.length > 4 && (ARQUIVO_A_SER_LIDO.name.substr(-4) === '.RET' || ARQUIVO_A_SER_LIDO.name.substr(-4) === '.ret')) {

      // Instância de FileReader
      const FILE_READER = new FileReader();

      // Faz a leitura do arquivo como texto
      FILE_READER.readAsText(ARQUIVO_A_SER_LIDO);

      FILE_READER.onload = function () {
        // Banco selecionado condiz com o banco do arquivo selecionado
        if (FILE_READER.result.slice(79, 94) === 'BRADESCO       ') {

          const ALERTAS = document.getElementById('alertas');
          ALERTAS.innerHTML = '';

          view.renderizarConfiguracoes();
          view.renderizarTabelas(SELF.tabelasBradescoRetorno400);
          view.listenersFinais();

          document.getElementById('labelArquivoSelecionado').innerText = ARQUIVO_A_SER_LIDO.name;

          controller.setArquivoLido(FILE_READER.result);

          SELF.registroCabecalho(FILE_READER.result);
          view.lerLinha(FILE_READER.result, controller.getPosicaoInicial(), SELF);

          document.getElementById('filecontents').innerText = FILE_READER.result;
        } else {
          const ALERTAS = document.getElementById('alertas');
          ALERTAS.innerHTML = '';
          ALERTAS.innerHTML =
            `<div class="alert alert-primary" role="alert">O arquivo selecionado não corresponde a um arquivo de retorno do banco Bradesco!</div>`;
          return;
        }
      }
    } else {
      const ALERTAS = document.getElementById('alertas');
      ALERTAS.innerHTML = '';
      ALERTAS.innerHTML = `<div class="alert alert-primary" role="alert">Selecione um arquivo com a extensão 'RET'.</div>`;
    }
  },

  registroCabecalho(arquivoLido) {
    'use strict';
    const TBODY = document.getElementById('infoCabecalho');
    const TR = document.createElement('tr');

    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 0, 1);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 1, 2);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 2, 9);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 9, 11);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 11, 26);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 26, 46);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 46, 76);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 76, 79);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 79, 94);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 94, 100);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 100, 108);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 108, 113);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 113, 379);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 379, 385);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 385, 394);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 394, 400);
  },

  verificarLinha(linha) {
    'use strict';
    if (linha[0] === '1')
      this.registroTransacao(linha);
  },

  registroTransacao(linha) {
    'use strict'
    const TBODY = document.getElementById('infoTransacao');
    const TR = document.createElement('tr');

    view.registroTransacaoPosicoes(linha, TBODY, TR, 0, 1);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 1, 3);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 3, 17);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 17, 20);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 20, 37);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 37, 62);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 62, 70);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 70, 82);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 82, 92);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 92, 104);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 104, 105);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 105, 107);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 107, 108);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 108, 110);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 110, 116);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 116, 126);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 126, 146);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 146, 152);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 152, 165);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 165, 168);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 168, 173);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 173, 175);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 175, 188);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 188, 201);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 201, 214);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 214, 227);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 227, 240);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 240, 253);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 253, 266);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 266, 279);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 279, 292);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 292, 294);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 294, 295);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 295, 301);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 301, 304);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 304, 314);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 314, 318);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 318, 328);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 328, 368);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 368, 370);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 370, 380);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 380, 394);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 394, 400);

    controller.setPosicaoInicial(controller.getPosicaoInicial() + controller.getNumPosicoes());
    view.lerLinha(controller.getArquivoLido(), controller.getPosicaoInicial(), this);
  },

  tabelasBradescoRetorno400: `<p class="mt-1 mb-1">Registro Header Label</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaCabecalho">
        <thead>
            <tr>
                <th scope="col">001 Identificação do Registro</th>
                <th scope="col">002 Identificação do Arquivo Retorno</th>
                <th scope="col">003 a 009 Literal RETORNO</th>
                <th scope="col">010 a 011 Código de Serviço</th>
                <th scope="col">012 a 026 Literal COBRANÇA</th>
                <th scope="col">027 a 046 Código da Empresa</th>
                <th scope="col">047 a 076 Nome da Empresa por extenso</th>
                <th scope="col">077 a 079 Número do Bradesco na Câmara de Compensação</th>
                <th scope="col">080 a 094 Nome do Banco por Extenso</th>
                <th scope="col">095 a 100 Data da Gravação do Arquivo</th>
                <th scope="col">101 a 108 Densidade de Gravação</th>
                <th scope="col">109 a 113 Nº Aviso Bancário</th>
                <th scope="col">114 a 379 (BRANCO)</th>
                <th scope="col">380 a 385 Data do Crédito</th>
                <th scope="col">386 a 394 (BRANCO)</th>
                <th scope="col">395 a 400 Nº Sequencial de registro</th>
            </tr>
        </thead>
        <tbody id="infoCabecalho"></tbody>
    </table>

    <p class="mb-1">Registro de Transação - Tipo 1</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaTransacao">
        <thead>
            <tr>
                <th scope="col">001 Identificação do Registro</th>
                <th scope="col">002 a 003 Tipo de Inscrição Empresa</th>
                <th scope="col">004 a 017 Nº Inscrição da Empresa</th>
                <th scope="col">018 a 020 Zeros</th>
                <th scope="col">021 a 037 Identificação da Empresa Benef. no Banco</th>
                <th scope="col">038 a 062 Nº Controle do Participante</th>
                <th scope="col">063 a 070 Zeros</th>
                <th scope="col">071 a 082 Identificação do Título no Banco</th>
                <th scope="col">083 a 092 Zeros</th>
                <th scope="col">093 a 104 Zeros</th>
                <th scope="col">105 Indicador de Rateio Crédito</th>
                <th scope="col">106 a 107 Pagamento parcial</th>
                <th scope="col">108 Carteira </th>
                <th scope="col">109 a 110 Identificação de Ocorrência </th>
                <th scope="col">111 a 116 Data Ocorrência no Banco</th>
                <th scope="col">117 a 126 Número do Documento </th>
                <th scope="col">127 a 146 Identificação do Título no Banco </th>
                <th scope="col">147 a 152 Data Vencimento do Título</th>
                <th scope="col">153 a 165 Valor do Título</th>
                <th scope="col">166 a 168 Banco Cobrador</th>
                <th scope="col">169 a 173 Agência Cobradora</th>
                <th scope="col">174 a 175 Espécie do Título (BRANCO)</th>
                <th scope="col">176 a 188 Despesas de cobrança para os Cod. de Ocorrência</th>
                <th scope="col">189 a 201 Outras despesas / Custas de Protesto </th>
                <th scope="col">202 a 214 Juros Operação em Atraso</th>
                <th scope="col">215 a 227 IOF Devido</th>
                <th scope="col">228 a 240 Abatimento Concedido sobre o Título </th>
                <th scope="col">241 a 253 Desconto Concedido </th>
                <th scope="col">254 a 266 Valor Pago</th>
                <th scope="col">267 a 279 Juros de Mora</th>
                <th scope="col">280 a 292 Outros Créditos </th>
                <th scope="col">293 a 294 (BRANCOS)</th>
                <th scope="col">295 Motivo do Código de Ocorrência</th>
                <th scope="col">296 a 301 Data do Crédito</th>
                <th scope="col">302 a 304 Origem Pagamento </th>
                <th scope="col">305 a 314 (BRANCOS)</th>
                <th scope="col">315 a 318 Quando cheque Bradesco informe 0237</th>
                <th scope="col">319 a 328 Motivos das Rejei. para os Cod. de Ocorrência da Pos. 109-110</th>
                <th scope="col">329 a 368 (BRANCOS)</th>
                <th scope="col">369 a 370 Número do Cartório</th>
                <th scope="col">371 a 380 Número do Protocolo</th>
                <th scope="col">381 a 394 (BRANCOS)</th>
                <th scope="col">395 a 400 Nº Seqüencial de Registro</th>
            </tr>
        </thead>
        <tbody id="infoTransacao"></tbody>
    </table>

    <p class="mt-5">Conteúdo do arquivo (sem espaçamento múltiplo)</p>
    <div id="filecontents" class="border border-secondary rounded p-2 mb-4"></div>`
};
