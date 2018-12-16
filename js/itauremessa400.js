var itauRemessa400 = {
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
    if (ARQUIVO_A_SER_LIDO.name.length > 4 && (ARQUIVO_A_SER_LIDO.name.substr(-4) === '.TXT' || ARQUIVO_A_SER_LIDO.name.substr(-4) === '.txt')) {

      // Instância de FileReader
      const FILE_READER = new FileReader();

      // Faz a leitura do arquivo como texto
      FILE_READER.readAsText(ARQUIVO_A_SER_LIDO);

      FILE_READER.onload = function () {
        // Banco selecionado condiz com o banco do arquivo selecionado
        if (FILE_READER.result.slice(79, 94) === 'BANCO ITAU SA  ') {

          const ALERTAS = document.getElementById('alertas');
          ALERTAS.innerHTML = '';

          view.renderizarConfiguracoes();
          view.renderizarTabelas(SELF.tabelasItauRemessa400);
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
            `<div class="alert alert-primary" role="alert">O arquivo selecionado não corresponde a remessa do banco Itaú!</div>`;
          return;
        }
      }
    } else {
      const ALERTAS = document.getElementById('alertas');
      ALERTAS.innerHTML = '';
      ALERTAS.innerHTML = `<div class="alert alert-primary" role="alert">Selecione um arquivo com a extensão 'TXT'.</div>`;
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
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 100, 394);
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
    view.registroTransacaoPosicoes(linha, TBODY, TR, 29, 33);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 33, 37);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 37, 62);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 62, 70);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 70, 83);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 83, 86);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 86, 107);
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
    view.registroTransacaoPosicoes(linha, TBODY, TR, 234, 264);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 264, 274);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 274, 314);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 314, 326);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 326, 334);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 334, 349);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 349, 351);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 351, 381);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 381, 385);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 385, 391);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 391, 393);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 393, 394);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 394, 400);

    controller.setPosicaoInicial(controller.getPosicaoInicial() + controller.getNumPosicoes());
    view.lerLinha(controller.getArquivoLido(), controller.getPosicaoInicial(), this);
  },

  tabelasItauRemessa400: `<p class="mt-1 mb-1">Registro Header Label</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaCabecalho">
      <thead>
        <tr>
          <th scope="col">001 Tipo de registro</th>
          <th scope="col">002 Operação</th>
          <th scope="col">003 a 009 Literal de remessa</th>
          <th scope="col">010 a 011 Código do serviço</th>
          <th scope="col">012 a 026 Literal de serviço</th>
          <th scope="col">027 a 030 Agência</th>
          <th scope="col">031 a 032 Zeros</th>
          <th scope="col">033 a 037 Conta</th>
          <th scope="col">038 Dígito de auto conferência Ag/Conta empresa</th>
          <th scope="col">039 a 046 Brancos</th>
          <th scope="col">047 a 076 Nome da empresa</th>
          <th scope="col">077 a 079 Código do banco</th>
          <th scope="col">080 a 094 Nome do banco</th>
          <th scope="col">095 a 100 Data de geração</th>
          <th scope="col">101 a 394 Brancos</th>
          <th scope="col">395 a 400 Número sequencial</th>
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
          <th scope="col">029 Dígito de auto conferência AG/Conta empresa</th>
          <th scope="col">030 a 033 Brancos</th>
          <th scope="col">034 a 037 Instrução/Alegação</th>
          <th scope="col">038 a 062 Uso da empresa</th>
          <th scope="col">063 a 070 Nosso número</th>
          <th scope="col">071 a 083 Qtde de moeda</th>
          <th scope="col">084 a 086 Nº da carteira</th>
          <th scope="col">087 a 107 Uso do banco</th>
          <th scope="col">108 Carteira</th>
          <th scope="col">109 a 110 Cód. de ocorrência</th>
          <th scope="col">111 a 120 Nº do documento</th>
          <th scope="col">121 a 126 Vencimento</th>
          <th scope="col">127 a 139 Valor do título</th>
          <th scope="col">140 a 142 Código do banco</th>
          <th scope="col">143 a 147 Agência cobradora</th>
          <th scope="col">148 a 149 Espécie</th>
          <th scope="col">150 Aceite</th>
          <th scope="col">151 a 156 Data da emissão do título</th>
          <th scope="col">157 a 158 Instrução 1</th>
          <th scope="col">159 a 160 Instrução 2</th>
          <th scope="col">161 a 173 Juros de 1 dia</th>
          <th scope="col">174 a 179 Desconto até</th>
          <th scope="col">180 a 192 Valor do desconto</th>
          <th scope="col">193 a 205 Valor do IOF</th>
          <th scope="col">206 a 218 Abatimento</th>
          <th scope="col">219 a 220 Código de inscrição</th>
          <th scope="col">221 a 234 Número de inscrição</th>
          <th scope="col">235 a 264 Nome</th>
          <th scope="col">265 a 274 Brancos</th>
          <th scope="col">275 a 314 Logradouro</th>
          <th scope="col">315 a 326 Bairro</th>
          <th scope="col">327 a 334 CEP</th>
          <th scope="col">335 a 349 Cidade</th>
          <th scope="col">350 a 351 Estado</th>
          <th scope="col">352 a 381 Sacador/Avalista</th>
          <th scope="col">382 a 385 Brancos</th>
          <th scope="col">386 a 391 Data de mora</th>
          <th scope="col">392 a 393 Prazo</th>
          <th scope="col">394 Branco</th>
          <th scope="col">395 a 400 Número sequencial</th>
        </tr>
      </thead>
      <tbody id="infoTransacao"></tbody>
    </table>

    <p class="mt-5">Conteúdo do arquivo (sem espaçamento múltiplo)</p>
    <div id="filecontents" class="border border-secondary rounded p-2 mb-4"></div>`
};
