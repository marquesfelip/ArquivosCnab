var itauRetorno400 = {
  init() {
    'use strict';
    // 'this' é passado para 'SELF' para que o objeto 'itauRemessa400' possa ser chamado em qualquer camada do código
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
        if (FILE_READER.result.slice(79, 94) === 'BANCO ITAU S.A.') {

          const ALERTAS = document.getElementById('alertas');
          ALERTAS.innerHTML = '';

          view.renderizarConfiguracoes();
          view.renderizarTabelas(SELF.tabelasItauRetorno400);
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
            `<div class="alert alert-primary" role="alert">O arquivo selecionado não corresponde a retorno do banco Itaú!</div>`;
          return;
        }
      }
    } else {
      const ALERTAS = document.getElementById('alertas');
      ALERTAS.innerHTML = '';
      ALERTAS.innerHTML = `<div class="alert alert-primary" role="alert">Selecione um arquivo com a extensão 'RET'. ${varImg}</div>`;
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
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 30, 32);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 32, 37);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 37, 38);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 38, 46);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 46, 76);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 76, 79);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 79, 94);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 94, 100);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 100, 105);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 105, 108);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 108, 113);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 113, 119);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 119, 394);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 394, 400);
  },

  verificarLinha(linha) {
    'use strict';
    if (linha[0] === '1')
      this.registroTransacao(linha);
  },

  registroTransacao(linha) {
    'use strict';
    const TBODY = document.getElementById('infoTransacao');
    const TR = document.createElement('tr');

    view.registroTransacaoPosicoes(linha, TBODY, TR, 0, 1);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 1, 3);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 3, 17);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 17, 21);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 21, 23);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 23, 28);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 28, 29);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 29, 37);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 37, 62);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 62, 70);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 70, 82);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 82, 85);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 85, 93);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 93, 94);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 94, 107);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 107, 108);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 108, 110);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 110, 116);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 116, 126);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 126, 134);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 134, 146);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 146, 152);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 152, 165);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 165, 168);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 168, 172);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 172, 173);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 173, 175);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 175, 188);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 188, 214);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 214, 227);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 227, 240);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 240, 253);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 253, 266);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 266, 279);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 279, 292);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 292, 293);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 293, 295);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 295, 301);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 301, 305);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 305, 311);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 311, 324);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 324, 354);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 354, 377);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 377, 385);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 385, 392);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 392, 394);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 394, 400);

    controller.setPosicaoInicial(controller.getPosicaoInicial() + controller.getNumPosicoes());
    view.lerLinha(controller.getArquivoLido(), controller.getPosicaoInicial(), this);
  },

  tabelasItauRetorno400: `<p class="mt-1 mb-1">Registro Header Label</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaCabecalho">
      <thead>
        <tr>
          <th scope="col">001 Tipo de registro</th>
          <th scope="col">002 Código de retorno</th>
          <th scope="col">003 a 009 Literal de retorno</th>
          <th scope="col">010 a 011 Código do serviço</th>
          <th scope="col">012 a 026 Literal de serviço</th>
          <th scope="col">027 a 030 Agência</th>
          <th scope="col">031 a 032 Zeros</th>
          <th scope="col">033 a 037 Conta</th>
          <th scope="col">038 DAC</th>
          <th scope="col">039 a 046 Brancos</th>
          <th scope="col">047 a 076 Nome da empresa</th>
          <th scope="col">077 a 079 Código do banco</th>
          <th scope="col">080 a 094 Nome do banco</th>
          <th scope="col">095 a 100 Data de geração</th>
          <th scope="col">101 a 105 Densidade</th>
          <th scope="col">106 a 108 Unidade de Densidade</th>
          <th scope="col">109 a 113 Nº Seq. Arquivo Ret.</th>
          <th scope="col">114 a 119 Data de crédito</th>
          <th scope="col">120 a 394 Brancos</th>
          <th scope="col">395 a 400 Número Sequêncial</th>
        </tr>
      </thead>
      <tbody id="infoCabecalho"></tbody>
    </table>

      <p class="mb-1">Registro de Transação - Tipo 1</p>
      <table class="table table-dark quebrar-linhas table-responsive" id="tabelaTransacao">
        <thead>
          <tr>
            <th scope="col">001 Tipo de registro</th>
            <th scope="col">002 a 003 Código de inscrição</th>
            <th scope="col">004 a 017 Nùmero de inscrição (CPF/CNPJ)</th>
            <th scope="col">018 a 021 Agência</th>
            <th scope="col">022 a 023 Zeros</th>
            <th scope="col">024 a 028 Conta</th>
            <th scope="col">029 DAC</th>
            <th scope="col">030 a 037 Brancos</th>
            <th scope="col">038 a 062 Uso da Empresa</th>
            <th scope="col">063 a 070 Nosso número</th>
            <th scope="col">071 a 082 Brancos</th>
            <th scope="col">083 a 085 Nº Carteira</th>
            <th scope="col">086 a 093 Nosso número</th>
            <th scope="col">94 DAC nosso número</th>
            <th scope="col">95 a 107 Brancos</th>
            <th scope="col">108 Código Carteira</th>
            <th scope="col">109 a 110 Cód. de ocorrência</th>
            <th scope="col">111 a 116 Data de ocorrência</th>
            <th scope="col">117 a 126 Nº do documento</th>
            <th scope="col">127 a 134 Nosso número</th>
            <th scope="col">135 a 146 Brancos</th>
            <th scope="col">147 a 152 Vencimento</th>
            <th scope="col">153 a 165 Valor do título</th>
            <th scope="col">166 a 168 Código do banco</th>
            <th scope="col">169 a 172 Agência cobradora</th>
            <th scope="col">173 DAC Ag. cobradora</th>
            <th scope="col">174 a 175 Espécie</th>
            <th scope="col">176 a 188 Tarifa de cobrança</th>
            <th scope="col">189 a 214 Brancos</th>
            <th scope="col">215 a 227 Valor do IOF</th>
            <th scope="col">228 a 240 Valor abatimento</th>
            <th scope="col">241 a 253 Descontos</th>
            <th scope="col">254 a 266 Valor principal</th>
            <th scope="col">267 a 279 Juros de Mora/Multa</th>
            <th scope="col">280 a 292 Outros Créditos</th>
            <th scope="col">293 Boleto DDA</th>
            <th scope="col">294 a 295 Brancos</th>
            <th scope="col">296 a 301 Data Crédito</th>
            <th scope="col">302 a 305 Instr. Cancelada</th>
            <th scope="col">306 a 311 Brancos</th>
            <th scope="col">312 a 324 Zeros</th>
            <th scope="col">325 a 354 Nome do pagador</th>
            <th scope="col">355 a 377 Brancos</th>
            <th scope="col">378 a 385 Erros/Mensagem informativa</th>
            <th scope="col">386 a 392 Brancos</th>
            <th scope="col">393 a 394 Cód. de liquidação</th>
            <th scope="col">395 a 400 Número sequêncial</th>
          </tr>
        </thead>
        <tbody id="infoTransacao"></tbody>
      </table>

      <p class="mt-5">Conteúdo do arquivo (sem espaçamento múltiplo)</p>
      <div id="filecontents" class="border border-secondary rounded p-2 mb-4"></div>`
};
