var bbRemessa400 = {
  init() {
    'use strict';
    // 'this' é passado para 'SELF' para que o objeto 'bbRemessa400' possa ser chamado em qualquer camada do código
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
        if (FILE_READER.result.slice(76, 94) === '001BANCODOBRASIL  ') {

          const ALERTAS = document.getElementById('alertas');
          ALERTAS.innerHTML = '';

          view.renderizarConfiguracoes();
          view.renderizarTabelas(SELF.tabelasBBRemessa400);
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
            `<div class="alert alert-primary" role="alert">O arquivo selecionado não corresponde a remessa do Banco do Brasil!</div>`;
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
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 107, 129);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 129, 136);
    view.registroCabecalhoPosicoes(arquivoLido, TBODY, TR, 136, 394);
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
    view.registroTransacaoPosicoes(linha, TBODY, TR, 21, 22);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 22, 30);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 30, 31);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 31, 38);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 38, 63);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 63, 80);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 80, 82);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 82, 84);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 84, 87);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 87, 88);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 88, 91);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 91, 94);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 94, 95);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 95, 101);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 101, 106);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 106, 108);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 108, 110);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 110, 120);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 120, 126);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 126, 139);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 139, 142);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 142, 146);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 146, 147);
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
    view.registroTransacaoPosicoes(linha, TBODY, TR, 234, 271);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 271, 274);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 274, 314);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 314, 326);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 326, 334);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 334, 349);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 349, 351);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 351, 391);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 391, 393);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 393, 394);
    view.registroTransacaoPosicoes(linha, TBODY, TR, 394, 400);

    controller.setPosicaoInicial(controller.getPosicaoInicial() + controller.getNumPosicoes());
    view.lerLinha(controller.getArquivoLido(), controller.getPosicaoInicial(), this);
  },

  tabelasBBRemessa400: `<p class="mt-1 mb-1">Registro Header Label</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaCabecalho">
        <thead>
            <tr>
                <th scope="col">001 Identificação do registro header: 0</th>
                <th scope="col">002 Tipo de operação: 1</th>
                <th scope="col">003 a 009 Identificação por extenso do tipo de operação</th>
                <th scope="col">010 a 011 Identificação do tipo de serviço: 01</th>
                <th scope="col">012 a 019 Identificação por extenso do tipo de serviço</th>
                <th scope="col">020 a 026 Brancos</th>
                <th scope="col">027 a 030 Prefixo da agência</th>
                <th scope="col">031 Dígito verificador da agência</th>
                <th scope="col">032 a 039 Número da conta corrente</th>
                <th scope="col">040 Dígito verificador da conta</th>
                <th scope="col">041 a 046 Complemento do registro: 000000</th>
                <th scope="col">047 a 076 Nome do benificiário</th>
                <th scope="col">077 a 094 001BANCODOBRASIL</th>
                <th scope="col">095 a 100 Data da gravação do arquivo</th>
                <th scope="col">101 a 107 Sequencial da remessa</th>
                <th scope="col">108 a 129 Brancos</th>
                <th scope="col">130 a 136 Número do convênio líder</th>
                <th scope="col">137 a 394 Brancos</th>
                <th scope="col">395 a 400 Sequencial do registro: 000001</th>
            </tr>
        </thead>
        <tbody id="infoCabecalho"></tbody>
    </table>

    <p class="mb-1">Registro de Transação - Tipo 1</p>
    <table class="table table-dark quebrar-linhas table-responsive" id="tabelaTransacao">
        <thead>
            <tr>
                <th scope="col">001 Identificação do Registro</th>
                <th scope="col">002 a 003 Tipo de inscrição do beneficiário</th>
                <th scope="col">004 a 017 Número do CPF/CNPJ do benificário</th>
                <th scope="col">018 a 021 Prefixo da agência</th>
                <th scope="col">022 Dígito verificador da agência</th>
                <th scope="col">023 a 030 Número da conta corrente do beneficiário</th>
                <th scope="col">031 Dígito verificador da conta</th>
                <th scope="col">032 a 038 Número do convênio de cobrança do Beneficiário</th>
                <th scope="col">039 a 063 Código de controle da empresa</th>
                <th scope="col">064 a 080 Nosso número</th>
                <th scope="col">081 a 082 Número da prestação: 00</th>
                <th scope="col">083 a 084 Grupo de valor: 00</th>
                <th scope="col">085 a 087 Brancos</th>
                <th scope="col">088 Indicativo de mensagem ou sacador/avalista</th>
                <th scope="col">089 a 091 Brancos</th>
                <th scope="col">092 a 094 Variação da carteira</th>
                <th scope="col">095 Conta Caução: 0</th>
                <th scope="col">096 a 101 Número do borderô: 000000</th>
                <th scope="col">102 a 106 Tipo de cobrança</th>
                <th scope="col">107 a 108 Carteira de cobrança</th>
                <th scope="col">109 a 110 Comando</th>
                <th scope="col">111 a 120 Seu número/Número do  título atribuído pelo beneficiário</th>
                <th scope="col">121 a 126 Data de vencimento</th>
                <th scope="col">127 a 139 Valor do título</th>
                <th scope="col">140 a 142 Número do banco: 001</th>
                <th scope="col">143 a 146 Prefixo da agência cobradora: 0000</th>
                <th scope="col">147 Branco</th>
                <th scope="col">148 a 149 Espécie de título</th>
                <th scope="col">150 Aceite do título</th>
                <th scope="col">151 a 156 Data de emissão (DDMMAA)</th>
                <th scope="col">157 a 158 1º Instrução codificada</th>
                <th scope="col">159 a 160 2º Instrução codificada</th>
                <th scope="col">161 a 173 Juros de mora por dia de atraso</th>
                <th scope="col">174 a 179 Data limite para concessão de desconto/Data de operação do BBVendor/Juros de mora</th>
                <th scope="col">180 a 192 Valor do desconto</th>
                <th scope="col">193 a 205 Valor do IOF/Qtde unidade variável</th>
                <th scope="col">206 a 218 Valor do abatimento</th>
                <th scope="col">219 a 220 Tipo de inscrição do pagador</th>
                <th scope="col">221 a 234 Número do CNPJ ou CPF do pagador</th>
                <th scope="col">235 a 271 Nome do pagador</th>
                <th scope="col">272 a 274 Brancos</th>
                <th scope="col">275 a 314 Endereço do pagador</th>
                <th scope="col">315 a 326 Bairro do pagador</th>
                <th scope="col">327 a 334 CEP do endereço do pagador</th>
                <th scope="col">335 a 349 Cidade do pagador</th>
                <th scope="col">350 a 351 UF da cidade do pagador</th>
                <th scope="col">352 a 391 Observações/Mensagem ou Sacador/avalista</th>
                <th scope="col">392 a 393 Número de dias para protesto</th>
                <th scope="col">394 Indicador de recebimento parcial</th>
                <th scope="col">395 a 400 Sequencial de registro</th>
            </tr>
        </thead>
        <tbody id="infoTransacao"></tbody>
    </table>

    <p class="mt-5">Conteúdo do arquivo (sem espaçamento múltiplo)</p>
    <div id="filecontents" class="border border-secondary rounded p-2 mb-4"></div>`
};
