Projeto: Whats WOW - Whatsapp Smart Assistant

Iniciei este projeto no início da pandemia, 
quando o resturante onde eu trabalhava; como garçom,
passou a funcionar somente por delivery.

A necessidade que tínhamos era atender, automaticamente,
mais de um cliente por vez, pelo Whatsapp.

Um dos desafios foi que eu não sabia nada de programação, ainda.
Outro desafio foi desenvolver para o Whatsapp, que não tem integração com 
o Diologflow da Goolge.

O Dialogflow é grátis, foi fácil de aprender, tem Machine Learning;
através de Training phrases, é possível editar e fazer deploy do código e adicionar funções como soma de valores e busda por CEP.

A parte mais básica do assistente,
como apresentar o menu, informações ou os links para o cardápio interativo; por exemplo,
podem ser criados sem a necessidade de habilitar edição do código.

Para criar o agente no Dialogflow, é necessário criar uma conta
na Google Cloud Plataform.

https://cloud.google.com/google/dialogflow


Para poder editar o código é necessário criar uma
Conta de Serviço na Google Cloud Plataform e
Ativar a Conta de Faturamento, ao inserir 
os dados do cartão de crédito.

O código pode ser editado e novas funções podem ser adicionadas,
e o deploy pode ser feito, tanto no próprio Dialogflow, 
pelo Inline Editor,
quanto no Glitch,
quanto no Visualcode.


Codar no Visualcode:

1 - Baixar o agente:
        Habilitar o Inline Editor;
        Clicar no ícone para download;
2 - Criar uma pasta com o nome do projeto;
3 - Extrair os arquivos do agente .zip baixado;
4 - Abrir o Visualcode e abrir a pasta do projeto criada.

Conectar ao Firebase:

1 - Criar um novo projeto no firebase e 
  confirmar Plano de Faturamento Firebase.

  Preços Firebase: (tem nível gratuito)
  https://firebase.google.com/pricing?authuser=0&hl=pt

  
2 - Criar novo fornecedor para e-mail, em métodos de autenticação de login,
no console do Firebase. 

  https://console.firebase.google.com

3 - Abrir o terminal do Visualcode;

4 - comando: firebase login;
Already logged in as ... (email)

5 - comando: firebase init;
Are you ready to proceed? Y

6 -  Desça com a seta até:
( ) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
     Selecione com a tecla spaço. Enter.

7 - > Use an existing project

8 - Selecione o projeto;

9 - ? What do you want to use as your public directory? (public)  Enter

10 - ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N)  N

11 - ? Set up automatic builds and deploys with GitHub? (y/N) Y

+  Wrote public/404.html
+  Wrote public/index.html  (criou estes dois arquivos)

i  Detected a .git folder at C:\...\Project_Whats-WOW
i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store. 

12 - Abrirá automaticamente a página para login no Github.
Copie o link e cole no browser caso não abra a página de login automaticamente.
+  Success! Logged into GitHub as EduhRodrigues

13 - ? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)   EduhRodrigues/Project_Whats-WOW
⠏ Retrieving a service account.

14 - ? Set up the workflow to run a build script before every deploy? (y/N)  N
+  Created workflow file C:\...\Project_Whats-WOW\.github/workflows/firebase-hosting-pull-request.yml

15 - ? Set up automatic deployment to your site's live channel when a PR is merged? (Y/n)  N
i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

+  Firebase initialization complete!


Fazer Deploy pelo Visualcode:

1 - comando: firebase projects:list

```
┌──────────────────────┬────────────────────┬────────────────┬──────────────────────┐
│ Project Display Name │ Project ID         │ Project Number │ Resource Location ID │
├──────────────────────┼────────────────────┼────────────────┼──────────────────────┤
│ wow-kaht             │ wow-kaht (current) │ 455679832516   │ [Not specified]      │
└──────────────────────┴────────────────────┴────────────────┴──────────────────────┘
``` 
2 - Copie o Project ID do protejo. Neste caso: wow-kaht (current)

3 - Entre no arquivo package.json e encontre:

"deploy": "firebase deploy --only functions:dialogflowFirebaseFulfillment"

4 - Adicione lá final, dentro das aspas, o seguinte:

--ProjectID

ProjectID é o que foi copiado anteriormente. Apenas cole, ou digite.

Neste caso fica assim: 

"deploy": "firebase deploy --only functions:dialogflowFirebaseFulfillment --project wow-kaht (current)"

5 - Salve o arquivo.

6 - comando: npm run deploy
PS C:\...\Project_Whats-WOW> 

Pronto. Deploy concluído com sucesso.

Para conferir, veja as alterações feitas no Visualcode alteradas
no Inline Editor do Dialogflow.

Se o deploy ocorreu com suceeso,
aparece uma URL no Webhook do Fulfillment, como esta:

https://us-central1-wow-kaht.cloudfunctions.net/dialogflowFirebaseFulfillment
