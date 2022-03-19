"use strict";
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
admin.firestore().settings({timestampsInSnapshots:true}); 
const bd= admin.firestore();

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
  
  //Constantes Globais//
    
    const FINALIZAR_PEDIDO="Digite *Deploy* para *Finalizar seu Pedido*";
    const VOLTAR_PARA_MENU="Digite *⓪* para *Voltar ao Menu*";
    const TRACEJADO="================================";
    const BR="                                                                                                             ";
    const LINHA_VAZIA="̲                                                                                               ";
    const LINHA_VAZIA2="̲                                                          ";
    const LINHA_VAZIA_="̲                                                          ";
    const RECUO1= BR +LINHA_VAZIA +BR;
    const TAG1="①  ";
    const TAG2="②  ";
    const TAG3="③  ";
    const TAG4="④  ";
    const TAG5="⑤  ";
    const TAG6="⑥  ";
    
    const SLOGAN="🍣 🦐 *Comida Japonesa* 🦐 🍣";
   
  
    //Variáveis Globais//
  
    let NOME=agent.parameters.nome;
    let hora = (new Date()).getHours()-3;
    let minuto = (new Date()).getMinutes();
    const HORARIO = hora +"h:" +minuto;
    let dia = (new Date()).getDate()-1;
    let mes = (new Date()).getMonth()+1;
    let ano = (new Date()).getFullYear();
    const DIA = " "+dia+"/"+mes+"/"+ano;
    let num_pedido=0;
    num_pedido=Math.floor(Math.random() * (4000 - 1111 + 1) + 1111);
    const NUM_P= num_pedido;
    const NUM_PEDIDO=" *#"+NUM_P+"*";
  
   
    let qtditem1=agent.parameters.qtditem1;
    let item1=agent.parameters.item1;
    let obsitem1=agent.parameters.obsitem1;
    let total_item1=agent.parameters.total_item1;

    let total_pedido=0;
  
  function Item1(agent) {
        
    let nome=agent.parameters.nome;
    let qtditem1=agent.parameters.qtditem1;
    let item1=agent.parameters.item1;
    let obsitem1=agent.parameters.obsitem1;

    if (item1 ==="Festival 1") {
      total_item1=total_item1+99.90*qtditem1;
    } 
    if (item1 ==="Festival 2"){
      total_item1=total_item1+189.90*qtditem1;
    }  
    if (item1 ==="Festival VIP"){
      total_item1=total_item1+249.00*qtditem1;
    }
    else if (item1 ==="Festival Família"){
      total_item1=total_item1+299.90*qtditem1;
    }
    
    const BOT_MSG="*UAU!*: Aguardando 2º ítem do pedido.";
    const PEDIDO_ADD="✓ _1º ítem adicionado com sucesso!_";
    const ADICIONAR_ITEM="Digite *A2* para *Adicionar o 2º ítem* do pedido";    
    const ITEM1="*0"+qtditem1+" " +item1+"*"+" R$ "+"*"+total_item1+"*";
    const OBSITEM1="Obs: "+"_" +obsitem1 +"_";
    
    total_item1=Math.round(total_item1 * 100) / 100;
    total_item1=total_item1.toFixed(2);
    total_pedido=total_item1;
   
    const TOTAL_PEDIDO="_Total_                       R$ " +"*"+total_pedido+"*";
 
    agent.add (BOT_MSG +RECUO1 +SLOGAN +RECUO1 +PEDIDO_ADD +BR +TRACEJADO +BR +"*"+NOME+"*" +HORARIO +NUM_PEDIDO +DIA +BR +TRACEJADO +BR +TAG1 +ITEM1 +BR +OBSITEM1 +BR +BR +TRACEJADO +BR +TOTAL_PEDIDO +RECUO1 +ADICIONAR_ITEM +BR +FINALIZAR_PEDIDO +BR +VOLTAR_PARA_MENU);
   
    return total_item1;   
  }
  
  function Reservar(agent) {
    agent.add ("Em desenvolvimento!");
    }
  
  function Cardapio(agent) {
    const LINK_CARDAPIO= " https://abre.ai/bZrL ";
    const BR="                                                                                                             ";
    const LINHA_VAZIA ="̲                                                          ";
    const RECUO1= BR +LINHA_VAZIA +BR;
    const LINK_MSG = "Este é o link do nosso Cardápio Interativo.";
    const CHOOSE_MSG = "*Abra* o cardápio. *Escolha*. Toque em *Pedir*."; 
    const OPTIONS_MSG= " Digite *⓪* para *Voltar ao Menu* "; 
agent.add (+LINK_MSG +RECUO1 +LINK_CARDAPIO +RECUO1 +CHOOSE_MSG +OPTIONS_MSG);
    }
  
  function FinalizarPedido (agent) {
    
    const BOT_FINALIZAR_MSG= "*UAU!*: Aguardando tipo de entrega.";
    const FINALIZANDO_MSG="Finalizando pedido";
    const DELIVERY_QUESTION="*Escolha uma  opção de entrega*:";
    const DELIVERY_OPTION=("Digite *E* para *Entrega* no endereço");
    const TO_TRAVEL_OPTION=("Digite *R* para *Retirar* no restaurante");
    const MENU_OPTION=("Digite *⓪* para *Voltar ao Menu*");
    agent.add (BOT_FINALIZAR_MSG +RECUO1 +SLOGAN +RECUO1 +FINALIZANDO_MSG +BR +TRACEJADO +BR +NOME +HORARIO +NUM_PEDIDO +DIA +BR +TRACEJADO +BR +TAG1 +item1 +BR +obsitem1 +BR +BR +TRACEJADO +BR +total_pedido +RECUO1 +BR +NOME +"; " +RECUO1 +BR +BR +DELIVERY_QUESTION +RECUO1 +BR +DELIVERY_OPTION +BR +TO_TRAVEL_OPTION +BR +MENU_OPTION);
  }

  let intentMap = new Map();
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Item1', Item1);
  intentMap.set('FinalizarPedido', FinalizarPedido);
  intentMap.set('Reservar', Reservar);
  intentMap.set('Cardapio', Cardapio);
  // intentMap.set('your intent name here', yourFunctionHandler);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});