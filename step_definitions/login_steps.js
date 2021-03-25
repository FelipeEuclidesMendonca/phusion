const { I } = inject();

const acessarPhusion = require('../pages/acessar_page')

Given('eu acesso a url do sistema', () => {
  acessarPhusion.abrirNavegador('#!/login')
});

When('submeto meus dados de Login', () => {
  I.fillField('email', 'felipe.mendonca@fagrontech.com.br')
  I.fillField('senha', '123456')
});

When('clico em Entrar', () => {
  I.click('ENTRAR')

});

Then('vejo a home page do sistema', () => {
  I.see('Bem-vindo ao Phusion!')
});

