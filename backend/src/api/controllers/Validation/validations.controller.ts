import { body } from 'express-validator';
import Filter from 'bad-words';
const filter = new Filter();
 
//palavras em portugues proibidas
filter.addWords("abobrinha", "ajuda", "ajudar", "anus", "asneira", "asneiras", "baba-ovo", "babaca", "babaovo", "babaquice", "baboseira", "bacura", "bagos", "baitola", "balela", "baléla", "bandode", "bebum", "besta", "bicha", "bisca", "bixa", "bla blabla", "boazuda", "boceta", "boco", "bocó", "boiola", "bolagato", "bolcat", "boquete", "bosseta", "bosta", "bostana", "bostas", "brecha", "brexa", "brioco", "brocha", "bronha", "buca", "buceta", "bunda", "bunduda", "burra", "burro", "burros", "busseta", "cachorra", "cachorro", "cadeia", "cadela", "cafagestagem", "cafajeste", "caga", "cagado", "cagando", "cagao", "cagar", "cagona", "canalha", "cansativo", "caralho", "careca", "carecas", "casseta", "cassete", "chalatão", "charlatao", "charlatão", "chata", "chatice", "chato", "checheca", "chereca", "chibumba", "chibumbo", "chifruda", "chifrudo", "chochota", "chota", "chupada", "chupado", "clitoris", "clitóris", "cocaina", "cocaína", "coco", "cocô", "corna", "corno", "cornuda", "cornudo", "corrupta", "corrupto", "cretina", "cretino", "cruz-credo", "cu", "culhao", "culhão", "culhões", "curalho", "cuzao", "cuzuda", "cuzudo", "cuzão", "cú", "degraça", "debil", "debiloide", "defunto", "demonio", "demônio", "descarada", "desgracado", "desgracados", "desgraçado", "desgraçados", "difunto", "dinheiro", "doida", "doideira", "doido", "egua", "enganacao", "enganado", "enganar", "enganaçao", "enganação", "engano", "enganosa", "enganosas", "enrolacao", "enrolação", "escrota", "escroto", "esporrada", "esporrado", "esporro", "est+pido", "estelionatário", "estelionatários", "estupida", "estupidez", "estupido", "estúpida", "fake", "falação", "falso", "fdp", "fedida", "fedido", "fedor", "fedorenta", "feia", "feio", "feiosa", "feioso", "feioza", "feiozo", "fela", "felacao", "felação", "fenda", "ﬁada", "ﬁlha da puta", "ﬁlho da puta", "ﬁlhosdaputa", "ﬁnasterida", "foda", "fodao", "fode", "fodida", "fodido", "fodão", "fornica", "fria", "fudecao", "fudendo", "fudeção", "fudida", "fudido", "furada", "furado", "furao", "furnica", "furnicar", "furo", "furona", "furão", "gaiata", "gaiato", "gay", "golpe", "golpes", "golpista", "golpistas", "gonorrea", "gonorreia", "gosma", "gosmenta", "gosmento", "grelinho", "grelo", "homo-sexual", "homosexual", "homossexual", "horrivel", "horror", "humilhante", "idiota", "idiotas", "idiotice", "iludindo", "iludir", "imbecil", "inferno", "iscrota", "iscroto", "japa", "ladainha", "ladainhas", "ladra", "ladrao", "ladroeira", "ladroes", "ladrona", "ladrão", "ladrões", "lalau", "leprosa", "leproso", "lesbica", "livro", "longo","lorota", "ludibriacao", "ludibriar", "ludibriação", "lésbica", "macaca", "macaco", "machismo", "machista", "macho", "machona", "machorra", "malaco", "malandragem", "malandro", "malandros", "manguaca", "mangua¦a", "mané", "maracutaia", "masturba", "meleca", "mentir", "mentira", "mentiras", "mentirosa", "mentiroso", "mentirosos", "mercadolivre", "mercenario", "mercenário", "merda", "merdas", "mija", "mijada", "mijado", "mijar", "mijo", "minoxidil", "miserável", "mocrea", "mocreia", "mocréa", "mocréia", "moleca", "moleque", "mondronga", "mondrongo", "médico", "naba", "nadega", "nao acredito", "naochegou", "nao funciona", "nao presta", "nao recebi", "nao vale", "nao veio", "nojeira", "nojenta", "nojento", "nojo", "nãoacredito", "não chegou", "não funciona", "não presta", "não recebi", "não vale", "nãoveio", "olhota", "otaria", "otario", "otária", "otário", "paca", "paguei", "palhaçada", "paspalha", "paspalhao", "paspalho", "patrocinado", "pau", "peia", "peido", "pemba", "penis", "pentelha", "pentelho", "perereca", "peru", "perú", "pica", "picao", "picareta", "picaretagem", "picaretas", "picão", "pilantra", "pilantragem", "pilantras", "piramide", "piranha", "piroca", "piroco", "piru", "pirâmide", "policia", "polícia", "porra", "prega", "propaganda enganosa", "prost-bulo", "prostibulo", "prostituta", "prostituto", "punheta", "punhetao", "punhetão", "pus", "pustula", "puta", "puto", "puxa-saco", "puxasaco", "pênis", "rabao", "rabo", "rabuda", "rabudao", "rabudo", "rabudona", "rabudão", "rabão", "racha", "rachad+o", "rachada", "rachadao", "rachadinha", "rachadinho", "rachado", "ramela", "receita", "reclameaqui", "reclameaqui", "remela", "retardada", "retardado", "ridicula", "ridícula", "ridículo", "rola", "rolinha", "rosca", "sacana", "sacanagem", "saco", "safada", "safadeza", "safado", "safados", "salafrario", "salafrário", "sapatao", "sapatão", "siﬁlis", "siririca", "síﬁlis", "tarada", "tarado", "testuda", "tezao", "tezuda", "tezudo", "tezão", "toma no cu", "tomar no cu", "tomar nocú", "trocha", "trolha", "troucha", "trouchas", "trouxa", "trouxas", "troxa", "troxas", "vaca", "vagabunda", "vagabundo", "vagabundos", "vagagundos", "vagina", "veada", "veadao", "veado", "veadão", "vendendo", "vender", "vendo", "vergonha", "viada", "viadao", "viado", "viados", "viadão", "vigario", "vigário", "xana", "xaninha", "xavasca", "xerereca", "xexeca", "xibiu", "xibumba", "xochota", "xota", "xoxota");

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!¨%*#?&])[A-Za-z\d@$!%¨*#?&]/;

const contactFormValidationRules = [
    body('Name').trim().isLength({ min: 3 }).withMessage('Nome precisa ter pelo menos 3 caracteres'),
  
    body('Email').trim().isEmail().withMessage('E-mail inválido'),
  
    body('Phone').trim().isLength({ min: 10 }).withMessage('Telefone inválido'),
  
    body('Category').notEmpty().withMessage('Categoria é obrigatória'),
  
    body('Subject').notEmpty().withMessage('Assunto é obrigatório'),
    
    body('Message').trim().isLength({ min: 10 }).withMessage('Mensagem deve ter pelo menos 10 caracteres'),
  ];

const resetPasswordValidationRules = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('O email fornecido não é válido')
    .notEmpty()
    .withMessage('O campo de email é obrigatório'),

  body('resetCode')
    .notEmpty()
    .withMessage('O código de redefinição é obrigatório'),

  body('newPassword')
    .trim()
    .isLength({ min: 6 })
    .withMessage('A senha deve ter pelo menos 6 caracteres')
    .matches(passwordRegex)
    .withMessage('A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial')
    .notEmpty()
    .withMessage('O campo de senha é obrigatório'),

  body('confirmNewPassword')
    .custom((value: any, { req }: any) => {
      if (value !== req.body.newPassword) {
        throw new Error('A confirmação de senha não coincide com a senha');
      }
      return true;
    })
    .notEmpty()
    .withMessage('O campo de confirmação de senha é obrigatório'),
 
];

const registrationValidationRules = [
    body('email')
      .trim()
      .isEmail()
      .withMessage('O email fornecido não é válido')
      .notEmpty()
      .withMessage('O campo de email é obrigatório'),
  
    body('password')
      .trim()
      .isLength({ min: 6 })
      .withMessage('A senha deve ter pelo menos 6 caracteres')
      .matches(passwordRegex)
      .withMessage('A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial')
      .notEmpty()
      .withMessage('O campo de senha é obrigatório'),
  
    body('username')
      .isLength({ min: 5 })
      .withMessage('O username deve ter pelo menos 5 caracteres')
      .trim()
      .notEmpty()
      .withMessage('O campo de nome de usuário é obrigatório')
      .custom((value: any) => {
        const containsForbiddenWord = filter.isProfane(value);
        if (containsForbiddenWord) {
          throw new Error('O username contém palavras proibidas ou inadequadas');
        }
        return true;
      }),
  
    body('first_name')
      .trim()
      .notEmpty()
      .withMessage('O campo de nome é obrigatório')
      .matches(/^[a-zA-Z\s\-áàâãéèêíïóôõöúçñ]*$/i)
      .withMessage('O campo de primeiro nome não deve conter caracteres especiais')
      .customSanitizer((value: string) => value.toUpperCase())
      .custom((value: any) => {
          const containsForbiddenWord = filter.isProfane(value);
          if (containsForbiddenWord) {
            throw new Error('O nome contém palavras proibidas ou inadequadas');
          }
          return true;
        }),
  
    body('last_name')
      .trim()
      .notEmpty()
      .withMessage('O campo de nome é obrigatório')
      .matches(/^[a-zA-Z\s\-áàâãéèêíïóôõöúçñ]*$/i)
      .withMessage('O campo de último nome não deve conter caracteres especiais')
      .customSanitizer((value: string) => value.toUpperCase())
      .custom((value: any) => {
          const containsForbiddenWord = filter.isProfane(value);
          if (containsForbiddenWord) {
            throw new Error('O sobrenome contém palavras proibidas ou inadequadas');
          }
          return true;
        }),]

        const updateUserValidationRules = [
          body('username')
              .isLength({ min: 5 })
              .withMessage('O username deve ter pelo menos 5 caracteres')
              .trim()
              .notEmpty()
              .withMessage('O campo de nome de usuário é obrigatório')
              .custom((value: any) => {
                  const containsForbiddenWord = filter.isProfane(value);
                  if (containsForbiddenWord) {
                      throw new Error('O username contém palavras proibidas ou inadequadas');
                  }
                  return true;
              }),
        
          body('first_name')
              .trim()
              .notEmpty()
              .withMessage('O campo de nome é obrigatório')
              .matches(/^[a-zA-Z\s\-áàâãéèêíïóôõöúçñ]*$/i)
              .withMessage('O campo de primeiro nome não deve conter caracteres especiais')
              .customSanitizer((value: string) => value.toUpperCase())
              .custom((value: any) => {
                  const containsForbiddenWord = filter.isProfane(value);
                  if (containsForbiddenWord) {
                      throw new Error('O nome contém palavras proibidas ou inadequadas');
                  }
                  return true;
              }),
        
          body('last_name')
              .trim()
              .notEmpty()
              .withMessage('O campo de nome é obrigatório')
              .matches(/^[a-zA-Z\s\-áàâãéèêíïóôõöúçñ]*$/i)
              .withMessage('O campo de último nome não deve conter caracteres especiais')
              .customSanitizer((value: string) => value.toUpperCase())
              .custom((value: any) => {
                  const containsForbiddenWord = filter.isProfane(value);
                  if (containsForbiddenWord) {
                      throw new Error('O sobrenome contém palavras proibidas ou inadequadas');
                  }
                  return true;
              }),
      ];


        export default {
            registrationValidationRules,
            resetPasswordValidationRules,
            contactFormValidationRules,
            updateUserValidationRules
          };