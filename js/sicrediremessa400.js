var sicrediRemessa400 = {
  init() {
    'use strict';
    // 'this' é passado para 'SELF' para que o objeto 'sicrediRemessa400' possa ser chamado em qualquer camada do código
    const SELF = this;
    controller.setTamanhoLinha(400);
    controller.setNumPosicoes(402);
    controller.setPosicaoInicial(controller.getNumPosicoes());

    // O arquivo selecionado é passado para a constante
    const ARQUIVO_A_SER_LIDO = document.getElementById('arquivoSelecionado').files[0];

    // Checagem da extensão do arquivo
    if (ARQUIVO_A_SER_LIDO.name.length > 4 && (ARQUIVO_A_SER_LIDO.name.substr(-4) === '.REM' || ARQUIVO_A_SER_LIDO.name.substr(-4) === '.rem')) {

      // Instância de FileReader
      const FILE_READER = new FileReader();

      // Faz a leitura do arquivo como texto
      FILE_READER.readAsText(ARQUIVO_A_SER_LIDO);

      FILE_READER.onload = function () {
        // Banco selecionado condiz com o banco do arquivo selecionado
        if (FILE_READER.result.slice(79, 94) === 'SICREDI       ') {

          const ALERTAS = document.getElementById('alertas');
          ALERTAS.innerHTML = '';

          view.renderizarConfiguracoes();
          view.renderizarTabelas(SELF.tabelasSicrediRemessa400);
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
            `<div class="alert alert-primary" role="alert">O arquivo selecionado não corresponde a remessa do banco Sicredi!</div>`;
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
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 26, 31);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 31, 45);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 45, 76);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 76, 79);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 79, 94);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 94, 102);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 102, 110);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 110, 117);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 117, 390);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 390, 394);
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
    view.registroTransacaoPosicoes(linha, TBODY, TR, 1, 2);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 2, 3);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 3, 4);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 4, 16);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 16, 17);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 17, 18);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 18, 19);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 19, 47);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 47, 56);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 56, 62);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 62, 70);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 70, 71);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 71, 72);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 72, 73);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 73, 74);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 74, 76);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 76, 78);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 78, 82);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 82, 92);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 92, 96);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 96, 108);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 108, 110);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 110, 120);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 120, 126);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 126, 139);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 139, 148);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 148, 149);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 149, 150);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 150, 156);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 156, 158);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 158, 160);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 160, 173);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 173, 179);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 179, 192);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 192, 205);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 205, 218);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 218, 219);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 219, 220);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 220, 234);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 234, 274);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 274, 314);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 314, 319);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 319, 325);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 325, 326);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 326, 334);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 334, 339);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 339, 353);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 353, 394);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 394, 400);

    controller.setPosicaoInicial(controller.getPosicaoInicial() + controller.getNumPosicoes());
    view.lerLinha(controller.getArquivoLido(), controller.getPosicaoInicial(), this);
  },

  tabelasSicrediRemessa400: `<p class="mt-1 mb-1">Registro Header Label</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaCabecalho">
      <thead>
        <tr>
          <th scope="col">001 Identificação do registro header</th>
          <th scope="col">002 Identificação do arquivo remessa</th>
          <th scope="col">003 a 009 Literal REMESSA</th>
          <th scope="col">010 a 011 Código do serviço de cobrança</th>
          <th scope="col">012 a 026 Literal COBRANÇA</th>
          <th scope="col">027 a 031 Código do beneficiário</th>
          <th scope="col">032 a 045 CPF/CGC do beneficiário</th>
          <th scope="col">046 a 076 Filler</th>
          <th scope="col">077 a 079 Número do Sicredi (748)</th>
          <th scope="col">080 a 094 Literal SICREDI</th>
          <th scope="col">095 a 102 Data de gravação do arquivo</th>
          <th scope="col">103 a 110 Filler</th>
          <th scope="col">111 a 117 Número da remessa</th>
          <th scope="col">118 a 390 Filler</th>
          <th scope="col">391 a 394 Versão do sistema (2.00)</th>
          <th scope="col">395 a 400 Número sequencial do registro</th>
        </tr>
      </thead>
      <tbody id="infoCabecalho"></tbody>
    </table>

    <p class="mb-1">Registro de Transação - Tipo 1</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaTransacao">
      <thead>
        <tr>
          <th scope="col">001 Identificação do registro detalhe</th>
          <th scope="col">002 Tipo de cobrança</th>
          <th scope="col">003 Tipo de carteira</th>
          <th scope="col">004 Tipo de impressão</th>
          <th scope="col">005 a 016 Filler (brancos)</th>
          <th scope="col">017 Tipo de moeda</th>
          <th scope="col">018 Tipo de desconto</th>
          <th scope="col">019 Tipo de juros</th>
          <th scope="col">020 a 047 Filler (brancos)</th>
          <th scope="col">048 a 056 Nosso número Sicredi</th>
          <th scope="col">057 a 062 Filler (brancos)</th>
          <th scope="col">063 a 070 Data da instrução></th>
          <th scope="col">071 Campo alterado, quando instrução "31"</th>
          <th scope="col">072 Postagem do título</th>
          <th scope="col">073 Filler (branco)</th>
          <th scope="col">074 Emissão do boleto</th>
          <th scope="col">075 a 076 Número da parcela do carnê</th>
          <th scope="col">077 a 078 Número total de parcelas do carnê</th>
          <th scope="col">079 a 082 Filler (brancos)</th>
          <th scope="col">083 a 092 Valor de desconto por dia de antecipação</th>
          <th scope="col">093 a 096 % multa por pagamento em atraso</th>
          <th scope="col">097 a 108 Filler (brancos)</th>
          <th scope="col">109 a 110 Instrução</th>
          <th scope="col">111 a 120 Seu número</th>
          <th scope="col">121 a 126 Data de vencimento</th>
          <th scope="col">127 a 139 Valor do título</th>
          <th scope="col">140 a 148 Filler (brancos)</th>
          <th scope="col">149 Espécie de documento</th>
          <th scope="col">150 Aceite do título</th>
          <th scope="col">151 a 156 Data de emissão</th>
          <th scope="col">157 a 158 Instrução de protesto automático</th>
          <th scope="col">159 a 160 Número de dias p/ protesto automático</th>
          <th scope="col">161 a 173 Valor/% de juros por dia de atraso</th>
          <th scope="col">174 a 179 Data limite p/ concessão de desconto</th>
          <th scope="col">180 a 192 Valor/% do desconto</th>
          <th scope="col">193 a 205 Filler (zeros)</th>
          <th scope="col">206 a 218 Valor do abatimento</th>
          <th scope="col">219 Tipo de pessoa do pagador: PF(1) ou PJ(2)</th>
          <th scope="col">220 Filler (zero)</th>
          <th scope="col">221 a 234 CPF/CNPJ do pagador</th>
          <th scope="col">235 a 274 Nome do pagador</th>
          <th scope="col">275 a 314 Endereço do pagador</th>
          <th scope="col">315 a 319 Código do pagador na cooperativa</th>
          <th scope="col">320 a 325 Filler (zeros)</th>
          <th scope="col">326 Filler (branco)</th>
          <th scope="col">327 a 334 CEP do pagador</th>
          <th scope="col">335 a 339 Código do pagador junto ao cliente</th>
          <th scope="col">340 a 353 CPF/CNPJ do sacador avalista</th>
          <th scope="col">354 a 394 Nome do sacador avalista</th>
          <th scope="col">395 a 400 Número sequencial do registro</th>
        </tr>
      </thead>
      <tbody id="infoTransacao"></tbody>
    </table>

    <p class="mt-5">Conteúdo do arquivo (sem espaçamento múltiplo)</p>
    <div id="filecontents" class="border border-secondary rounded p-2 mb-4"></div>`
};
