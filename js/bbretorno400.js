var bbRetorno400 = {
    init() {
      'use strict';
      // 'this' é passado para 'SELF' para que o objeto 'bbRetorno400' possa ser chamado em qualquer camada do código
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
          if (FILE_READER.result.slice(76, 94) === '001BANCO DO BRASIL') {

            const ALERTAS = document.getElementById('alertas');
            ALERTAS.innerHTML = '';

            view.renderizarConfiguracoes();
            view.renderizarTabelas(SELF.tabelasBBRetorno400);
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
              `<div class="alert alert-primary" role="alert">O arquivo selecionado não corresponde a retorno do Banco do Brasil!</div>`;
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
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 11, 19);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 19, 26);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 26, 30);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 30, 31);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 31, 39);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 39, 40);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 40, 46);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 46, 76);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 76, 94);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 94, 100);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 100, 107);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 107, 149);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 149, 156);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 156, 394);
      view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 394, 400);
    },

    verificarLinha(linha) {
      'use strict';
      if (linha[0] === '7')
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
      view.registroTransacaoPosicoes(linha, TBODY, TR, 21, 22);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 22, 30);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 30, 31);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 31, 38);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 38, 63);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 63, 80);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 80, 81);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 81, 82);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 82, 86);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 86, 88);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 88, 91);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 91, 94);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 94, 95);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 95, 100);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 100, 105);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 105, 106);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 106, 108);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 108, 110);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 110, 116);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 116, 126);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 126, 146);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 146, 152);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 152, 165);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 165, 168);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 168, 172);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 172, 173);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 173, 175);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 175, 181);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 181, 188);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 188, 201);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 201, 214);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 214, 227);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 227, 240);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 240, 253);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 253, 266);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 266, 279);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 279, 292);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 292, 305);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 305, 318);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 318, 319);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 319, 320);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 320, 332);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 332, 333);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 333, 342);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 342, 349);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 349, 358);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 358, 365);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 365, 374);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 374, 381);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 381, 390);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 390, 391);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 391, 392);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 392, 394);
      view.registroTransacaoPosicoes(linha, TBODY, TR, 394, 400);

      controller.setPosicaoInicial(controller.getPosicaoInicial() + controller.getNumPosicoes());
      view.lerLinha(controller.getArquivoLido(), controller.getPosicaoInicial(), this);
    },

    tabelasBBRetorno400: `<p class="mt-1 mb-1">Registro Header Label</p>
      <table class="table table-dark quebrar-linhas table-responsive" id="tabelaCabecalho">
        <thead>
          <tr>
            <th scope="col">001 Identificação do Registro Header: 0</th>
            <th scope="col">002 Tipo de Operação: 2</th>
            <th scope="col">003 a 009 Identificação Tipo de Operação RETORNO</th>
            <th scope="col">010 a 011 Identificação do Tipo de Serviço: 01</th>
            <th scope="col">012 a 019 Identificação por Extenso do Tipo de Serviço: COBRANÇA</th>
            <th scope="col">020 a 026 Brancos</th>
            <th scope="col">027 a 030 Prefixo da Agência</th>
            <th scope="col">031 Dígito Verificador do Prefixo da Agência.</th>
            <th scope="col">032 a 039 Número da Conta Corrente</th>
            <th scope="col">040 Dígito Verificador da Conta Corrente</th>
            <th scope="col">041 a 046 Zeros</th>
            <th scope="col">047 a 076 Nome do Cedente</th>
            <th scope="col">077 a 094 001BANCO DO BRASIL</th>
            <th scope="col">095 a 100 Data da Gravação: DDMMAA</th>
            <th scope="col">101 a 107 Sequencial do Retorno</th>
            <th scope="col">108 a 149 Brancos</th>
            <th scope="col">150 a 156 Número de Convênio</th>
            <th scope="col">157 a 394 Brancos</th>
            <th scope="col">395 a 400 Número Sequencial do Registro</th>
          </tr>
        </thead>
        <tbody id="infoCabecalho"></tbody>
      </table>

      <p class="mb-1">Registro de Transação - Tipo 1</p>
      <table class="table table-dark quebrar-linhas table-responsive" id="tabelaTransacao">
        <thead>
          <tr>
            <th scope="col">001 Identificação do Registro Detalhe: 7</th>
            <th scope="col">002 a 003 Zeros</th>
            <th scope="col">004 a 017 Zeros</th>
            <th scope="col">018 a 021 Prefixo da Agência</th>
            <th scope="col">022 Dígito Verificador da Agência</th>
            <th scope="col">023 a 030 Número da Conta Corrente do Cedente</th>
            <th scope="col">031 Dígito Verificador do Número da Conta Corrente do Cedente</th>
            <th scope="col">032 a 038 Número do Convênio de Cobrança do Cedente</th>
            <th scope="col">039 a 063 Número de Controle do Participante</th>
            <th scope="col">064 a 080 Nosso Número</th>
            <th scope="col">081 Tipo de Cobrança</th>
            <th scope="col">082 Tipo de Cobrança Específico para Comando 72</th>
            <th scope="col">083 a 086 Dias para Cálculo</th>
            <th scope="col">087 a 088 Natureza do Recebimento</th>
            <th scope="col">089 a 091 Prefixo do Boleto</th>
            <th scope="col">092 a 094 Variação da Carteira</th>
            <th scope="col">095 Conta Caução</th>
            <th scope="col">096 a 100 Taxa para Desconto</th>
            <th scope="col">101 a 105 Taxa IOF</th>
            <th scope="col">106 Branco</th>
            <th scope="col">107 a 108 Carteira</th>
            <th scope="col">109 a 110 Comando</th>
            <th scope="col">111 a 116 Data de Liquidação (DDMMAA)</th>
            <th scope="col">117 a 126 Número do Boleto Dado pelo Cedente</th>
            <th scope="col">127 a 146 Brancos</th>
            <th scope="col">174 a 152 Data de Vencimento (DDMMAA)</th>
            <th scope="col">153 a 165 Valor do Boleto</th>
            <th scope="col">166 a 168 Código do Banco Recebedor</th>
            <th scope="col">169 a 172 Prefixo da Agência Recebedora</th>
            <th scope="col">173 DV Prefixo Recebedora</th>
            <th scope="col">174 a 175 Espécie do Boleto</th>
            <th scope="col">176 a 181 Data do Crédito</th>
            <th scope="col">182 a 188 Valor da Tarifa</th>
            <th scope="col">189 a 201 Outras Despesas</th>
            <th scope="col">202 a 214 Juros do Desconto</th>
            <th scope="col">215 a 227 IOF do Desconto</th>
            <th scope="col">228 a 240 Valor do Abatimento</th>
            <th scope="col">241 a 253 Desconto Concedido</th>
            <th scope="col">254 a 266 Valor Recebido (parcial)</th>
            <th scope="col">267 a 279 Juros de Mora</th>
            <th scope="col">280 a 292 Outros Recebimentos</th>
            <th scope="col">293 a 305 Abatimento não Aproveitado pelo Sacado</th>
            <th scope="col">306 a 318 Valor do Lançamento</th>
            <th scope="col">319 Indicativo de Débito/Crédito</th>
            <th scope="col">320 Indicador de Valor</th>
            <th scope="col">321 a 332 Valor do Ajuste</th>
            <th scope="col">333 Branco</th>
            <th scope="col">334 a 342 Brancos</th>
            <th scope="col">343 a 349 Zeros</th>
            <th scope="col">350 a 358 Zeros</th>
            <th scope="col">359 a 365 Zeros</th>
            <th scope="col">366 a 374 Zeros</th>
            <th scope="col">375 a 381 Zeros</th>
            <th scope="col">382 a 390 Zeros</th>
            <th scope="col">391 Indicativo de Autorização de Liquidação Parcial</th>
            <th scope="col">392 Branco</th>
            <th scope="col">393 a 394 Canal de Pagamento do Boleto Utilizado pelo Sacado</th>
            <th scope="col">395 a 400 Sequencial do Registro</th>
          </tr>
        </thead>
        <tbody id="infoTransacao"></tbody>
      </table>

      <p class="mt-5">Conteúdo do arquivo (sem espaçamento múltiplo)</p>
      <div id="filecontents" class="border border-secondary rounded p-2 mb-4"></div>`
  };
