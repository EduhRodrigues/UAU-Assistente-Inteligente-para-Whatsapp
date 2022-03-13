# Projeto: UAU! - Assistente Inteligente para Whastsapp
###### ⚠️status: Developing <br> 

###### Teste o UAU! Assistente Inteligente por este link: https://abre.ai/waw-assistente-inteligente

![. UAU! Boas Vindas](gs://us.artifacts.wow-xesv.appspot.com/index_UAU.jpeg)


###### <details><summary>``` O que é o UAU! Assistente Inteligente: ```</summary><br> Este projeto consiste em um agente de resposta automática por Whatsapp, com as seguintes funções:<br><br>Atender o Cliente: Dar as boas vindas e mostrar as opções;<br>Anotar o nome do cliente;<br>Anotar ítem do pedido: Ítem e quantidade na comanda;<br>Somar o valor do ítem;<br>Calcular o Pedido: Somar os valores dos ítens da comanda;<br>Obter dados para entrega: Endereço completo e Contato alternativo;<br>Confirmar o Pedido;<br>Formatar o Pedido estilo Cupom Fiscal;<br>Acompanhar a Entrega;<br>Finalizar Atendimento;<br>Pós Venda;<br>Localização por IP;<br>Endereço por CEP;<br>Novas idéais e funções continuam surgindo!<br> </a>
</details>

###### <details><summary>``` Como surgiu o projeto: ```</summary> <br> Este projeto surgiu da necessidade que tivemos, de atender todos os clientes do restaurante janonês que eu trabalhava; como garçom, apenas por whatsapp.<br>Isto ocorreu no início da pandemia; quando o restaurante fechou para atendimento presencial, passando a funcionar somente por delivery.<br>Naquele momento, o restaurante tinha cadastro apenas no Ifood, recebia poucos pedidos por esta plataforma, e as taxas de entrega e da plataforma diminuiam o lucro.<br>Além disso, a maioria dos pedidos eram recebidos por Whatapp.</a> <br></details>

###### <details><summary>``` Desafios do projeto: ```</summary> <br> O maior desafio foi que eu não sabia nada de programação, ainda.<br> Outro desafio foi desenvolver para o Whatsapp, que não tem integração com o Diologflow da Goolge.</a> <br>
</details>

###### <details><summary>``` O Dialogflow: ```</summary> <br> O Dialogflow é uma plataforma de compreensão de linguagem natural usada para projetar e integrar uma interface de usuário conversacional em aplicativos móveis, aplicativos da web, dispositivos, bots, sistemas de resposta de voz interativos e usos relacionados<br><br>Desenvolvida pela Speaktoit e lançada em setembro de 2014 como api.ai, foi comprada pelo Google em 2016. Em outubro de 2017, foi renomeada de api.ai para Dialogflow.<br><br>A plataforma de desenvolvimento do Dialogflow é online e pode ser acessada através do site: https://cloud.google.com/dialogflow/?hl=pt-br<br><br>Documentação do Dialogflow: https://cloud.google.com/dialogflow/docs/<br><br> Página inicial do Dialogflow: https://cloud.google.com/dialogflow/?hl=pt-br<br><br>Primeiros passos no Dialogflow: https://labs.bawi.io/primeiros-passos-no-dialogflow-50ecb2ab715f<br><br>Dialogflow (api.ai) – Breve introdução da plataforma: https://medium.com/botsbrasil/api-ai-breve-introdu%C3%A7%C3%A3o-da-plataforma-ecb2d77107a2<br><br>Por meio dela, é possível criar chatbots para controlar dispositivos IoT, automatizar atendimentos, dentre outras utilidades.<br><br> Roda dentro da Google Cloud Plataform, utiliza os recursos da Google Cloud; como Cloud Storage, Cloud Functions, AI e Machine Learning. É possível editar e fazer deploy do código e adicionar funções como soma de valores e busda por CEP, por exemplo<br>https://cloud.google.com/storage<br>https://cloud.google.com/functions<br>https://cloud.google.com/products/ai<br><br>Todos os Produtos Google Cloud Plataform: https://cloud.google.com/products<br><br> A parte mais básica do assistente, como apresentar o menu, informações ou os links para o cardápio interativo; por exemplo, podem ser criados sem a necessidade de habilitar edição do código. Inclusive, é possível criar frases de treinamento e estruturas simples de conversação diretamente em alguns "auto responder" para whatsapp.<br><br>Site:<br>https://www.embarcados.com.br/ <br><br>Dialogflow – Plataforma para desenvolvimento de ChatBots (Embarcados): https://www.embarcados.com.br/dialogflow-plataforma-para-desenvolvimento-de-chatbots/ <br><br> Curso DialogFlow: Domine a Criação de Assistentes Virtuais.<br>https://abre.ai/curso-dialogflow<br><br>Para criar, treinar e programar um agente de conversação no Dialogflow, é necessário criar uma conta na plataforma da Google -> Google Cloud Plataform:<br>https://cloud.google.com/google/dialogflow<br><br>Produtos de nível Gratuito Google Cloud:<br>https://cloud.google.com/free/docs/gcp-free-tier/#cloud-functions<br><br>Calculadora de Preços Google Cloud:<br>https://cloud.google.com/products/calculator</a>
</details>

###### <details><summary>``` Editar o código no Dialogflow: ```</summary> <br>Para poder editar o código é necessário criar uma Conta de Serviço na Google Cloud Plataform e Ativar a Conta de Faturamento, ao inserir os dados do cartão de crédito.<br><br>O código pode ser editado e novas funções podem ser adicionadas, e o deploy pode ser feito, tanto no próprio Dialogflow, pelo Inline Editor, quanto no Glitch ou no Visualcode; por exemplo. <br></a>
</details>

###### <details><summary>``` Deploy no Dialogflow: ```</summary> <br>Tempo Deploy Mínimo: 01:17s;<br>Tempo Deploy Máximo: 02:24s <br></a>
</details>

###### <details><summary>``` Editar o código no VisualCode: ```</summary><br>1 - Baixar o agente:<br>1.1 - Habilitar o Inline Editor;<br>1.2 - Clicar no ícone para download;<br>2 - Criar uma pasta com o nome do projeto;<br>3 - Extrair os arquivos do agente .zip baixado;<br>4 - Abrir o Visualcode e abrir a pasta do projeto criada.<br>5 - Conectar ao Firebase:<br>5.1 - Criar um novo projeto no firebase e confirmar Plano de Faturamento Firebase.<br>Preços Firebase: (tem nível gratuito)<br>https://firebase.google.com/pricing?authuser=0&hl=pt<br>5.2 - Criar novo fornecedor para e-mail, em métodos de autenticação de login, no console do Firebase.<br>https://console.firebase.google.com<br>6 - Abrir o terminal do Visualcode;<br>7 - comando: firebase login<br>Already logged in as ... (email)<br>8 - comando: firebase init<br>Are you ready to proceed? Y<br>9 -  Desça com a seta até:<br>( ) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys<br>Selecione esta opção com a tecla spaço, depois Enter.<br>10 - > Use an existing project<br>11 - Selecione o projeto;<br>12 - ? What do you want to use as your public directory? (public) Enter <br>13 - ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) N<br>14 - ? Set up automatic builds and deploys with GitHub? (y/N) y <br>  Wrote public/404.html<br>  Wrote public/index.html  (criou estes dois arquivos)<br>i  Detected a .git folder at C:\...\Project_Whats-WOW<br>i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.<br>15 - Abrirá automaticamente a página para login no Github.<br>Copie o link e cole no browser caso não abra a página de login automaticamente.<br>Success! Logged into GitHub as EduhRodrigues<br>16 - ? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)   EduhRodrigues/Project_Whats-WOW <br>⠏ Retrieving a service account.<br>17 - ? Set up the workflow to run a build script before every deploy? (y/N)  N <br>Created workflow file C:\...\Project_Whats-WOW\.github/workflows/firebase-hosting-pull-request.yml<br>18 - ? Set up automatic deployment to your site's live channel when a PR is merged? (Y/n)  N <br>i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:<br>https://github.com/settings/connections/applications/...<br>i  Action required: Push any new workflow file(s) to your repo<br>i  Writing configuration info to firebase.json...<br>i  Writing project information to .firebaserc...<br>i  Writing gitignore file to .gitignore...<br>Firebase initialization complete!<br></a>
</details>


### 

###### <details><summary>``` Deploy no Visualcode: ```</summary><br>1 - comando: firebase projects:list<br>Project Display Name │-----------Project ID   │ Project Number │ Resource Location ID<br>-------------wow-kaht │ wow-kaht (current) │ 455679832516   │ [Not specified]<br>2 - Copie o Project ID do protejo. Neste caso: wow-kaht (current)<br>3 - Entre no arquivo package.json e encontre:<br>"deploy": "firebase deploy --only functions:dialogflowFirebaseFulfillment"<br>4 - Adicione lá final, dentro das aspas, o seguinte:<br>--ProjectID<br>ProjectID é o que foi copiado anteriormente. Apenas cole, ou digite.<br>Neste caso fica assim:<br>"deploy": "firebase deploy --only functions:dialogflowFirebaseFulfillment --project wow-kaht (current)"<br>5 - Salve o arquivo.<br>6 - comando: npm run deploy<br>PS C:\...\Project_Whats-WOW><br>Pronto. Deploy concluído com sucesso.<br>Para conferir, veja as alterações feitas no Visualcode alteradas<br>no Inline Editor do Dialogflow.<br>Se o deploy ocorreu com suceeso,<br>aparece uma URL no Webhook do Fulfillment, como esta:<br>https://us-central1-wow-kaht.cloudfunctions.net/dialogflowFirebaseFulfillment<br></a> 
</details>




Parabéns Danielle. Ficou bem organizado e bem explicado. Me ajudou a enterder melhor cada funcionalidade do Dialogflow. Eu seria uns dosprimeiros a ler se você escresse sobre o Dialogflow CX e a diferença entre o ES.

Aproveito para comprartilhar uma dificuldade que estou tendo no meu agente para restaurante. Seria legal se alguém pudesse meajudar. Utilizo o Dialogflow ES.

Consegui fazer com que o usuário escolha o produto, escolha a quantidade daquele produto e insira uma observação referente áquele ítem.

Habilitei o fulfillment e criei uma função para anotar pedido. Com 4 produtos pra testar.
...
if (item ==="Festival 1") {
      total_item=total_item+99.90*qtditem;
    } 
    
    if (item ==="Festival 2"){
      total_item=total_item+189.90*qtditem;
    } 
    
    if (item ==="Festival VIP"){
      total_item=total_item+249.00*qtditem;
    }
    
    else if (item ==="Festival Família"){
      total_item=total_item+299.90*qtditem;
    }
    ...

     O agent.add tudo certo; para o primeiro ítem.

*UAU!*: Aguardando próximo ítem. 

🍣 🦐 *Comida Japonesa* 🦐 🍣 

⑥ *02 Festival VIP* R$ *498* 
Obs: sem tare
✓ *Adicionado ao pedido com sucesso!* 
=================================
Eduardo 18h:28 #3338 12/3/2022 
=================================
① 02 Festival VIP R$ 498
 Obs: sem tare
② 0undefined undefined R$ 0 
Obs: undefined
① 02 Festival VIP R$ 498 
Obs: sem tare
① 02 Festival VIP R$ 498
Obs: sem tare
① 02 Festival VIP R$ 498
Obs: sem tare
① 02 Festival VIP R$ 498 
Obs: sem tare
================================
Total                          R$  498.00
Digite A para Adicionar o próximo ítem 
Digite C para Confirmar o Pedido 
Digite ⓪ para Voltar ao Menu

Dupliquei a intent Pedido e alterei o nome da cópia para Item2.
Editei os parâmetros "$" nesta Intent Item2. Editei as frases de treinamento para: a, adicionar e item 2. Habilitei o fulfillment.

Criei as variáveis necessárias e referenciei aos parâmeros do Item2, como eu havia feito com o Item, da Intent Pedido.

    var nome=agent.parameters.nome;
    var qtditem=agent.parameters.qtditem;
    var qtditem2=agent.parameters.qtditem2;
    var item=agent.parameters.item;
    var item2=agent.parameters.item2;
    var obsitem=agent.parameters.obsitem;
    var obsitem2=agent.parameters.obsitem2;
    var total_item=agent.parameters.total;
    var total_item2=agent.parameters.total_item2;

Agora é que as coisas começaram a se complicar para mim!

Adicionei o Item2 ao if:

if (item ==="Festival 1") {
      total_item=total_item+99.90*qtditem;
      total_item2=total_item2+99.90*qtditem2;            <-------
    } 
    
    if (item ==="Festival 2"){
      total_item=total_item+189.90*qtditem;
      total_item2=total_item2+99.90*qtditem2;             <-------
    } 
    
    if (item ==="Festival VIP"){
      total_item=total_item+249.00*qtditem;
      total_item2=total_item2+99.90*qtditem2;              <-------
    }
    
    else if (item ==="Festival Família"){
      total_item=total_item+299.90*qtditem;
      total_item2=total_item2+99.90*qtditem2;              <-------
    }

    E funcionou. 
    Depois que o agent.add exibe o pedido do primeiro ítem,  o usuário digita a, adicionar ou item 2. A Intent Item 2 é acionada e faz o mesmo procedimento da Intent Pedido (que seria o ítem 1). Pergunta e guarda Item, Quantidade e Obs.

 Agora é que ocorre o erro.

Depois de receber a última informação necessária referente ao Item 2, o agente para.

O agente deveria exibir o conteúdo do agent.add mostrando o pedido com os dois ítens. Mas o agente simplismente para.

Fulfillment status: 

Webhook call failed. Error: UNAVAILABLE, State: URL_UNREACHABLE, Reason: UNREACHABLE_5xx, HTTP status code: 500.

Link para testar o assistente: https://abre.ai/waw-assistente-inteligente

Se alguém puder me ajudar, eu agradeço imensamente.

Obrigado pela oportunidade e parabéns pelo post, mais uma vez.
