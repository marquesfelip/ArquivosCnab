var bradescoRemessa400 = {
  init() {
    'use strict';
    // 'this' é passado para 'SELF' para que o objeto 'bradescoRemessa400' possa ser chamado em qualquer camada do código
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
        if (FILE_READER.result.slice(79, 94) === 'BRADESCO       ') {

          const ALERTAS = document.getElementById('alertas');
          ALERTAS.innerHTML = '';

          view.renderizarConfiguracoes();
          view.renderizarTabelas(SELF.tabelasBradescoRemessa400);
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
            `<div class="alert alert-primary" role="alert">O arquivo selecionado não corresponde a remessa do banco Bradesco!</div>`;
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
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 100, 108);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 108, 110);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 110, 117);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 117, 394);
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
    view.registroTransacaoPosicoes(linha, TBODY, TR, 1, 6);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 6, 7);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 7, 12);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 12, 19);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 19, 20);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 20, 37);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 37, 62);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 62, 65);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 65, 66);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 66, 70);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 70, 81);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 81, 82);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 82, 92);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 92, 93);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 93, 94);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 94, 104);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 104, 105);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 105, 106);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 106, 108);
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
    view.registroTransacaoPosicoes(linha, TBODY, TR, 334, 394);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 394, 400);

    controller.setPosicaoInicial(controller.getPosicaoInicial() + controller.getNumPosicoes());
    view.lerLinha(controller.getArquivoLido(), controller.getPosicaoInicial(), this);
  },

  tabelasBradescoRemessa400: `<p class="mt-1 mb-1">Registro Header Label</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaCabecalho">
      <thead>
        <tr>
          <th scope="col">001 Identificação do Registro</th>
          <th scope="col">002 Identificação do Arquivo Remessa</th>
          <th scope="col">003 a 009 Literal REMESSA</th>
          <th scope="col">010 a 011 Código de Serviço</th>
          <th scope="col">012 a 026 Literal COBRANÇA</th>
          <th scope="col">027 a 046 Código da Empresa</th>
          <th scope="col">047 a 076 Nome da Empresa</th>
          <th scope="col">077 a 079 Número do Bradesco na Câmara de Compensação</th>
          <th scope="col">080 a 094 Nome do Banco por Extenso</th>
          <th scope="col">095 a 100 Data da Gravação do Arquivo</th>
          <th scope="col">101 a 108 (BRANCO)</th>
          <th scope="col">109 a 110 Identificação do sistema</th>
          <th scope="col">111 a 117 Nº Seqüencial de Remessa</th>
          <th scope="col">118 a 394 (BRANCO)</th>
          <th scope="col">395 a 400 Nº Seqüencial do Registro de Um em Um</th>
        </tr>
      </thead>
      <tbody id="infoCabecalho"></tbody>
    </table>

    <p class="mb-1">Registro de Transação - Tipo 1</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaTransacao">
      <thead>
        <tr>
          <th scope="col">001 Identificação do Registro</th>
          <th scope="col">002 a 006 Agência de Débito (opcional)</th>
          <th scope="col">007 Dígito da Agência de Débito (opcional)</th>
          <th scope="col">008 a 012 Razão da Conta Corrente (opcional)</th>
          <th scope="col">013 a 019 Conta Corrente (opcional)</th>
          <th scope="col">020 Dígito da Conta Corrente (opcional)</th>
          <th scope="col">021 a 037 Identificação da Empresa Beneficiária no Banco</th>
          <th scope="col">038 a 062 Nº Controle do Participante</th>
          <th scope="col">063 a 065 Código do Banco a ser debitado na Câmara de Compensação</th>
          <th scope="col">066 Campo de Multa</th>
          <th scope="col">067 a 070 Percentual de multa</th>
          <th scope="col">071 a 081 Identificação do Título no Banco</th>
          <th scope="col">082 Digito de Auto Conferencia do Número Bancário</th>
          <th scope="col">083 a 092 Desconto Bonificação por dia</th>
          <th scope="col">093 Condição para Emissão da Papeleta de Cobrança</th>
          <th scope="col">094 Ident. se emite Boleto para Débito Automático</th>
          <th scope="col">095 a 104 Identificação da Operação do Banco</th>
          <th scope="col">105 Indicador Rateio Crédito (opcional)</th>
          <th scope="col">106 Endereçamento para Aviso do Débito Automático em Conta Corrente (opcional)</th>
          <th scope="col">107 a 108 Quantidade possíveis de pagamento</th>
          <th scope="col">109 a 110 Identificação da ocorrência</th>
          <th scope="col">111 a 120 Nº do Documento</th>
          <th scope="col">121 a 126 Data do Vencimento do Título</th>
          <th scope="col">127 a 139 Valor do Título</th>
          <th scope="col">140 a 142 Banco Encarregado da Cobrança</th>
          <th scope="col">143 a 147 Agência Depositária</th>
          <th scope="col">148 a 149 Espécie de Título</th>
          <th scope="col">150 Identificação</th>
          <th scope="col">151 a 156 Data da emissão do Título</th>
          <th scope="col">157 a 158 1ª instrução</th>
          <th scope="col">159 a 160 2ª instrução</th>
          <th scope="col">161 a 173 Valor a ser cobrado por Dia de Atraso</th>
          <th scope="col">174 a 179 Data Limite P/Concessão de Desconto</th>
          <th scope="col">180 a 192 Valor do Desconto</th>
          <th scope="col">193 a 205 Valor do IOF</th>
          <th scope="col">206 a 218 Valor do Abatimento a ser concedido ou cancelado</th>
          <th scope="col">219 a 220 Identificação do Tipo de Inscrição do Pagador</th>
          <th scope="col">221 a 234 Nº Inscrição do Pagador</th>
          <th scope="col">235 a 274 Nome do Pagador</th>
          <th scope="col">275 a 314 Endereço Completo</th>
          <th scope="col">315 a 326 1ª Mensagem</th>
          <th scope="col">327 a 331 CEP</th>
          <th scope="col">332 a 334 Sufixo do CEP</th>
          <th scope="col">335 a 394 Sacador/Avalista ou 2ª Mensagem</th>
          <th scope="col">395 a 400 Nº Seqüencial do Registro</th>
        </tr>
      </thead>
      <tbody id="infoTransacao"></tbody>
    </table>

    <p class="mt-5">Conteúdo do arquivo (sem espaçamento múltiplo)</p>
    <div id="filecontents" class="border border-secondary rounded p-2 mb-4"></div>`
};
