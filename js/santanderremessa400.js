var santanderRemessa400 = {
  init() {
    'use strict';
    // 'this' é passado para 'SELF' para que o objeto 'santanderRemessa400' possa ser chamado em qualquer camada do código
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
            `<div class="alert alert-primary" role="alert">O arquivo selecionado não corresponde a remessa do banco Santander!</div>`;
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
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 26, 46);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 46, 76);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 76, 79);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 79, 94);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 94, 100);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 100, 116);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 116, 391);
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
    view.registroTransacaoPosicoes(linha, TBODY, TR, 17, 37);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 37, 62);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 62, 70);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 70, 76);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 76, 77);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 77, 78);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 78, 82);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 82, 84);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 84, 97);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 97, 101);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 101, 107);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 107, 108);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 108, 110);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 110, 120);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 120, 126);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 126, 139);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 139, 142);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 142, 147);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 147, 149);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 149, 150);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 150, 156);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 156, 158);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 158, 160);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 160, 173);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 173, 179);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 179, 192);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 192, 205);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 205, 218);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 218, 220);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 220, 234);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 234, 274);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 274, 314);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 314, 326);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 326, 331);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 331, 334);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 334, 349);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 349, 351);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 351, 381);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 381, 382);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 382, 383);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 383, 385);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 385, 391);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 391, 393);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 393, 394);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 394, 400);

    controller.setPosicaoInicial(controller.getPosicaoInicial() + controller.getNumPosicoes());
    view.lerLinha(controller.getArquivoLido(), controller.getPosicaoInicial(), this);
  },

  tabelasSantanderRemessa400: `<p class="mt-1 mb-1">Registro Header Label</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaCabecalho">
      <thead>
        <tr>
          <th scope="col">001 Código do registro = 0</th>
          <th scope="col">002 Código da remessa = 1</th>
          <th scope="col">003 a 009 Literal de transmissão = REMESSA</th>
          <th scope="col">010 a 011 Código do serviço = 01</th>
          <th scope="col">012 a 026 Literal de serviço = COBRANÇA</th>
          <th scope="col">027 a 046 Código de Transmissão (nota 1)</th>
          <th scope="col">047 a 076 Nome do cedente</th>
          <th scope="col">077 a 079 Código do Banco = 033</th>
          <th scope="col">080 a 094 Nome do Banco = SANTANDER</th>
          <th scope="col">095 a 100 Data de Gravação</th>
          <th scope="col">101 a 116 Zeros</th>
          <th scope="col">117 a 391 Brancos</th>
          <th scope="col">392 a 394 Número da versão da remessa</th>
          <th scope="col">395 a 400 Número sequencial do registro</th>
        </tr>
      </thead>
      <tbody id="infoCabecalho"></tbody>
    </table>

    <p class="mb-1">Registro de Transação - Tipo 1</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaTransacao">
      <thead>
        <tr>
          <th scope="col">001 Código do registro = 1</th>
          <th scope="col">002 a 003 Tipo de inscrição do cedente</th>
          <th scope="col">004 a 17 CGC ou CPF do cedente</th>
          <th scope="col">018 a 037 Código de Transmissão</th>
          <th scope="col">038 a 062 Número de controle do participante, para controle por parte
          do cedente</th>
          <th scope="col">063 a 070 Nosso número</th>
          <th scope="col">071 a 076 Data do segundo desconto</th>
          <th scope="col">077 a 077 Branco</th>
          <th scope="col">078 a 078 Informação de multa = 4, senão houver informar zero</th>
          <th scope="col">079 a 082 Percentual multa por atraso %</th>
          <th scope="col">083 a 084 Unidade de valor moeda corrente = 00</th>
          <th scope="col">085 a 097 Valor do título em outra unidade (consultar banco)</th>
          <th scope="col">098 a 101 Brancos</th>
          <th scope="col">102 a 107 Data para cobrança de multa</th>
          <th scope="col">108 Código da carteira</th>
          <th scope="col">109 a 110 Código da ocorrência</th>
          <th scope="col">111 a 120 Seu número</th>
          <th scope="col">121 a 126 Data de vencimento do título</th>
          <th scope="col">127 a 139 Valor do título - moeda corrente</th>
          <th scope="col">140 a 142 Número do banco cobrador = 033</th>
          <th scope="col">143 a 147 Código da agência cobradora do Banco Santander</th>
          <th scope="col">148 a 149 Espécie de documento</th>
          <th scope="col">150 Tipo de aceite = N</th>
          <th scope="col">151 a 156 Data da emissão do título</th>
          <th scope="col">157 a 158 Primeira instrução cobrança</th>
          <th scope="col">159 a 160 Segunda instrução cobrança</th>
          <th scope="col">161 a 173 Valor de mora a ser cobrado por dia de atraso</th>
          <th scope="col">174 a 179 Data limite para concessão de desconto</th>
          <th scope="col">180 a 192 Valor de desconto a ser concedido</th>
          <th scope="col">193 a 205 Valor do IOF a ser recolhido pelo Banco para nota de seguro</th>
          <th scope="col">206 a 218 Valor do abatimento a ser concedido ou valor do segundo desc. Vide posição 71</th>
          <th scope="col">219 a 220 Tipo de inscrição do sacado</th>
          <th scope="col">221 a 234 CGC ou CPF do sacado</th>
          <th scope="col">235 a 274 Nome do sacado</th>
          <th scope="col">275 a 314 Endereço do sacado</th>
          <th scope="col">315 a 326 Bairro do sacado</th>
          <th scope="col">327 a 331 CEP do sacado</th>
          <th scope="col">332 a 334 Complemento do CEP</th>
          <th scope="col">335 e 349 Município do sacado</th>
          <th scope="col">350 a 351 UF do sacado</th>
          <th scope="col">352 a 381 Nome do sacado ou coobrigado</th>
          <th scope="col">382 Branco</th>
          <th scope="col">383 Identificado do Complemento (i maiúsculo - vide nota 2)</th>
          <th scope="col">384 a 385 Complemento (nota 2)</th>
          <th scope="col">386 a 391 Brancos</th>
          <th scope="col">392 a 393 Número de dias para protesto. Quando posições 157/158 ou 159/160 for igual a 06.</th>
          <th scope="col">394 Branco</th>
          <th scope="col">395 a 400 Número sequencial do registro no arquivo</th>
        </tr>
      </thead>
      <tbody id="infoTransacao"></tbody>
    </table>

    <p class="mt-5">Conteúdo do arquivo (sem espaçamento múltiplo)</p>
    <div id="filecontents" class="border border-secondary rounded p-2 mb-4"></div>`
};
