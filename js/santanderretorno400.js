var santanderRetorno400 = {
  init() {
    'use strict';
    // 'this' é passado para 'SELF' para que o objeto 'santanderRetorno400' possa ser chamado em qualquer camada do código
    const SELF = this;
    controller.setTamanhoLinha(400);
    controller.setNumPosicoes(402);
    controller.setPosicaoInicial(controller.getNumPosicoes());

    // O arquivo selecionado é passado para a constante
    const ARQUIVO_A_SER_LIDO = document.getElementById('arquivoSelecionado').files[0];

    // Checagem da extensão do arquivo
    if (ARQUIVO_A_SER_LIDO.name.length > 4 && (ARQUIVO_A_SER_LIDO.name.substr(-4) === '.RET'
                                              || ARQUIVO_A_SER_LIDO.name.substr(-4) === '.ret')) {

      // Instância de FileReader
      const FILE_READER = new FileReader();

      // Faz a leitura do arquivo como texto
      FILE_READER.readAsText(ARQUIVO_A_SER_LIDO);

      // Função executada ao termino da leitura do arquivo
      FILE_READER.onload = function () {
        // Banco selecionado condiz com o banco do arquivo selecionado
        if (FILE_READER.result.slice(79, 94) === 'SANTANDER      ') {

          const ALERTAS = document.getElementById('alertas');
          ALERTAS.innerHTML = '';

          view.renderizarConfiguracoes();
          view.renderizarTabelas(SELF.tabelasSantanderRemessa400);
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
            `<div class="alert alert-primary" role="alert">O arquivo selecionado não corresponde ao retorno do banco Santander!</div>`;
          return;
        }
      }
    } else {
      const ALERTAS = document.getElementById('alertas');
      ALERTAS.innerHTML = '';
      ALERTAS.innerHTML = `<div class="alert alert-primary" role="alert">Selecione um arquivo com a extensão 'REM'.</div>`;
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
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 26, 30);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 30, 38);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 38, 46);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 46, 76);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 76, 79);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 79, 94);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 94, 100);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 100, 108);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 108, 385);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 385, 389);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 389, 391);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 391, 394);
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
    view.registroTransacaoPosicoes(linha, TBODY, TR, 17, 21);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 21, 29);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 29, 37);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 37, 62);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 62, 70);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 70, 107);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 107, 108);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 108, 110);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 110, 116);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 116, 126);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 126, 134);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 134, 136);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 136, 139);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 139, 142);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 142, 145);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 145, 146);
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
    view.registroTransacaoPosicoes(linha, TBODY, TR, 292, 293);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 293, 294);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 294, 295);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 295, 301);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 301, 337);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 337, 338);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 338, 340);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 340, 353);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 353, 366);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 366, 379);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 379, 380);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 380, 383);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 383, 385);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 385, 389);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 389, 391);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 391, 394);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 394, 400);

    controller.setPosicaoInicial(controller.getPosicaoInicial() + controller.getNumPosicoes());
    view.lerLinha(controller.getArquivoLido(), controller.getPosicaoInicial(), this);
  },

  tabelasSantanderRemessa400: `<p class="mt-1 mb-1">Registro Header Label</p>
      <table class="table table-dark quebrar-linhas table-responsive" id="tabelaCabecalho">
        <thead>
          <tr>
            <th scope="col">001 Código do registro = 0</th>
            <th scope="col">002 Código do retorno = 2</th>
            <th scope="col">003 a 009 Literal de transmissão = RETORNO</th>
            <th scope="col">010 a 011 Código do serviço = 01</th>
            <th scope="col">012 a 026 Literal de serviço = COBRANÇA</th>
            <th scope="col">027 a 030 Código da agência Beneficiário</th>
            <th scope="col">031 a 038 Conta movimento Beneficiário</th>
            <th scope="col">039 a 046 Conta cobrança Beneficiário</th>
            <th scope="col">047 a 076 Nome do Beneficiário</th>
            <th scope="col">077 a 079 Código do Banco = 353 / 033</th>
            <th scope="col">080 a 094 Nome do Banco = SANTANDER</th>
            <th scope="col">095 a 100 Data do movimento</th>
            <th scope="col">101 a 108 Densidade de gravação 1600 BPI</th>
            <th scope="col">109 a 385 Brancos</th>
            <th scope="col">386 a 389 Sigla da empresa no sistema</th>
            <th scope="col">390 a 391 Brancos</th>
            <th scope="col">392 a 394 Número da versão</th>
            <th scope="col">395 a 400 Número sequencial do registro no arquivo</th>
          </tr>
        </thead>
        <tbody id="infoCabecalho"></tbody>
      </table>

      <p class="mb-1">Registro de Transação - Tipo 1</p>
      <table class="table table-dark quebrar-linhas table-responsive" id="tabelaTransacao">
        <thead>
          <tr>
            <th scope="col">001 Código do registro = 1</th>
            <th scope="col">002 a 003 Tipo de inscrição do Beneficiário 01=CPF | 02=CNPJ</th>
            <th scope="col">004 a 17 CNPJ ou CPF do Beneficiário</th>
            <th scope="col">018 a 021 Código da agência do Beneficiário</th>
            <th scope="col">022 a 029 Conta movimento Beneficiário</th>
            <th scope="col">030 a 037 Conta cobrana Beneficiário</th>
            <th scope="col">038 a 062 Número de controle do participante</th>
            <th scope="col">063 a 070 Nosso Número</th>
            <th scope="col">071 a 107 Brancos</th>
            <th scope="col">108 Código da carteira</th>
            <th scope="col">109 a 110 Código de ocorrência</th>
            <th scope="col">111 a 116 Data da ocorrência</th>
            <th scope="col">117 a 126 Seu número</th>
            <th scope="col">127 a 134 Nosso número</th>
            <th scope="col">135 a 136 Código original da remessa</th>
            <th scope="col">137 a 139 Código do Erro (1ª ocorrência)</th>
            <th scope="col">140 a 142 Código do Erro (2ª ocorrência)</th>
            <th scope="col">143 a 145 Código do Erro (3ª ocorrência)</th>
            <th scope="col">146 Branco</th>
            <th scope="col">147 a 152 Data de vencimento do título</th>
            <th scope="col">153 a 165 Valor do títutlo em moeda corrente</th>
            <th scope="col">166 a 168 Número do Banco cobrador</th>
            <th scope="col">169 a 173 Código da agência recebedora do título</th>
            <th scope="col">174 a 175 Espécie de documento</th>
            <th scope="col">176 a 188 Valor da tarifa cobrada</th>
            <th scope="col">189 a 201 Valor de outras despesas</th>
            <th scope="col">202 a 214 Valor dos juros de atraso</th>
            <th scope="col">215 a 227 Valor do IOF devido</th>
            <th scope="col">228 a 240 Valor do abatimento concedido</th>
            <th scope="col">241 a 253 Valor do desconto concedido</th>
            <th scope="col">254 a 266 Valor total recebido</th>
            <th scope="col">267 a 279 Valor dos juros de mora</th>
            <th scope="col">280 a 292 Valor de outros créditos</th>
            <th scope="col">293 Branco</th>
            <th scope="col">294 Código de aceite = N</th>
            <th scope="col">295 Branco</th>
            <th scope="col">296 a 301 Data do crédito</th>
            <th scope="col">302 a 337 Nome do Pagador</th>
            <th scope="col">338 Identificador do Complemento</th>
            <th scope="col">339 a 340 Unidade de valor moeda corrente = 00</th>
            <th scope="col">341 a 353 Valor do título em outra unidade de valor</th>
            <th scope="col">354 a 366 Valor do IOF em outra unidade de valor</th>
            <th scope="col">367 a 379 Valor do débito ou crédito</th>
            <th scope="col">380 D=DÉBITO | C=CRÉDITO</th>
            <th scope="col">381 a 383 Brancos</th>
            <th scope="col">384 a 385 Complemento</th>
            <th scope="col">386 a 389 Sigla da empresa no sistema</th>
            <th scope="col">390 a 391 Brancos</th>
            <th scope="col">392 a 394 Número da versão</th>
            <th scope="col">395 a 400 Número sequencial do registro no arquivo</th>
          </tr>
        </thead>
        <tbody id="infoTransacao"></tbody>
      </table>

      <p class="mt-5">Conteúdo do arquivo (sem espaçamento múltiplo)</p>
      <div id="filecontents" class="border border-secondary rounded p-2 mb-4"></div>`
};
